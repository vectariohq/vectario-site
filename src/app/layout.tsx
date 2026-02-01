import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vectario.com"),
  title: {
    default: "Vectario | Senior cloud, software, and AI engineering",
    template: "%s | Vectario",
  },
  description:
    "Senior cloud, software, and AI engineering—built for complex systems. We help teams in finance, healthcare, logistics, and e-commerce deliver systems that scale and endure.",
  openGraph: {
    title: "Vectario",
    description:
      "Senior cloud, software, and AI engineering—built for complex systems.",
    url: "https://vectario.com",
    siteName: "Vectario",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
