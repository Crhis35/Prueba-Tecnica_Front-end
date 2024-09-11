export type ButtonProps = {
  $variant?: 'default' | 'primary' | 'secondary' | 'link' | 'danger';
  as?: string;
  htmlFor?: string;
  children: React.ReactNode;
} & React.ComponentProps<'button'>;
