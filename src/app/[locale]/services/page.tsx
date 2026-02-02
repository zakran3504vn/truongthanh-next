import Link from "next/link";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "vi";

  // Translations for page title section
  const pageTitleTranslations = {
    vi: {
      title: "Dịch Vụ",
      home: "Trang chủ",
      breadcrumb: "Dịch Vụ",
    },
    en: {
      title: "Services",
      home: "Home",
      breadcrumb: "Services",
    },
  };

  const pageTitleText = pageTitleTranslations[safeLocale];

  // Services data with translations
  const servicesData = [
    {
      id: 1,
      icon: "/images/icons/service-4.png",
      animation: "fadeInLeft",
      delay: "0ms",
    },
    {
      id: 2,
      icon: "/images/icons/service-5.png",
      animation: "fadeInUp",
      delay: "0ms",
    },
    {
      id: 3,
      icon: "/images/icons/service-6.png",
      animation: "fadeInRight",
      delay: "0ms",
    },
    {
      id: 4,
      icon: "/images/icons/service-7.png",
      animation: "fadeInLeft",
      delay: "0ms",
    },
    {
      id: 5,
      icon: "/images/icons/service-8.png",
      animation: "fadeInUp",
      delay: "0ms",
    },
    {
      id: 6,
      icon: "/images/icons/service-9.png",
      animation: "fadeInRight",
      delay: "0ms",
    },
  ];

  const servicesTranslations = {
    vi: {
      heading: "Giải Pháp Tối Ưu",
      text: "Trái với quan niệm phổ biến, Lorem Ipsum không phải là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm",
      readMore: "Đọc thêm",
    },
    en: {
      heading: "Streamline Solutions",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
      readMore: "Read More",
    },
  };

  const servicesText = servicesTranslations[safeLocale];

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
            <h1 className="title">{pageTitleText.title}</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href={safeLocale === "vi" ? "/vi" : "/en"}>
                  {pageTitleText.home}
                </Link>
              </li>
              <li>{pageTitleText.breadcrumb}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* end main-content */}

      {/* Services Three */}
      <section className="services-three bg-light">
        <div className="auto-container">
          <div className="row clearfix">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="services-block_three col-lg-4 col-sm-6"
              >
                <div
                  className={`services-block_three-inner wow ${service.animation}`}
                  data-wow-delay={service.delay}
                  data-wow-duration="1500ms"
                >
                  <div className="services-block_three-icon">
                    <img src={service.icon} alt="" />
                  </div>
                  <h4 className="services-block_three-heading">
                    <Link href={`/${safeLocale}/services/service-details`}>
                      {servicesText.heading}
                    </Link>
                  </h4>
                  <div className="services-block_three-text">
                    {servicesText.text}
                  </div>
                  <Link
                    className="services-block_three-more"
                    href={`/${safeLocale}/services/service-details`}
                  >
                    {servicesText.readMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Services Three */}

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

