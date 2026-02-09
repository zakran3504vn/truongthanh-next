import Link from "next/link";
import { LanguageSwitcher } from "./language-switcher";
import { HomeLink } from "./home-link";
import { getTranslations, type Locale } from "@/lib/translations";

function links(locale: Locale) {
  return {
    home: `/${locale}`,
    about: locale === "vi" ? "/vi/gioi-thieu" : "/en/about-us",
    services: locale === "vi" ? "/vi/dich-vu" : "/en/services",
    pricing: `/${locale}/pricing`,
    news: `/${locale}/news`,
    contact: `/${locale}/contact`,
  };
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const l = links(locale);
  const t = getTranslations(locale);

  return (
    <header className="main-header header-style-one">
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="logo-box">
                <div className="logo">
                  <HomeLink href={l.home}>
                    <img src="/images/logo.svg" alt="" title="" />
                  </HomeLink>
                </div>
              </div>

              <div className="nav-outer">
                <nav className="main-menu navbar-expand-md">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div
                    className="navbar-collapse collapse clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <HomeLink href={l.home}>{t.common.home}</HomeLink>
                      </li>
                      <li>
                        <Link href={l.about}>{t.common.about}</Link>
                      </li>
                      <li>
                        <Link href={l.services}>{t.common.services}</Link>
                      </li>
                      <li>
                        <Link href={l.pricing}>{t.common.pricing}</Link>
                      </li>
                      <li>
                        <Link href={l.news}>{t.common.news}</Link>
                      </li>
                      <li>
                        <Link href={l.contact}>{t.common.contact}</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="outer-box d-flex align-items-center flex-wrap">
                <div className="header_social-box">
                  <a href="#" className="fa-brands fa-facebook-f"></a>
                  <a href="#" className="fa fa-x"></a>
                  <a href="#" className="fa-brands fa-instagram"></a>
                  <a href="#" className="fa-brands fa-youtube"></a>
                </div>

                {/* Language Switcher */}
                <LanguageSwitcher currentLocale={locale} />

                <span className="hamburger">
                  <span className="top-bun"></span>
                  <span className="meat"></span>
                  <span className="bottom-bun"></span>
                </span>

                <div className="mobile-nav-toggler">
                  <span className="icon flaticon-menu-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <span className="icon flaticon-cancel-1"></span>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <HomeLink href={l.home}>
              <img src="/images/logo.svg" alt="" title="" />
            </HomeLink>
          </div>
          <div className="menu-outer">{/* populated by legacy script */}</div>
        </nav>
      </div>
    </header>
  );
}

