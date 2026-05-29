import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function Middleware(request: NextRequest) {
  const isLoginAsAdmin = request.cookies.get("admin-auth");

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    request.nextUrl.pathname !== "/admin/auth/login" &&
    !isLoginAsAdmin
  ) {
    return NextResponse.redirect(new URL("/admin/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
