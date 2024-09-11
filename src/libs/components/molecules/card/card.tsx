'use client';
import React from 'react';

import Link from 'next/link';

import { CardProps } from './card.model';
import { Cover, Info, Title, Wrapper, Text } from './card.styles';

export default function Card(props: CardProps) {
  const { item } = props;
  return (
    <Wrapper className="shadow-sm">
      <Info>
        <Cover src={item.avatar_url} alt="user image" />
        <Text>
          <Title>
            <Link href={`/users/${item.login}`}>{item.login}</Link>
          </Title>
        </Text>
      </Info>
    </Wrapper>
  );
}
