import { defineConfig } from "drizzle-kit";

// drizzle file ka dotenv ko khaw ma use ngi bu
// therefore dotenv ko install lote p import pay
// p yin path that mhat
import * as dotenv from 'dotenv';
dotenv.config({
    path : '.env.local'
});

export default defineConfig({
  schema : './server/schema.ts',
  out: './server/migrations',
  dialect : 'postgresql',
  dbCredentials : {
    url : process.env.DATABASE_URL!,
  }
});
