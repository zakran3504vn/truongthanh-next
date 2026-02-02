"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function getLocaleFromPath(pathname: string | null): "vi" | "en" | null {
  if (!pathname) return null;
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "vi" || seg === "en") return seg;
  return null;
}

export function LocaleHtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPath(pathname);
    if (locale) document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}

