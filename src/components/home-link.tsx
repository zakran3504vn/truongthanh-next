"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";

interface HomeLinkProps {
  href: string;
  children: ReactNode;
}

export function HomeLink({ href, children }: HomeLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Nếu đã ở đúng trang home hiện tại, chỉ scroll to top cho mượt
    if (pathname === href) {
      e.preventDefault();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    // Nếu khác route thì để Next.js xử lý bình thường (tự scroll top)
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}

