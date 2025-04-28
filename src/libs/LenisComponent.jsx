"use client"

import React from 'react';
import gsap from 'gsap';
import { ReactLenis } from 'lenis/react';

export default function LenisComponent({ children }) {
  const lenisRef = React.useRef()

  React.useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}