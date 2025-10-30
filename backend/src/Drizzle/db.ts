import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!) // create neon client

// drizzle expects a "sql" instance, not pg.Pool or Client
export const db = drizzle(sql, { schema, logger: true })

console.log("✅ Connected to the Neon database")

export default db


// import "dotenv/config"
// import { drizzle } from "drizzle-orm/node-postgres"
// import { Pool } from "pg"
// import * as schema from "./schema"

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL!,
//   ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
// })

// const main = async () => {
//   const client = await pool.connect()
//   console.log("✅ Connected to local PostgreSQL database")
//   client.release()
// }
// main().catch((err) => console.error("❌ Connection failed:", err))

// export const db = drizzle(pool, { schema, logger: true })
// export default db
