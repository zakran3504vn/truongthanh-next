import Link from "next/link";
import { LegacyAccordionInit } from "@/components/legacy-accordion-init";

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "vi";

  // NOTE: Trang này được chuyển từ `page-service-details.php`.
  // Mục tiêu: giữ nguyên cấu trúc HTML/class để không mất giao diện template.

  const pageTitle = safeLocale === "vi" ? "Chi Tiết Dịch Vụ" : "Service Details";
  const breadcrumbServices = safeLocale === "vi" ? "Dịch Vụ" : "Services";
  const homeText = safeLocale === "vi" ? "Trang chủ" : "Home";

  return (
    <>
      {/* Fix accordion toggle cho template legacy khi navigate kiểu SPA */}
      <LegacyAccordionInit />
      {/* Start main-content */}
      <section
        className="page-title"
        style={{ backgroundImage: "url(/images/background/page-title-bg.png)" }}
      >
        <div className="auto-container">
          <div className="title-outer d-sm-flex align-items-center justify-content-sm-between">
            <h1 className="title">{pageTitle}</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href={safeLocale === "vi" ? "/vi" : "/en"}>{homeText}</Link>
              </li>
              <li>{breadcrumbServices}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* end main-content */}

      {/*Start Services Details*/}
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/*Start Services Details Sidebar*/}
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                {/*Start Services Details Sidebar Single*/}
                <div className="sidebar-widget service-sidebar-single">
                  <div className="sidebar-service-list">
                    <ul>
                      <li>
                        <Link
                          href={`/${safeLocale}/services/service-details`}
                          className="current"
                        >
                          <i className="fas fa-angle-right"></i>
                          <span>Website Development</span>
                        </Link>
                      </li>
                      <li className="current">
                        <Link href={`/${safeLocale}/services/service-details`}>
                          <i className="fas fa-angle-right"></i>
                          <span>Graphic Designing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/${safeLocale}/services/service-details`}>
                          <i className="fas fa-angle-right"></i>
                          <span>Digital Marketing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/${safeLocale}/services/service-details`}>
                          <i className="fas fa-angle-right"></i>
                          <span>Apps Development</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/${safeLocale}/services/service-details`}>
                          <i className="fas fa-angle-right"></i>
                          <span>Seo &amp; Content Writing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/${safeLocale}/services/service-details`}>
                          <i className="fas fa-angle-right"></i>
                          <span>UI / UX Designing</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="service-details-help">
                    <div className="help-shape-1"></div>
                    <div className="help-shape-2"></div>
                    <h2 className="help-title">
                      Contact with <br /> us for any <br /> advice
                    </h2>
                    <div className="help-icon">
                      <span className="lnr-icon-phone-handset"></span>
                    </div>
                    <div className="help-contact">
                      <p>Need help? Talk to an expert</p>
                      <a href="tel:12463330079">+892 ( 123 ) 112 - 9999</a>
                    </div>
                  </div>

                  {/*Start Services Details Sidebar Single*/}
                  <div className="sidebar-widget service-sidebar-single mt-4">
                    <div
                      className="service-sidebar-single-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                      data-wow-duration="1200m"
                    >
                      <a href="#" className="theme-btn btn-style-one d-grid">
                        <span className="btn-title">
                          <span className="fas fa-file-pdf"></span> download pdf
                          file
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/*End Services Details Sidebar*/}
              </div>
            </div>
            {/*End Services Details Sidebar*/}

            {/*Start Services Details Content*/}
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <img src="/images/resource/service-details.jpg" alt="" />
                <h3 className="mt-4 mb-20">Service Overview</h3>
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing.
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the ndustry standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make{" "}
                </p>
                <p>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged Lorem ipsum dolor sit amet
                  consec tetur adipis icing elit{" "}
                </p>

                <div className="content mt-40">
                  <div className="text">
                    <h3 className="mb-20">Service Center</h3>
                    <p>
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo.
                    </p>
                    <blockquote className="blockquote-one">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicing
                      elit sed do eiusmod remaining essentially unchanged Lorem
                      ipsum dolor sit amet consec tetur
                    </blockquote>
                  </div>

                  <div className="feature-list mt-4">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <img
                          className="mb-3"
                          src="/images/resource/service-d1.jpg"
                          alt="images"
                        />
                        <p>
                          Lorem ipsum dolor sit amet consec adipis elit Dolor
                          repellat pariatur temporibus doloribus hic conse
                          quatur copy typing refreshing
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <img
                          className="mb-3"
                          src="/images/resource/service-d2.jpg"
                          alt="images"
                        />
                        <p>
                          Lorem ipsum dolor sit amet consec adipis elit Dolor
                          repellat pariatur temporibus doloribus hic conse
                          quatur copy typing refreshing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="faq-section mt-25">
                  <h3 className="mb-15">Frequently Asked Question</h3>
                  <p className="mb-20">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo.
                  </p>
                  <ul className="accordion-box wow fadeInRight">
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        Is my technology allowed on tech?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div className="acc-content mt-0 ps-0">
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block active-block">
                      <div className="acc-btn active">
                        How to soft launch your business?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div className="acc-content mt-0 current ps-0">
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        How to turn visitors into contributors
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div className="acc-content mt-0 ps-0">
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        How can i find my solutions?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div className="acc-content mt-0 ps-0">
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Services Details Content*/}
          </div>
        </div>
      </section>
      {/*End Services Details*/}

      {/* CTA Five */}
      <section className="cta-five">
        <div className="auto-container">
          <div className="cta-five_inner-container">
            <div
              className="cta-five_pattern"
              style={{
                backgroundImage: "url(/images/background/cta-five_pattern.png)",
              }}
            ></div>
            <span className="cta-five_color-one"></span>
            <span className="cta-five_color-two"></span>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h3 className="cta-five_heading">
                  Subscribe Now For More Information About Us
                </h3>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                {/* Subscribe Box */}
                <div className="subscribe-box_two">
                  <form method="post" action={`/${safeLocale}/contact`}>
                    <div className="form-group d-flex flex-wrap">
                      <input
                        aria-label="Input"
                        type="email"
                        name="search-field"
                        defaultValue=""
                        placeholder="name@email.com"
                        required
                      />
                      <button
                        aria-label="Button Title"
                        type="submit"
                        className="theme-btn subscribe-btn"
                      >
                        subscribe Now
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

