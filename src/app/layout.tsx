import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenPlate",
  description: "CS2340 Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <link rel='icon' href='/CS2340-project-website/greenplate.png' />
      <body className={inter.className}>
        <Header />
        <div className="m-auto w-[90%] p-4">
          {children}
        </div>
        </body>
    </html>
  );
}
