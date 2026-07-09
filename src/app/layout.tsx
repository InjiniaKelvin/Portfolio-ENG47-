import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../../public/fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: [
    { path: "../../public/fonts/space-grotesk-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/space-grotesk-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/space-grotesk-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kelvinmwania.dev"),
  title: {
    default: "Kelvin Mwania | Software Engineer",
    template: "%s | Kelvin Mwania",
  },
  description:
    "Premium software engineer portfolio showcasing scalable systems, digital products, and modern engineering solutions built by Kelvin Mwania.",
  keywords: [
    "Kelvin Mwania",
    "Software Engineer",
    "System Builder",
    "Next.js Portfolio",
    "Full Stack",
    "Nairobi",
    "Product Engineering",
    "Web Development",
  ],
  openGraph: {
    title: "Kelvin Mwania | Software Engineer",
    description:
      "Building scalable digital systems, intelligent platforms, and real-world software solutions focused on impact, performance, and usability.",
    url: "/",
    siteName: "Kelvin Mwania Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kelvin Mwania Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvin Mwania | Software Engineer",
    description:
      "Building scalable digital systems, intelligent platforms, and real-world software solutions focused on impact, performance, and usability.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
