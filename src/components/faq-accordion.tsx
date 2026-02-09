"use client";

import { useState } from "react";

// Accordion React thuần:
// - Điều khiển open/close bằng state
// - Dùng CSS max-height cố định để animate
// - Ngăn script jQuery legacy bắt sự kiện (stopPropagation)

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

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? 0 : id));
  };

  return (
    <ul className="accordion-box accordion-box-react">
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation(); // chặn script legacy
                handleToggle(item.id);
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="icon-outer">
                <span className="icon fa-solid fa-angle-down"></span>
              </div>
              {item.title}
            </div>
            <div
              className={`acc-content ${isActive ? "current open" : ""}`}
            >
              <div className="content">
                <span dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
          </li>
        );
      })}

      {/* CSS riêng cho accordion React, tránh phụ thuộc height động */}
      <style jsx>{`
        /* Giữ layout câu hỏi ổn định khi mở/đóng (không đổi padding) */
        .accordion-box-react .block,
        .accordion-box-react .block.active-block {
          padding-left: 0 !important;
        }

        .accordion-box-react .acc-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-box-react .acc-content.open {
          max-height: 800px; /* đủ lớn cho nội dung FAQ, không cần đo scrollHeight */
        }
      `}</style>
    </ul>
  );
}
