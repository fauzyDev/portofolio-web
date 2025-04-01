"use client"

import React from "react"
import dynamic from "next/dynamic"

const NextThemeProvider = dynamic(() => import("@/components/Theme/ThemeProviders"), { ssr: false })

export default function NextTheme({ children }) {
  return (
    <NextThemeProvider>
      {children}
    </NextThemeProvider>
  )
}