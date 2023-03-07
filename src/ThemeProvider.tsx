// import { useState } from 'react'
import { MantineProvider, MantineThemeOverride, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { useHotkeys, useLocalStorage } from '@mantine/hooks'

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: "Open sans",
  fontSizes: {
    md: "14px",
  },
  radius: {sm: "2px"}
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])
  
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
