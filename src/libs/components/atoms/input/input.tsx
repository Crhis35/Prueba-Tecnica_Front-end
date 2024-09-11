'use client';
import React from 'react';

import { Box } from '../box';
import { ErrorMessage, Input, Label } from './input.styles';
import { TextInputProps } from './input.model';

export default function TextInput(props: TextInputProps) {
  const { type, placeholder, label, id, $invalid, $errorMsg, ...rest } = props;

  const idRef = React.useId();

  return (
    <Box $direction="column">
      {label ? (
        <Label htmlFor={id || idRef} $invalid={$invalid}>
          {label}
        </Label>
      ) : null}
      <Input id={id || idRef} type={type} placeholder={placeholder} {...rest} />
      {$errorMsg ? <ErrorMessage>{$errorMsg}</ErrorMessage> : null}
    </Box>
  );
}
