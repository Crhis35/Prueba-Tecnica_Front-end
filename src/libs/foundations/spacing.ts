import { pxToRem } from './utilities';

export const spacing = {
  space: {
    xxs: pxToRem(4),
    xs: pxToRem(8),
    sm: pxToRem(12),
    md: pxToRem(16),
    lg: pxToRem(20),
    xl: pxToRem(24),
    '2xl': pxToRem(32),
    '3xl': pxToRem(48),
    '4xl': pxToRem(64),
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  gap: (px: number) => pxToRem(px),
};
