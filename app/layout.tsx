import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = { title: { default: "Traffic Video Analysis & Survey Reports | Trafenix", template: "%s | Trafenix" }, description: "Trafenix turns client-supplied video into traffic, intersection, parking, journey and safety reports using AI-assisted and manual analysis.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
