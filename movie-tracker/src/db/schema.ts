import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "timestamp" }).notNull(),
  passwordHash: text("password_hash").notNull(),
  passwordAgainHash: text("password_again_hash").notNull(),
  image: text("image"),
});

export const watchlists = sqliteTable("watchlists", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  movieId: text("movie_id").notNull(),
  movieTitle: text("movie_title").notNull(),
  moviePoster: text("movie_poster"),
  rating: integer("rating"),
  addedAt: integer("added_at", { mode: "timestamp" }).notNull(),
});