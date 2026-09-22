import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MEtrcs",
  url: "https://www.metrcs.org",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, iPadOS",
  description:
    "MEtrcs is a training and performance app for hybrid athletes, runners, cyclists and strength athletes. It brings training, recovery, sleep, HRV, nutrition, hydration, performance analysis, route analysis, workout comparisons and gear tracking into one privacy-first app.",
  featureList: [
    "Training tracking and analysis",
    "Sleep and recovery tracking",
    "HRV and resting heart rate tracking",
    "Nutrition logging",
    "Hydration logging",
    "Strength training logging",
    "FIT file enrichment",
    "Workout comparison",
    "Week and month comparison",
    "Route analysis",
    "Goal tracking",
    "Gear tracking",
    "Training planning",
    "Coach and athlete data sharing",
    "Apple Health integration",
    "iCloud synchronization",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.metrcs.org"),

  title: {
    default: "MEtrcs | Training & Performance App for Athletes",
    template: "%s | MEtrcs",
  },

  description:
    "MEtrcs is a training and performance app for hybrid athletes, runners, cyclists and strength athletes. Track training, recovery, sleep, HRV, nutrition and hydration, compare performance over time and keep your data under your control.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "MEtrcs",
    title: "MEtrcs | Training & Performance App for Athletes",
    description:
      "Training, recovery, sleep, HRV, nutrition, hydration and performance analysis in one privacy-first app for athletes.",
  },

  twitter: {
    card: "summary_large_image",
    title: "MEtrcs | Training & Performance App for Athletes",
    description:
      "Training, recovery, sleep, HRV, nutrition, hydration and performance analysis in one privacy-first app for athletes.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationJsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}