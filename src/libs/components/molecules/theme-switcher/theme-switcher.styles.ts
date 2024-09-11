import { size } from '@/libs/foundations';
import styled from 'styled-components';
import { UnstyledButton } from '../../atoms';

export const StyledThemeSwitcher = styled(UnstyledButton)`
  position: absolute;
  top: ${size('2xl')};
  right: ${size('4xl')};
`;
