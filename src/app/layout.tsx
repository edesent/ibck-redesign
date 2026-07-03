import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const CHAT_API = "https://slackwebsitechat.vercel.app";
const CHAT_KEY = "wbc_0d3359ce36981c2e705b22590618d45bb284b871e75790b3";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://ibck-redesign.vercel.app";
const SITE_NAME = "Independent Baptist Church";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Keeseville, NY`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Independent Baptist Church in Keeseville, New York — Bible preaching, warm welcome, in the Adirondack foothills near Lake Champlain and Ausable Chasm. Sundays at 10 & 11 AM on Route 22.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — Keeseville, NY`,
    description:
      "A church that feels like home, between the mountains and the lake. Sundays 10 & 11 AM · 2030 Route 22, Keeseville NY.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/site-background.jpg", width: 1280, height: 720 }],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E212B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        {children}
        <Script
          src={`${CHAT_API}/widget/wbc-chat.js`}
          data-api={CHAT_API}
          data-key={CHAT_KEY}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
