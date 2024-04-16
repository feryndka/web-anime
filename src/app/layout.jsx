import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Indonesia",
  description: "Generate with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className} bg-color-dark`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
