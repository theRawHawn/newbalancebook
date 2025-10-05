import { NextRequest, NextResponse } from "next/server";

type ToolkitFile = {
  filename: string;
  contentType: string;
  content: string;
};

const toolkitFiles: Record<string, ToolkitFile> = {
  "business-budget-template": {
    filename: "Business-Budget-Template.xlsx",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    content: "Excel template content would be here"
  },
  "cash-flow-tracker": {
    filename: "Cash-Flow-Tracker.xlsx",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    content: "Cash flow tracker content would be here"
  },
  "tax-calendar": {
    filename: "Tax-Calendar-2024-25.pdf",
    contentType: "application/pdf",
    content: "Tax calendar PDF content would be here"
  },
  "profit-loss-template": {
    filename: "Profit-Loss-Statement-Template.xlsx",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    content: "P&L template content would be here"
  },
  "expense-tracker": {
    filename: "Business-Expense-Tracker.xlsx",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    content: "Expense tracker content would be here"
  },
  "financial-ratios-guide": {
    filename: "Financial-Ratios-Analysis-Guide.pdf",
    contentType: "application/pdf",
    content: "Financial ratios guide PDF content would be here"
  }
};

export async function GET(
  request: NextRequest,
  { params }: { params: { toolkitId: string } }
) {
  const { toolkitId } = params;
  const file = toolkitFiles[toolkitId];

  if (!file) {
    return NextResponse.json(
      { message: "Toolkit not found" },
      { status: 404 }
    );
  }

  const content = `This would be the actual ${file.filename} file content.

In a real implementation, this endpoint would:
1. Serve actual Excel/PDF files from a secure storage location
2. Track download analytics
3. Require authentication or email verification
4. Generate personalized files with company branding

File: ${file.filename}
Type: ${file.contentType}
Toolkit ID: ${toolkitId}

This is a demonstration of the download functionality for TaxNBooks Financial Planning Toolkit.`;

  return new NextResponse(content, {
    headers: {
      "Content-Disposition": `attachment; filename="${file.filename}"`,
      "Content-Type": file.contentType,
    },
  });
}
