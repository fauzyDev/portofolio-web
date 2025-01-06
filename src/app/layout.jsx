import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'
import { Providers } from './providers';
import "./globals.css";
import 'lenis/dist/lenis.css'
import Header from "@/components/Header";

const inter = Inter({
    subsets: ['latin'],
    weight: ['500'],
    style: ['normal'],
  })

export const metadata = {
    title: "Portofolio Website - Halif Fauzy",
    description: "Selamat datang di website saya. Ini adalah portofolio website yang dibangun dengan Framework Next.js",
    keywords: [
      "Halif Fauzy",
      "Portofolio Website",
      "Web Developer",
      "Next.js",
      "React",
    ],
  openGraph: {
      title: "Portofolio Website - Halif Fauzy",
      description: "Selamat datang di website saya. Ini adalah portofolio website yang dibangun dengan Framework Next.js",
      url: "https://fauzy-portofolio.vercel.app",
      type: "website",
    },
  schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Portofolio Website - Halif Fauzy",
      description: "Selamat datang di website saya. Ini adalah portofolio website yang dibangun dengan Framework Next.js",
      url: "https://fauzy-portofolio.vercel.app",
      author: {
        "@type": "Person",
        name: "Halif Fauzy",
      },
    },
  };


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-zinc-50 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <GoogleTagManager gtmId="GTM-WRTCTKBL"/>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
