import { Poppins, Yellowtail } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const yellowtail = Yellowtail({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400"],
});
