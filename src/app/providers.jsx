// app/providers.jsx
"use client"

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import NextTheme from '@/components/Theme/NextTheme'

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextTheme>
        {children}
      </NextTheme>
    </NextUIProvider>
  )
} 