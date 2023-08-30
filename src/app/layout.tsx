"use client";
import Navbar from "@/components/layout/navbar/navbar";
import type { Metadata } from "next";
import "../styles/globals.css";
import { poppins } from "@/assets/fonts/fonts";

export const metadata: Metadata = {
  title: "Deniscley Marfran - Portifólio Profissional",
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
      </body>
    </html>
  );
}
