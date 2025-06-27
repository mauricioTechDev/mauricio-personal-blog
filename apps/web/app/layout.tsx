import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Mauricio Acosta Personal Website",
  description: "The presonal website of Mauricio Acosta, a software engineer.",
  openGraph: {
    title: "Mauricio Acosta Personal Website",
    description: "The personal website of Mauricio Acosta, a software engineer.",
    url: "https://mauricioacosta.dev",
    siteName: "Mauricio Acosta Personal Website",
    images: [
      {
        url: "https://mauricioacosta.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mauricio Acosta Personal Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauricio Acosta Personal Website",
    description: "The personal website of Mauricio Acosta, a software engineer.",
    images: ["https://mauricioacosta.dev/og-image.png"],
    creator: "@mauricioTechDev",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
