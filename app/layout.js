import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokhara Aquarium | Premium Aquariums & Exotic Fish",
  description: "Discover a world of exotic fishes, custom-built aquariums, indoor plants, and premium pet supplies at Pokhara Aquarium.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans selection:bg-primary/30 selection:text-primary-foreground">
        <Navbar />
        <main className="flex-1 w-full relative z-10 flex flex-col pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
