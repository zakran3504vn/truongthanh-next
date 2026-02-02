"use client";

import { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface FaqAccordionTwoProps {
  items: AccordionItem[];
  defaultActive?: number;
}

export default function FaqAccordionTwo({
  items,
  defaultActive = 1,
}: FaqAccordionTwoProps) {
  const [activeId, setActiveId] = useState<number>(defaultActive);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? 0 : id));
  };

  return (
    <ul className="accordion-box-two style-two">
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
                <span className="icon icon-plus fa fa-plus"></span>
                <span className="icon icon-minus fa fa-minus"></span>
              </div>
              {item.title}
            </div>
            <div
              className={`acc-content ${isActive ? "current" : ""}`}
              style={{
                maxHeight: isActive ? "500px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              <div className="content">
                <div className="text">{item.content}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}


