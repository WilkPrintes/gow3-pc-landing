import type { SVGProps } from "react";
import { siAmd, siIntel, siLinux, siNvidia, siSteamdeck } from "simple-icons";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

/** Brand marks from simple-icons (CC0). Decorative unless a title is given. */
function SimpleIcon({ path, title, ...props }: IconProps & { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} {...props}>
      {title && <title>{title}</title>}
      <path d={path} />
    </svg>
  );
}

export const NvidiaIcon = (p: IconProps) => <SimpleIcon path={siNvidia.path} {...p} />;
export const AmdIcon = (p: IconProps) => <SimpleIcon path={siAmd.path} {...p} />;
export const IntelIcon = (p: IconProps) => <SimpleIcon path={siIntel.path} {...p} />;
export const LinuxIcon = (p: IconProps) => <SimpleIcon path={siLinux.path} {...p} />;
export const SteamDeckIcon = (p: IconProps) => <SimpleIcon path={siSteamdeck.path} {...p} />;

/** Windows has no simple-icons entry; the four-pane mark is drawn here. */
export function WindowsIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} {...props}>
      {title && <title>{title}</title>}
      <path d="M2 2h9.5v9.5H2zM12.5 2H22v9.5h-9.5zM2 12.5h9.5V22H2zM12.5 12.5H22V22h-9.5z" />
    </svg>
  );
}

export const brandColors = {
  nvidia: `#${siNvidia.hex}`,
  amd: `#${siAmd.hex}`,
  intel: `#${siIntel.hex}`,
  steamdeck: `#${siSteamdeck.hex}`,
};
