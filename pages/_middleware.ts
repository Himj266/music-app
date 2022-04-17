import { NextResponse } from "next/server";

//types
import type { NextRequest } from "next/server";

const signedInPages = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (signedInPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.HIMJ_ACCESS_TOKEN;

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.rewrite(url);
    }
  }
}
