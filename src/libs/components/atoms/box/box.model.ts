import React from 'react';
import {
  AlignItemsType,
  Colors,
  FlexDirectionType,
  JustifyContentType,
  PolymorphicComponentPropWithRef,
  SizeType,
  SpacingType,
} from '@/libs/foundations/styled';

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type BoxProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      component?: React.ElementType;
      $spacing?: SpacingType;
      $align?: AlignItemsType;
      $direction?: FlexDirectionType;
      $justifyContent?: JustifyContentType;
      $bg?: keyof Colors;
      $width?: SizeType;
      $height?: SizeType;
      $center?: boolean;
      p?: SpacingType;
      m?: SpacingType;
      px?: SpacingType;
      py?: SpacingType;
      pr?: SpacingType;
      pt?: SpacingType;
      pb?: SpacingType;
      pl?: SpacingType;
      mx?: SpacingType;
      my?: SpacingType;
      mr?: SpacingType;
      mt?: SpacingType;
      mb?: SpacingType;
      ml?: SpacingType;
    }
  >;
