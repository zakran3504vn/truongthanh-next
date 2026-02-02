import FaqAccordion from "@/components/faq-accordion";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "vi";

  const faqItems = [
    {
      id: 1,
      title: "Why is SEO important for businesses?",
      content:
        "The generated is therefore always free from <br /> repetition is injected humour or words etc.",
    },
    {
      id: 2,
      title: "How long does results from SEO ?",
      content:
        "The generated is therefore always free from <br /> repetition is injected humour or words etc.",
    },
    {
      id: 3,
      title: "Can you guarante search engine rankings ?",
      content:
        "The generated is therefore always free from <br /> repetition is injected humour or words etc.",
    },
  ];

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
                About <span>TechCode</span>
              </h3>
              <div className="text">
                Ut enim ad minim. facilisis suspendisseipsum dolor sit amet
                dolore consectetur adipisicing elit sed do eiusmod tempor
                incididunt ut labore et magna aliqua enim ad minim veniam,
                quis nostrud.
              </div>
              <ul className="about-one_list">
                <li>Keyword Research</li>
                <li>On-page Optimization</li>
                <li>Link Building</li>
                <li>Page Optimization</li>
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
                        Bringing Your <span>Business</span> to the Top
                      </h1>
                      <div className="slider-one_text">
                        lorem ipsum dolor sit amet consectetur. Facilisi cursus
                        vulputate vestibulum etiam rhoncus
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
                              <span className="text-one">Explore More</span>
                              <span className="text-two">Explore More</span>
                            </span>
                          </a>
                          <a
                            className="slider-one_play lightbox-video"
                            href="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                          >
                            <i className="fa-solid fa-play"></i>
                            <span>Play With Video</span>
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
                        Bringing Your <span>Business</span> to the Top
                      </h1>
                      <div className="slider-one_text">
                        lorem ipsum dolor sit amet consectetur. Facilisi cursus
                        vulputate vestibulum etiam rhoncus
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
                              <span className="text-one">Explore More</span>
                              <span className="text-two">Explore More</span>
                            </span>
                          </a>
                          <a
                            className="slider-one_play lightbox-video"
                            href="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                          >
                            <i className="fa-solid fa-play"></i>
                            <span>Play With Video</span>
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
                        Bringing Your <span>Business</span> to the Top
                      </h1>
                      <div className="slider-one_text">
                        lorem ipsum dolor sit amet consectetur. Facilisi cursus
                        vulputate vestibulum etiam rhoncus
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
                              <span className="text-one">Explore More</span>
                              <span className="text-two">Explore More</span>
                            </span>
                          </a>
                          <a
                            className="slider-one_play lightbox-video"
                            href="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                          >
                            <i className="fa-solid fa-play"></i>
                            <span>Play With Video</span>
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
              Drive more traffic with <span>effective</span> <br /> SEO strategies
            </h2>
          </div>
          <div className="row clearfix">
            {/* Service Block One */}
            <div className="services-block_one col-lg-4 col-sm-6">
              <div
                className="services-block_one-inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-block_one-icon">
                  <img src="/images/icons/service-1.svg" alt="" />
                </div>
                <h4 className="services-block_one-heading">
                  <a href="page-service-details.html">Keyword Research</a>
                </h4>
                <div className="services-block_one-text">
                  Loremi Ipsum is simply dummy isn text inmi of Ihe printing
                  apesetting mdesigner industrn norem
                </div>
              </div>
            </div>

            {/* Service Block One */}
            <div className="services-block_one col-lg-4 col-sm-6">
              <div
                className="services-block_one-inner wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-block_one-icon">
                  <img src="/images/icons/service-2.svg" alt="" />
                </div>
                <h4 className="services-block_one-heading">
                  <a href="page-service-details.html">On-page Optimization</a>
                </h4>
                <div className="services-block_one-text">
                  Loremi Ipsum is simply dummy isn text inmi of Ihe printing
                  apesetting mdesigner industrn norem
                </div>
              </div>
            </div>

            {/* Service Block One */}
            <div className="services-block_one col-lg-4 col-sm-6">
              <div
                className="services-block_one-inner wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-block_one-icon">
                  <img src="/images/icons/service-3.svg" alt="" />
                </div>
                <h4 className="services-block_one-heading">
                  <a href="page-service-details.html">Link Building</a>
                </h4>
                <div className="services-block_one-text">
                  Loremi Ipsum is simply dummy isn text inmi of Ihe printing
                  apesetting mdesigner industrn norem
                </div>
              </div>
            </div>
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
                    Elevating your <span>online</span> presence
                  </h2>
                  <div className="sec-title_text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industry&apos;s
                    standard{" "}
                  </div>
                </div>
                <ul className="about-one_numbering">
                  <li>
                    <span>01</span>
                    <h5>Unlocking the power of SEO</h5>
                    Ipsum has been the industry <br /> standard dummy
                  </li>
                  <li>
                    <span>02</span>
                    <h5>The key to successful search</h5>
                    Ipsum has been the industry <br /> standard dummy
                  </li>
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
              Improve your search engine <br /> <span>ranking</span> with us
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
                    Software Developer
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
                  <div className="team-block_one-designation">ui/ux Designer </div>
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
                    Software Developer
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
              Improve your search engine <br /> <span>ranking</span> with us
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
                    SEO that gets <span>results</span>
                  </h2>
                  <div className="sec-title_text">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout
                  </div>
                </div>

                {/* Accordion Box */}
                <FaqAccordion items={faqItems} defaultActive={1} />
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
              Experience the <span>power</span> <br /> effective SEO with
            </h2>
            <div className="sec-title_text">
              Loremi Ipsum is simply dummy text inmi of Ihe printing design <br />{" "}
              apesetting mdesigner industrn norem our us Many desktop <br />{" "}
              publishing packages web page editors ipsum
            </div>
          </div>
          <div className="row clearfix">
            {/* Work Block One */}
            <div className="work-block_one col-lg-3 col-sm-6">
              <div
                className="work-block_one-inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="work-block_one-icon">
                  <img src="/images/icons/work-1.svg" alt="" />
                  <span className="work-block_one-number">01</span>
                </div>
                <h5 className="work-block_one-heading">Keyword Research</h5>
                <div className="work-block_one-text">
                  Lorem Ipsum isn simply dummy texts of the printing apesi etting
                  industry Lorem Ipsum
                </div>
              </div>
            </div>

            {/* Work Block One */}
            <div className="work-block_one col-lg-3 col-sm-6">
              <div
                className="work-block_one-inner wow fadeInLeft"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="work-block_one-icon">
                  <img src="/images/icons/work-2.svg" alt="" />
                  <span className="work-block_one-number">02</span>
                </div>
                <h5 className="work-block_one-heading">Page Optimization</h5>
                <div className="work-block_one-text">
                  Lorem Ipsum isn simply dummy texts of the printing apesi etting
                  industry Lorem Ipsum
                </div>
              </div>
            </div>

            {/* Work Block One */}
            <div className="work-block_one col-lg-3 col-sm-6">
              <div
                className="work-block_one-inner wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="work-block_one-icon">
                  <img src="/images/icons/work-3.svg" alt="" />
                  <span className="work-block_one-number">03</span>
                </div>
                <h5 className="work-block_one-heading">Link Building</h5>
                <div className="work-block_one-text">
                  Lorem Ipsum isn simply dummy texts of the printing apesi etting
                  industry Lorem Ipsum
                </div>
              </div>
            </div>

            {/* Work Block One */}
            <div className="work-block_one col-lg-3 col-sm-6">
              <div
                className="work-block_one-inner wow fadeInLeft"
                data-wow-delay="450ms"
                data-wow-duration="1500ms"
              >
                <div className="work-block_one-icon">
                  <img src="/images/icons/work-4.svg" alt="" />
                  <span className="work-block_one-number">04</span>
                </div>
                <h5 className="work-block_one-heading">Technical SEO</h5>
                <div className="work-block_one-text">
                  Lorem Ipsum isn simply dummy texts of the printing apesi etting
                  industry Lorem Ipsum
                </div>
              </div>
            </div>
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
              Manage Your <span>Finance</span> & Save Time
            </h2>
            <div className="sec-title_text">
              It is a long established fact that a reader will be distracted by
              the readable content of a <br /> page when looking at its layout.
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
                  placeholder="Enter Your Email"
                  required
                />
                <button type="submit" className="theme-btn submit-btn">
                  Try for Free
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
              Improve your search <span>engine</span> <br /> ranking with us
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting imn industry Lorem Ipsum has been the
                      industry&apos;s Lorem Ipsum is simplmi dummy text of the
                      printing and typesetting industry
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting imn industry Lorem Ipsum has been the
                      industry&apos;s Lorem Ipsum is simplmi dummy text of the
                      printing and typesetting industry
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting imn industry Lorem Ipsum has been the
                      industry&apos;s Lorem Ipsum is simplmi dummy text of the
                      printing and typesetting industry
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting imn industry Lorem Ipsum has been the
                      industry&apos;s Lorem Ipsum is simplmi dummy text of the
                      printing and typesetting industry
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