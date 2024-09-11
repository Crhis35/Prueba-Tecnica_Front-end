import { redirect } from 'next/navigation';

import { UserDetail } from '@/libs/components/organism';
import { API_URL } from '@/libs/constants/urls';
import { User } from '@/libs/types/user.types';

interface UserPageProps {
  params: {
    username: string;
  };
}

export default async function UserPage(props: UserPageProps) {
  const req = await fetch(`${API_URL}/users/${props.params.username}`);
  if (!req.ok) {
    redirect('/');
  }

  const data = (await req.json()) as User;

  return <UserDetail user={data} />;
}
