import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'
import { Providers } from './providers';
import "./globals.css";
import 'lenis/dist/lenis.css'

import Header from "@/components/Header";

export const inter = Inter({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['500']
})

export const metadata = {
  title: "Portofolio - Halif Fauzy",
  description: "Selamat datang di website saya. Ini adalah portofolio website yang dibangun dengan framework Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-zinc-50 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500">
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning={true}>
        <GoogleTagManager gtmId="GTM-WRTCTKBL"/>
        <Providers>
        <Header/>
        {children}
        </Providers>
      </body>
    </html>
  );
}
