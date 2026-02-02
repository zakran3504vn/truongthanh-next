import Link from "next/link";

export default async function PricingPage({
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
            <h1 className="title">
              {safeLocale === "vi" ? "Bảng Giá" : "Pricing"}
            </h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href={safeLocale === "vi" ? "/vi" : "/en"}>Home</Link>
              </li>
              <li>{safeLocale === "vi" ? "Bảng Giá" : "Pricing"}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* end main-content */}

      {/* Price One */}
      <section className="price-one pt-120">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Price Block One */}
            <div className="price-block_one col-lg-4 col-md-6">
              <div className="price-block_one-inner">
                <div className="price-block_one-number">01</div>
                <div className="price-block_one-icon">
                  <img src="/images/resource/price-1.png" alt="" />
                </div>
                <h4 className="price-block_one-heading">Turbo Hosting</h4>
                <div className="price-block_one-text">
                  Lorem Ipsum is simply is dumiomy Lorem Ipsum is simply
                </div>
                <ul className="price-block_one-list">
                  <li>Starting 200$</li>
                  <li>Every Day</li>
                  <li>Up To 10% Discount</li>
                  <li>Plus Bonus</li>
                  <li>Service Plan</li>
                </ul>
                <div className="price-block_one-button">
                  <a href="page-pricing.html" className="theme-btn">
                    Get this plan
                  </a>
                </div>
              </div>
            </div>
            {/* Price Block One */}
            <div className="price-block_one col-lg-4 col-md-6">
              <div className="price-block_one-inner">
                <div className="price-block_one-number">02</div>
                <div className="price-block_one-icon">
                  <img src="/images/resource/price-2.png" alt="" />
                </div>
                <h4 className="price-block_one-heading">Turbo Hosting</h4>
                <div className="price-block_one-text">
                  Lorem Ipsum is simply is dumiomy Lorem Ipsum is simply
                </div>
                <ul className="price-block_one-list">
                  <li>Starting 500$</li>
                  <li>Every Day</li>
                  <li>Up To 50% Discount</li>
                  <li>Plus Bonus</li>
                  <li>Service Plan</li>
                </ul>
                <div className="price-block_one-button">
                  <a href="page-pricing.html" className="theme-btn">
                    Get this plan
                  </a>
                </div>
              </div>
            </div>
            {/* Price Block One */}
            <div className="price-block_one col-lg-4 col-md-6">
              <div className="price-block_one-inner">
                <div className="price-block_one-number">03</div>
                <div className="price-block_one-icon">
                  <img src="/images/resource/price-3.png" alt="" />
                </div>
                <h4 className="price-block_one-heading">Turbo Hosting</h4>
                <div className="price-block_one-text">
                  Lorem Ipsum is simply is dumiomy Lorem Ipsum is simply
                </div>
                <ul className="price-block_one-list">
                  <li>Starting 1000$</li>
                  <li>Every Day</li>
                  <li>Up To 80% Discount</li>
                  <li>Plus Bonus</li>
                  <li>Service Plan</li>
                </ul>
                <div className="price-block_one-button">
                  <a href="page-pricing.html" className="theme-btn">
                    Get this plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Price One */}

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

