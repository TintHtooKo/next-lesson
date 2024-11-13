import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv';
dotenv.config({
    path : '.evn.local'
});

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/schema.ts",
  out: "./server/migration",
  dbCredentials : {
    url : process.env.DATABASE_URL!
  }
});

