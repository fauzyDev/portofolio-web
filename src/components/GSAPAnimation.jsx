"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

// plugin GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ smoothChildTiming: true });

export default function GSAPAnimation () {
    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up')
        elements.forEach((element) => {
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "-200 bottom",
              end: "bottom 80%",
              scrub: 1,
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut"
          })
        })

        gsap.to(".scrub-slide", {
          scrollTrigger: {
            trigger: ".scrub-slide",
            start: "-200% 80%",
            end: "400% 80%",
            scrub: 1,
          },
          x: "-1000",
          ease: "power1.inOut"
        })
      })
    }


