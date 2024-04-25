import type { Config } from 'drizzle-kit';
export default {
  schema: './src/lib/server/schema.ts',
  driver: 'libsql',
  out: './drizzle',
  dbCredentials: {
    url: 'file:test.db'
  },
  verbose: true
} satisfies Config;
