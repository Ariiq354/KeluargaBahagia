import { z } from 'zod';

export const formSchema = z.object({
  id: z.string(),
  nama: z.string().min(1),
  jumlah: z.coerce.number().min(1).max(100),
  expireAt: z.string().min(1)
});

export type FormSchema = typeof formSchema;
