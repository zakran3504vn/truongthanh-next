import FaqAccordion from "@/components/faq-accordion";
import { getTranslations, type Locale } from "@/lib/translations";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = locale === "en" ? "en" : "vi";

  // Lấy translations từ file tập trung
  const t = getTranslations(safeLocale);
  const bannerText = t.home.banner;
  const slides = bannerText.slides;


  return (
    <>
      {/* About Sidebar */}
      <div className="about-sidebar">
        <div className="gradient-layer"></div>
        {/* Close Button */}
        <div className="close-sidebar-widget close-button">
          <span className="fa fa-solid fa-xmark"></span>
        </div>
        <div className="sidebar-inner">
          <div className="upper-box">
            <div className="image">
              <img src="/images/resource/about.jpg" alt="" />
            </div>
            <div className="content-box">
              <h3>
                {t.home.aboutSidebar.title} <span>{t.home.aboutSidebar.titleHighlight}</span>
              </h3>
              <div className="text">
                {t.home.aboutSidebar.description}
              </div>
              <ul className="about-one_list">
                {t.home.aboutSidebar.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Social Box */}
          <div className="social-box">
            <a href="#" className="facebook fa-brands fa-facebook-f"></a>
            <a href="#" className="twitter fa fa-x"></a>
            <a href="#" className="instagram fa-brands fa-instagram"></a>
            <a href="#" className="youtube fa-brands fa-youtube"></a>
          </div>
        </div>
      </div>
      {/* End About Sidebar */}

      {/* Slider One (Hero) */}
      <section className="slider-one">
        <div className="main-slider swiper-container">
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="slider-one_content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="slider-one_content-inner">
                      <h1 className="slider-one_heading">
                        {safeLocale === "vi" ? (
                          <>
                            {slides[0].heading} <span>{slides[0].headingHighlight}</span>
                          </>
                        ) : (
                          <>
                            {slides[0].heading} <span>{slides[0].headingHighlight}</span> to the Top
                          </>
                        )}
                      </h1>
                      <div className="slider-one_text">
                        {slides[0].description}
                      </div>
                      <div className="slider-one_options">
                        <div className="slider-one_button d-flex align-items-center flex-wrap">
                          <a
                            href={
                              safeLocale === "vi"
                                ? "/vi/gioi-thieu"
                                : "/en/about-us"
                            }
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">{bannerText.exploreButton}</span>
                              <span className="text-two">{bannerText.exploreButton}</span>
                            </span>
                          </a>
                          <a
                            className="slider-one_play lightbox-video"
                            href="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                          >
                            <i className="fa-solid fa-play"></i>
                            <span>{bannerText.playVideo}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Image Column */}
                  <div className="slider-one_image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="slider-one_image-inner">
                      <div className="slider-one_circle"></div>
                      <div
                        className="slider-one_pattern-layer"
                        style={{
                          backgroundImage:
                            "url(/images/main-slider/pattern-1.png)",
                        }}
                      ></div>
                      <div className="slider-one_image">
                        <div className="slider-one_border"></div>
                        <img src="/images/main-slider/image-1.jpg" alt="" />
                      </div>
                      <div className="slider-one_graph">
                        <img src="/images/main-slider/graph.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="slider-one_content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="slider-one_content-inner">
                      <h1 className="slider-one_heading">
                        {safeLocale === "vi" ? (
                          <>
                            {slides[1].heading} <span>{slides[1].headingHighlight}</span>
                          </>
                        ) : (
                          <>
                            {slides[1].heading} <span>{slides[1].headingHighlight}</span> to the Top
                          </>
                        )}
                      </h1>
                      <div className="slider-one_text">
                        {slides[1].description}
                      </div>
                      <div className="slider-one_options">
                        <div className="slider-one_button d-flex align-items-center flex-wrap">
                          <a
                            href={
                              safeLocale === "vi"
                                ? "/vi/gioi-thieu"
                                : "/en/about-us"
                            }
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">{bannerText.exploreButton}</span>
                              <span className="text-two">{bannerText.exploreButton}</span>
                            </span>
                          </a>
                          <a
                            className="slider-one_play lightbox-video"
                            href="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                          >
                            <i className="fa-solid fa-play"></i>
                            <span>{bannerText.playVideo}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-one_image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="slider-one_image-inner">
                      <div className="slider-one_circle"></div>
                      <div
                        className="slider-one_pattern-layer"
                        style={{
                          backgroundImage:
                            "url(/images/main-slider/pattern-1.png)",
                        }}
                      ></div>
                      <div className="slider-one_image">
                        <div className="slider-one_border"></div>
                        <img src="/images/main-slider/image-1.jpg" alt="" />
                      </div>
                      <div className="slider-one_graph">
                        <img src="/images/main-slider/graph.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="slider-one_content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="slider-one_content-inner">
                      <h1 className="slider-one_heading">
                        {safeLocale === "vi" ? (
                          <>
                            {slides[2].heading} <span>{slides[2].headingHighlight}</span>
                          </>
                        ) : (
                          <>
                            {slides[2].heading} <span>{slides[2].headingHighlight}</span> to the Top
                          </>
                        )}
                      </h1>
                      <div className="slider-one_text">
                        {slides[2].description}
                      </div>
                      <div className="slider-one_options">
                        <div className="slider-one_button d-flex align-items-center flex-wrap">
                          <a
                            href={
                              safeLocale === "vi"
                                ? "/vi/gioi-thieu"
                                : "/en/about-us"
                            }
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">{bannerText.exploreButton}</span>
                              <span className="text-two">{bannerText.exploreButton}</span>
                            </span>
                          </a>
                          <a
                            className="slider-one_play lightbox-video"
                            href="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                          >
                            <i className="fa-solid fa-play"></i>
                            <span>{bannerText.playVideo}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-one_image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="slider-one_image-inner">
                      <div className="slider-one_circle"></div>
                      <div
                        className="slider-one_pattern-layer"
                        style={{
                          backgroundImage:
                            "url(/images/main-slider/pattern-1.png)",
                        }}
                      ></div>
                      <div className="slider-one_image">
                        <div className="slider-one_border"></div>
                        <img src="/images/main-slider/image-1.jpg" alt="" />
                      </div>
                      <div className="slider-one_graph">
                        <img src="/images/main-slider/graph.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Slider One */}

      {/* Services One */}
      <section className="services-one">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title title-anim centered">
            <h2 className="sec-title_heading">
              {t.home.servicesSection.heading} <span>{t.home.servicesSection.headingHighlight}</span>
              {t.home.servicesSection.headingSuffix?.trim() ? (
                <>
                  <br /> {t.home.servicesSection.headingSuffix}
                </>
              ) : null}
            </h2>
          </div>
          <div className="row clearfix">
            {t.home.servicesSection.services.map((service, index) => {
              const animations = ["fadeInLeft", "fadeInUp", "fadeInRight"];
              const icons = [
                "/images/icons/service-1.svg",
                "/images/icons/service-2.svg",
                "/images/icons/service-3.svg",
              ];
              return (
                <div key={index} className="services-block_one col-lg-4 col-sm-6">
                  <div
                    className={`services-block_one-inner wow ${animations[index]}`}
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="services-block_one-icon">
                      <img src={icons[index]} alt="" />
                    </div>
                    <h4 className="services-block_one-heading">
                      <a href="page-service-details.html">{service.title}</a>
                    </h4>
                    <div className="services-block_one-text">
                      {service.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End Services One */}

      {/* About One */}
      <section className="about-one">
        <div className="auto-container">
          <div className="row clearfix">
            {/* About One Image Column */}
            <div className="about-one_image-column col-lg-6 col-md-12 col-sm-12">
              <div className="about-one_image">
                <div className="about-one_color-layer"></div>
                <div className="about-one_border-layer"></div>
                <img src="/images/resource/about.png" alt="" />
              </div>
            </div>

            {/* About One Content Column */}
            <div className="about-one_content-column col-lg-6 col-md-12 col-sm-12">
              <div className="about-one_content">
                {/* Sec Title */}
                <div className="sec-title tx-split-text split-in-right">
                  <h2 className="sec-title_heading">
                    {t.home.aboutSection.heading} <span>{t.home.aboutSection.headingHighlight}</span>
                    {t.home.aboutSection.headingSuffix?.trim() ? ` ${t.home.aboutSection.headingSuffix}` : null}
                  </h2>
                  <div className="sec-title_text">
                    {t.home.aboutSection.description}
                  </div>
                </div>
                <ul className="about-one_numbering">
                  {t.home.aboutSection.items.map((item, index) => (
                    <li key={index}>
                      <span>0{index + 1}</span>
                      <h5>{item.title}</h5>
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About One */}

      {/* Team One */}
      <section className="team-one">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h2 className="sec-title_heading tx-split-text split-in-up">
              {t.home.teamSection.heading} <br /> <span>{t.home.teamSection.headingHighlight}</span>
              {t.home.teamSection.headingSuffix?.trim() ? ` ${t.home.teamSection.headingSuffix}` : null}
            </h2>
          </div>
          <div className="row clearfix">
            {/* Team Block One */}
            <div className="team-block_one col-lg-4 col-sm-6">
              <div
                className="team-block_one-inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="team-block_one-image">
                  <img src="/images/resource/team-1.png" alt="" />
                  <div className="team-block_one-overlay">
                    {/* Social Box */}
                    <div className="team-block_one-socials">
                      <a href="#" className="facebook fa-brands fa-facebook-f"></a>
                      <a href="#" className="twitter fa fa-x"></a>
                      <a href="#" className="instagram fa-brands fa-instagram"></a>
                      <a href="#" className="youtube fa-brands fa-youtube"></a>
                    </div>
                  </div>
                </div>
                <div className="team-block_one-content">
                  <h5 className="team-block_one-heading">
                    <a href="page-team-details.html">Cameron Williamson</a>
                  </h5>
                  <div className="team-block_one-designation">
                    {t.home.teamSection.designations.softwareDeveloper}
                  </div>
                </div>
              </div>
            </div>

            {/* Team Block One */}
            <div className="team-block_one col-lg-4 col-sm-6">
              <div
                className="team-block_one-inner wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="team-block_one-image">
                  <img src="/images/resource/team-2.png" alt="" />
                  <div className="team-block_one-overlay">
                    {/* Social Box */}
                    <div className="team-block_one-socials">
                      <a href="#" className="facebook fa-brands fa-facebook-f"></a>
                      <a href="#" className="twitter fa fa-x"></a>
                      <a href="#" className="instagram fa-brands fa-instagram"></a>
                      <a href="#" className="youtube fa-brands fa-youtube"></a>
                    </div>
                  </div>
                </div>
                <div className="team-block_one-content">
                  <h5 className="team-block_one-heading">
                    <a href="page-team-details.html">Theresa Webb</a>
                  </h5>
                  <div className="team-block_one-designation">{t.home.teamSection.designations.uiUxDesigner}</div>
                </div>
              </div>
            </div>

            {/* Team Block One */}
            <div className="team-block_one col-lg-4 col-sm-6">
              <div
                className="team-block_one-inner wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="team-block_one-image">
                  <img src="/images/resource/team-3.png" alt="" />
                  <div className="team-block_one-overlay">
                    {/* Social Box */}
                    <div className="team-block_one-socials">
                      <a href="#" className="facebook fa-brands fa-facebook-f"></a>
                      <a href="#" className="twitter fa fa-x"></a>
                      <a href="#" className="instagram fa-brands fa-instagram"></a>
                      <a href="#" className="youtube fa-brands fa-youtube"></a>
                    </div>
                  </div>
                </div>
                <div className="team-block_one-content">
                  <h5 className="team-block_one-heading">
                    <a href="page-team-details.html">Jerome Bell</a>
                  </h5>
                  <div className="team-block_one-designation">
                    {t.home.teamSection.designations.softwareDeveloper}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team One */}

      {/* Faq One */}
      <section className="faq-one">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h2 className="sec-title_heading tx-split-text split-in-up">
              {t.home.teamSection.heading} <br /> <span>{t.home.teamSection.headingHighlight}</span>
              {t.home.teamSection.headingSuffix?.trim() ? ` ${t.home.teamSection.headingSuffix}` : null}
            </h2>
          </div>
          <div className="row clearfix">
            {/* Faq One Image Column */}
            <div className="faq-one_image-column col-lg-6 col-md-12 col-sm-12">
              <div className="faq-one_image">
                <img src="/images/resource/faq.jpg" alt="" />
              </div>
            </div>
            {/* Faq One Content Column */}
            <div className="faq-one_content-column col-lg-6 col-md-12 col-sm-12">
              <div className="faq-one_content">
                {/* Sec Title */}
                <div className="sec-title">
                  <h2 className="sec-title_heading">
                    {t.home.faqSection.heading} <span>{t.home.faqSection.headingHighlight}</span>
                  </h2>
                  <div className="sec-title_text">
                    {t.home.faqSection.description}
                  </div>
                </div>

                {/* Accordion Box */}
                <FaqAccordion items={t.home.faqSection.items} defaultActive={1} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Faq One */}

      {/* Work One */}
      <section className="work-one">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title d-flex justify-content-between align-items-center flex-wrap">
            <h2 className="sec-title_heading">
              {t.home.workSection.heading} <span>{t.home.workSection.headingHighlight}</span>
              {t.home.workSection.headingSuffix?.trim() ? (
                <>
                  <br /> {t.home.workSection.headingSuffix}
                </>
              ) : null}
            </h2>
            <div className="sec-title_text">
              {t.home.workSection.description}
            </div>
          </div>
          <div className="row clearfix">
            {t.home.workSection.items.map((item, index) => {
              const delays = ["0ms", "150ms", "300ms", "450ms"];
              const icons = [
                "/images/icons/work-1.svg",
                "/images/icons/work-2.svg",
                "/images/icons/work-3.svg",
                "/images/icons/work-4.svg",
              ];
              return (
                <div key={index} className="work-block_one col-lg-3 col-sm-6">
                  <div
                    className="work-block_one-inner wow fadeInLeft"
                    data-wow-delay={delays[index]}
                    data-wow-duration="1500ms"
                  >
                    <div className="work-block_one-icon">
                      <img src={icons[index]} alt="" />
                      <span className="work-block_one-number">0{index + 1}</span>
                    </div>
                    <h5 className="work-block_one-heading">{item.title}</h5>
                    <div className="work-block_one-text">
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End Work One */}

      {/* CTA One */}
      <section className="cta-one">
        <div
          className="cta-one_icon"
          style={{ backgroundImage: "url(/images/icons/cta-1.png)" }}
        ></div>
        <div
          className="cta-one_icon-two"
          style={{ backgroundImage: "url(/images/icons/cta-2.png)" }}
        ></div>
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title light centered">
            <h2 className="sec-title_heading">
              {t.home.ctaOne.heading} <span>{t.home.ctaOne.headingHighlight}</span>
              {t.home.ctaOne.headingSuffix?.trim() ? ` ${t.home.ctaOne.headingSuffix}` : null}
            </h2>
            <div className="sec-title_text">
              {t.home.ctaOne.description}
            </div>
          </div>

          {/* Subscribe Box */}
          <div className="subscribe-box">
            <form
              method="post"
              action="https://html.kodesolution.com/2023/techcode-html/page-contact.html"
            >
              <div className="form-group">
                <input
                  type="email"
                  name="search-field"
                  placeholder={t.home.ctaOne.emailPlaceholder}
                  required
                />
                <button type="submit" className="theme-btn submit-btn">
                  {t.home.ctaOne.buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* End CTA One */}

      {/* Testimonial One */}
      <section className="testimonial-one">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h2 className="sec-title_heading tx-split-text split-in-up">
              {t.home.testimonialSection.heading} <span>{t.home.testimonialSection.headingHighlight}</span>
              {t.home.testimonialSection.headingSuffix?.trim() ? (
                <>
                  <br /> {t.home.testimonialSection.headingSuffix}
                </>
              ) : null}
            </h2>
          </div>
          <div className="testimonial-carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Slide */}
              <div className="swiper-slide">
                {/* Testimonial Block One */}
                <div className="testimonial-block_one">
                  <div className="testimonial-block_one-inner">
                    <div className="testimonial-block_one-quote fas fa-quote-right"></div>
                    <div className="testimonial-block_one-info">
                      <div className="testimonial-block_one-author">
                        <img src="/images/resource/author-1.jpg" alt="" />
                      </div>
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <h5 className="mb-0">Darrell Steward</h5>
                      <span className="testimonial-block_one-designation">
                        Software Developer
                      </span>
                    </div>
                    <div className="testimonial-block_one-text">
                      {t.home.testimonialSection.testimonialText}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                {/* Testimonial Block One */}
                <div className="testimonial-block_one">
                  <div className="testimonial-block_one-inner">
                    <div className="testimonial-block_one-quote fas fa-quote-right"></div>
                    <div className="testimonial-block_one-info">
                      <div className="testimonial-block_one-author">
                        <img src="/images/resource/author-2.jpg" alt="" />
                      </div>
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <h5 className="mb-0">Darrell Steward</h5>
                      <span className="testimonial-block_one-designation">
                        Software Developer
                      </span>
                    </div>
                    <div className="testimonial-block_one-text">
                      {t.home.testimonialSection.testimonialText}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                {/* Testimonial Block One */}
                <div className="testimonial-block_one">
                  <div className="testimonial-block_one-inner">
                    <div className="testimonial-block_one-quote fas fa-quote-right"></div>
                    <div className="testimonial-block_one-info">
                      <div className="testimonial-block_one-author">
                        <img src="/images/resource/author-1.jpg" alt="" />
                      </div>
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <h5 className="mb-0">Darrell Steward</h5>
                      <span className="testimonial-block_one-designation">
                        Software Developer
                      </span>
                    </div>
                    <div className="testimonial-block_one-text">
                      {t.home.testimonialSection.testimonialText}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                {/* Testimonial Block One */}
                <div className="testimonial-block_one">
                  <div className="testimonial-block_one-inner">
                    <div className="testimonial-block_one-quote fas fa-quote-right"></div>
                    <div className="testimonial-block_one-info">
                      <div className="testimonial-block_one-author">
                        <img src="/images/resource/author-2.jpg" alt="" />
                      </div>
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <strong>Darrell Steward</strong>
                      <span className="testimonial-block_one-designation">
                        Software Developer
                      </span>
                    </div>
                    <div className="testimonial-block_one-text">
                      {t.home.testimonialSection.testimonialText}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial One */}

      {/* Clients One */}
      <section className="clients-one">
        <div className="auto-container">
          <div className="clients-carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/1.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/2.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/3.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/4.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/5.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/6.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/7.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/8.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/9.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/10.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/11.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/12.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/13.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/14.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/15.png" alt="" />
                  </a>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                <div className="client-image">
                  <a href="#">
                    <img src="/images/clients/16.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Clients One */}
    </>
  );
}