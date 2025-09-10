// import { getUserById } from "@/libs/user";
// import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function updateSession(request: NextRequest) {
	const response = NextResponse.next({ request });

	// const supabase = createServerClient(
	// 	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	// 	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	// 	{
	// 		cookies: {
	// 			getAll: () => request.cookies.getAll(),
	// 			setAll: (cookiesToSet) => {
	// 				cookiesToSet.forEach(({ name, value, options }) => {
	// 					request.cookies.set(name, value);
	// 					response.cookies.set(name, value, options);
	// 				});
	// 			},
	// 		},
	// 	}
	// );

	// Ambil role dari cookies
	// const {
	//   data: { session },
	// } = await supabase.auth.getSession();
	// const userId = session?.user.id;
	// const user = await getUserById(userId);
	// console.log(user);
	// const url = request.nextUrl.pathname;

	// Role-based route protection untuk /admin
	// if (url.startsWith("/admin")) {
	//   if (role !== "admin") {
	//     return NextResponse.redirect(new URL("/", request.url));
	//   }
	// }

	// Jika role admin, blokir akses ke public route
	// const publicRoutes = [
	//   "/",
	//   "/main",
	//   "/auth",
	//   "/login",
	//   "/register",
	//   "/forgot-password",
	// ];
	// if (role === "admin") {
	//   if (
	//     publicRoutes.some((route) => url === route || url.startsWith(route + "/"))
	//   ) {
	//     return NextResponse.redirect(new URL("/admin/dashboard", request.url));
	//   }
	// }

	// Anda bisa tambahkan proteksi role lain di sini

	return response;
}
