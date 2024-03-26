import { NextRequest, NextResponse } from "next/server";

export const preferredRegion = ["fra1"];
// export const revalidate = 3600;
// export const dynamic = "force-static";

type RouteProps = {
  params: {
    countryCode: string;
  };
};

export const generateStaticParams = async () => {
  const countries = ["us", "pl", "au", "nl"];
  return countries.map((countryCode) => [{ params: { countryCode } }]);
};

export async function GET(request: NextRequest, { params }: RouteProps) {
  const { countryCode } = params;
  if (!countryCode) {
    console.error("Missing required countryCode segment.");
    return NextResponse.json([]);
  }
  // fetch users from placeholder api
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!data.ok) {
    return NextResponse.json([]);
  }

  return NextResponse.json(await data.json());
}
