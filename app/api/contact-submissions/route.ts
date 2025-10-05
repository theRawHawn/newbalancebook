import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { contactSubmissions } from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export async function GET() {
  try {
    const submissions = await db.select().from(contactSubmissions);
    return NextResponse.json(submissions);
  } catch (error) {
    console.error("Failed to fetch contact submissions:", error);
    return NextResponse.json(
      { message: "Failed to fetch contact submissions" },
      { status: 500 }
    );
  }
}
