import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skill from "@/components/Skill/Skill";
import Work from "@/components/Project/ProjectCard";
import Certificate from "@/components/Certificate/Certificate";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import LenisComponent from '@/libs/LenisComponent';
import Animation from '@/libs/Animation';

export default function Home() {
  return (
    <LenisComponent>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Certificate />
        <Contact />
      </main>
      <Footer />
      <Animation />
    </LenisComponent>
  );
}
