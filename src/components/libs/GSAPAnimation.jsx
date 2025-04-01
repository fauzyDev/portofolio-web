"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugin GSAP
gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimation() {
  useGSAP(() => {
    const timeline = gsap.timeline({ smoothChildTiming: true });

    const elements = gsap.utils.toArray('.reveal-up');
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
        ease: "sine.inOut",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return null;
}
