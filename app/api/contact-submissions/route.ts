
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, service, message } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
      range: 'A1:H1', 
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            name,
            email,
            phone,
            businessName,
            service,
            message,
          ],
        ],
      },
    });

    return NextResponse.json({
      message: "Form submission successful",
      data: response.data,
    });

  } catch (error) {
    console.error("Failed to process form submission:", error);
    
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      { message: "Failed to submit form", error: errorMessage },
      { status: 500 }
    );
  }
}
