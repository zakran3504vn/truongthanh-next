import { getTranslations, type Locale } from "@/lib/translations";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  
  // dùng đúng markup footer gốc để CSS ăn chuẩn
  return (
    <footer
      className="main-footer"
      style={{ backgroundImage: "url(/images/background/footer-pattern.png)" }}
    >
      <div className="auto-container">
        <div className="widgets-section">
          <div className="row clearfix">
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget logo-widget">
                    <div className="footer-logo">
                      <a href="#">
                        <img src="/images/footer-logo.svg" alt="" title="" />
                      </a>
                    </div>
                    <ul className="footer-info_list">
                      <li>
                        <a href="#">
                          <span className="icon fas fa-envelope"></span>
                          email@example.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+012-345-678-9101">
                          <span className="icon fas fa-phone"></span>
                          012 345 678 9101
                        </a>
                      </li>
                    </ul>
                    <div className="footer-social_list">
                      <a href="#" className="facebook fa-brands fa-facebook-f"></a>
                      <a href="#" className="twitter fa fa-x"></a>
                      <a href="#" className="instagram fa-brands fa-instagram"></a>
                      <a href="#" className="youtube fa-brands fa-youtube"></a>
                    </div>
                  </div>
                </div>

                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h4 className="main-footer_title">{t.footer.ourServices}</h4>
                    <ul className="footer-list">
                      {t.footer.services.map((service, index) => (
                        <li key={index}>
                          <a href="#">{service}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h4 className="main-footer_title">{t.footer.usefulLinks}</h4>
                    <ul className="footer-list">
                      {t.footer.links.map((link, index) => (
                        <li key={index}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget post-widget">
                    <h4 className="main-footer_title">{t.footer.recentPost}</h4>
                    {t.footer.posts.map((post, index) => (
                      <div key={index} className="post-widget_content">
                        <a href="#">{post.title}</a> <span>{post.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
            <h3>{t.footer.subscribeHeading}</h3>
            <div className="subscribe-box">
              <form method="post" action="#">
                <div className="form-group">
                  <input
                    type="email"
                    name="search-field"
                    defaultValue=""
                    placeholder={t.footer.emailPlaceholder}
                    required
                  />
                  <button type="submit" className="theme-btn submit-btn">
                    {t.footer.subscribeButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="copyright">
              {t.footer.copyright}
            </div>
            <ul className="footer-bottom-nav">
              {t.footer.footerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

