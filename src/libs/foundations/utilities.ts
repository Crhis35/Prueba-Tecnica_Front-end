import type { Colors } from './styled';

import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

export const remBase = 16;

/**
 * A helper for convert pixels to rem.
 * @param {number} px - the number of pixels to convert.
 * @returns {string}
 */
export const pxToRem = (px: number): string => `${px / remBase}rem`;

export const validateSize = (size: number | string) =>
  typeof size === 'string' ? size : pxToRem(size);

export const createCssProps = <T extends object>(
  tokenObj: T,
  prefix: string,
) => {
  return (
    Object.entries(tokenObj)
      .map(([key, value]) => {
        const variableKey =
          prefix === '--' ? `${prefix}${key}` : `${prefix}-${key}`;
        return `${variableKey}: ${value}`;
      })
      .join(';') + ';'
  );
};

/**
 * Create a CSS custom property string for a color.
 * @param n - The name of a color;
 * @returns A string which is also a CSS custom property for this color.
 */
export const color = (key: keyof Colors) => {
  return `var(--color-${key})`;
};

/**
 * Create a CSS custom property string for a font-family.
 * @param key The name of a font-family express;
 * @returns A string which is also a CSS custom property for this font-family.
 */
export const font = (key: keyof typeof typography.fonts) => {
  return `var(--ff-${key})`;
};

/**
 * Create a CSS custom property string for a font-size.
 * @param key The name of a font-size express;
 * @returns A string which is also a CSS custom property for this font-size.
 */
export const fontSize = (key: keyof typeof typography.fontSizes) => {
  return `var(--fs-${key})`;
};

/**
 * Create a CSS custom property string for a font-weight.
 * @param key The name of a font-weight express;
 * @returns A string which is also a CSS custom property for this font-weight.
 */
export const fontWeight = (key: keyof typeof typography.fontWeight) => {
  return `var(--fw-${key})`;
};

/**
 * Create a CSS custom property string for a size.
 * @param key The name of a size express;
 * @returns A string which is also a CSS custom property for this size.
 */
export const size = (key: keyof typeof spacing.space) => {
  return `var(--size-${String(key)})`;
};

/**
 * Create a CSS custom property string for a radius.
 * @param key The name of a radius express;
 * @returns A string which is also a CSS custom property for this radius.
 */
export const radius = (key: keyof typeof spacing.radius) => {
  return `var(--radius-${key})`;
};

/**
 * Create a CSS custom property string for a shadow.
 * @param key The name of a shadow express;
 * @returns A string which is also a CSS custom property for this shadow.
 */
export const shadow = (key: keyof typeof shadows) => {
  return `var(--shadow-${key})`;
};
