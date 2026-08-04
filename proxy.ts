import {
  NextRequest,
  NextResponse,
} from "next/server";

const INTERNAL_PAGE_ROUTES = [
  "/admin",
  "/sanity-test",
];

const INTERNAL_API_ROUTES = [
  "/api/blog-import",
  "/api/blog-content-import",
  "/api/blog-thumbnail-import",
  "/api/project-import",
];

function startsWithRoute(
  pathname: string,
  routes: string[],
): boolean {
  return routes.some(
    (route) =>
      pathname === route ||
      pathname.startsWith(`${route}/`),
  );
}

function createNotFoundResponse() {
  return new NextResponse(
    "Not Found",
    {
      status: 404,

      headers: {
        "Content-Type":
          "text/plain; charset=utf-8",

        "Cache-Control":
          "no-store, max-age=0",

        "X-Robots-Tag":
          "noindex, nofollow, noarchive",
      },
    },
  );
}

export function proxy(
  request: NextRequest,
) {
  const { pathname } =
    request.nextUrl;

  const isProduction =
    process.env.NODE_ENV ===
    "production";

  const isInternalPage =
    startsWithRoute(
      pathname,
      INTERNAL_PAGE_ROUTES,
    );

  const isInternalApi =
    startsWithRoute(
      pathname,
      INTERNAL_API_ROUTES,
    );

  /*
   * Development:
   * Import tools aur test pages localhost par available rahenge.
   *
   * Production:
   * Import pages, test page aur import API routes 404 return karenge.
   */
  if (
    isProduction &&
    (isInternalPage ||
      isInternalApi)
  ) {
    return createNotFoundResponse();
  }

  /*
   * Sanity Studio public route par rahega,
   * lekin search engines isse index nahi karenge.
   *
   * Studio access Sanity authentication ke through control hota hai.
   */
  if (
    pathname === "/studio" ||
    pathname.startsWith(
      "/studio/",
    )
  ) {
    const response =
      NextResponse.next();

    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, noarchive",
    );

    response.headers.set(
      "Cache-Control",
      "no-store",
    );

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/sanity-test/:path*",

    "/api/blog-import/:path*",
    "/api/blog-content-import/:path*",
    "/api/blog-thumbnail-import/:path*",
    "/api/project-import/:path*",

    "/studio/:path*",
  ],
};