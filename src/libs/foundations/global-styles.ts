'use client';

import { createGlobalStyle } from 'styled-components';

import {
  color,
  createCssProps,
  font,
  fontSize,
  fontWeight,
  shadow,
  size,
} from './utilities';
import { typography } from './typography';
import { spacing } from './spacing';
import { shadows } from './shadows';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
    html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* CUSTOM STYLES ========================= */
  /* CSS Properties */
  :root {
    /* Colors */
    ${({ theme }) => createCssProps(theme.colors, '--color')}

    /* Font families */
    ${createCssProps(typography.fonts, '--ff')}

    /* Font sizes */
    ${createCssProps(typography.fontSizes, '--fs')}

    /* Font weights */
    ${createCssProps(typography.fontWeight, '--fw')}

    /* Sizes/Spacing */
    ${createCssProps(spacing.space, '--size')}

    /* Radius */
    ${createCssProps(spacing.radius, '--radius')}

    /* Shadows */
    ${createCssProps(shadows, '--shadow')}


    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  body {
    background-color: ${color('neutral-200')};
    color: ${color('content-secondary')};
    font-family: ${font('body')};
    font-weight: ${fontWeight('regular')};
    font-size: ${fontSize('md')};
    line-height: 1.5;
  }

  h1, h2, h3 {
    font-family: ${font('heading')};
    font-weight: ${fontWeight('semiBold')};
    line-height: 1.2;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    font-weight: ${fontWeight('semiBold')};
  }

  :focus-visible {
    outline: 2px dashed;
    outline-offset: 0.25rem;
    outline-color: ${color('primary')};
  }

  /* Utilities */
  .shadow-sm {
    box-shadow: ${shadow('sm')};
  }

  /* Layouts */
  .flow > * + * {
    margin-top: var(--flow-space, 1em);
  }

  .layout-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: var(--layout-column-gap, ${size('md')});
  }

  .layout-grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(var(--layout-grid-min, 30ch), 100%), 1fr)
    );
    gap: var(--layout-grid-gap, ${size('md')});
  }

  .layout-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--layout-between-gap, ${size('md')});
  }
`;

export default GlobalStyles;
