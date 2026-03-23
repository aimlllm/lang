export type Locale = "zh" | "en";

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: {
      about: "关于我们",
      services: "服务项目",
      portfolio: "工程案例",
      testimonials: "客户评价",
      contact: "联系我们",
    },
    phone: "(415) 361-1692",
    phoneHref: "tel:+14153611692",

    hero: {
      badge: "服务旧金山湾区",
      title1: "专业房屋装修",
      title2: "匠心品质 值得信赖",
      description:
        "从整体房屋翻新到厨房改造、屋顶修缮和精细装修——我们以多年丰富经验，为湾区每一位客户打造理想家园。",
      cta1: "立即致电咨询",
      cta2: "查看工程案例",
      trust1: "持牌 & 全额保险",
      trust2: "15年以上经验",
      trust3: "完成500+项目",
    },

    about: {
      label: "关于我们",
      title1: "以品质赢信赖",
      title2: "用匠心筑家园",
      p1: "我们扎根旧金山湾区超过15年，凭借丰富的实战经验，建立了卓越的房屋装修服务口碑。从整体房屋改造到精细装修，每一个项目都倾注了我们全部的专注与匠心。",
      p2: "我们深知您的家是最重要的投资。因此，我们以细致的规划、透明的沟通和不妥协的质量标准对待每一个项目。我们的目标不仅是满足您的期望——更要超越它。",
      badge1Title: "持牌 & 保险",
      badge1Desc: "全面保障",
      badge2Title: "准时交付",
      badge2Desc: "严守工期",
      badge3Title: "透明报价",
      badge3Desc: "无隐藏费用",
      badge4Title: "五星好评",
      badge4Desc: "深受客户信赖",
      yearsExp: "15+",
      yearsLabel1: "年",
      yearsLabel2: "丰富经验",
    },

    services: {
      label: "服务项目",
      title: "全方位装修解决方案",
      description:
        "从整体房屋翻新到单独房间改造，我们提供专业的装修服务，全面提升您的居住空间。",
      items: [
        {
          title: "整体房屋翻新",
          description:
            "从地基到装饰的全面房屋改造。我们管理大型翻修的每一个细节，打造令人惊叹的成果，提升您家的价值和宜居性。",
        },
        {
          title: "厨房改造",
          description:
            "兼具功能与美观的定制厨房设计。从橱柜、台面到照明和地板，我们打造成为您家核心的理想厨房。",
        },
        {
          title: "卫浴翻新",
          description:
            "现代美学与实用设计完美结合的豪华卫浴升级。瓷砖、洁具、浴室柜，按您的愿景量身定制。",
        },
        {
          title: "屋顶服务",
          description:
            "专业的屋顶修缮、更换和安装服务。我们使用各种屋顶材料，为您的房屋提供可靠保护，同时提升外观。",
        },
        {
          title: "卧室改造",
          description:
            "打造您的完美休憩空间。从布局重新设计、嵌入式储物到灯光和装饰细节，让您的空间独一无二。",
        },
        {
          title: "围栏安装 & 刷墙",
          description:
            "专业的围栏安装和室内外油漆服务。使用优质材料和精确工艺，为您的物业带来精致完美的外观。",
        },
      ],
    },

    portfolio: {
      label: "工程案例",
      title: "近期项目展示",
      description:
        "浏览我们在湾区的最新装修项目。每一个项目都体现了我们对品质和细节的执着追求。",
      projects: [
        { title: "现代厨房改造", location: "帕罗奥图", category: "厨房" },
        { title: "整体房屋翻新", location: "旧金山", category: "整体翻新" },
        { title: "豪华卫浴改造", location: "圣马特奥", category: "卫浴" },
        { title: "维多利亚式老宅修复", location: "旧金山", category: "整体翻新" },
        { title: "现代卧室套房", location: "山景城", category: "卧室" },
        { title: "雪松围栏 & 外墙涂装", location: "弗里蒙特", category: "围栏 & 油漆" },
      ],
    },

    testimonials: {
      label: "客户评价",
      title: "客户怎么说",
      description: "不只是我们自己说——听听湾区业主们对我们装修服务的真实评价。",
      items: [
        {
          name: "Sarah M.",
          location: "帕罗奥图",
          text: "他们把我们60年代的老厨房改造成了现代杰作。对细节的关注令人难以置信，项目按时完成且在预算之内。非常满意！",
        },
        {
          name: "David & Lisa Chen",
          location: "旧金山",
          text: "我们请他们做了整体房屋翻新，结果超出了我们的预期。专业、沟通及时，真正的能工巧匠。我们的维多利亚式老宅焕然一新。",
        },
        {
          name: "Michael R.",
          location: "圣马特奥",
          text: "出色的屋顶和外墙涂装工作。他们的评估非常全面，报价清晰明了，施工质量一流。强烈推荐给湾区的朋友们。",
        },
      ],
    },

    contact: {
      label: "联系我们",
      title1: "准备好开始",
      title2: "您的装修项目了吗？",
      description:
        "今天就致电联系我们，获取免费咨询和报价。我们将讨论您的愿景，提供专业建议，并给出透明报价——无任何义务。",
      phoneLabel: "电话",
      areaLabel: "服务区域",
      areaValue: "旧金山湾区",
      areasTitle: "服务覆盖城市",
      callNow: "立即致电",
      cities: [
        "旧金山",
        "帕罗奥图",
        "圣马特奥",
        "山景城",
        "弗里蒙特",
        "奥克兰",
        "伯克利",
        "圣何塞",
        "桑尼维尔",
        "红木城",
        "戴利城",
        "库比蒂诺",
      ],
    },

    footer: {
      brand: "湾区装修",
      description:
        "旧金山湾区专业房屋装修服务。持牌、保险齐全，以精湛工艺为您打造理想家园。",
      servicesTitle: "服务项目",
      contactTitle: "联系方式",
      serviceLinks: [
        "整体房屋翻新",
        "厨房改造",
        "卫浴翻新",
        "屋顶服务",
        "围栏 & 油漆",
      ],
      location: "旧金山湾区，加州",
      rights: "Bay Area Renovation. 版权所有。",
      license: "持牌总承包商 · 加州执照 #XXXXXXX",
    },

    langToggle: "English",
  },

  en: {
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    phone: "(812) 241-8280",
    phoneHref: "tel:+18122418280",

    hero: {
      badge: "Serving the San Francisco Bay Area",
      title1: "Transform Your Home",
      title2: "With Expert Craftsmanship",
      description:
        "From complete home renovations to kitchen remodels, roofing, and custom finishes — we bring decades of experience to every project in the Bay Area.",
      cta1: "Call Us Now",
      cta2: "View Our Work",
      trust1: "Licensed & Insured",
      trust2: "15+ Years Experience",
      trust3: "500+ Projects Completed",
    },

    about: {
      label: "About Us",
      title1: "Building Trust Through",
      title2: "Quality Craftsmanship",
      p1: "With over 15 years of hands-on experience in the San Francisco Bay Area, we have built our reputation on delivering exceptional home renovation services. From complete home transformations to detailed finish work, every project receives our full attention and commitment to excellence.",
      p2: "We understand that your home is your most important investment. That's why we approach every project with meticulous planning, transparent communication, and uncompromising quality standards. Our goal is not just to meet your expectations — but to exceed them.",
      badge1Title: "Licensed & Insured",
      badge1Desc: "Full coverage protection",
      badge2Title: "On-Time Delivery",
      badge2Desc: "We respect deadlines",
      badge3Title: "Transparent Pricing",
      badge3Desc: "No hidden costs",
      badge4Title: "5-Star Rated",
      badge4Desc: "Trusted by homeowners",
      yearsExp: "15+",
      yearsLabel1: "Years of",
      yearsLabel2: "Experience",
    },

    services: {
      label: "Our Services",
      title: "Comprehensive Renovation Solutions",
      description:
        "From complete home makeovers to targeted room renovations, we deliver professional results that transform your living space.",
      items: [
        {
          title: "Whole-Home Renovation",
          description:
            "Complete home transformations from foundation to finish. We manage every detail of large-scale remodels, delivering stunning results that increase your home's value and livability.",
        },
        {
          title: "Kitchen Remodeling",
          description:
            "Custom kitchen designs that blend functionality with style. From cabinetry and countertops to lighting and flooring, we create kitchens that become the heart of your home.",
        },
        {
          title: "Bathroom Renovation",
          description:
            "Luxurious bathroom upgrades that combine modern aesthetics with practical design. Tile work, fixtures, vanities, and complete layouts tailored to your vision.",
        },
        {
          title: "Roofing Services",
          description:
            "Professional roof repair, replacement, and installation. We work with all roofing materials to protect your home from the Bay Area elements while enhancing curb appeal.",
        },
        {
          title: "Bedroom Remodeling",
          description:
            "Create your perfect retreat with custom bedroom renovations. From layout redesign and built-in storage to lighting and finish details that make your space uniquely yours.",
        },
        {
          title: "Fence & Painting",
          description:
            "Expert fence installation and professional interior/exterior painting. We use premium materials and precise techniques to give your property a polished, finished look.",
        },
      ],
    },

    portfolio: {
      label: "Our Portfolio",
      title: "Recent Projects",
      description:
        "Browse our latest renovation projects across the Bay Area. Each one reflects our commitment to quality and attention to detail.",
      projects: [
        { title: "Modern Kitchen Transformation", location: "Palo Alto, CA", category: "Kitchen" },
        { title: "Complete Home Renovation", location: "San Francisco, CA", category: "Whole Home" },
        { title: "Luxury Bathroom Remodel", location: "San Mateo, CA", category: "Bathroom" },
        { title: "Victorian Home Restoration", location: "San Francisco, CA", category: "Whole Home" },
        { title: "Contemporary Bedroom Suite", location: "Mountain View, CA", category: "Bedroom" },
        { title: "Cedar Fence & Exterior Paint", location: "Fremont, CA", category: "Fence & Paint" },
      ],
    },

    testimonials: {
      label: "Testimonials",
      title: "What Our Clients Say",
      description:
        "Don't just take our word for it — hear from homeowners across the Bay Area who trusted us with their renovation projects.",
      items: [
        {
          name: "Sarah M.",
          location: "Palo Alto, CA",
          text: "They completely transformed our 1960s kitchen into a modern masterpiece. The attention to detail was incredible, and the project was completed on time and within budget. Couldn't be happier!",
        },
        {
          name: "David & Lisa Chen",
          location: "San Francisco, CA",
          text: "We hired them for a complete home renovation and the results exceeded our expectations. Professional, communicative, and truly skilled craftsmen. Our Victorian home has never looked better.",
        },
        {
          name: "Michael R.",
          location: "San Mateo, CA",
          text: "Outstanding roofing work and exterior painting. They were thorough in their assessment, provided a clear quote, and delivered exceptional quality. Highly recommend to anyone in the Bay Area.",
        },
      ],
    },

    contact: {
      label: "Get In Touch",
      title1: "Ready to Start Your",
      title2: "Renovation Project?",
      description:
        "Call us today for a free consultation and estimate. We'll discuss your vision, provide expert recommendations, and deliver a transparent quote — no obligation.",
      phoneLabel: "Phone",
      areaLabel: "Service Area",
      areaValue: "San Francisco Bay Area",
      areasTitle: "Areas We Serve",
      callNow: "Call Now",
      cities: [
        "San Francisco",
        "Palo Alto",
        "San Mateo",
        "Mountain View",
        "Fremont",
        "Oakland",
        "Berkeley",
        "San Jose",
        "Sunnyvale",
        "Redwood City",
        "Daly City",
        "Cupertino",
      ],
    },

    footer: {
      brand: "Bay Area Renovation",
      description:
        "Professional home renovation services in the San Francisco Bay Area. Licensed, insured, and committed to transforming your home with expert craftsmanship.",
      servicesTitle: "Services",
      contactTitle: "Contact",
      serviceLinks: [
        "Whole-Home Renovation",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Roofing Services",
        "Fence & Painting",
      ],
      location: "San Francisco Bay Area, CA",
      rights: "Bay Area Renovation. All rights reserved.",
      license: "Licensed General Contractor · CA License #XXXXXXX",
    },

    langToggle: "中文",
  },
};

export interface Translations {
  nav: { about: string; services: string; portfolio: string; testimonials: string; contact: string };
  phone: string;
  phoneHref: string;
  hero: { badge: string; title1: string; title2: string; description: string; cta1: string; cta2: string; trust1: string; trust2: string; trust3: string };
  about: { label: string; title1: string; title2: string; p1: string; p2: string; badge1Title: string; badge1Desc: string; badge2Title: string; badge2Desc: string; badge3Title: string; badge3Desc: string; badge4Title: string; badge4Desc: string; yearsExp: string; yearsLabel1: string; yearsLabel2: string };
  services: { label: string; title: string; description: string; items: { title: string; description: string }[] };
  portfolio: { label: string; title: string; description: string; projects: { title: string; location: string; category: string }[] };
  testimonials: { label: string; title: string; description: string; items: { name: string; location: string; text: string }[] };
  contact: { label: string; title1: string; title2: string; description: string; phoneLabel: string; areaLabel: string; areaValue: string; areasTitle: string; callNow: string; cities: string[] };
  footer: { brand: string; description: string; servicesTitle: string; contactTitle: string; serviceLinks: string[]; location: string; rights: string; license: string };
  langToggle: string;
}
