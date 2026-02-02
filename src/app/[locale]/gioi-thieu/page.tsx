import Link from "next/link";
import FaqAccordionTwo from "@/components/faq-accordion-two";

export default async function GioiThieuPage({
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

  const faqFourItemsVi = [
    {
      id: 1,
      title: "Những dịch vụ IT phổ biến là gì?",
      content:
        "Common IT services include network security, software development, data analysis",
    },
    {
      id: 2,
      title: "Công nghệ này phục vụ cho ai?",
      content:
        "Common IT services include network security, software development, data analysis",
    },
    {
      id: 3,
      title: "Đưa thế giới lên tầm cao mới?",
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
            <h1 className="title">Giới Thiệu</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href={safeLocale === "vi" ? "/vi" : "/en"}>Home</Link>
              </li>
              <li>Giới Thiệu</li>
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
                    về chúng tôi
                  </div>
                  <h2 className="sec-title_heading tx-split-text split-in-right">
                    Nơi Sáng Tạo Gặp Gỡ Công Nghệ
                  </h2>
                  <div className="sec-title_text">
                    Lorem ipsum dolor sit amet consectetur. Gravida vulputate vel
                    nec nisi sit nunc. Hendrerit sagittis donec eleifend ipsum
                    quam. A ghjkj lectus sit enim cursus euismod urna.
                  </div>
                </div>
                <ul className="about-five_list">
                  <li>Phát triển phần mềm</li>
                  <li>Phát triển và thiết kế web</li>
                  <li>Phát triển ứng dụng di động</li>
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
            Đạt được mục tiêu với lợi thế cạnh tranh?
          </h2>
          <div className="cta-six_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="cta-six-buttons">
            <a href="page-contact.html" className="theme-btn btn-style-three">
              <span className="btn-wrap">
                <span className="text-one">Đăng ký ngay hôm nay</span>
                <span className="text-two">Đăng ký ngay hôm nay</span>
              </span>
            </a>
            <a href="page-services.html" className="theme-btn btn-style-two">
              <span className="btn-wrap">
                <span className="text-one">Xem dịch vụ</span>
                <span className="text-two">Xem dịch vụ</span>
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
              Quy trình làm việc
            </div>
            <h2 className="sec-title_heading tx-split-text split-in-right">
              Đổi mới tương lai
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
                  Lên kế hoạch &amp; Phân tích
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
                  Lên kế hoạch &amp; Phân tích
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
                  Lên kế hoạch &amp; Phân tích
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
                  Lên kế hoạch &amp; Phân tích
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
                  <div className="sec-title_title title-anim">
                    Câu hỏi thường gặp
                  </div>
                  <h2 className="sec-title_heading tx-split-text split-in-up">
                    Kết nối Con người <br /> và Công nghệ
                  </h2>
                </div>
                {/* Accordion Box Two / Style Two */}
                <FaqAccordionTwo items={faqFourItemsVi} defaultActive={1} />
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

