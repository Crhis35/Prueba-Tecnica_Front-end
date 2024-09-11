'use client';

import React from 'react';

import { Wrapper } from './button.styles';
import { ButtonProps } from './button.model';

export default function Button(props: ButtonProps) {
  const { $variant, children, ...rest } = props;

  return (
    <Wrapper className="shadow-sm" $variant={$variant} {...rest}>
      {children}
    </Wrapper>
  );
}
