import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/auth";

  const token = request.cookies.get("next-auth.session-token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // if (!isPublicPath && !token) {
  //   return NextResponse.redirect(new URL("/auth", request.nextUrl));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth"],
};
