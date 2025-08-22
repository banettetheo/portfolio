import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/[locale]/providers";
import {ReactElement} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Banette Theo",
  description: "Displaying some details about my experience",
};

export default async function RootLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {

    const { locale } = await params
  return (
    <html>
      <body>
              <Providers locale={locale}> {children}</Providers>
      </body>
    </html>
  );
}
