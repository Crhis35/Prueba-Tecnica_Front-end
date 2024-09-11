export type TextInputProps = {
  type: 'text' | 'password' | 'number';
  placeholder?: string;
  className?: string;
  label?: string;
  $invalid?: boolean;
  $errorMsg?: string;
} & React.ComponentProps<'input'>;
