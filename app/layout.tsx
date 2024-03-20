import "../styles/globals.css";

export const metadata = {
  title: "Birthday Bash",
  description: "Devon Soto's personal website",
};

import { Inter as FontSans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";
import { Toaster } from "@/components/ui/toaster";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
        <Header />
        <main className="flex-1 overflow-auto">{children}</main>
        {/* <main className="h-full w-full">{children}</main> */}
        {/* <main className="flex w-full flex-1 items-center justify-center overflow-auto">
          <div className="mx-auto w-full max-w-4xl p-4">{children}</div>
        </main> */}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
