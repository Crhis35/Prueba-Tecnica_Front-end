'use client';

import styled from 'styled-components';
import { BoxProps } from './box.model';
import { color, size, validateSize } from '@/libs/foundations';

export const StyledBox = styled.div<BoxProps<'div'>>`
  display: flex;
  flex-wrap: wrap;
  ${({ $bg }) => $bg && `background-color: ${color($bg)};`}
  ${({ $width }) =>
    $width ? `width: ${validateSize($width)};` : 'width: auto;'}
  ${({ $height }) =>
    $height ? `height: ${validateSize($height)};` : 'height: auto;'}
  ${({ $spacing }) =>
    $spacing ? `gap: ${validateSize($spacing)};` : `gap: ${validateSize(4)};`}
  ${({ $align }) =>
    $align ? `align-items: ${$align};` : 'align-items: start;'}
  ${({ $direction }) =>
    $direction ? `flex-direction: ${$direction};` : 'flex-direction: row;'}
  ${({ $justifyContent }) =>
    $justifyContent
      ? `justify-content: ${$justifyContent};`
      : 'justify-content: space-between;'}
  ${({ p }) => (p ? `padding: ${p}px;` : 'padding: 0;')}
  ${({ m }) => (m ? `margin: ${m}px;` : 'margin: 0;')}
  ${({ px }) => (px ? `padding-inline: ${validateSize(px)};` : '')}
  ${({ py }) => (py ? `padding-block: ${validateSize(py)};` : '')}
  ${({ pr }) => (pr ? `padding-inline-end: ${validateSize(pr)};` : '')}
  ${({ pt }) => (pt ? `padding-block-start: ${validateSize(pt)};` : '')}
  ${({ pb }) => (pb ? `padding-block-end: ${validateSize(pb)};` : '')}
  ${({ pl }) => (pl ? `padding-inline-start: ${validateSize(pl)};` : '')}
  ${({ mx }) => (mx ? `margin-inline: ${validateSize(mx)};` : '')}
  ${({ my }) => (my ? `margin-block: ${validateSize(my)};` : '')}
  ${({ mr }) => (mr ? `margin-inline-end: ${validateSize(mr)};` : '')}
  ${({ mt }) => (mt ? `margin-block-start: ${validateSize(mt)};` : '')}
  ${({ mb }) => (mb ? `margin-block-end: ${validateSize(mb)};` : '')}
  ${({ ml }) => (ml ? `margin-inline-start: ${validateSize(ml)};` : '')}
  ${({ $center }) =>
    $center ? `align-items: center; justify-content: center;` : ''}
`;

export const LayoutWrapper = styled.div`
  --gap: ${size('2xl')};
  max-width: ${validateSize(1200)};
  padding: ${size('2xl')};
  padding-top: calc(${size('4xl')} * 2);
  margin: 0 auto;
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--gap);
`;
