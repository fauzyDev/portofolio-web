// app/providers.jsx
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import NextTheme from '@/components/NextTheme'

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextTheme>
        {children}
      </NextTheme>
    </NextUIProvider>
  )
}