'use client';

import React from 'react';

import toast from 'react-hot-toast';
import styled from 'styled-components';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { color, fontSize, size } from '@/libs/foundations';
import { Box, Button, TextInput } from '@/libs/components/atoms';
import { Card } from '@/libs/components/molecules';

import { GithubResult, User } from '@/libs/types/user.types';
import { API_URL } from '@/libs/constants/urls';
import { UserSearchModel, validateSchema } from './user-search.model';

const SectionTitle = styled.h2`
  color: ${color('content-primary')};
  font-size: ${fontSize('lg')};
  padding-bottom: ${size('lg')};
  border-bottom: 1px solid ${color('neutral-300')};
`;

export default function UserSearch() {
  const [users, setUsers] = React.useState<User[]>([]);
  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<UserSearchModel>({
    mode: 'all',
    resolver: zodResolver(validateSchema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = async (input: UserSearchModel) => {
    try {
      const req = await fetch(
        `${API_URL}/search/users?q=${input.username}&per_page=10`,
      );
      const data = (await req.json()) as GithubResult;
      setUsers(data.items);
      toast?.success('You did it!');

      reset({ username: '' });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <Box
      as="section"
      $direction="column"
      $spacing={16}
      $width="100%"
      p={40}
      $align="center"
    >
      <SectionTitle>Search Users</SectionTitle>
      <Box as="form" $direction="column" $spacing={16}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextInput
              type="text"
              label="Username"
              placeholder="Enter user name"
              $invalid={'username' in errors}
              $errorMsg={errors?.username?.message}
              {...field}
            />
          )}
        />

        <Button
          $variant="primary"
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? 'Loading...' : 'Search'}
        </Button>
      </Box>
      {users.length > 0 ? (
        <Box $direction="row" $center>
          {users?.map((user) => <Card key={user.login} item={user} />)}
        </Box>
      ) : null}
    </Box>
  );
}
