import { db } from '$lib/server';
import { diskonTable } from '$lib/server/schema';
import { fail } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { generateIdFromEntropySize } from 'lucia';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { formSchema } from './schema';

export const load: PageServerLoad = async ({ params }) => {
  const id = params.id;
  const data = await db.query.diskonTable.findFirst({
    where: eq(diskonTable.id, id)
  });

  return {
    form: await superValidate(data, zod(formSchema))
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form
      });
    }

    if (!form.data.id) {
      form.data.id = generateIdFromEntropySize(10);
    }

    await db
      .insert(diskonTable)
      .values({
        id: form.data.id,
        nama: form.data.nama,
        jumlah: form.data.jumlah,
        expireAt: form.data.expireAt
      })
      .onConflictDoUpdate({
        target: diskonTable.id,
        set: {
          nama: form.data.nama,
          jumlah: form.data.jumlah,
          expireAt: form.data.expireAt
        }
      });

    return {
      form
    };
  }
};
