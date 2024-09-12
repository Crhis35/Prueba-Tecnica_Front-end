'use client';
import React from 'react';

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

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
import { useTheme } from '@/libs/hoc/theme';

export default function UserDetail(props: UserDetailProps) {
  const { user, followers } = props;
  const router = useRouter();
  const { theme } = useTheme();
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
        <Box $justifyContent="center" $width="100%" $height={400} pt={40}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={900} height={40} data={followers}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="login" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="followers"
                name="Followers"
                fill={theme.colors.primary}
                width={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Wrapper>
    </Container>
  );
}
