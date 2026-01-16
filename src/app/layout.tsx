import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urban Catering | Premium Catering Services in Nicosia, Cyprus",
  description: "Transform your events with Nicosia's premier catering service. Weddings, corporate events, private dining, and cocktail receptions. Excellence in every detail.",
  keywords: ["catering", "nicosia", "cyprus", "wedding catering", "corporate catering", "private dining", "events"],
  authors: [{ name: "Urban Catering" }],
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
        {children}
      </body>
    </html>
  );
}
