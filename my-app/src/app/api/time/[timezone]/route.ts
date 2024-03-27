import { NextRequest, NextResponse } from "next/server";
import { getTime, getTimeZone } from "@/app/services/getTime";
export const generateStaticParams = async () => {
  const countries = ["CET","EET","EST"];
  return countries.map((timezone) => [{ params: { timezone } }]);
};

export async function GET(request: NextRequest, { timezone }: { timezone: string }) {
  const data = await getTimeZone(timezone);

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
