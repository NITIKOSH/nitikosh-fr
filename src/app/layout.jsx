import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nitikosh : A legal vault",
  description: "A Blockchain based legal vault",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-0 m-0`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
