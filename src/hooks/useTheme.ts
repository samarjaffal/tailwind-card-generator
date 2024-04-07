import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'auto'
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('auto')

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}
