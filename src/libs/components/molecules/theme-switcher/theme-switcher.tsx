'use client';

import React from 'react';
import { Moon, Sun } from 'react-feather';

import { useTheme } from '@/libs/hoc/theme';
import { StyledThemeSwitcher } from './theme-switcher.styles';

export default function ThemeSwitcher() {
  const { setIsLight, isLight } = useTheme();
  return (
    <StyledThemeSwitcher onClick={() => setIsLight(!isLight)}>
      {isLight ? <Sun /> : <Moon />}
    </StyledThemeSwitcher>
  );
}
