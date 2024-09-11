import { z } from 'zod';

export const validateSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: 'Username must be at least 4 characters.',
    })
    .refine((username) => !['iseijasunow'].includes(username), {
      message: "username can't be one of reserved username",
    }),
});

export type UserSearchModel = z.infer<typeof validateSchema>;
