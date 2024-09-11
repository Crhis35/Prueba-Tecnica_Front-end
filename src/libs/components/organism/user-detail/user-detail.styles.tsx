import styled from 'styled-components';
import { color, fontSize, radius, size } from '@/libs/foundations';
import { UnstyledButton } from '../../atoms';

export const Container = styled.div`
  flex: 1 1 700px;
  background-color: ${color('neutral-100')};
  padding: var(--section-padding, ${size('2xl')});
  border-radius: ${radius('lg')};
`;

export const BackButton = styled(UnstyledButton)`
  position: absolute;
  top: ${size('2xl')};
  left: ${size('4xl')};
`;

export const Wrapper = styled.div`
  --padding: ${size('md')};
  --gap: ${size('md')};
  gap: var(--gap);
  padding: var(--padding);

  background-color: ${color('neutral-100')};
  border: 1px solid ${color('neutral-300')};
  border-radius: ${radius('md')};
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: var(--gap);
`;

export const Cover = styled.img`
  display: block;
  flex-basis: 1 0 100px;
  width: 100px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: ${radius('md')};
`;

export const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${size('sm')};
`;

export const Title = styled.h3`
  font-size: ${fontSize('md')};

  a {
    color: ${color('content-primary')};
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${color('primary')};
    }
  }
`;

export const Color = styled.p`
  color: ${color('content-secondary')};

  em {
    color: ${color('content-primary')};
    font-style: normal;
  }
`;
