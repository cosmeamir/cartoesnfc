import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cartões NFC Inteligentes",
  description: "Plataforma premium para cartões NFC digitais inteligentes"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
