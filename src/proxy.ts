import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// Next.js 16+ usa "proxy" en lugar de "middleware"
export function proxy(request: Parameters<typeof intlMiddleware>[0]) {
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. .png, .svg, etc.)
  // - _next internal paths
  // - api routes
  matcher: ["/", "/((?!api|_next|.*\\..*).*)"],
};
