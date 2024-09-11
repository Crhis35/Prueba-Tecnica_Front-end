'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'react-feather';

import { Box } from '../../atoms';
import { UserDetailProps } from './user-detail.model';
import {
  Color,
  Cover,
  Info,
  Title,
  Wrapper,
  Text,
  Container,
  BackButton,
} from './user-detail.styles';

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  const router = useRouter();

  return (
    <Container>
      <BackButton onClick={() => router.push('/')}>
        <ChevronLeft />
      </BackButton>
      <Wrapper className="shadow-sm">
        <Info>
          <Cover src={user.avatar_url} alt="product image" />
          <Text>
            <Title>{user.name}</Title>
            <Color>
              GitHub ID: <em>{user.login}</em>
            </Color>
          </Text>
        </Info>
        <Box>
          <span>Followers:</span>
          <span>{user.followers}</span>
        </Box>
        <Box $justifyContent="center">
          <div
            style={{
              flex: 'flex: 1 1 100%',
            }}
          >
            <picture>
              <source
                srcSet={`https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&theme=dark`}
                media="(prefers-color-scheme: dark)"
              />
              <source
                srcSet={`https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true`}
                media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
              />
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true`}
              />
            </picture>
          </div>
          <div
            style={{
              flex: 'flex: 1 1 100%',
            }}
          >
            <a href="https://git.io/streak-stats">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${user.login}&theme=dark`}
                alt="GitHub Streak"
              />
            </a>
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
}
