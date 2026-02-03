export type CategoryBackend = {
  categoryId: string;
  iconName: string;
  image: string;
  slug: string; // utilisé pour le routing: /category/laptops, /category/phones  // /category/laptops
  parentId?: string;
  children?: CategoryBackend[];
  translations: CategoryTranslation[];
};

export interface CategoryTranslation {
  locale: string;
  name: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const _mockCategories: CategoryBackend[] = [
  {
    categoryId: "1",
    slug: "peripherals",
    iconName: "FiHeadphones",
    image: "/images/category/peripheral.png",
    translations: [
      {
        locale: "en",
        name: "Peripherals",
        seoTitle: "Computer Peripherals Online",
        seoDescription:
          "Find keyboards, mice, headphones, and all computer accessories.",
      },
      {
        locale: "ar",
        name: "ملحقات الحاسوب",
        seoTitle: "شراء ملحقات الحاسوب عبر الإنترنت",
        seoDescription:
          "اكتشف لوحات المفاتيح والفأرات وسماعات الرأس وجميع الإكسسوارات.",
      },
    ],
    children: [
      {
        categoryId: "1-1",
        slug: "keyboards",
        iconName: "FiKeyboard",
        image: "/images/category/keyboard.png",
        parentId: "1",
        translations: [
          {
            locale: "en",
            name: "Keyboards",
            seoTitle: "Mechanical & Membrane Keyboards",
            seoDescription: "Buy gaming and office keyboards online.",
          },
          {
            locale: "ar",
            name: "لوحات المفاتيح",
            seoTitle: "لوحات مفاتيح ميكانيكية وغشائية",
            seoDescription: "اشترِ لوحات مفاتيح للألعاب والمكاتب عبر الإنترنت.",
          },
        ],
      },
      {
        categoryId: "1-2",
        slug: "mice",
        iconName: "FiMousePointer",
        image: "/images/category/mouse.png",
        parentId: "1",
        translations: [
          {
            locale: "en",
            name: "Mice",
            seoTitle: "Computer Mice",
            seoDescription: "Gaming, wireless, and ergonomic mice.",
          },
          {
            locale: "ar",
            name: "الفأرات",
            seoTitle: "فأرات الحاسوب",
            seoDescription: "فأرات للألعاب، لاسلكية ومريحة للاستخدام.",
          },
        ],
      },
      {
        categoryId: "1-3",
        slug: "headphones",
        iconName: "FiHeadphones",
        image: "/images/category/headphones.png",
        parentId: "1",
        translations: [
          {
            locale: "en",
            name: "Headphones",
            seoTitle: "Headphones & Earbuds",
            seoDescription: "High-quality wired and wireless headphones.",
          },
          {
            locale: "ar",
            name: "سماعات الرأس",
            seoTitle: "سماعات الأذن والرأس",
            seoDescription: "سماعات عالية الجودة سلكية ولاسلكية.",
          },
        ],
      },
    ],
  },
  {
    categoryId: "2",
    slug: "laptops-pcs",
    iconName: "FiMonitor",
    image: "/images/category/pc.png",
    translations: [
      {
        locale: "en",
        name: "Laptops / PCs",
        seoTitle: "Laptops and PCs",
        seoDescription:
          "High-performance laptops and desktop computers for work and gaming.",
      },
      {
        locale: "ar",
        name: "الكمبيوتر",
        seoTitle: "أجهزة لابتوب وحواسيب مكتبية",
        seoDescription:
          "أجهزة لابتوب وحواسيب مكتبية عالية الأداء للعمل والألعاب.",
      },
    ],
    children: [
      {
        categoryId: "2-1",
        slug: "gaming-laptops",
        iconName: "FiCpu",
        image: "/images/category/gaming-laptop.png",
        parentId: "2",
        translations: [
          {
            locale: "en",
            name: "Gaming Laptops",
            seoTitle: "High-Performance Gaming Laptops",
            seoDescription: "Top gaming laptops for an immersive experience.",
          },
          {
            locale: "ar",
            name: "حاسبات الألعاب المحمولة",
            seoTitle: "أجهزة لابتوب قوية للألعاب",
            seoDescription: "أفضل أجهزة الألعاب لتجربة غامرة.",
          },
        ],
      },
      {
        categoryId: "2-2",
        slug: "ultrabooks",
        iconName: "FiLaptop",
        image: "/images/category/ultrabook.png",
        parentId: "2",
        translations: [
          {
            locale: "en",
            name: "Ultrabooks",
            seoTitle: "Slim & Lightweight Ultrabooks",
            seoDescription: "Portable laptops with long battery life.",
          },
          {
            locale: "ar",
            name: "ألترابوك",
            seoTitle: "أجهزة ألترابوك نحيفة وخفيفة الوزن",
            seoDescription: "أجهزة محمولة مع بطارية تدوم طويلاً.",
          },
        ],
      },
      {
        categoryId: "2-3",
        slug: "desktop-pcs",
        iconName: "FiMonitor",
        image: "/images/category/desktop.png",
        parentId: "2",
        translations: [
          {
            locale: "en",
            name: "Desktop PCs",
            seoTitle: "Powerful Desktop Computers",
            seoDescription:
              "Customizable and pre-built desktops for work and gaming.",
          },
          {
            locale: "ar",
            name: "الحواسيب المكتبية",
            seoTitle: "حواسيب مكتبية قوية",
            seoDescription: "حواسيب مكتبية مخصصة أو جاهزة للعمل والألعاب.",
          },
        ],
      },
    ],
  },
  {
    categoryId: "3",
    slug: "smartphones",
    iconName: "FiSmartphone",
    image: "/images/category/tel.png",
    translations: [
      {
        locale: "en",
        name: "Smartphones",
        seoTitle: "Latest Smartphones Online",
        seoDescription:
          "Explore the newest smartphones with the best prices and features.",
      },
      {
        locale: "ar",
        name: "الهواتف الذكية",
        seoTitle: "أحدث الهواتف الذكية عبر الإنترنت",
        seoDescription: "اكتشف أحدث الهواتف بأفضل الأسعار والمواصفات.",
      },
    ],
    children: [
      {
        categoryId: "3-1",
        slug: "android-phones",
        iconName: "FiSmartphone",
        image: "/images/category/android.png",
        parentId: "3",
        translations: [
          {
            locale: "en",
            name: "Android Phones",
            seoTitle: "Top Android Smartphones",
            seoDescription:
              "Latest Android phones from Samsung, Google, Xiaomi, etc.",
          },
          {
            locale: "ar",
            name: "هواتف أندرويد",
            seoTitle: "أفضل هواتف أندرويد",
            seoDescription:
              "أحدث هواتف أندرويد من سامسونج وجوجل وشاومي وغيرها.",
          },
        ],
      },
      {
        categoryId: "3-2",
        slug: "iphones",
        iconName: "FiSmartphone",
        image: "/images/category/iphone.png",
        parentId: "3",
        translations: [
          {
            locale: "en",
            name: "iPhones",
            seoTitle: "Apple iPhones",
            seoDescription: "Explore the latest iPhone models.",
          },
          {
            locale: "ar",
            name: "آيفون",
            seoTitle: "هواتف آيفون من آبل",
            seoDescription: "اكتشف أحدث إصدارات آيفون.",
          },
        ],
      },
      {
        categoryId: "3-3",
        slug: "smartphone-accessories",
        iconName: "FiGift",
        image: "/images/category/phone-accessories.png",
        parentId: "3",
        translations: [
          {
            locale: "en",
            name: "Accessories",
            seoTitle: "Phone Cases, Chargers, & More",
            seoDescription: "All must-have accessories for smartphones.",
          },
          {
            locale: "ar",
            name: "إكسسوارات الهواتف",
            seoTitle: "أغطية وشواحن ومزيد من الإكسسوارات",
            seoDescription: "كل الإكسسوارات الضرورية لهاتفك الذكي.",
          },
        ],
      },
    ],
  },
];
