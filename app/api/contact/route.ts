import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { contactSubmissions, insertContactSubmissionSchema } from "@/db/schema";
import { z } from "zod";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertContactSubmissionSchema.parse(body);
    
    const [submission] = await db
      .insert(contactSubmissions)
      .values(validatedData)
      .returning();
    
    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: error.errors,
        },
        { status: 400 }
      );
    }
    
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
