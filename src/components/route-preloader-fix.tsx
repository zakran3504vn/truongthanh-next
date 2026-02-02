"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Kiểu jQuery tối thiểu để chúng ta dùng mà không cần any */
type JQueryFn = (selector: string | Document) => {
  length?: number;
  delay?: (ms: number) => { fadeOut: (ms: number) => void };
  fadeOut?: (ms: number) => void;
  trigger?: (event: string) => void;
};

/** Kiểu Swiper tối thiểu (Swiper được load từ /js/swiper.min.js) */
type SwiperCtor = new (
  container: string | Element | Element[],
  options: Record<string, unknown>
) => unknown;

function safeHidePreloader() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // Ưu tiên dùng jQuery giống template gốc
  const w = window as unknown as { jQuery?: unknown };
  const jq = w.jQuery;

  if (jq && typeof jq === "function") {
    try {
      const $ = jq as JQueryFn;
      const preloader = $(".preloader");

      if (preloader && preloader.length && preloader.delay && preloader.fadeOut) {
        // Ẩn ngay lập tức, không cần delay
        preloader.delay(0).fadeOut(0);
        return;
      }
    } catch {
      // Nếu jQuery lỗi, fallback DOM bên dưới
    }
  }

  // Fallback thuần DOM
  const el = document.querySelector<HTMLElement>(".preloader");
  if (el) {
    el.style.opacity = "0";
    el.style.pointerEvents = "none";
    el.style.display = "none";
  }
}

function initHeroSliderIfNeeded() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const w = window as unknown as { Swiper?: SwiperCtor };
  if (!w.Swiper) return;

  const container = document.querySelector<HTMLElement>(".main-slider");
  if (!container) return;

  // Swiper thường gắn instance vào thuộc tính "swiper" của container
  if ((container as unknown as { swiper?: unknown }).swiper) {
    return;
  }

  const Swiper = w.Swiper;

  // Cấu hình lấy từ script.js (Main Slider)
  new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 500,
  });
}

export function RoutePreloaderFix() {
  // Dùng usePathname để buộc component re-render khi thay đổi route,
  // kể cả khi chúng ta không dùng trực tiếp biến này.
  usePathname();

  // Không truyền dependency để effect chạy sau MỌI lần render.
  // Lý do: khi click lại link "Home" khi đang ở /vi, Next có thể render lại
  // trang chủ nhưng pathname không đổi => nếu phụ thuộc vào pathname thì
  // effect sẽ không chạy lại, preloader mới sẽ không bị ẩn.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const timeoutId = window.setTimeout(() => {
      // Luôn ẩn preloader nếu có
      safeHidePreloader();
      // Đảm bảo hero slider được khởi tạo (nếu cần)
      initHeroSliderIfNeeded();

      // Cho script jQuery legacy (nếu có lắng nghe) biết route đã đổi/render lại
      try {
        const w = window as unknown as { jQuery?: unknown };
        const jq = w.jQuery;
        if (jq && typeof jq === "function") {
          const $ = jq as JQueryFn;
          const doc = $(document);
          if (doc && typeof doc.trigger === "function") {
            doc.trigger("legacyRouteChanged");
          }
        }
      } catch {
        // bỏ qua lỗi nếu jQuery không sẵn sàng
      }
    }, 0);

    return () => {
      if (typeof window !== "undefined") {
        window.clearTimeout(timeoutId);
      }
    };
  });

  return null;
}
