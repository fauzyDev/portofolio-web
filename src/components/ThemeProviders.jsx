"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function NextThemeProvider({ children }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
    )
  }