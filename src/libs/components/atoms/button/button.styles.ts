'use client';

import styled from 'styled-components';
import { fontSize, radius, color, size } from '@/libs/foundations';

import { ButtonProps } from './button.model';

export const Wrapper = styled.button<ButtonProps>`
  display: block;
  font-size: ${fontSize('md')};
  text-align: center;
  background-color: var(--button-bg, ${color('neutral-200')});
  color: var(--button-color, ${color('content-primary')});
  border: 1px solid var(--button-border, ${color('neutral-200')});
  border-radius: ${radius('md')};
  padding: var(--button-py, ${size('xs')}) var(--button-px, ${size('sm')});
  transition: background 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    --button-bg: ${color('neutral-300')};
    --border-color: ${color('neutral-300')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    --button-color: ${color('content-primary')};
    --button-bg: ${color('neutral-200')};
    --border-color: ${color('content-primary')};
  }

  ${({ $variant }) =>
    $variant === 'primary' &&
    `
    --button-color: ${color('neutral-100')};
    --button-bg: ${color('primary')};
    --button-border: ${color('primary')};

    &:hover {
      --button-color: ${color('primary')};
      --button-bg: ${color('neutral-100')};
    }
  `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    `
    --button-color: ${color('primary')};
    --button-bg: ${color('neutral-100')};
    --button-border: ${color('primary')};

    &:hover {
      --button-color: ${color('neutral-100')};
      --button-bg: ${color('primary')};
    }
  `}

  ${({ $variant }) =>
    $variant === 'link' &&
    `
    --button-color: ${color('content-primary')};
    --button-bg: transparent;
    --button-border: transparent;

    box-shadow: none;

    &:hover {
      --button-color: ${color('primary')};
      --button-bg: transparent;
      --button-border: transparent;
    }
  `}

  ${({ $variant }) =>
    $variant === 'danger' &&
    `
    --button-color: ${color('neutral-100')};
    --button-bg: ${color('danger')};
    --button-border: ${color('danger')};

    &:hover {
      --button-color: ${color('danger')};
      --button-bg: transparent;
      --button-border: ${color('danger')};
    }
  `}
`;

export const UnstyledButton = styled.button`
  text-align: center;
  font: inherit;
  color: inherit;
  background: transparent;
  border: none;
  display: block;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
