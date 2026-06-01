import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import StoreProvider from "@/store/Provider";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spica.selim.services"),
  title: "The Artisan Kiln - Ceramic Tile Order Form",
  description:
    "Order handcrafted ceramic tiles and visualise your own pattern. Front-end test task built with Next.js, TypeScript, Tailwind and Redux.",
  openGraph: {
    title: "The Artisan Kiln - Ceramic Tile Order Form",
    description:
      "Order handcrafted ceramic tiles and visualise your own pattern on an interactive grid.",
    type: "website",
    url: "https://spica.selim.services",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4ECDB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
