import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LocaleHtmlLang } from "./locale-html-lang";
import { RoutePreloaderFix } from "@/components/route-preloader-fix";

export const metadata: Metadata = {
  title: "TruongThanhWeb",
  description: "TruongThanhWeb migrated to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* CSS gốc (giữ nguyên class + hiệu ứng) */}
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/innerpage-style.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />

        {/* Một số CSS plugin hay dùng trong template */}
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/swiper.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/jquery-ui.css" />
        <link rel="stylesheet" href="/css/odometer-theme-default.css" />
        <link rel="stylesheet" href="/css/owl.css" />
      </head>
      <body>
        {/* Sync lang theo locale route */}
        <LocaleHtmlLang />
        {/* Fix preloader khi chuyển route kiểu SPA (Next Link) */}
        <RoutePreloaderFix />
        {children}

        {/* JS gốc: load sớm để các hiệu ứng (preloader, header, v.v.) hoạt động đúng trên mọi route */}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />

        <Script src="/js/appear.js" strategy="afterInteractive" />
        <Script src="/js/parallax.min.js" strategy="afterInteractive" />
        <Script src="/js/tilt.jquery.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.paroller.min.js" strategy="afterInteractive" />
        <Script src="/js/owl.js" strategy="afterInteractive" />
        <Script src="/js/wow.js" strategy="afterInteractive" />
        <Script src="/js/jarallax.js" strategy="afterInteractive" />
        <Script src="/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/js/odometer.js" strategy="afterInteractive" />
        <Script src="/js/wait-for-images.js" strategy="afterInteractive" />
        <Script src="/js/parallax-scroll.js" strategy="afterInteractive" />
        <Script src="/js/element-in-view.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollToPlugin.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/nav-tool.js" strategy="afterInteractive" />
        <Script src="/js/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/js/jquery.validate.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.form.min.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
