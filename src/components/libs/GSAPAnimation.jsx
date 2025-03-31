"use client"

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

// plugin GSAP
gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimation() {
  useGSAP(() => {
    const timeline = gsap.timeline({ smoothChildTiming: true });

    const elements = gsap.utils.toArray('.reveal-up')
    elements.forEach((element) => {
      timeline.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: 0.5,
          invalidateOnRefresh: true,
          once: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "sine.inOut"
      })
    })
  })

  React.useEffect(() => {
    const refreshScrollTrigger = () => ScrollTrigger.refresh();
    window.addEventListener("load", refreshScrollTrigger);

    return () => {
      window.removeEventListener("load", refreshScrollTrigger);
    };
  }, []);

  return null;
}