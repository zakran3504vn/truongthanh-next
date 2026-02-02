"use client";

import { useEffect } from "react";

function setIcon(btn: Element, expanded: boolean) {
  const icon = btn.querySelector<HTMLElement>(".icon");
  if (!icon) return;
  // Giữ đúng convention FontAwesome đang dùng trong template
  icon.classList.remove("fa-plus", "fa-minus");
  icon.classList.add(expanded ? "fa-minus" : "fa-plus");
}

function stopOngoingTransition(el: HTMLElement) {
  // Hủy transition đang chạy (nếu có) để tránh kẹt height/max-height
  el.style.transition = "none";
  // Force reflow để áp dụng transition=none ngay lập tức
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  el.offsetHeight;
  el.style.transition = "";
}

function clearInlineSlideStyles(el: HTMLElement) {
  el.style.removeProperty("height");
  el.style.removeProperty("max-height");
  el.style.removeProperty("overflow");
  el.style.removeProperty("display");
  el.style.removeProperty("transition");
}

function slideDown(el: HTMLElement, durationMs = 300) {
  stopOngoingTransition(el);

  // Reset để đo đúng scrollHeight
  clearInlineSlideStyles(el);
  el.style.display = "block";
  el.style.overflow = "hidden";

  // bắt đầu từ 0 -> maxHeight = scrollHeight
  el.style.maxHeight = "0px";
  // Force reflow
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  el.offsetHeight;

  const target = el.scrollHeight;
  el.style.transition = `max-height ${durationMs}ms ease`;
  el.style.maxHeight = `${target}px`;

  const onEnd = (e: TransitionEvent) => {
    if (e.propertyName !== "max-height") return;
    el.removeEventListener("transitionend", onEnd);
    // Mở hoàn toàn: bỏ max-height để nội dung tự co giãn
    el.style.transition = "";
    el.style.maxHeight = "none";
    el.style.overflow = "";
    el.style.display = "block";
  };
  el.addEventListener("transitionend", onEnd);
}

function slideUp(el: HTMLElement, durationMs = 300) {
  stopOngoingTransition(el);

  // Nếu đang display none thì thôi
  const computed = window.getComputedStyle(el);
  if (computed.display === "none") {
    clearInlineSlideStyles(el);
    el.style.display = "none";
    return;
  }

  el.style.overflow = "hidden";
  // Nếu maxHeight=none thì set về scrollHeight để animate được
  el.style.maxHeight =
    computed.maxHeight === "none" ? `${el.scrollHeight}px` : computed.maxHeight;
  // Force reflow
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  el.offsetHeight;

  el.style.transition = `max-height ${durationMs}ms ease`;
  el.style.maxHeight = "0px";

  const onEnd = (e: TransitionEvent) => {
    if (e.propertyName !== "max-height") return;
    el.removeEventListener("transitionend", onEnd);
    clearInlineSlideStyles(el);
    el.style.display = "none";
  };
  el.addEventListener("transitionend", onEnd);
}

function collapseItem(item: HTMLElement) {
  item.classList.remove("active-block");

  const btn = item.querySelector<HTMLElement>(".acc-btn");
  if (btn) {
    btn.classList.remove("active");
    setIcon(btn, false);
  }

  const content = item.querySelector<HTMLElement>(".acc-content");
  if (content) {
    content.classList.remove("current");
    slideUp(content, 300);
  }
}

function expandItem(item: HTMLElement) {
  item.classList.add("active-block");

  const btn = item.querySelector<HTMLElement>(".acc-btn");
  if (btn) {
    btn.classList.add("active");
    setIcon(btn, true);
  }

  const content = item.querySelector<HTMLElement>(".acc-content");
  if (content) {
    content.classList.add("current");
    slideDown(content, 300);
  }
}

/**
 * Re-init accordion cho các trang render SPA (Next Link),
 * vì template legacy chỉ bind handler trong $(document).ready / window.load.
 */
export function LegacyAccordionInit({
  selector = ".accordion-box",
}: {
  selector?: string;
}) {
  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") return;

    const accordions = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );
    if (!accordions.length) return;

    const cleanups: Array<() => void> = [];

    for (const accordion of accordions) {
      // Tránh bind nhiều lần nếu React re-render/mount lại
      if (accordion.dataset.legacyAccordionInit === "1") continue;
      accordion.dataset.legacyAccordionInit = "1";

      const items = Array.from(
        accordion.querySelectorAll<HTMLElement>("li.accordion.block")
      );

      // Set trạng thái ban đầu theo class hiện có + clear inline style kẹt
      for (const item of items) {
        const isActive = item.classList.contains("active-block");
        const content = item.querySelector<HTMLElement>(".acc-content");
        if (content) {
          // luôn clear để tránh kẹt max-height/overflow do handler khác
          stopOngoingTransition(content);
          clearInlineSlideStyles(content);
        }
        if (isActive) {
          // init mở ngay (không animate) để tránh giật layout
          item.classList.add("active-block");
          const btn = item.querySelector<HTMLElement>(".acc-btn");
          if (btn) {
            btn.classList.add("active");
            setIcon(btn, true);
          }
          if (content) {
            content.classList.add("current");
            content.style.display = "block";
            content.style.maxHeight = "none";
          }
        } else {
          item.classList.remove("active-block");
          const btn = item.querySelector<HTMLElement>(".acc-btn");
          if (btn) {
            btn.classList.remove("active");
            setIcon(btn, false);
          }
          if (content) {
            content.classList.remove("current");
            content.style.display = "none";
          }
        }
      }

      // Nếu không có item active, mở item đầu tiên cho giống nhiều template
      if (!items.some((i) => i.classList.contains("active-block")) && items[0]) {
        // init mở ngay (không animate)
        const first = items[0];
        first.classList.add("active-block");
        const btn = first.querySelector<HTMLElement>(".acc-btn");
        if (btn) {
          btn.classList.add("active");
          setIcon(btn, true);
        }
        const content = first.querySelector<HTMLElement>(".acc-content");
        if (content) {
          content.classList.add("current");
          content.style.display = "block";
          content.style.maxHeight = "none";
        }
      }

      // Bind 1 listener delegated (capture) để không bị double-handler với jQuery
      const onClick = (e: Event) => {
        const target = e.target as Element | null;
        const btnEl = target?.closest?.(".acc-btn") as HTMLElement | null;
        if (!btnEl || !accordion.contains(btnEl)) return;

        e.preventDefault();
        // chặn jQuery/template handler (nếu có) để tránh xung đột inline styles
        e.stopPropagation();
        if ("stopImmediatePropagation" in e) {
          (e as unknown as { stopImmediatePropagation: () => void })
            .stopImmediatePropagation();
        }

        const item = btnEl.closest("li.accordion.block") as HTMLElement | null;
        if (!item) return;

        const isActive = item.classList.contains("active-block");

        // Toggle đúng nghĩa: click item đang mở => đóng; click item khác => mở item đó và đóng các item khác
        if (isActive) {
          collapseItem(item);
          return;
        }

        for (const other of items) {
          if (other === item) continue;
          collapseItem(other);
        }
        expandItem(item);
      };

      accordion.addEventListener("click", onClick, true);
      cleanups.push(() => accordion.removeEventListener("click", onClick, true));
    }

    return () => {
      for (const fn of cleanups) fn();
    };
  }, [selector]);

  return null;
}

