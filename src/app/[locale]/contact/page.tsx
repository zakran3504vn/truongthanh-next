import Link from "next/link";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "vi";

  // Translations
  const translations = {
    vi: {
      pageTitle: {
        title: "Liên Hệ",
        home: "Trang chủ",
        breadcrumb: "Liên Hệ",
      },
      contactForm: {
        subTitle: "Gửi email cho chúng tôi",
        heading: "Hãy thoải mái viết",
        namePlaceholder: "Nhập tên",
        emailPlaceholder: "Nhập email",
        subjectPlaceholder: "Nhập chủ đề",
        phonePlaceholder: "Nhập số điện thoại",
        messagePlaceholder: "Nhập tin nhắn",
        sendButton: "Gửi tin nhắn",
        resetButton: "Đặt lại",
        loadingText: "Vui lòng đợi...",
      },
      contactInfo: {
        subTitle: "Cần giúp đỡ?",
        heading: "Liên hệ với chúng tôi",
        description:
          "Lorem ipsum là văn bản miễn phí đơn giản có sẵn dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.",
        questionTitle: "Có câu hỏi nào không?",
        phone: "+92 (020)-9850",
        phoneLabel: "Miễn phí",
        emailTitle: "Viết email",
        email: "[email protected]",
        visitTitle: "Ghé thăm bất cứ lúc nào",
        address: "66 broklyn golden street. New York",
      },
      ctaFive: {
        heading: "Đăng ký ngay để nhận thêm thông tin về chúng tôi",
        emailPlaceholder: "Nhập email của bạn",
        buttonText: "Đăng ký ngay",
      },
    },
    en: {
      pageTitle: {
        title: "Contact Us",
        home: "Home",
        breadcrumb: "Contact",
      },
      contactForm: {
        subTitle: "Send us email",
        heading: "Feel free to write",
        namePlaceholder: "Enter Name",
        emailPlaceholder: "Enter Email",
        subjectPlaceholder: "Enter Subject",
        phonePlaceholder: "Enter Phone",
        messagePlaceholder: "Enter Message",
        sendButton: "Send message",
        resetButton: "Reset",
        loadingText: "Please wait...",
      },
      contactInfo: {
        subTitle: "Need any help?",
        heading: "Get in touch with us",
        description:
          "Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.",
        questionTitle: "Have any question?",
        phone: "+92 (020)-9850",
        phoneLabel: "Free",
        emailTitle: "Write email",
        email: "[email protected]",
        visitTitle: "Visit anytime",
        address: "66 broklyn golden street. New York",
      },
      ctaFive: {
        heading: "Subscribe Now For More Information About Us",
        emailPlaceholder: "Enter Your Email",
        buttonText: "Subscribe Now",
      },
    },
  };

  const t = translations[safeLocale];

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
            <h1 className="title">{t.pageTitle.title}</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href={safeLocale === "vi" ? "/vi" : "/en"}>
                  {t.pageTitle.home}
                </Link>
              </li>
              <li>{t.pageTitle.breadcrumb}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* end main-content */}

      {/*Contact Details Start*/}
      <section className="contact-details">
        <div className="container pt-120 pb-80">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title mb-40">
                <span className="sub-title">{t.contactForm.subTitle}</span>
                <h2>{t.contactForm.heading}</h2>
              </div>
              {/* Contact Form */}
              <form
                id="contact_form"
                name="contact_form"
                className=""
                action={`/${safeLocale}/contact`}
                method="post"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_name"
                        className="form-control"
                        type="text"
                        placeholder={t.contactForm.namePlaceholder}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder={t.contactForm.emailPlaceholder}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_subject"
                        className="form-control required"
                        type="text"
                        placeholder={t.contactForm.subjectPlaceholder}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder={t.contactForm.phonePlaceholder}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows={7}
                    placeholder={t.contactForm.messagePlaceholder}
                  ></textarea>
                </div>
                <div className="mb-5">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    defaultValue=""
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-two"
                    data-loading-text={t.contactForm.loadingText}
                  >
                    <span className="btn-wrap">
                      <span className="text-one">
                        {t.contactForm.sendButton}
                      </span>
                      <span className="text-two">
                        {t.contactForm.sendButton}
                      </span>
                    </span>
                  </button>
                  <button
                    type="reset"
                    className="theme-btn btn-style-three"
                    data-loading-text={t.contactForm.loadingText}
                  >
                    <span className="btn-wrap">
                      <span className="text-one">
                        {t.contactForm.resetButton}
                      </span>
                      <span className="text-two">
                        {t.contactForm.resetButton}
                      </span>
                    </span>
                  </button>
                </div>
              </form>
              {/* Contact Form Validation*/}
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">{t.contactInfo.subTitle}</span>
                  <h2 className="mb-30">{t.contactInfo.heading}</h2>
                  <div className="text">{t.contactInfo.description}</div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6>{t.contactInfo.questionTitle}</h6>
                      <a href="tel:980089850">
                        <span>{t.contactInfo.phoneLabel}</span>{" "}
                        {t.contactInfo.phone}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6>{t.contactInfo.emailTitle}</h6>
                      <a href={`mailto:${t.contactInfo.email}`}>
                        {t.contactInfo.email}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h6>{t.contactInfo.visitTitle}</h6>
                      <span>{t.contactInfo.address}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Details End*/}

      {/* Map Section*/}
      <section className="map-section">
        <iframe
          className="map w-100"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Map"
        ></iframe>
      </section>
      {/*End Map Section*/}

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
                  <form method="post" action={`/${safeLocale}/contact`}>
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

