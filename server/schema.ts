import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const todos = pgTable("todos",{
    id : serial("id").primaryKey(),
    title : text("title").notNull(),
})

export const posts = pgTable("posts",{
    id : serial('id').primaryKey(),
    title : text('title').notNull(),
    desc : text('desc').notNull(),
})