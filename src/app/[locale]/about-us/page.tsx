import Link from "next/link";
import FaqAccordionTwo from "@/components/faq-accordion-two";

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "vi";

  // Translations for CTA Five section
  const ctaFiveTranslations = {
    vi: {
      heading: "Đăng ký ngay để nhận thêm thông tin về chúng tôi",
      emailPlaceholder: "Nhập email của bạn",
      buttonText: "Đăng ký ngay",
    },
    en: {
      heading: "Subscribe Now For More Information About Us",
      emailPlaceholder: "Enter Your Email",
      buttonText: "Subscribe Now",
    },
  };

  const ctaFiveText = ctaFiveTranslations[safeLocale];

  const faqFourItems = [
    {
      id: 1,
      title: "What are some common IT services?",
      content:
        "Common IT services include network security, software development, data analysis",
    },
    {
      id: 2,
      title: "The technology works for?",
      content:
        "Common IT services include network security, software development, data analysis",
    },
    {
      id: 3,
      title: "Take the World at new Level?",
      content:
        "Common IT services include network security, software development, data analysis",
    },
  ];

  return (
    <>
      {/* Start main-content */}
      <section
        className="page-title"
        style={{
          backgroundImage: "url(/images/background/page-title-bg.png)",
        }}
      >
        <div className="auto-container">
          <div className="title-outer d-sm-flex align-items-center justify-content-sm-between">
            <h1 className="title">About Us</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href={safeLocale === "vi" ? "/vi" : "/en"}>Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </section>
      {/* end main-content */}

      {/* About Five */}
      <section className="about-five">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="about-five_image-column col-lg-6">
              <div className="about-five_image-outer">
                <div
                  className="about-five_pattern"
                  style={{
                    backgroundImage: "url(/images/icons/about-five_arrow.png)",
                  }}
                ></div>
                <div
                  className="about-five_dotted"
                  style={{
                    backgroundImage:
                      "url(/images/background/about-five_dotted.png)",
                  }}
                ></div>
                <div className="about-five_image">
                  <img src="/images/resource/about-5.jpg" alt="" />
                </div>
                <div className="about-five_image-two">
                  <img src="/images/resource/about-6.jpg" alt="" />
                </div>
                {/* Counter Column */}
                <div className="about-five_counter">
                  <div className="about-five_counter-count">
                    <span className="odometer" data-count="5000"></span>+
                  </div>
                  <div className="about-five_counter-text text-white">
                    Satisfied Clients
                  </div>
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="about-five_content-column col-lg-6">
              <div className="about-five_content-outer">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="sec-title_title tx-split-text split-in-right">
                    about us
                  </div>
                  <h2 className="sec-title_heading tx-split-text split-in-right">
                    Where Creativity Meets Technology
                  </h2>
                  <div className="sec-title_text">
                    Lorem ipsum dolor sit amet consectetur. Gravida vulputate vel
                    nec nisi sit nunc. Hendrerit sagittis donec eleifend ipsum
                    quam. A ghjkj lectus sit enim cursus euismod urna.
                  </div>
                </div>
                <ul className="about-five_list">
                  <li>Software development</li>
                  <li>Web development and design</li>
                  <li>Mobile app development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Five */}

      {/* CTA Six */}
      <section
        className="cta-six"
        style={{
          backgroundImage: "url(/images/background/cta-six_pattern.png)",
        }}
      >
        <div className="auto-container">
          <h2 className="cta-six_title">
            Achieve your goals with a competitive edge?
          </h2>
          <div className="cta-six_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="cta-six-buttons">
            <a href="page-contact.html" className="theme-btn btn-style-three">
              <span className="btn-wrap">
                <span className="text-one">Sign Up Today</span>
                <span className="text-two">Sign Up Today</span>
              </span>
            </a>
            <a href="page-services.html" className="theme-btn btn-style-two">
              <span className="btn-wrap">
                <span className="text-one">View Services</span>
                <span className="text-two">View Services</span>
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* End CTA Six */}

      {/* Process Four */}
      <section className="process-four pt-120">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="sec-title_title tx-split-text split-in-left">
              Our Work Process
            </div>
            <h2 className="sec-title_heading tx-split-text split-in-right">
              Innovating the Future
            </h2>
            <div className="sec-title_text tx-split-text split-in-up">
              Lorem ipsum dolor sit amet consectetur. Dui enim tellus <br />
              dignissim in a amet.
            </div>
          </div>
          <div className="row clearfix">
            {/* Process Block Four */}
            <div className="process-block_four col-lg-3 col-sm-6">
              <div
                className="process-block_four-inner wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="process-block_four-icon_outer">
                  <span className="process-block_four-icon_number">01</span>
                  <span className="process-block_four-icon">
                    <img src="/images/icons/process-4.svg" alt="" />
                  </span>
                </div>
                <h4 className="process-block_four-heading">
                  Planning &amp; Analysis
                </h4>
              </div>
            </div>
            {/* Process Block Four */}
            <div className="process-block_four col-lg-3 col-sm-6">
              <div
                className="process-block_four-inner wow flipInY"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="process-block_four-icon_outer">
                  <span className="process-block_four-icon_number">02</span>
                  <span className="process-block_four-icon">
                    <img src="/images/icons/process-5.svg" alt="" />
                  </span>
                </div>
                <h4 className="process-block_four-heading">
                  Planning &amp; Analysis
                </h4>
              </div>
            </div>
            {/* Process Block Four */}
            <div className="process-block_four col-lg-3 col-sm-6">
              <div
                className="process-block_four-inner wow flipInY"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="process-block_four-icon_outer">
                  <span className="process-block_four-icon_number">03</span>
                  <span className="process-block_four-icon">
                    <img src="/images/icons/process-6.svg" alt="" />
                  </span>
                </div>
                <h4 className="process-block_four-heading">
                  Planning &amp; Analysis
                </h4>
              </div>
            </div>
            {/* Process Block Four */}
            <div className="process-block_four col-lg-3 col-sm-6">
              <div
                className="process-block_four-inner wow flipInY"
                data-wow-delay="450ms"
                data-wow-duration="1500ms"
              >
                <div className="process-block_four-icon_outer">
                  <span className="process-block_four-icon_number">04</span>
                  <span className="process-block_four-icon">
                    <img src="/images/icons/process-7.svg" alt="" />
                  </span>
                </div>
                <h4 className="process-block_four-heading">
                  Planning &amp; Analysis
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Process Four */}

      {/* Faq Four */}
      <section className="faq-four">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Accordian Column */}
            <div className="faq-four_accordian-column col-lg-6 col-md-12 col-sm-12">
              <div className="faq-four_accordian-outer">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="sec-title_title title-anim">Ask question</div>
                  <h2 className="sec-title_heading tx-split-text split-in-up">
                    Connecting People <br /> and Technology
                  </h2>
                </div>
                {/* Accordion Box Two / Style Two */}
                <FaqAccordionTwo items={faqFourItems} defaultActive={1} />
              </div>
            </div>
            {/* Images Column */}
            <div className="faq-four_images-column col-lg-6 col-md-12 col-sm-12">
              <div className="faq-four_images-outer">
                <span className="faq-four_color-circle"></span>
                <div className="faq-four_image">
                  <img src="/images/resource/faq-2.jpg" alt="" />
                </div>
                {/* Video Box */}
                <div className="faq-four_video-box">
                  <figure className="video-image">
                    <img src="/images/resource/faq-3.jpg" alt="" />
                    <a
                      href="https://www.youtube.com/watch?v=kxPCFljwJws"
                      className="lightbox-video overlay-box"
                    >
                      <span className="fa-solid fa-play">
                        <i className="ripple"></i>
                      </span>
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Faq Four */}

      {/* CTA Five */}
      <section className="cta-five">
        <div className="auto-container">
          <div className="cta-five_inner-container">
            <div
              className="cta-five_pattern"
              style={{
                backgroundImage:
                  "url(/images/background/cta-five_pattern.png)",
              }}
            ></div>
            <span className="cta-five_color-one"></span>
            <span className="cta-five_color-two"></span>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h3 className="cta-five_heading">{ctaFiveText.heading}</h3>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                {/* Subscribe Box */}
                <div className="subscribe-box_two">
                  <form
                    method="post"
                    action={`/${safeLocale}/contact`}
                  >
                    <div className="form-group">
                      <div className="icon flaticon-envelope"></div>
                      <input
                        type="email"
                        name="search-field"
                        defaultValue=""
                        placeholder={ctaFiveText.emailPlaceholder}
                        required
                      />
                      <button type="submit" className="theme-btn submit-btn">
                        {ctaFiveText.buttonText}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End CTA Five */}
    </>
  );
}

