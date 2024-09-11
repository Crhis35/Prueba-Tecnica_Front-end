import styled from 'styled-components';
import { color, fontSize, pxToRem, radius, size } from '@/libs/foundations';

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: var(--gap);

  @media (max-width: ${pxToRem(864)}) {
    margin-right: ${size('3xl')};
  }
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

export const SectionTitle = styled.span`
  display: none;

  @media (max-width: ${pxToRem(864)}) {
    display: block;
  }
`;
export const Wrapper = styled.div`
  --padding: 0 ${size('md')};
  --gap: ${size('md')};
  padding: var(--padding);
  width: ${pxToRem(150)};

  display: flex;
  align-items: center;
  gap: var(--gap);
`;
