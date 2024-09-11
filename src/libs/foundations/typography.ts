import { pxToRem } from './utilities';

export const typography = {
  fonts: {
    heading: '"Noto Serif", serif',
    body: '"Inter", sans-serif',
  },
  fontSizes: {
    lg: pxToRem(30),
    md: pxToRem(18),
    sm: pxToRem(16),
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
};
