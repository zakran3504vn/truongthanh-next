import { NextRequest, NextResponse } from "next/server";
import { detectLocaleHybrid } from "@/lib/geo-locale";

const locales = ["vi", "en"] as const;
type Locale = (typeof locales)[number];

const defaultLocale: Locale = "vi";

// Map slug theo locale (mở rộng thêm trang khác sau)
const ROUTE_MAP = {
  about: { vi: "/gioi-thieu", en: "/about-us" },
} as const;

/**
 * Detect locale với thứ tự ưu tiên:
 * 1. Cookie (người dùng đã chọn) - ƯU TIÊN CAO NHẤT
 * 2. IP Geolocation (dựa trên vị trí địa lý)
 * 3. Accept-Language (ngôn ngữ trình duyệt)
 */
async function detectLocale(req: NextRequest): Promise<Locale> {
  try {
    return await detectLocaleHybrid(req);
  } catch (error) {
    // Nếu có lỗi, fallback về default
    console.error("Error in locale detection:", error);
    return defaultLocale;
  }
}

export async function middleware(req: NextRequest) {
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

  // "/" -> redirect theo Cookie > IP Geolocation > Accept-Language
  if (pathname === "/") {
    const locale = await detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // nếu chưa có prefix locale -> tự thêm
  const hasLocalePrefix = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (!hasLocalePrefix) {
    const locale = await detectLocale(req);
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

