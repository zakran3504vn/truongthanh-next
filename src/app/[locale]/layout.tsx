import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "vi";

  return (
    <div className="page-wrapper">
      {/* Cursor */}
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      {/* Preloader */}
      <div className="preloader"></div>

      <SiteHeader locale={safeLocale} />

      {children}

      <SiteFooter />

      <div
        className="scroll-to-top scroll-to-target"
        data-target="html"
      >
        <span className="fas fa-arrow-up"></span>
      </div>
    </div>
  );
}

