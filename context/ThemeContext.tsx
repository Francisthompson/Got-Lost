"use client"

import { createContext, useState, useEffect, ReactNode, useContext } from "react";

type AppliedTheme = 'dark' | 'light';
type Preference = AppliedTheme | 'system';

interface ThemeContextType {
  theme: AppliedTheme;
  preference: Preference;
  changePreference: (newPreference: Preference) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [preference, setPreference] = useState<Preference>('system');
  const [theme, setTheme] = useState<AppliedTheme>('dark');

  useEffect(() => {
    const storedPreference = localStorage.getItem("theme") as Preference | null;
    if (storedPreference && ['dark', 'light', 'system'].includes(storedPreference)) {
      setPreference(storedPreference);
    }
  }, []);

  useEffect(() => {
    if (preference === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(mediaQuery.matches ? 'dark' : 'light');

      const handleChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setTheme(preference);
    }
  }, [preference]);

  const changePreference = (newPreference: Preference) => {
    setPreference(newPreference);
    localStorage.setItem("theme", newPreference);
  };

  return (
    <ThemeContext.Provider value={{ theme, preference, changePreference }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}