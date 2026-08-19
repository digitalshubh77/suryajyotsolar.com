import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Skiper89 } from "@/components/ui/skiper-ui/skiper89";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suryajyot Solar | Power Your Life With Sun",
  description:
    "Suryajyot Solar is a Kolhapur-based solar energy company delivering complete rooftop solar installation for residential, commercial, and industrial customers across Kolhapur District.",
  keywords: [
    "solar company Kolhapur",
    "rooftop solar installation",
    "Suryajyot Solar",
    "net metering Kolhapur",
    "solar panel installation Maharashtra",
  ],
  applicationName: "Suryajyot Solar",
  icons: {
    icon: [
      { url: "/logo-mark.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${jakarta.className} min-h-full flex flex-col bg-background text-foreground`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Skiper89 />
      </body>
    </html>
  );
}
