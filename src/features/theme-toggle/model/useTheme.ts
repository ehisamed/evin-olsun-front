
import React from 'react'
import { useTheme as useNextTheme } from 'next-themes';

const useTheme = () => {
  const { theme, setTheme } = useNextTheme();

  return {
    theme,
    toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  }
}

export default useTheme