// app/providers.jsx
"use client"

import React from 'react'
import { HeroUIProvider } from "@heroui/react"
import NextTheme from '@/components/Theme/NextTheme'

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <NextTheme>
        {children}
      </NextTheme>
    </HeroUIProvider>
  )
} 