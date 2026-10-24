import { NextResponse, type NextRequest } from "next/server";

// The previous site used capitalised routes. next.config redirects match
// case-insensitively (and would loop), so these are handled here instead.
const legacy: Record<string, string> = {
  "/Services": "/services",
  "/Faq": "/faq",
};

export function proxy(request: NextRequest) {
  const destination = legacy[request.nextUrl.pathname];
  if (!destination) return NextResponse.next();
  return NextResponse.redirect(new URL(destination, request.url), 308);
}

export const config = {
  matcher: ["/Services", "/Faq"],
};
