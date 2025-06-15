import { protectedRoutes, publicRoutes } from "@/constants/routes";
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  const loginUrl = new URL("/login", request.url);
  const dashboardUrl = new URL("/dashboard", request.url);

  // 🔒 Redirect rules
  if (!user && isProtected) {
    return NextResponse.redirect(loginUrl);
  }

  if (user && isPublic) {
    return NextResponse.redirect(dashboardUrl);
  }

  if (user && pathname === "/") {
    return NextResponse.redirect(dashboardUrl);
  }

  return response;
}
