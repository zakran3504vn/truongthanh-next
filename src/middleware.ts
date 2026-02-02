import { NextRequest, NextResponse } from "next/server";

const locales = ["vi", "en"] as const;
type Locale = (typeof locales)[number];

const defaultLocale: Locale = "vi";

// Map slug theo locale (mở rộng thêm trang khác sau)
const ROUTE_MAP = {
  about: { vi: "/gioi-thieu", en: "/about-us" },
} as const;

function detectLocale(req: NextRequest): Locale {
  const accept = (req.headers.get("accept-language") || "").toLowerCase();
  if (accept.startsWith("en") || accept.includes(" en")) return "en";
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Bỏ qua các file .map (source maps) - không cần thiết, trả về 204 để tránh 404 spam
  if (pathname.endsWith(".map")) {
    return new NextResponse(null, { status: 204 });
  }

  // Bỏ qua color-switcher (tính năng demo đã tắt)
  if (pathname.includes("color-switcher")) {
    return new NextResponse(null, { status: 204 });
  }

  // bỏ qua tài nguyên tĩnh, next internal, api
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // "/" -> redirect theo ngôn ngữ trình duyệt
  if (pathname === "/") {
    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // nếu chưa có prefix locale -> tự thêm
  const hasLocalePrefix = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (!hasLocalePrefix) {
    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // normalize slug theo locale
  const [, localeSeg, ...rest] = pathname.split("/");
  const locale = (localeSeg as Locale) || defaultLocale;
  const restPath = `/${rest.join("/")}`;

  // /en/gioi-thieu -> /en/about-us
  if (locale === "en" && restPath === ROUTE_MAP.about.vi) {
    const url = req.nextUrl.clone();
    url.pathname = `/en${ROUTE_MAP.about.en}`;
    return NextResponse.redirect(url);
  }

  // /vi/about-us -> /vi/gioi-thieu
  if (locale === "vi" && restPath === ROUTE_MAP.about.en) {
    const url = req.nextUrl.clone();
    url.pathname = `/vi${ROUTE_MAP.about.vi}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

