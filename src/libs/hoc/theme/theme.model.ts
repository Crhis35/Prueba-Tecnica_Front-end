import { DefaultTheme } from 'styled-components';

export interface ThemeContextModel {
  isLight: boolean;
  theme: DefaultTheme;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
}
