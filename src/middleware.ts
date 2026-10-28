import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    const res = await fetch(
      (process.env.NEXT_PUBLIC_API_BASE_URL || "") + "/api/me",
      { headers: { cookie: req.headers.get("cookie") || "" } }
    );
    if (!res.ok) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };
