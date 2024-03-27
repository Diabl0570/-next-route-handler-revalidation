import { NextRequest, NextResponse } from "next/server";
import { getTime } from "@/app/services/getTime";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const time = Date.now();
  revalidateTag("time-tag");
  // await getTime();
  return NextResponse.json({status: true, started:time , ended: Date.now()});
}
