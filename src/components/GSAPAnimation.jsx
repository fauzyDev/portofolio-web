"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

// module GSAP
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function GSAPAnimation () {
    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up')
        elements.forEach((element) => {
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "-200 bottom",
              end: "bottom 80%",
              scrub: true,
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
          })
        })

        gsap.to(".scrub-slide", {
          scrollTrigger: {
            trigger: ".scrub-slide",
            start: "-200% 80%",
            end: "400% 80%",
            scrub: true,
          },
          x: "-1000",
        })

        gsap.utils.toArray(".fade-left").forEach((element) => {
          gsap.fromTo(
            element,
            {
              x: -200, // Mulai dari kiri (berjarak 200px dari kiri)
              opacity: 0, // Mulai dengan opacity 0
            },
            {
              x: 0, // Posisikan di tempat normal
              opacity: 1, // Animasi ke opacity 1
              duration: 1, // Durasi animasi
              scrollTrigger: {
                trigger: element,
                start: "top 80%", // Mulai animasi ketika elemen mencapai 80% dari viewport
                end: "top 20%",
              },
            }
          );
        });

        gsap.utils.toArray(".fade-right").forEach((el) => {
          gsap.fromTo(
            el,
            {
              x: 200, // Mulai dari kanan (berjarak 200px dari kanan)
              opacity: 0, // Mulai dengan opacity 0
            },
            {
              x: 0, // Posisikan di tempat normal
              opacity: 1, // Animasi ke opacity 1
              duration: 1, // Durasi animasi
              scrollTrigger: {
                trigger: el,
                start: "top 80%", // Mulai animasi ketika elemen mencapai 80% dari viewport
                end: "top 20%",
              },
            }
          );
        });
      })
    }


