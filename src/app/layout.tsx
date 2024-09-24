import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: ["400", "800", "700"],
  subsets: ["latin"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Deertober",
  description: "Open Source Event under Hacktober",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} antialiased`}>{children}</body>
    </html>
  );
}
