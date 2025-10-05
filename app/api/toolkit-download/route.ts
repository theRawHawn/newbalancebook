import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const downloadRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  businessType: z.string().min(1),
  phone: z.string().min(10),
  toolkitId: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = downloadRequestSchema.parse(body);

    const downloadRecord = {
      id: Math.random().toString(36).substr(2, 9),
      ...validatedData,
      downloadedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: "Download request processed successfully",
      downloadId: downloadRecord.id,
    });
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
    
    return NextResponse.json(
      { message: "Failed to process download request" },
      { status: 500 }
    );
  }
}
