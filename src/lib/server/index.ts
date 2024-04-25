import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

const client = createClient({
  url: 'file:test.db'
});

export const db = drizzle(client, { schema });

export const adapter = new DrizzleSQLiteAdapter(db, schema.sessionTable, schema.userTable);
