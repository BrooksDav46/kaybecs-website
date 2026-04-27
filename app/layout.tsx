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
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
};