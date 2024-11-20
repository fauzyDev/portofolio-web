import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

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
    <html lang="en" className="bg-zinc-900 text-zinc-50 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <GoogleTagManager gtmId="GTM-WRTCTKBL" />
      </body>
    </html>
  );
}
