"use client";

import { useState, useRef, useEffect } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface FaqAccordionProps {
  items: AccordionItem[];
  defaultActive?: number;
}

export default function FaqAccordion({
  items,
  defaultActive = 1,
}: FaqAccordionProps) {
  const [activeId, setActiveId] = useState<number>(defaultActive);
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleToggle = (id: number) => {
    if (activeId === id) {
      // Nếu đang mở thì đóng lại
      setActiveId(0);
    } else {
      // Mở accordion mới
      setActiveId(id);
    }
  };

  useEffect(() => {
    // Cập nhật maxHeight khi activeId thay đổi
    items.forEach((item) => {
      const contentEl = contentRefs.current[item.id];
      if (contentEl) {
        if (activeId === item.id) {
          contentEl.style.maxHeight = contentEl.scrollHeight + "px";
        } else {
          contentEl.style.maxHeight = "0px";
        }
      }
    });
  }, [activeId, items]);

  useEffect(() => {
    // Khởi tạo accordion mặc định
    if (activeId > 0) {
      const contentEl = contentRefs.current[activeId];
      if (contentEl) {
        contentEl.style.maxHeight = contentEl.scrollHeight + "px";
      }
    }
  }, []);

  return (
    <ul className="accordion-box">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <li
            key={item.id}
            className={`accordion block ${isActive ? "active-block" : ""}`}
          >
            <span className="title">
              {String(item.id).padStart(2, "0")}
            </span>
            <div
              className={`acc-btn ${isActive ? "active" : ""}`}
              onClick={() => handleToggle(item.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="icon-outer">
                <span className="icon fa-solid fa-angle-down"></span>
              </div>
              {item.title}
            </div>
            <div
              ref={(el) => (contentRefs.current[item.id] = el)}
              className={`acc-content ${isActive ? "current" : ""}`}
              style={{
                maxHeight: "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              <div className="content">
                <span dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
