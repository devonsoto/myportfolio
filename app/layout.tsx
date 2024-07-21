import "../styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Devon Soto",
  description: "CEO & CO-Founder of Empowering Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <SpeedInsights />
        {/* <Header /> */}
        <main className="flex flex-1 flex-col">{children}</main>
        <Toaster />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
