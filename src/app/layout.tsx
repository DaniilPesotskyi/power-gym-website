import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Gym",
  description: "Developed by Danya Pesotskyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
