import { NextRequest, NextResponse } from "next/server";
import { getTime } from "@/app/services/getTime";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  revalidateTag("time-tag-cached");
  return NextResponse.json({status: true});
}
