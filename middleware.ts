import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import magic from "./lib/magic-client";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // if (magic) {
  //   const isLoggedIn = await magic.user.isLoggedIn();
  //   console.log("Magic isLoggedIn..", isLoggedIn);
  //   if (!isLoggedIn) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  // }
  // console.log("MIDDLEWARE");
  // return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/video/:videoId*",
};
