import styled, { css } from 'styled-components';

import { color, fontSize, radius, size } from '@/libs/foundations';
import { TextInputProps } from './input.model';

export const Input = styled.input<TextInputProps>`
  font-size: ${fontSize('md')};
  background-color: ${color('neutral-200')};
  padding: var(--input-py, ${size('sm')}) var(--input-px, ${size('md')});

  &::placeholder {
    color: ${color('content-secondary')};
  }

  ${({ $invalid }) => {
    return css`
      border: 1px solid
        var(--input-border, ${$invalid ? color('danger') : color('primary')});
      border-radius: ${radius('md')};

      :focus,
      :active {
        border-color: var(
          --input-border-active,
          ${$invalid ? color('danger') : color('primary')}
        );
      }
    `;
  }}
`;

export const Label = styled.label<{ $invalid?: boolean }>`
  font-size: ${fontSize('md')};
  color: ${color('primary')};

  ${({ $invalid }) => {
    return css`
      color: var(
        --label-color,
        ${$invalid ? color('danger') : color('primary')}
      );
    `;
  }}
`;

export const ErrorMessage = styled.p`
  font-size: ${fontSize('md')};
  color: ${color('danger')};
`;
