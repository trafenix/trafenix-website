import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Traffic Video Analysis & Survey Reports | Trafenix", template: "%s | Trafenix" },
  description: "Trafenix turns client-supplied video into traffic, intersection, parking, journey and safety reports using AI-assisted and manual analysis.",
  metadataBase: new URL("https://trafenix.com"),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Trafenix Technologies — Traffic Video Intelligence & Survey Analytics",
    description: "High-precision traffic turning movement counts, vehicle classifications, and survey reports with AI processing and manual verification.",
    url: "https://trafenix.com",
    siteName: "Trafenix Technologies",
    images: [
      {
        url: "/brand/trafenix-linkedin-banner.png",
        width: 1584,
        height: 396,
        alt: "Trafenix Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
