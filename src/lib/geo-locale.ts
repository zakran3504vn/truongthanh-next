/**
 * Utility để detect locale dựa trên địa lý (IP Geolocation)
 * Kết hợp với Cookie và Accept-Language để có trải nghiệm tốt nhất
 * 
 * Thứ tự ưu tiên:
 * 1. Cookie (Người dùng đã chọn) - ƯU TIÊN CAO NHẤT
 * 2. IP Geolocation (Vị trí địa lý) - ƯU TIÊN TRUNG BÌNH
 * 3. Accept-Language (Ngôn ngữ trình duyệt) - FALLBACK
 */

type Locale = "vi" | "en";

/**
 * Lấy IP address từ request
 * Xử lý các trường hợp: Vercel, Cloudflare, hoặc direct connection
 */
function getClientIP(req: Request): string | null {
  // Vercel
  const vercelIP = req.headers.get("x-vercel-forwarded-for");
  if (vercelIP) {
    return vercelIP.split(",")[0].trim();
  }

  // Cloudflare
  const cfIP = req.headers.get("cf-connecting-ip");
  if (cfIP) {
    return cfIP;
  }

  // Standard headers
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  return null;
}

/**
 * Detect country code từ IP address
 * Sử dụng API miễn phí: ipapi.co (1000 requests/ngày free)
 * Hoặc có thể dùng: ip-api.com, ipgeolocation.io
 */
async function getCountryFromIP(ip: string): Promise<string | null> {
  try {
    // Lấy IP thực từ headers (nếu có proxy/CDN)
    const response = await fetch(`https://ipapi.co/${ip}/country/`, {
      headers: {
        "User-Agent": "TruongThanh-Website",
      },
      // Timeout sau 2 giây để tránh chậm
      signal: AbortSignal.timeout(2000),
    });

    if (!response.ok) {
      return null;
    }

    const countryCode = (await response.text()).trim();
    return countryCode || null;
  } catch (error) {
    // Nếu API lỗi, không throw để fallback về phương pháp khác
    console.error("Error fetching country from IP:", error);
    return null;
  }
}

/**
 * Detect locale dựa trên IP Geolocation
 * Việt Nam (VN) → "vi", các nước khác → "en"
 */
export async function detectLocaleFromGeo(req: Request): Promise<Locale | null> {
  const ip = getClientIP(req);

  // Nếu không lấy được IP, return null để fallback
  if (!ip) {
    return null;
  }

  // Localhost hoặc private IP → return null để fallback
  if (
    ip === "::1" ||
    ip === "127.0.0.1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip.startsWith("172.")
  ) {
    return null; // Fallback về Accept-Language
  }

  try {
    const countryCode = await getCountryFromIP(ip);

    // Nếu là Việt Nam → tiếng Việt
    if (countryCode === "VN") {
      return "vi";
    }

    // Các nước khác → tiếng Anh
    if (countryCode) {
      return "en";
    }

    return null;
  } catch (error) {
    // Nếu có lỗi, return null để fallback
    console.error("Error in geo-locale detection:", error);
    return null;
  }
}

/**
 * Detect locale từ Cookie (nếu người dùng đã chọn trước đó)
 */
export function detectLocaleFromCookie(req: Request): Locale | null {
  const cookieHeader = req.headers.get("cookie");
  if (!cookieHeader) return null;

  // Tìm cookie "NEXT_LOCALE"
  const match = cookieHeader.match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/);
  if (match && (match[1] === "vi" || match[1] === "en")) {
    return match[1] as Locale;
  }

  return null;
}

/**
 * Detect locale từ Accept-Language header
 */
export function detectLocaleFromAcceptLanguage(req: Request): Locale {
  const accept = (req.headers.get("accept-language") || "").toLowerCase();
  if (accept.startsWith("en") || accept.toLowerCase().includes(" en")) {
    return "en";
  }
  return "vi";
}

/**
 * Detect locale với thứ tự ưu tiên:
 * 1. Cookie (người dùng đã chọn) - ƯU TIÊN CAO NHẤT
 * 2. IP Geolocation (dựa trên vị trí)
 * 3. Accept-Language (ngôn ngữ trình duyệt)
 */
export async function detectLocaleHybrid(req: Request): Promise<Locale> {
  // 1. Kiểm tra Cookie trước (người dùng đã chọn)
  const cookieLocale = detectLocaleFromCookie(req);
  if (cookieLocale) {
    return cookieLocale;
  }

  // 2. Thử IP Geolocation
  try {
    const geoLocale = await detectLocaleFromGeo(req);
    if (geoLocale) {
      return geoLocale;
    }
  } catch (error) {
    // Nếu lỗi, tiếp tục fallback
    console.error("Error in geo detection:", error);
  }

  // 3. Fallback về Accept-Language
  return detectLocaleFromAcceptLanguage(req);
}
