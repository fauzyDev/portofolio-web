import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Work from "@/components/Work";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <>
      <Header/>
        <main>
          <Hero/>
          <About/>
          <Skill/>
          <Work/>
          <Certificate/>
          <Contact/>
        </main>
        <Footer/>
      </>
    );
  }
