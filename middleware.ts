import { type NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/announcements/:path*",
    "/employees/:path*",
    "/documents/:path*",
    "/leaderboard/:path*",
    "/profile/:path*",
    "/projects/:path*",
    "/admin/:path*",
    "/main/:path*",
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
