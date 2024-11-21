import React from 'react';
import { ReactLenis } from 'lenis/react'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Work from "@/components/Work";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Footer from "../components/Footer";
import Animation from '@/components/Animation';

export default function Home() {
    
  return (
    <ReactLenis root>
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
      </ReactLenis>
    );
  }
