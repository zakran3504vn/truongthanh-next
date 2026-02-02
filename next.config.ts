import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Tắt React Compiler để tránh Turbopack panic/HMR loop trên Windows
  // (panic log đang trỏ vào src/app/locale-html-lang.tsx khi HMR chạy).
  reactCompiler: false,
};

export default nextConfig;
