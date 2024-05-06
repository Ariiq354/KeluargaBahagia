import { z } from 'zod';

export const formSchema = z.object({
  id: z.string(),
  username: z.string().min(5).max(100),
  password: z.string().min(8).max(50),
  role: z.coerce.number().min(1)
});

export type FormSchema = typeof formSchema;
