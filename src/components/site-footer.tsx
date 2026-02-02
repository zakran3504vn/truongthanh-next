export function SiteFooter() {
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
                    <h4 className="main-footer_title">Our Services</h4>
                    <ul className="footer-list">
                      <li>
                        <a href="#">Smart Thinking</a>
                      </li>
                      <li>
                        <a href="#">Business Growth Planning</a>
                      </li>
                      <li>
                        <a href="#">Perfect Business Solutions</a>
                      </li>
                      <li>
                        <a href="#">Digital Marketing</a>
                      </li>
                      <li>
                        <a href="#">UI/UX Designing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h4 className="main-footer_title">Useful Links</h4>
                    <ul className="footer-list">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Work Process</a>
                      </li>
                      <li>
                        <a href="#">Testimonial</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget post-widget">
                    <h4 className="main-footer_title">Recent Post</h4>
                    <div className="post-widget_content">
                      <a href="#">Efficiency redefined through technology</a>{" "}
                      <span>October 19, 2022</span>
                    </div>
                    <div className="post-widget_content">
                      <a href="#">Efficiency redefined through technology</a>{" "}
                      <span>October 19, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <h3>Subscribe Our Newsletter</h3>
            <div className="subscribe-box">
              <form method="post" action="#">
                <div className="form-group">
                  <input
                    type="email"
                    name="search-field"
                    defaultValue=""
                    placeholder="Your E-mail address"
                    required
                  />
                  <button type="submit" className="theme-btn submit-btn">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="copyright">
              &copy; copyrights reserved by kodesolution
            </div>
            <ul className="footer-bottom-nav">
              <li>
                <a href="#">Trams &amp; Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

