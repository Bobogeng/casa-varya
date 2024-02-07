import type { Metadata, Viewport } from "next";
import "./globals.css";
import { spaceGrotesk } from "./fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.casavarya.com"),
  title: { default: "Casa Varya", template: "%s | " },
  description:
    "Mudaya Land is a renowned developer dedicated to crafting Casa Varya as a minimalist residential community that combines a touch of European grandeur, tailored for small families or young individuals seeking an elegant, affordable and cozy home.",
  keywords:
    "Casa Varya, Casavarya, Jakarta residences, Jakarta real estate, Jakarta property",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Casa Varya Residences by Mudaya Land",
    description:
      "Mudaya Land is a renowned developer dedicated to crafting Casa Varya as a minimalist residential community that combines a touch of European grandeur, tailored for small families or young individuals seeking an elegant, affordable and cozy home.",
    siteName: "Casa Varya Residences by Mudaya Land",
    images: { url: "/images/og-images.png", width: 1500, height: 375 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Varya Residences by Mudaya Land",
    description:
      "Mudaya Land is a renowned developer dedicated to crafting Casa Varya as a minimalist residential community that combines a touch of European grandeur, tailored for small families or young individuals seeking an elegant, affordable and cozy home.",
    images: { url: "/images/og-images.png", width: 1500, height: 375 },
  },
};

export const viewport: Viewport = {
  themeColor: { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
