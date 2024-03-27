import { NextRequest, NextResponse } from "next/server";

const getTime = async () => {
  const time = await fetch("https://worldtimeapi.org/api/ip");
  return time.json();
};

export async function GET(request: NextRequest) {
  const data = await getTime();

  if (!data) {
    return NextResponse.json([]);
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=10",
      // "CDN-Cache-Control": "public, s-maxage=3600",
      // "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
    },
  });
}
