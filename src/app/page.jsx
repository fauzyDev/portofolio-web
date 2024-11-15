import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero/>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        2024 All reversed Fauzy
      </footer>
    </div>
  );
}
