import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from 'next/font/google'
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import Navbar from "./components/Navbar";
import SeachBox from "./components/SeachBox";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Movies",
  description: "Movies App  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${geistMono.variable} antialiased`}
      >
        
        <Providers >
          <Header/>
          <Navbar/>
          <SeachBox/>
        {children}
        </Providers>
      </body>
    </html>
  );
}
