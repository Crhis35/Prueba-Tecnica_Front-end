'use client';

import React from 'react';

import { lightTheme } from '@/libs/foundations';
import { ThemeContextModel } from './theme.model';

export const ThemeContext = React.createContext<ThemeContextModel>({
  isLight: true,
  setIsLight: () => {},
  theme: lightTheme,
});

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
