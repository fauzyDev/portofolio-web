import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Work from "@/components/Work";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Footer from "../components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
    useGSAP(() => {
      const elements = gsap.utils.toArray('.reveal-up')
    })


  return (
    <ReactLenis root>
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
      </ReactLenis>
    );
  }
