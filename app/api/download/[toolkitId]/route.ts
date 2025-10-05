import { NextRequest, NextResponse } from "next/server";
import { toolkitItems } from "@/data/toolkit-data";

function getContentType(fileType: string): string {
    if (fileType.includes("CSV")) {
        return "text/csv";
    }
    if (fileType.includes("PDF")) {
        return "application/pdf";
    }
    if (fileType.includes("Excel")) {
        return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    }
    return "text/plain";
}

function getExtension(fileType: string): string {
    if (fileType.includes("CSV")) {
        return "csv";
    }
    if (fileType.includes("PDF")) {
        return "pdf";
    }
    if (fileType.includes("Excel")) {
        return "xlsx";
    }
    return "txt";
}

export async function GET(
  request: NextRequest,
  { params }: { params: { toolkitId: string } }
) {
  const { toolkitId } = params;
  const toolkitItem = toolkitItems.find(item => item.id === toolkitId);

  if (!toolkitItem) {
    return NextResponse.json(
      { message: "Toolkit not found" },
      { status: 404 }
    );
  }

  const extension = getExtension(toolkitItem.fileType);
  const filename = `${toolkitItem.title.replace(/\s+/g, '-')}.${extension}`;
  const contentType = getContentType(toolkitItem.fileType);

  const content = `This would be the actual ${filename} file content.\n
In a real implementation, this endpoint would:\n1. Serve actual ${extension.toUpperCase()} files from a secure storage location\n2. Track download analytics\n3. Require authentication or email verification\n4. Generate personalized files with company branding\n\nFile: ${filename}\nType: ${contentType}\nToolkit ID: ${toolkitId}\n\nThis is a demonstration of the download functionality for Balance Book Financial Planning Toolkit.`

  return new NextResponse(content, {
    headers: {
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Type": contentType,
    },
  });
}
