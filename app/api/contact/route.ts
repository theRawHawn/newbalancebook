
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";

// Define the schema for the contact form submission
const insertContactSubmissionSchema = z.object({
  name: z.string(),
  mobile: z.string(),
  email: z.string().email(),
  businessType: z.string().optional(),
  message: z.string().optional(),
});

async function updateGoogleSheet(validatedData: z.infer<typeof insertContactSubmissionSchema>) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ auth, version: 'v4' });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:E1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [validatedData.name, validatedData.mobile, validatedData.email, validatedData.businessType, validatedData.message],
        ],
      },
    });
  } catch (error) {
    console.error("Error updating Google Sheet:", error);
    // Optional: Add more robust error handling here, like sending a notification
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertContactSubmissionSchema.parse(body);

    // Don't wait for the sheet to update, respond to the user immediately
    updateGoogleSheet(validatedData);

    return NextResponse.json({ success: true, message: "Form submitted successfully" });

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
