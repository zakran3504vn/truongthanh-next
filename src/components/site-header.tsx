import Link from "next/link";

type Locale = "vi" | "en";

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

  return (
    <header className="main-header header-style-one">
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="logo-box">
                <div className="logo">
                  <Link href={l.home}>
                    <img src="/images/logo.svg" alt="" title="" />
                  </Link>
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
                        <Link href={l.home}>Home</Link>
                      </li>
                      <li>
                        <Link href={l.about}>About Us</Link>
                      </li>
                      <li>
                        <Link href={l.services}>Services</Link>
                      </li>
                      <li>
                        <Link href={l.pricing}>Pricing</Link>
                      </li>
                      <li>
                        <Link href={l.news}>News</Link>
                      </li>
                      <li>
                        <Link href={l.contact}>Contact</Link>
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
            <Link href={l.home}>
              <img src="/images/logo.svg" alt="" title="" />
            </Link>
          </div>
          <div className="menu-outer">{/* populated by legacy script */}</div>
        </nav>
      </div>
    </header>
  );
}

