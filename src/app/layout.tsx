import { Roboto_Mono } from "next/font/google";
import { ClientLayout } from "./ClientLayout";
import type { Metadata } from "next";

import "./globals.css";

const Roboto_Mono_Font = Roboto_Mono({
  weight: "variable",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevFinder - Find Developers Easily",
  description:
    "DevFinder is a platform that allows you to discover talented developers from various domains. Explore profiles, check out projects, and connect with developers to build amazing things together.",
  keywords: [
    "DevFinder",
    "developer search",
    "connect developers",
    "portfolio",
  ],
  authors: [{ name: "Baliram Singh", url: "https://ome9a.com" }],
  openGraph: {
    title: "DevFinder - Find Developers Easily",
    description:
      "DevFinder is a platform that allows you to discover talented developers from various domains. Explore profiles, check out projects, and connect with developers to build amazing things together.",
    images: "./openGraph.png",
    url: "https://devfinder.ome9a.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFinder - Find Developers Easily",
    description:
      "DevFinder is a platform that allows you to discover talented developers from various domains. Explore profiles, check out projects, and connect with developers to build amazing things together.",
    images: "./openGraph.png",
    creator: "@omegaStrikes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-navy-50 dark:bg-navy-800 text-black dark:text-white ${Roboto_Mono_Font.className}`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
