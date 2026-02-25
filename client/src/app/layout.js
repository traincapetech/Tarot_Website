import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Earth Healers | Spiritual & Healing E-commerce",
  description: "Spiritual, Healing, Divination E-commerce Platform offering crystals, tarot readings, and more.",
  referrer: "no-referrer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased text-earth-900 bg-earth-50 dark:text-earth-50 dark:bg-earth-950`}>
        {children}
      </body>
    </html>
  );
}
