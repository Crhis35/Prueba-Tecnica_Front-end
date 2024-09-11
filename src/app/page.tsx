import { Box } from '@/libs/components/atoms';
import { UserSearch } from '@/libs/components/organism';
import { size } from '@/libs/foundations';

export default function Home() {
  return (
    <Box
      as="main"
      $bg="neutral-100"
      $center
      $height="100%"
      $width="100%"
      p={size('2xl')}
      className="flow"
    >
      <UserSearch />
    </Box>
  );
}
