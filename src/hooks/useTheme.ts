import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'auto'

/**
 * A custom hook to manage the theme of the application.
 *
 * @return {Object} An object containing the current theme and a function to toggle the theme.
 */
export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('auto')

  useEffect(() => {
    const { classList } = document.documentElement
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    classList.toggle('dark', currentTheme === 'dark' || (currentTheme === 'auto' && prefersDarkScheme))
  }, [currentTheme])

  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

  return { theme: currentTheme, toggleTheme }
}
