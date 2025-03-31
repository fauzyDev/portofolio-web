// app/providers.jsx
import React from 'react'
import NextTheme from "@/components/Theme/NextTheme"

export function Providers({ children }) {
  return (
    <NextTheme>
      {children}
    </NextTheme>
  )
} 