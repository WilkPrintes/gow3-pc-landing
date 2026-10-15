import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "God of War III Remastered para PC",
    template: "%s · God of War III para PC",
  },
  description:
    "Port nativo de God of War III Remastered (PS4) para Windows e Linux. Baixe a versão mais recente, a 120 FPS por padrão e até 240.",
};

export const viewport: Viewport = {
  themeColor: "#0e1114",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${jetbrains.variable} dark`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
