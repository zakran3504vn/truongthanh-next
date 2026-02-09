import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/translations";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = locale === "en" ? "en" : "vi";

  // Lấy translations từ file tập trung
  const t = getTranslations(safeLocale);

  // News data
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
            <h1 className="title">{t.news.pageTitle.title}</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href={safeLocale === "vi" ? "/vi" : "/en"}>
                  {t.news.pageTitle.home}
                </Link>
              </li>
              <li>{t.news.pageTitle.breadcrumb}</li>
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
                        {t.news.news.admin}
                      </li>
                      <li>
                        <span className="icon flaticon-chat"></span>
                        {t.news.news.comments} (05)
                      </li>
                    </ul>
                    <h5 className="news-block_three-heading">
                      <Link href={`/${safeLocale}/news/news-details`}>
                        {t.news.news.titles[index]}
                      </Link>
                    </h5>
                    <div className="news-block_three-text">
                      {t.news.news.text}
                    </div>
                    <Link
                      className="news-block_three-more"
                      href={`/${safeLocale}/news/news-details`}
                    >
                      {t.news.news.readMore}
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
                <h3 className="cta-five_heading">{t.ctaFive.heading}</h3>
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
                        placeholder={t.ctaFive.emailPlaceholder}
                        required
                      />
                      <button type="submit" className="theme-btn submit-btn">
                        {t.ctaFive.buttonText}
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

