// "use client";
import Navbar from "@/components/layout/navbar/navbar";
import type { Metadata } from "next";
import "../styles/globals.css";
import { poppins } from "@/assets/fonts/fonts";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Deniscley Marfran - Portfólio Profissional",
  description: "Este é o site oficial do meu portfólio para me apresentar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={poppins.className}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
