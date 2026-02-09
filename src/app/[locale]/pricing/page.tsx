import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/translations";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = locale === "en" ? "en" : "vi";

  // Lấy translations từ file tập trung
  const t = getTranslations(safeLocale);

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
            <h1 className="title">{t.pricing.pageTitle.title}</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href={safeLocale === "vi" ? "/vi" : "/en"}>
                  {t.pricing.pageTitle.home}
                </Link>
              </li>
              <li>{t.pricing.pageTitle.breadcrumb}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* end main-content */}

      {/* Price One */}
      <section className="price-one pt-120">
        <div className="auto-container">
          <div className="row clearfix">
            {t.pricing.plans.map((plan, index) => {
              const icons = [
                "/images/resource/price-1.png",
                "/images/resource/price-2.png",
                "/images/resource/price-3.png",
              ];
              const iconSrc = icons[index] ?? icons[0];

              return (
                <div
                  key={plan.name + index}
                  className="price-block_one col-lg-4 col-md-6"
                >
                  <div className="price-block_one-inner">
                    <div className="price-block_one-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="price-block_one-icon">
                      <img src={iconSrc} alt="" />
                    </div>
                    <h4 className="price-block_one-heading">{plan.name}</h4>
                    <div className="price-block_one-text">
                      {plan.description}
                    </div>
                    <ul className="price-block_one-list">
                      <li>{plan.price}</li>
                      <li>{plan.period}</li>
                      <li>{plan.discount}</li>
                      <li>{plan.bonus}</li>
                      <li>{plan.planLabel}</li>
                    </ul>
                    <div className="price-block_one-button">
                      <a href={`/${safeLocale}/contact`} className="theme-btn">
                        {plan.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
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

