import type { Config } from 'drizzle-kit';
export default {
  schema: './src/lib/server/schema.ts',
  driver: 'turso',
  dialect: 'sqlite',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
    authToken: process.env.DATABASE_AUTH_TOKEN ?? ''
  },
  verbose: true
} satisfies Config;
