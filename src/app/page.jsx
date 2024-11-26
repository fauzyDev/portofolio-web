import React from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Work from "@/components/ProjectCard";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LenisComponent from '@/components/LenisComponent';
import Animation from '@/components/Animation';

export default function Home() {
    
  return (
    <LenisComponent>
      <Animation/>
        <main>
          <Hero/>
          <About/>
          <Skill/>
          <Work/>
          <Certificate/>
          <Contact/>
        </main>
      <Footer/>
    </LenisComponent>
  );
}
