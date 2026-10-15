import { cacheLife } from "next/cache";

const REPO = "FelipePrado0/gow3_pc";
const API = `https://api.github.com/repos/${REPO}`;

export type Asset = {
  name: string;
  url: string;
  bytes: number;
  downloads: number;
  sha256: string | null;
};

export type ReleaseTick = {
  tag: string;
  publishedAt: string;
  prerelease: boolean;
};

export type ReleaseData = {
  version: string;
  tag: string;
  publishedAt: string;
  notesUrl: string;
  windows: Asset | null;
  linux: Asset | null;
  stars: number;
  recent: ReleaseTick[];
  /** false when the GitHub API was unreachable and the snapshot below is shown */
  live: boolean;
};

type GhAsset = { name: string; browser_download_url: string; size: number; download_count: number };
type GhRelease = {
  tag_name: string;
  name: string;
  html_url: string;
  published_at: string;
  prerelease: boolean;
  draft: boolean;
  assets: GhAsset[];
};

const releasesUrl = `https://github.com/${REPO}/releases`;

// Snapshot of release 2.2.0 (October 14, 2026), used when the API cannot be reached.
const FALLBACK: ReleaseData = {
  version: "2.2.0",
  tag: "windows-v2.2.0",
  publishedAt: "2026-10-14T02:57:43Z",
  notesUrl: `${releasesUrl}/tag/windows-v2.2.0`,
  windows: {
    name: "gow3-windows.zip",
    url: `${releasesUrl}/download/windows-v2.2.0/gow3-windows.zip`,
    bytes: 74184767,
    downloads: 47779,
    sha256: "3858ac707000313df6ebe2f842b7b1220db5f3505cd41e53d3906e320957ef81",
  },
  linux: {
    name: "gow3-x86_64.AppImage",
    url: `${releasesUrl}/download/windows-v2.2.0/gow3-x86_64.AppImage`,
    bytes: 134019576,
    downloads: 1214,
    sha256: "26e1e7c24bb585b541c0c84ff8b7d60525f2c5656a6db63ceca5d69109756c5e",
  },
  stars: 2246,
  recent: [
    { tag: "2.1.5", publishedAt: "2026-10-12T18:26:54Z", prerelease: false },
    { tag: "2.1.6", publishedAt: "2026-10-12T21:53:05Z", prerelease: false },
    { tag: "2.1.7", publishedAt: "2026-10-13T00:47:58Z", prerelease: false },
    { tag: "2.1.8", publishedAt: "2026-10-13T18:43:23Z", prerelease: false },
    { tag: "hd630-test1", publishedAt: "2026-10-13T23:58:49Z", prerelease: true },
    { tag: "2.2.0", publishedAt: "2026-10-14T02:57:43Z", prerelease: false },
    { tag: "community-test1", publishedAt: "2026-10-14T17:26:55Z", prerelease: true },
    { tag: "linux-test1", publishedAt: "2026-10-14T19:21:07Z", prerelease: true },
  ],
  live: false,
};

function headers(): HeadersInit {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // Optional: raises the GitHub API rate limit from 60 to 5000 requests per hour.
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: headers() });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json() as Promise<T>;
}

async function readSha(assets: GhAsset[], name: string): Promise<string | null> {
  const sum = assets.find((a) => a.name === `${name}.sha256`);
  if (!sum) return null;
  try {
    const res = await fetch(sum.browser_download_url);
    if (!res.ok) return null;
    const hash = (await res.text()).trim().split(/\s+/)[0];
    return /^[0-9a-f]{64}$/i.test(hash) ? hash.toLowerCase() : null;
  } catch {
    return null;
  }
}

async function toAsset(assets: GhAsset[], pick: (name: string) => boolean): Promise<Asset | null> {
  const a = assets.find((x) => pick(x.name) && !x.name.endsWith(".sha256"));
  if (!a) return null;
  return {
    name: a.name,
    url: a.browser_download_url,
    bytes: a.size,
    downloads: a.download_count,
    sha256: await readSha(assets, a.name),
  };
}

/** "windows-v2.2.0" → "2.2.0", "windows-v2.1.8-intel-hd630-test1" → "hd630-test1" */
function shortTag(tag: string): string {
  const m = tag.match(/v(\d+\.\d+\.\d+)(?:-(?:intel-)?(.+))?$/);
  if (!m) return tag.replace(/^(windows|linux)-/, "");
  return m[2] ?? m[1];
}

export async function getRelease(): Promise<ReleaseData> {
  "use cache";
  cacheLife("hours");

  try {
    const [latest, repo, list] = await Promise.all([
      getJson<GhRelease>(`${API}/releases/latest`),
      getJson<{ stargazers_count: number }>(API),
      getJson<GhRelease[]>(`${API}/releases?per_page=12`),
    ]);
    const [windows, linux] = await Promise.all([
      toAsset(latest.assets, (n) => n.endsWith(".zip") && n.includes("windows")),
      toAsset(latest.assets, (n) => n.endsWith(".AppImage")),
    ]);
    const recent = list
      .filter((r) => !r.draft)
      .slice(0, 8)
      .map((r) => ({ tag: shortTag(r.tag_name), publishedAt: r.published_at, prerelease: r.prerelease }))
      .reverse();

    return {
      version: shortTag(latest.tag_name),
      tag: latest.tag_name,
      publishedAt: latest.published_at,
      notesUrl: latest.html_url,
      windows: windows ?? FALLBACK.windows,
      linux,
      stars: repo.stargazers_count,
      recent,
      live: true,
    };
  } catch {
    return FALLBACK;
  }
}

export { REPO, releasesUrl };
