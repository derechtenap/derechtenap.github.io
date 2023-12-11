import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tim Deres",
  description: "Web Developer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  );
};

export default RootLayout;
