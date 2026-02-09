"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

type Locale = "vi" | "en";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

/**
 * Component để chuyển đổi ngôn ngữ
 * Khi click sẽ:
 * 1. Set cookie NEXT_LOCALE
 * 2. Redirect về trang tương ứng với ngôn ngữ mới
 */
export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Map slug theo locale
  const slugMap: Record<string, { vi: string; en: string }> = {
    "/gioi-thieu": { vi: "/vi/gioi-thieu", en: "/en/about-us" },
    "/about-us": { vi: "/vi/gioi-thieu", en: "/en/about-us" },
    "/dich-vu": { vi: "/vi/dich-vu", en: "/en/services" },
    "/services": { vi: "/vi/dich-vu", en: "/en/services" },
  };

  const switchLocale = async (newLocale: Locale) => {
    if (newLocale === currentLocale || isLoading) return;

    setIsLoading(true);

    try {
      // 1. Set cookie
      await fetch(`/api/set-locale?locale=${newLocale}`, {
        method: "POST",
      });

      // 2. Tính toán URL mới
      const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "") || "/";
      let newPath = `/${newLocale}${pathWithoutLocale}`;

      // 3. Map slug nếu cần
      for (const [slug, paths] of Object.entries(slugMap)) {
        if (pathWithoutLocale === slug || pathWithoutLocale.startsWith(slug + "/")) {
          newPath = paths[newLocale] + pathWithoutLocale.slice(slug.length);
          break;
        }
      }

      // 4. Redirect
      router.push(newPath);
      router.refresh(); // Refresh để middleware chạy lại
    } catch (error) {
      console.error("Error switching locale:", error);
      // Fallback: redirect thủ công
      const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "") || "/";
      router.push(`/${newLocale}${pathWithoutLocale}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="language-switcher d-flex align-items-center">
      <button
        onClick={() => switchLocale("vi")}
        className={`language-btn ${currentLocale === "vi" ? "active" : ""}`}
        disabled={isLoading}
        aria-label="Switch to Vietnamese"
        title="Tiếng Việt"
      >
        <div className="flag-wrapper">
          <Image
            src="/images/location/vn.jpg"
            alt="Vietnam Flag"
            width={20}
            height={15}
            className="flag-image"
            unoptimized
          />
        </div>
        <span className="language-text">VI</span>
      </button>
      <span className="separator">|</span>
      <button
        onClick={() => switchLocale("en")}
        className={`language-btn ${currentLocale === "en" ? "active" : ""}`}
        disabled={isLoading}
        aria-label="Switch to English"
        title="English"
      >
        <div className="flag-wrapper">
          <Image
            src="/images/location/en.png"
            alt="United States Flag"
            width={20}
            height={15}
            className="flag-image"
            unoptimized
          />
        </div>
        <span className="language-text">EN</span>
      </button>
      <style jsx>{`
        .language-switcher {
          margin-left: 15px;
          gap: 0;
        }
        .language-btn {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s ease;
          border-radius: 4px;
          position: relative;
        }
        .language-btn:hover:not(:disabled) {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }
        .language-btn.active {
          font-weight: 600;
          background-color: rgba(255, 255, 255, 0.15);
        }
        .language-btn.active .flag-wrapper {
          transform: scale(1.1);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .language-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .flag-wrapper {
          width: 20px;
          height: 15px;
          border-radius: 2px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .flag-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2px;
        }
        .language-text {
          font-size: 13px;
          letter-spacing: 0.5px;
        }
        .separator {
          margin: 0 4px;
          opacity: 0.3;
          font-weight: 300;
        }
        @media (max-width: 768px) {
          .language-switcher {
            margin-left: 10px;
          }
          .language-btn {
            padding: 5px 8px;
            gap: 4px;
          }
          .flag-wrapper {
            width: 18px;
            height: 13px;
          }
          .language-text {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
