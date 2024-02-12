import { Space_Grotesk, Krona_One } from "next/font/google";

export const kronaOne = Krona_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--kronaOne-font",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--spaceGrotesk-font",
});
