import type { Metadata, Viewport } from "next";
import "./globals.css";
import "swiper/css";
import { spaceGrotesk, kronaOne } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.casavarya.com"),
  title: { default: "Casa Varya Residences by Mudaya Land", template: "%s | " },
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
    images: { url: "/images/og-images.png" },
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Varya Residences by Mudaya Land",
    description:
      "Mudaya Land is a renowned developer dedicated to crafting Casa Varya as a minimalist residential community that combines a touch of European grandeur, tailored for small families or young individuals seeking an elegant, affordable and cozy home.",
    images: { url: "/images/og-images.png" },
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${kronaOne.variable} font-sans`}
    >
      <body className="text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
