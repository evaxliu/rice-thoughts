// import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { articles } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedArticles() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const createArticles = await Promise.all(
    articles.map(async (article) => {
      // const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, title, author, password)
        VALUES (${article.id}, ${article.title}, ${article.author})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return createArticles;
}


export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedArticles(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}