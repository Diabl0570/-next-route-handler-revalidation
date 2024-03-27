import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { getTime } from "@/app/services/getTime";

const getTimeCached = unstable_cache(getTime, ["time-tag-cached"], {
  revalidate: 5,
});
export const preferredRegion = ["fra1"];
export const runtime = "edge";

export async function GET(request: NextRequest) {
  const data = await getTimeCached();

  if (!data) {
    return NextResponse.json([]);
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=60",
      // "CDN-Cache-Control": "public, s-maxage=3600",
      // "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
    },
  });
}
