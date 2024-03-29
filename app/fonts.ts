import { Space_Grotesk, Krona_One } from "next/font/google";

export const kronaOne = Krona_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kronaOne",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spaceGrotesk",
});
