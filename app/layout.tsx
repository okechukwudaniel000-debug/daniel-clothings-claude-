import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Clothings — Where Tradition Meets Modern Elegance",
  description:
    "Premium Nigerian fashion brand offering Ankara, Agbada, Senator, corporate suits and luxury women's wear. Crafted for confidence. Shop Daniel Clothings.",
  keywords:
    "Daniel Clothings, Nigerian fashion, Ankara, Agbada, Senator wear, luxury clothing Nigeria, corporate fashion, African fashion brand",
  authors: [{ name: "Daniel Clothings" }],
  creator: "Daniel Clothings",
  publisher: "Daniel Clothings",
  metadataBase: new URL("https://danielclothings.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://danielclothings.com",
    siteName: "Daniel Clothings",
    title: "Daniel Clothings — Where Tradition Meets Modern Elegance",
    description:
      "Premium Nigerian fashion brand offering Ankara, Agbada, Senator, corporate suits and luxury women's wear. Crafted for confidence.",
    images: [
      {
        url: "/Daniel Clothings logo without name(removebg).png",
        width: 1200,
        height: 630,
        alt: "Daniel Clothings — Premium Nigerian Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Clothings — Where Tradition Meets Modern Elegance",
    description:
      "Premium Nigerian fashion brand. Ankara, Agbada, Senator, Corporate & Luxury Women's wear. Crafted for confidence.",
    images: ["/Daniel Clothings logo without name(removebg).png"],
    creator: "@danielclothings_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-primary font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
