import Link from "next/link";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "vi";

  // Translations for page title section
  const pageTitleTranslations = {
    vi: {
      title: "Tin Tức",
      home: "Trang chủ",
      breadcrumb: "Tin Tức",
    },
    en: {
      title: "News Grid",
      home: "Home",
      breadcrumb: "News",
    },
  };

  const pageTitleText = pageTitleTranslations[safeLocale];

  // News data with translations
  const newsData = [
    {
      id: 1,
      date: "19 FEB",
      image: "/images/resource/news-7.jpg",
      animation: "fadeInLeft",
      delay: "0ms",
    },
    {
      id: 2,
      date: "19 FEB",
      image: "/images/resource/news-8.jpg",
      animation: "fadeInUp",
      delay: "0ms",
    },
    {
      id: 3,
      date: "19 FEB",
      image: "/images/resource/news-9.jpg",
      animation: "fadeInRight",
      delay: "0ms",
    },
    {
      id: 4,
      date: "19 FEB",
      image: "/images/resource/news-9.jpg",
      animation: "fadeInRight",
      delay: "0ms",
    },
    {
      id: 5,
      date: "19 FEB",
      image: "/images/resource/news-8.jpg",
      animation: "fadeInUp",
      delay: "0ms",
    },
    {
      id: 6,
      date: "19 FEB",
      image: "/images/resource/news-7.jpg",
      animation: "fadeInLeft",
      delay: "0ms",
    },
  ];

  const newsTranslations = {
    vi: {
      admin: "quản trị viên",
      comments: "Bình luận",
      readMore: "Đọc thêm",
      titles: [
        "Tìm thấy, nhấp chuột và đạt kết quả với giải pháp SEO của chúng tôi",
        "Tăng cường sự hiện diện trực tuyến của bạn với sức mạnh của SEO",
        "Công cụ tìm kiếm yêu thích chúng tôi và khách hàng của bạn cũng vậy",
        "Công cụ tìm kiếm yêu thích chúng tôi và khách hàng của bạn cũng vậy",
        "Tăng cường sự hiện diện trực tuyến của bạn với sức mạnh của SEO",
        "Tìm thấy, nhấp chuột và đạt kết quả với giải pháp SEO của chúng tôi",
      ],
      text: "Triển khai bất kỳ hệ thống thanh toán nào cho đăng ký của bạn",
    },
    en: {
      admin: "admin",
      comments: "Comments",
      readMore: "Read More",
      titles: [
        "Get found get clicked get results with our SEO solutions",
        "Boost your online presence with the magic of SEO",
        "Search engines love us and so will your customers",
        "Search engines love us and so will your customers",
        "Boost your online presence with the magic of SEO",
        "Get found get clicked get results with our SEO solutions",
      ],
      text: "Implementing any payment system for yourscription loren",
    },
  };

  const newsText = newsTranslations[safeLocale];

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

      {/* News Three */}
      <section className="news-three pt-120">
        <div className="auto-container">
          <div className="row clearfix">
            {newsData.map((news, index) => (
              <div
                key={news.id}
                className="news-block_three mb-50 col-lg-4 col-md-6"
              >
                <div
                  className={`news-block_three-inner wow ${news.animation}`}
                  data-wow-delay={news.delay}
                  data-wow-duration="1500ms"
                >
                  <div className="news-block_three-date">{news.date}</div>
                  <div className="news-block_three-image">
                    <Link href={`/${safeLocale}/news/news-details`}>
                      <img src={news.image} alt="" />
                    </Link>
                  </div>
                  <div className="news-block_three-content">
                    <ul className="news-block_three-meta">
                      <li>
                        <span className="icon flaticon-user-1"></span>
                        {newsText.admin}
                      </li>
                      <li>
                        <span className="icon flaticon-chat"></span>
                        {newsText.comments} (05)
                      </li>
                    </ul>
                    <h5 className="news-block_three-heading">
                      <Link href={`/${safeLocale}/news/news-details`}>
                        {newsText.titles[index]}
                      </Link>
                    </h5>
                    <div className="news-block_three-text">
                      {newsText.text}
                    </div>
                    <Link
                      className="news-block_three-more"
                      href={`/${safeLocale}/news/news-details`}
                    >
                      {newsText.readMore}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End News Three */}

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

