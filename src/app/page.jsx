import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";

export default function Home() {

  return (
    <>
      <Header/>
        <main>
          <Hero/>
          <About/>
          <Skill/>
        </main>
      </>
    );
  }
