import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kaybecs Heating & Air",
  description: "Reliable heating and air services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/KayBecs_Logo_Recc.png" />
      </head>

      <body className="overflow-x-hidden bg-white">
        <div className="fixed left-0 top-0 z-50 w-full">
          <TopBar />
          <Navbar />
        </div>

        <main className="pt-[116px] sm:pt-[122px] md:pt-[136px]">
          {children}
        </main>
      </body>
    </html>
  );
}