import { NextRequest, NextResponse } from "next/server";
import { getTime } from "@/app/services/getTime";

export async function GET(request: NextRequest) {
  const data = await getTime();

  if (!data) {
    return NextResponse.json([]);
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=30",
      // "CDN-Cache-Control": "public, s-maxage=3600",
      // "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
    },
  });
}
