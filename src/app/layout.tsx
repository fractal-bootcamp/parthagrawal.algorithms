import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algorithms",
  description: "Visualizations of various algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{ height: "100vh" }} lang="en">
      <body style={{ height: "100vh" }} className={inter.className}>{children}</body>
    </html>
  );
}
