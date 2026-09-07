import type { Metadata } from "next";
import "modern-normalize/modern-normalize.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

import type { Metadata } from "next";

const siteUrl = "https://08-zustand-gilona.vercel.app/"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NoteHub — effective organization of notes",
  description:
    "NoteHub helps you create, organize and quickly find notes to master your information and improve productivity",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "NoteHub: effective organization",
    description:
      "Master your information. Maximize productivity. NoteHub — is a next-generation note application",
    url: siteUrl,
    siteName: "NoteHub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub — application for effective organization of notes",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoteHub: effective organization",
    description:
      "Master your information. Maximize productivity. NoteHub — is a next-generation note application",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children, modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
