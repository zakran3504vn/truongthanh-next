import { NextRequest, NextResponse } from "next/server";

/**
 * API route để set cookie khi người dùng chọn ngôn ngữ
 * POST /api/set-locale?locale=vi|en
 */
export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get("locale");

  if (locale !== "vi" && locale !== "en") {
    return NextResponse.json(
      { error: "Invalid locale. Must be 'vi' or 'en'" },
      { status: 400 }
    );
  }

  // Tạo response với cookie
  const response = NextResponse.json({ success: true, locale });

  // Set cookie với thời gian hết hạn 1 năm
  response.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 năm
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
