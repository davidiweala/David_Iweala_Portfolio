import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio.config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  verification: {
    google: "7eX_PguUotnmmDfqfJVQIVpiB6b6DVUhhPpgb-JOyzE",
  },
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.name,
    template: `%s - ${portfolioConfig.title}`,
  },
  description: portfolioConfig.description,

  // added new keywords for seo
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.url,
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/og-image.png`],
    siteName: portfolioConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/og-image.png`],
    creator: portfolioConfig.seo.instagramHandle,
  },
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta name="google-site-verification" content="7eX_PguUotnmmDfqfJVQIVpiB6b6DVUhhPpgb-JOyzE" />
      <body
        suppressHydrationWarning
        className={cn(
          "bg-gradient-to-b from-slate-900 to-slate-950",
          poppins.variable,
          rubik.variable
        )}
      >
        <main
          className={cn(
            "flex flex-col lg:flex-row relative break-words min-h-screen items-center justify-between",
            "pt-20 pb-4 px-4 sm:px-8 md:px-16 lg:px-40"
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
