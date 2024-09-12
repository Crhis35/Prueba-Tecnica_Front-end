import { redirect } from 'next/navigation';

import { UserDetail } from '@/libs/components/organism';
import { API_URL } from '@/libs/constants/urls';
import { User } from '@/libs/types/user.types';

interface UserPageProps {
  params: {
    username: string;
  };
}

async function getUserByUsername(username: string): Promise<User> {
  const req = await fetch(`${API_URL}/users/${username}`);

  return req.json() as Promise<User>;
}

export default async function UserPage(props: UserPageProps) {
  const [currentUser, followersReq] = await Promise.all([
    getUserByUsername(props.params.username),
    fetch(`${API_URL}/users/${props.params.username}/followers?per_page=10`),
  ]);

  if (!currentUser) {
    redirect('/');
  }

  const followers = (await followersReq.json()) as User[];

  const followersCounts = await Promise.all(
    followers?.map((follow) => getUserByUsername(follow.login)),
  );

  return <UserDetail user={currentUser} followers={followersCounts} />;
}
