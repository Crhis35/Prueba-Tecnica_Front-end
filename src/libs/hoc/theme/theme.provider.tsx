'use client';

import React, { PropsWithChildren } from 'react';

import { ThemeContext } from './theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/libs/foundations';

export default function ThemeProvider(props: PropsWithChildren) {
  const { children } = props;
  const [isLight, setIsLight] = React.useState(true);
  const currentTheme = isLight ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight, theme: currentTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
