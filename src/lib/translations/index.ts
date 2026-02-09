/**
 * Translations cho toàn bộ website
 * Tập trung tất cả translations ở đây để dễ quản lý
 */

export type Locale = "vi" | "en";

export interface Translations {
  home: {
    banner: {
      slides: Array<{
        heading: string;
        headingHighlight: string;
        description: string;
      }>;
      exploreButton: string;
      playVideo: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
    about: {
      title: string;
      subtitle: string;
    };
    // About Sidebar
    aboutSidebar: {
      title: string;
      titleHighlight: string;
      description: string;
      services: string[];
    };
    // Services Section
    servicesSection: {
      heading: string;
      headingHighlight: string;
      headingSuffix: string;
      services: Array<{
        title: string;
        description: string;
      }>;
    };
    // About Section
    aboutSection: {
      heading: string;
      headingHighlight: string;
      headingSuffix: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    // Team Section
    teamSection: {
      heading: string;
      headingHighlight: string;
      headingSuffix: string;
      designations: {
        softwareDeveloper: string;
        uiUxDesigner: string;
      };
    };
    // FAQ Section
    faqSection: {
      heading: string;
      headingHighlight: string;
      description: string;
      items: Array<{
        id: number;
        title: string;
        content: string;
      }>;
    };
    // Work Section
    workSection: {
      heading: string;
      headingHighlight: string;
      headingSuffix: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    // CTA One Section
    ctaOne: {
      heading: string;
      headingHighlight: string;
      headingSuffix: string;
      description: string;
      emailPlaceholder: string;
      buttonText: string;
    };
    // Testimonial Section
    testimonialSection: {
      heading: string;
      headingHighlight: string;
      headingSuffix: string;
      testimonialText: string;
    };
  };
  // Footer
  footer: {
    ourServices: string;
    services: string[];
    usefulLinks: string;
    links: string[];
    recentPost: string;
    posts: Array<{
      title: string;
      date: string;
    }>;
    subscribeHeading: string;
    emailPlaceholder: string;
    subscribeButton: string;
    copyright: string;
    footerLinks: string[];
  };
  common: {
    home: string;
    about: string;
    services: string;
    pricing: string;
    news: string;
    contact: string;
  };
  contact: {
    pageTitle: {
      title: string;
      home: string;
      breadcrumb: string;
    };
    contactForm: {
      subTitle: string;
      heading: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
      sendButton: string;
      resetButton: string;
      loadingText: string;
    };
    contactInfo: {
      subTitle: string;
      heading: string;
      description: string;
      questionTitle: string;
      phone: string;
      phoneLabel: string;
      emailTitle: string;
      email: string;
      visitTitle: string;
      address: string;
    };
  };
  // CTA Five dùng chung cho nhiều trang
  ctaFive: {
    heading: string;
    emailPlaceholder: string;
    buttonText: string;
  };
  // News page
  news: {
    pageTitle: {
      title: string;
      home: string;
      breadcrumb: string;
    };
    news: {
      admin: string;
      comments: string;
      readMore: string;
      titles: string[];
      text: string;
    };
  };
  // Pricing page
  pricing: {
    pageTitle: {
      title: string;
      home: string;
      breadcrumb: string;
    };
    plans: {
      name: string;
      description: string;
      price: string;
      period: string;
      discount: string;
      bonus: string;
      planLabel: string;
      buttonText: string;
    }[];
  };
  // Services page (trang dịch vụ)
  servicesPage: {
    pageTitle: {
      title: string;
      home: string;
      breadcrumb: string;
    };
    services: {
      heading: string;
      text: string;
      readMore: string;
    };
  };
  // About page (trang giới thiệu)
  aboutPage: {
    pageTitle: {
      title: string;
      home: string;
      breadcrumb: string;
    };
  };
}

const translations: Record<Locale, Translations> = {
  vi: {
    home: {
      banner: {
        slides: [
          {
            heading: "Nâng tầm",
            headingHighlight: "thương hiệu",
            description:
              "Chúng tôi cung cấp giải pháp công nghệ toàn diện giúp doanh nghiệp của bạn phát triển bền vững và đạt được thành công vượt trội",
          },
          {
            heading: "Đổi mới",
            headingHighlight: "công nghệ",
            description:
              "Với đội ngũ chuyên nghiệp và công nghệ tiên tiến, chúng tôi mang đến những giải pháp sáng tạo cho doanh nghiệp của bạn",
          },
          {
            heading: "Phát triển",
            headingHighlight: "bền vững",
            description:
              "Hãy để chúng tôi đồng hành cùng bạn trên hành trình chuyển đổi số và phát triển doanh nghiệp một cách bền vững",
          },
        ],
        exploreButton: "Khám Phá Thêm",
        playVideo: "Xem Demo",
      },
      services: {
        title: "Dịch vụ của chúng tôi",
        subtitle: "Giải pháp công nghệ hàng đầu",
      },
      about: {
        title: "Về chúng tôi",
        subtitle: "Đội ngũ chuyên nghiệp",
      },
      // About Sidebar
      aboutSidebar: {
        title: "Về",
        titleHighlight: "TechCode",
        description:
          "Chúng tôi cung cấp giải pháp công nghệ toàn diện. Với đội ngũ chuyên nghiệp và kinh nghiệm lâu năm, chúng tôi cam kết mang đến những dịch vụ tốt nhất cho doanh nghiệp của bạn.",
        services: [
          "Nghiên cứu từ khóa",
          "Tối ưu hóa trang web",
          "Xây dựng liên kết",
          "Tối ưu hóa trang",
        ],
      },
      // Services Section
      servicesSection: {
        heading: "Tăng lưu lượng truy cập với",
        headingHighlight: "chiến lược SEO hiệu quả",
        headingSuffix: "",
        services: [
          {
            title: "Nghiên cứu từ khóa",
            description:
              "Chúng tôi phân tích và nghiên cứu từ khóa phù hợp để giúp website của bạn đạt thứ hạng cao trên công cụ tìm kiếm",
          },
          {
            title: "Tối ưu hóa trang web",
            description:
              "Tối ưu hóa nội dung và cấu trúc trang web để cải thiện hiệu suất và trải nghiệm người dùng",
          },
          {
            title: "Xây dựng liên kết",
            description:
              "Xây dựng hệ thống backlink chất lượng để tăng độ tin cậy và thứ hạng của website",
          },
        ],
      },
      // About Section
      aboutSection: {
        heading: "Nâng cao",
        headingHighlight: "sự hiện diện trực tuyến",
        headingSuffix: "",
        description:
          "Chúng tôi cung cấp giải pháp SEO toàn diện giúp doanh nghiệp của bạn tăng trưởng bền vững và đạt được thành công vượt trội trên thị trường kỹ thuật số",
        items: [
          {
            title: "Mở khóa sức mạnh của SEO",
            description: "Giải pháp SEO hiện đại và hiệu quả",
          },
          {
            title: "Chìa khóa thành công trong tìm kiếm",
            description: "Chiến lược tối ưu hóa toàn diện",
          },
        ],
      },
      // Team Section
      teamSection: {
        heading: "Cải thiện thứ hạng",
        headingHighlight: "công cụ tìm kiếm",
        headingSuffix: "cùng chúng tôi",
        designations: {
          softwareDeveloper: "Lập trình viên",
          uiUxDesigner: "Thiết kế UI/UX",
        },
      },
      // FAQ Section
      faqSection: {
        heading: "SEO mang lại",
        headingHighlight: "kết quả",
        description:
          "SEO là một quá trình dài hạn giúp cải thiện thứ hạng website trên các công cụ tìm kiếm, từ đó tăng lưu lượng truy cập và khách hàng tiềm năng",
        items: [
          {
            id: 1,
            title: "Tại sao SEO quan trọng đối với doanh nghiệp?",
            content:
              "SEO giúp doanh nghiệp tăng khả năng hiển thị trực tuyến, thu hút khách hàng mục tiêu và tăng doanh số bán hàng một cách bền vững",
          },
          {
            id: 2,
            title: "SEO mất bao lâu để có kết quả?",
            content:
              "Thông thường SEO cần từ 3-6 tháng để bắt đầu có kết quả, tùy thuộc vào độ cạnh tranh của từ khóa và tình trạng hiện tại của website",
          },
          {
            id: 3,
            title: "Bạn có thể đảm bảo thứ hạng công cụ tìm kiếm không?",
            content:
              "Không ai có thể đảm bảo 100% thứ hạng cụ thể, nhưng chúng tôi cam kết áp dụng các phương pháp SEO tốt nhất để cải thiện thứ hạng của bạn",
          },
        ],
      },
      // Work Section
      workSection: {
        heading: "Trải nghiệm sức mạnh",
        headingHighlight: "SEO hiệu quả",
        headingSuffix: "",
        description:
          "Với đội ngũ chuyên nghiệp và công nghệ tiên tiến, chúng tôi cung cấp các giải pháp SEO toàn diện giúp doanh nghiệp của bạn phát triển bền vững",
        items: [
          {
            title: "Nghiên cứu từ khóa",
            description:
              "Phân tích và nghiên cứu từ khóa phù hợp với ngành nghề của bạn",
          },
          {
            title: "Tối ưu hóa trang",
            description:
              "Tối ưu hóa nội dung và cấu trúc trang web để đạt thứ hạng cao",
          },
          {
            title: "Xây dựng liên kết",
            description:
              "Xây dựng hệ thống backlink chất lượng từ các trang web uy tín",
          },
          {
            title: "SEO kỹ thuật",
            description:
              "Tối ưu hóa các yếu tố kỹ thuật của website để cải thiện hiệu suất",
          },
        ],
      },
      // CTA One Section
      ctaOne: {
        heading: "Quản lý",
        headingHighlight: "Tài chính",
        headingSuffix: "& Tiết kiệm thời gian",
        description:
          "Tiết kiệm thời gian và tăng hiệu quả công việc với các giải pháp công nghệ hiện đại của chúng tôi",
        emailPlaceholder: "Nhập email của bạn",
        buttonText: "Dùng thử miễn phí",
      },
      // Testimonial Section
      testimonialSection: {
        heading: "Cải thiện thứ hạng",
        headingHighlight: "công cụ tìm kiếm",
        headingSuffix: "cùng chúng tôi",
        testimonialText:
          "Chúng tôi rất hài lòng với dịch vụ SEO của TechCode. Thứ hạng website của chúng tôi đã được cải thiện đáng kể và lượng truy cập tăng lên rõ rệt. Đội ngũ chuyên nghiệp và hỗ trợ tận tình.",
      },
    },
    common: {
      home: "Trang chủ",
      about: "Giới thiệu",
      services: "Dịch vụ",
      pricing: "Bảng giá",
      news: "Tin tức",
      contact: "Liên hệ",
    },
    contact: {
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
    },
    // CTA Five dùng chung cho nhiều trang
    ctaFive: {
      heading: "Đăng ký ngay để nhận thêm thông tin về chúng tôi",
      emailPlaceholder: "Nhập email của bạn",
      buttonText: "Đăng ký ngay",
    },
    // News page
    news: {
      pageTitle: {
        title: "Tin Tức",
        home: "Trang chủ",
        breadcrumb: "Tin Tức",
      },
      news: {
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
    },
    // Pricing page
    pricing: {
      pageTitle: {
        title: "Bảng Giá",
        home: "Trang chủ",
        breadcrumb: "Bảng Giá",
      },
      plans: [
        {
          name: "Gói Cơ Bản",
          description:
            "Phù hợp cho cá nhân và doanh nghiệp nhỏ bắt đầu xây dựng hiện diện trực tuyến.",
          price: "Từ 200$",
          period: "Mỗi ngày",
          discount: "Giảm đến 10%",
          bonus: "Thêm ưu đãi",
          planLabel: "Gói dịch vụ",
          buttonText: "Chọn gói này",
        },
        {
          name: "Gói Chuyên Nghiệp",
          description:
            "Dành cho doanh nghiệp đang mở rộng, cần hiệu năng cao và hỗ trợ chuyên sâu.",
          price: "Từ 500$",
          period: "Mỗi ngày",
          discount: "Giảm đến 50%",
          bonus: "Thêm ưu đãi",
          planLabel: "Gói dịch vụ",
          buttonText: "Chọn gói này",
        },
        {
          name: "Gói Doanh Nghiệp",
          description:
            "Giải pháp toàn diện cho hệ thống lớn, yêu cầu bảo mật và khả năng mở rộng cao.",
          price: "Từ 1000$",
          period: "Mỗi ngày",
          discount: "Giảm đến 80%",
          bonus: "Thêm ưu đãi",
          planLabel: "Gói dịch vụ",
          buttonText: "Chọn gói này",
        },
      ],
    },
    // Services page (trang dịch vụ)
    servicesPage: {
      pageTitle: {
        title: "Dịch Vụ",
        home: "Trang chủ",
        breadcrumb: "Dịch Vụ",
      },
      services: {
        heading: "Giải Pháp Tối Ưu",
        text: "Trái với quan niệm phổ biến, Lorem Ipsum không phải là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm",
        readMore: "Đọc thêm",
      },
    },
    // About page (trang giới thiệu)
    aboutPage: {
      pageTitle: {
        title: "Giới Thiệu",
        home: "Trang chủ",
        breadcrumb: "Giới Thiệu",
      },
    },
    // Footer
    footer: {
      ourServices: "Dịch vụ của chúng tôi",
      services: [
        "Tư duy thông minh",
        "Lập kế hoạch tăng trưởng doanh nghiệp",
        "Giải pháp doanh nghiệp hoàn hảo",
        "Tiếp thị kỹ thuật số",
        "Thiết kế UI/UX",
      ],
      usefulLinks: "Liên kết hữu ích",
      links: [
        "Về chúng tôi",
        "Dịch vụ",
        "Quy trình làm việc",
        "Đánh giá",
        "Portfolio",
      ],
      recentPost: "Bài viết gần đây",
      posts: [
        {
          title: "Hiệu quả được định nghĩa lại thông qua công nghệ",
          date: "19 tháng 10, 2022",
        },
        {
          title: "Hiệu quả được định nghĩa lại thông qua công nghệ",
          date: "19 tháng 10, 2022",
        },
      ],
      subscribeHeading: "Đăng ký nhận bản tin của chúng tôi",
      emailPlaceholder: "Địa chỉ email của bạn",
      subscribeButton: "Đăng ký",
      copyright: "© bản quyền thuộc về kodesolution",
      footerLinks: ["Điều khoản & Điều kiện", "Chính sách bảo mật", "Liên hệ"],
    },
  },
  en: {
    home: {
      banner: {
        slides: [
          {
            heading: "Bringing Your",
            headingHighlight: "Business",
            description:
              "lorem ipsum dolor sit amet consectetur. Facilisi cursus vulputate vestibulum etiam rhoncus",
          },
          {
            heading: "Innovating",
            headingHighlight: "Technology",
            description:
              "With professional team and advanced technology, we bring innovative solutions for your business",
          },
          {
            heading: "Sustainable",
            headingHighlight: "Growth",
            description:
              "Let us accompany you on your digital transformation journey and sustainable business development",
          },
        ],
        exploreButton: "Explore More",
        playVideo: "Watch Demo",
      },
      services: {
        title: "Our Services",
        subtitle: "Leading Technology Solutions",
      },
      about: {
        title: "About Us",
        subtitle: "Professional Team",
      },
      // About Sidebar
      aboutSidebar: {
        title: "About",
        titleHighlight: "TechCode",
        description:
          "Ut enim ad minim. facilisis suspendisseipsum dolor sit amet dolore consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et magna aliqua enim ad minim veniam, quis nostrud.",
        services: [
          "Keyword Research",
          "On-page Optimization",
          "Link Building",
          "Page Optimization",
        ],
      },
      // Services Section
      servicesSection: {
        heading: "Drive more traffic with",
        headingHighlight: "effective",
        headingSuffix: "SEO strategies",
        services: [
          {
            title: "Keyword Research",
            description:
              "Loremi Ipsum is simply dummy isn text inmi of Ihe printing apesetting mdesigner industrn norem",
          },
          {
            title: "On-page Optimization",
            description:
              "Loremi Ipsum is simply dummy isn text inmi of Ihe printing apesetting mdesigner industrn norem",
          },
          {
            title: "Link Building",
            description:
              "Loremi Ipsum is simply dummy isn text inmi of Ihe printing apesetting mdesigner industrn norem",
          },
        ],
      },
      // About Section
      aboutSection: {
        heading: "Elevating your",
        headingHighlight: "online",
        headingSuffix: "presence",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard",
        items: [
          {
            title: "Unlocking the power of SEO",
            description: "Ipsum has been the industry standard dummy",
          },
          {
            title: "The key to successful search",
            description: "Ipsum has been the industry standard dummy",
          },
        ],
      },
      // Team Section
      teamSection: {
        heading: "Improve your search engine",
        headingHighlight: "ranking",
        headingSuffix: "with us",
        designations: {
          softwareDeveloper: "Software Developer",
          uiUxDesigner: "ui/ux Designer",
        },
      },
      // FAQ Section
      faqSection: {
        heading: "SEO that gets",
        headingHighlight: "results",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        items: [
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
        ],
      },
      // Work Section
      workSection: {
        heading: "Experience the",
        headingHighlight: "power",
        headingSuffix: "effective SEO with",
        description:
          "Loremi Ipsum is simply dummy text inmi of Ihe printing design apesetting mdesigner industrn norem our us Many desktop publishing packages web page editors ipsum",
        items: [
          {
            title: "Keyword Research",
            description:
              "Lorem Ipsum isn simply dummy texts of the printing apesi etting industry Lorem Ipsum",
          },
          {
            title: "Page Optimization",
            description:
              "Lorem Ipsum isn simply dummy texts of the printing apesi etting industry Lorem Ipsum",
          },
          {
            title: "Link Building",
            description:
              "Lorem Ipsum isn simply dummy texts of the printing apesi etting industry Lorem Ipsum",
          },
          {
            title: "Technical SEO",
            description:
              "Lorem Ipsum isn simply dummy texts of the printing apesi etting industry Lorem Ipsum",
          },
        ],
      },
      // CTA One Section
      ctaOne: {
        heading: "Manage Your",
        headingHighlight: "Finance",
        headingSuffix: "& Save Time",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        emailPlaceholder: "Enter Your Email",
        buttonText: "Try for Free",
      },
      // Testimonial Section
      testimonialSection: {
        heading: "Improve your search",
        headingHighlight: "engine",
        headingSuffix: "ranking with us",
        testimonialText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting imn industry Lorem Ipsum has been the industry's Lorem Ipsum is simplmi dummy text of the printing and typesetting industry",
      },
    },
    common: {
      home: "Home",
      about: "About Us",
      services: "Services",
      pricing: "Pricing",
      news: "News",
      contact: "Contact",
    },
    contact: {
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
    },
    // CTA Five dùng chung cho nhiều trang
    ctaFive: {
      heading: "Subscribe Now For More Information About Us",
      emailPlaceholder: "Enter Your Email",
      buttonText: "Subscribe Now",
    },
    // News page
    news: {
      pageTitle: {
        title: "News Grid",
        home: "Home",
        breadcrumb: "News",
      },
      news: {
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
    },
    // Pricing page
    pricing: {
      pageTitle: {
        title: "Pricing",
        home: "Home",
        breadcrumb: "Pricing",
      },
      plans: [
        {
          name: "Turbo Hosting",
          description:
            "Ideal for individuals and small teams starting their online presence.",
          price: "Starting 200$",
          period: "Every Day",
          discount: "Up To 10% Discount",
          bonus: "Plus Bonus",
          planLabel: "Service Plan",
          buttonText: "Get this plan",
        },
        {
          name: "Business Hosting",
          description:
            "Designed for growing businesses that need more resources and stability.",
          price: "Starting 500$",
          period: "Every Day",
          discount: "Up To 50% Discount",
          bonus: "Plus Bonus",
          planLabel: "Service Plan",
          buttonText: "Get this plan",
        },
        {
          name: "Enterprise Hosting",
          description:
            "Full‑scale solution for large organizations with high traffic and security needs.",
          price: "Starting 1000$",
          period: "Every Day",
          discount: "Up To 80% Discount",
          bonus: "Plus Bonus",
          planLabel: "Service Plan",
          buttonText: "Get this plan",
        },
      ],
    },
    // Services page (trang dịch vụ)
    servicesPage: {
      pageTitle: {
        title: "Services",
        home: "Home",
        breadcrumb: "Services",
      },
      services: {
        heading: "Streamline Solutions",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
        readMore: "Read More",
      },
    },
    // About page (trang giới thiệu)
    aboutPage: {
      pageTitle: {
        title: "About Us",
        home: "Home",
        breadcrumb: "About Us",
      },
    },
    // Footer
    footer: {
      ourServices: "Our Services",
      services: [
        "Smart Thinking",
        "Business Growth Planning",
        "Perfect Business Solutions",
        "Digital Marketing",
        "UI/UX Designing",
      ],
      usefulLinks: "Useful Links",
      links: ["About Us", "Services", "Work Process", "Testimonial", "Portfolio"],
      recentPost: "Recent Post",
      posts: [
        {
          title: "Efficiency redefined through technology",
          date: "October 19, 2022",
        },
        {
          title: "Efficiency redefined through technology",
          date: "October 19, 2022",
        },
      ],
      subscribeHeading: "Subscribe Our Newsletter",
      emailPlaceholder: "Your E-mail address",
      subscribeButton: "Subscribe",
      copyright: "© copyrights reserved by kodesolution",
      footerLinks: ["Trams & Condition", "Privacy Policy", "Contact"],
    },
  },
};

/**
 * Lấy translations theo locale
 */
export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.vi;
}

/**
 * Hook/Utility để dùng translations dễ dàng
 * Sử dụng: const t = useTranslations('vi'); t.home.banner.heading
 */
export function useTranslations(locale: Locale): Translations {
  return getTranslations(locale);
}

export default translations;
