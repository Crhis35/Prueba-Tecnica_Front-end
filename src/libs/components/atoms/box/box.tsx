// @ts-nocheck

'use client';

import React from 'react';

import { StyledBox } from './box.styles';
import { BoxProps } from './box.model';

export default function Box<C extends React.ElementType = 'div'>(
  props: BoxProps<C>,
) {
  const {
    $spacing,
    $align,
    $justifyContent,
    $direction,
    children,
    p,
    m,
    px,
    py,
    pr,
    pt,
    pb,
    pl,
    mx,
    my,
    mr,
    mt,
    mb,
    ml,
    $width,
    $height,
    $center,
    as,
    component: Wrapper,
    className,
    $bg,
    ...rest
  } = props;

  const Component = as || 'div';
  return (
    <StyledBox
      as={Component}
      $spacing={$spacing}
      $align={$align}
      $justifyContent={$justifyContent}
      $direction={$direction}
      p={p}
      m={m}
      px={px}
      py={py}
      pr={pr}
      pt={pt}
      pb={pb}
      pl={pl}
      mx={mx}
      my={my}
      mr={mr}
      mt={mt}
      mb={mb}
      ml={ml}
      $width={$width}
      $height={$height}
      $center={$center}
      $bg={$bg}
      className={className}
      {...rest}
    >
      {React.Children.map(children, (child, index) =>
        Wrapper ? <Wrapper key={index}>{child}</Wrapper> : <>{child}</>,
      )}
    </StyledBox>
  );
}
