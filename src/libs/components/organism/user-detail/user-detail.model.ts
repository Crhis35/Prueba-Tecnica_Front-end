import { User } from '@/libs/types/user.types';

export interface UserDetailProps {
  user: User;
  followers: User[];
}
