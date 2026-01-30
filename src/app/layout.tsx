import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  title: "Urban Catering | Premium Catering Services in Nicosia, Cyprus",
  description: "Transform your events with Nicosia's premier catering service. Weddings, corporate events, private dining, and cocktail receptions. Excellence in every detail.",
  keywords: ["catering", "nicosia", "cyprus", "wedding catering", "corporate catering", "private dining", "events"],
  authors: [{ name: "Urban Catering" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Urban Catering | Premium Catering Services in Nicosia",
    description: "Transform your events with Nicosia's premier catering service.",
    url: "https://urbancatering.com.cy",
    siteName: "Urban Catering",
    locale: "en_CY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
