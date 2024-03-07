
import "../../app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../../app/(site)/components/global/Navbar";
import Footer from "../../app/(site)/components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Next.js Portfolio Site",
  description: "A personal portfolio site built by PIAIC Batch47 Q-2",
  openGraph: {
    images: "add-your-open-graph-image-url-here",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}