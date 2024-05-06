import { db } from '$lib/server';
import { userTable } from '$lib/server/schema';
import { fail } from '@sveltejs/kit';
import { and, eq, ne } from 'drizzle-orm';
import { generateIdFromEntropySize } from 'lucia';
import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { formSchema } from './schema';
import { Argon2id } from 'oslo/password';

export const load: PageServerLoad = async ({ params }) => {
  const id = params.id;
  const data = await db.query.userTable.findFirst({
    where: eq(userTable.id, id)
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

    const exist = await db.query.userTable.findFirst({
      where: and(eq(userTable.username, form.data.username), ne(userTable.id, form.data.id))
    });

    if (exist) {
      return setError(form, 'username', 'Username sudah terpakai');
    }

    const hashPassword = await new Argon2id().hash(form.data.password);

    if (!form.data.id) {
      form.data.id = generateIdFromEntropySize(10);
    }

    await db
      .insert(userTable)
      .values({
        id: form.data.id,
        username: form.data.username,
        password: hashPassword,
        role: form.data.role
      })
      .onConflictDoUpdate({
        target: userTable.id,
        set: {
          username: form.data.username,
          password: hashPassword,
          role: form.data.role
        }
      });

    return {
      form
    };
  }
};
