import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. .png, .svg, etc.)
  // - _next internal paths
  // - api routes
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

