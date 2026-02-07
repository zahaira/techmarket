export interface ProductAttributeBackend {
  name_en: string;
  name_ar: string;
  value_en: string | boolean | number;
  value_ar: string | boolean | number;
}

export interface ProductBackend {
  productId: string;
  price: number;
  priceSale?: number;
  discountPercentage?: number;
  stock: number;
  slug: string;
  coverUrl: string;
  images: string[];
  categoryIds: string[];
  primaryCategoryId: string; // used for breadcrumbs and canonical paths
  keyPoints?: ProductAttributeBackend[];
  attributes?: ProductAttributeBackend[];
  warranty?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  totalSold: number;
  bgGradient?: string;
  createdAt: Date;
  updatedAt: Date;
  translations: ProductTranslation[];
}

export interface ProductTranslation {
  locale: string; // "en", "ar", etc.
  name: string;
  subDescription: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

import { paginate } from "@/lib/pagination";
import { Product, ProductAttribute, ProductCardItem } from "../types/product";
import { _mockCategories } from "./_category";
import { _mock, randomNumbers } from "./_mock";
import {
  _desktopImages,
  _headPhonesImages,
  _keyboardImages,
  _mouseImages,
  _pcImages,
  _smartphoneImages,
} from "./assets";

// Stock options
export const PRODUCT_STOCK_OPTIONS = [
  { value: "in stock", label: "In stock" },
  { value: "out of stock", label: "Out of stock" },
];

// Categories - Updated to match new structure
const CATEGORIES = {
  // Peripherals subcategories
  KEYBOARDS: "1-1",
  MICE: "1-2",
  HEADPHONES: "1-3",

  // Laptops/PCs subcategories
  GAMING_LAPTOPS: "2-1",
  ULTRABOOKS: "2-2",
  DESKTOP_PCS: "2-3",

  // Smartphones subcategories
  ANDROID_PHONES: "3-1",
  IPHONES: "3-2",
  SMARTPHONE_ACCESSORIES: "3-3",
};

// Product names by category (English)
const mockProductNamesEn = {
  [CATEGORIES.KEYBOARDS]: [
    "Logitech MX Keys",
    "Keychron K2 V2",
    "Corsair K95 RGB",
    "Razer BlackWidow V3",
    "SteelSeries Apex Pro",
    "Ducky One 2 Mini",
    "Anne Pro 2",
    "HyperX Alloy Origins",
    "Filco Majestouch 2",
    "Das Keyboard 4",
    "GMMK Pro",
    "Logitech G915",
    "Cooler Master CK530",
    "Royal Kludge RK61",
  ],
  [CATEGORIES.MICE]: [
    "Logitech MX Master 3S",
    "Razer DeathAdder V3",
    "Logitech G Pro X Superlight",
    "Corsair Dark Core RGB",
    "SteelSeries Rival 3",
    "Razer Viper Ultimate",
    "Logitech G502 Hero",
    "Glorious Model O",
    "Zowie EC2",
    "Fnatic Bolt",
    "Roccat Kone Pro",
    "HyperX Pulsefire Haste",
  ],
  [CATEGORIES.HEADPHONES]: [
    "Sony WH-1000XM5",
    "Bose QuietComfort 45",
    "AirPods Pro 2",
    "Samsung Galaxy Buds 2 Pro",
    "Sennheiser HD 660S",
    "Audio-Technica ATH-M50x",
    "Beats Studio Pro",
    "JBL Tune 760NC",
    "HyperX Cloud II",
    "SteelSeries Arctis 7",
    "Razer BlackShark V2",
    "Logitech G Pro X",
  ],
  [CATEGORIES.GAMING_LAPTOPS]: [
    "Asus ROG Zephyrus G14",
    "MSI Prestige 14",
    "Razer Blade 15",
    "Acer Nitro 5",
    "Lenovo IdeaPad Gaming 3",
    "HP Omen 16",
    "Dell G15 Gaming",
    "Gigabyte Aorus 15",
    "Alienware M15 R7",
    "Asus TUF Gaming A15",
  ],
  [CATEGORIES.ULTRABOOKS]: [
    'MacBook Pro 16"',
    "Dell XPS 15",
    "HP Spectre x360",
    "Lenovo ThinkPad X1 Carbon",
    "Microsoft Surface Laptop 5",
    "Acer Swift 3",
    "LG Gram 17",
    "HP Envy 13",
    "Asus Vivobook Pro 15",
    "Samsung Galaxy Book3 Pro",
  ],
  [CATEGORIES.DESKTOP_PCS]: [
    "HP EliteDesk 800 G9",
    "Dell OptiPlex 7090",
    "Lenovo ThinkCentre M90",
    "ASUS ExpertCenter D9",
    "Acer Aspire TC",
    "MSI Trident X2",
    "Corsair Vengeance i7200",
    "HP Pavilion Gaming",
    "Dell Inspiron Desktop",
    "Custom Gaming PC RTX 4070",
  ],
  [CATEGORIES.ANDROID_PHONES]: [
    "Samsung Galaxy S24 Ultra",
    "Xiaomi Redmi Note 13 Pro",
    "OnePlus 12",
    "Google Pixel 8 Pro",
    "Oppo Find X6 Pro",
    "Realme GT 5 Pro",
    "Vivo X100 Pro",
    "Motorola Edge 50 Pro",
    "Nothing Phone (2)",
    "Honor Magic 6 Pro",
    "Poco F6 Pro",
  ],
  [CATEGORIES.IPHONES]: [
    "iPhone 15 Pro Max",
    "iPhone 15 Pro",
    "iPhone 15 Plus",
    "iPhone 15",
    "iPhone 14 Pro Max",
    "iPhone 14 Pro",
    "iPhone 14",
    "iPhone SE (2024)",
  ],
  [CATEGORIES.SMARTPHONE_ACCESSORIES]: [
    "AirPods Pro 2",
    "Samsung Galaxy Buds 2 Pro",
    "Anker PowerCore 20000",
    "Belkin USB-C Cable",
    "Spigen Phone Case",
    "OtterBox Defender Series",
    "Anker Wireless Charger",
    "Samsung 45W Fast Charger",
    "JBL Clip 4 Speaker",
    "PopSockets Phone Grip",
    "Moment Lens Kit",
    "UAG Protective Case",
    "Nomad Leather Case",
  ],
};

// Product names by category (Arabic)
const mockProductNamesAr = {
  [CATEGORIES.KEYBOARDS]: [
    "لوجيتك MX Keys",
    "كيكرون K2 V2",
    "كورسير K95 RGB",
    "رازر BlackWidow V3",
    "ستيل سيريز Apex Pro",
    "داكي One 2 Mini",
    "آن برو 2",
    "هايبر إكس Alloy Origins",
    "فيلكو Majestouch 2",
    "داس كيبورد 4",
    "GMMK Pro",
    "لوجيتك G915",
    "كولر ماستر CK530",
    "رويال كلودج RK61",
  ],
  [CATEGORIES.MICE]: [
    "لوجيتك MX Master 3S",
    "رازر DeathAdder V3",
    "لوجيتك G Pro X Superlight",
    "كورسير Dark Core RGB",
    "ستيل سيريز Rival 3",
    "رازر Viper Ultimate",
    "لوجيتك G502 Hero",
    "جلوريوس Model O",
    "زوي EC2",
    "فناتك Bolt",
    "روكات Kone Pro",
    "هايبر إكس Pulsefire Haste",
  ],
  [CATEGORIES.HEADPHONES]: [
    "سوني WH-1000XM5",
    "بوز QuietComfort 45",
    "إيربودز برو 2",
    "سامسونج Galaxy Buds 2 Pro",
    "سنهايزر HD 660S",
    "أوديو-تكنيكا ATH-M50x",
    "بيتس Studio Pro",
    "JBL Tune 760NC",
    "هايبر إكس Cloud II",
    "ستيل سيريز Arctis 7",
    "رازر BlackShark V2",
    "لوجيتك G Pro X",
  ],
  [CATEGORIES.GAMING_LAPTOPS]: [
    "أسوس ROG Zephyrus G14",
    "MSI Prestige 14",
    "رازر Blade 15",
    "أيسر Nitro 5",
    "لينوفو IdeaPad Gaming 3",
    "HP Omen 16",
    "ديل G15 Gaming",
    "جيجابايت Aorus 15",
    "ألينوير M15 R7",
    "أسوس TUF Gaming A15",
  ],
  [CATEGORIES.ULTRABOOKS]: [
    'ماك بوك برو 16"',
    "ديل XPS 15",
    "HP Spectre x360",
    "لينوفو ThinkPad X1 Carbon",
    "مايكروسوفت Surface Laptop 5",
    "أيسر Swift 3",
    "LG Gram 17",
    "HP Envy 13",
    "أسوس Vivobook Pro 15",
    "سامسونج Galaxy Book3 Pro",
  ],
  [CATEGORIES.DESKTOP_PCS]: [
    "HP EliteDesk 800 G9",
    "ديل OptiPlex 7090",
    "لينوفو ThinkCentre M90",
    "أسوس ExpertCenter D9",
    "أيسر Aspire TC",
    "MSI Trident X2",
    "كورسير Vengeance i7200",
    "HP Pavilion Gaming",
    "ديل Inspiron Desktop",
    "حاسوب ألعاب مخصص RTX 4070",
  ],
  [CATEGORIES.ANDROID_PHONES]: [
    "سامسونج Galaxy S24 Ultra",
    "شاومي Redmi Note 13 Pro",
    "ون بلس 12",
    "جوجل Pixel 8 Pro",
    "أوبو Find X6 Pro",
    "ريلمي GT 5 Pro",
    "فيفو X100 Pro",
    "موتورولا Edge 50 Pro",
    "ناثينج Phone (2)",
    "هونر Magic 6 Pro",
    "بوكو F6 Pro",
  ],
  [CATEGORIES.IPHONES]: [
    "آيفون 15 برو ماكس",
    "آيفون 15 برو",
    "آيفون 15 بلس",
    "آيفون 15",
    "آيفون 14 برو ماكس",
    "آيفون 14 برو",
    "آيفون 14",
    "آيفون SE (2024)",
  ],
  [CATEGORIES.SMARTPHONE_ACCESSORIES]: [
    "إيربودز برو 2",
    "سامسونج Galaxy Buds 2 Pro",
    "أنكر PowerCore 20000",
    "بيلكين كابل USB-C",
    "سبيجن غطاء هاتف",
    "أوتر بوكس Defender Series",
    "أنكر شاحن لاسلكي",
    "سامسونج شاحن سريع 45W",
    "JBL Clip 4 سماعة",
    "PopSockets مسكة هاتف",
    "Moment عدسات للهاتف",
    "UAG غطاء واقي",
    "نوماد غطاء جلدي",
  ],
};

const mockDates = [
  "2025-10-12T12:00:00Z",
  "2025-10-11T09:30:00Z",
  "2025-10-10T15:45:00Z",
];

// Generate discount
const generateDiscount = (index: number): number | undefined => {
  if (index % 3 === 0) {
    return [10, 15, 20, 25, 30][index % 5];
  }
  return undefined;
};

export const generateAttributesAndKeyPoints = (
  category: string
): {
  attributes?: ProductAttributeBackend[];
  keyPoints?: ProductAttributeBackend[];
} => {
  switch (category) {
    // 💻 Laptops (Gaming, Ultrabooks, etc.)
    case CATEGORIES.GAMING_LAPTOPS:
    case CATEGORIES.ULTRABOOKS:
    case CATEGORIES.DESKTOP_PCS:
      return {
        attributes: [
          {
            name_en: "Brand",
            name_ar: "الماركة",
            value_en: "Lenovo",
            value_ar: "لينوفو",
          },
          {
            name_en: "Condition",
            name_ar: "الحالة",
            value_en: "New",
            value_ar: "جديد",
          },
          {
            name_en: "Processor Model",
            name_ar: "موديل المعالج",
            value_en: "AMD Ryzen 5",
            value_ar: "AMD Ryzen 5",
          },
          {
            name_en: "Processor Type",
            name_ar: "نوع المعالج",
            value_en: "Ryzen 5 7520U",
            value_ar: "Ryzen 5 7520U",
          },
          {
            name_en: "Processor Speed",
            name_ar: "سرعة المعالج",
            value_en: "2.8 GHz (up to 4.3 GHz boost)",
            value_ar: "2.8 جيجاهرتز (حتى 4.3 جيجاهرتز)",
          },
          {
            name_en: "Memory Size",
            name_ar: "حجم الذاكرة",
            value_en: "16 GB",
            value_ar: "16 جيجابايت",
          },
          {
            name_en: "Memory Type",
            name_ar: "نوع الذاكرة",
            value_en: "LPDDR5",
            value_ar: "LPDDR5",
          },
          {
            name_en: "Hard Drive",
            name_ar: "القرص الصلب",
            value_en: "512 GB SSD",
            value_ar: "512 جيجابايت SSD",
          },
          {
            name_en: "Integrated Graphics",
            name_ar: "بطاقة الرسومات المدمجة",
            value_en: "AMD Radeon™ 610M",
            value_ar: "AMD Radeon™ 610M",
          },
          {
            name_en: "Screen Size",
            name_ar: "حجم الشاشة",
            value_en: '15.6"',
            value_ar: "15.6 بوصة",
          },
          {
            name_en: "Resolution",
            name_ar: "الدقة",
            value_en: "1920 x 1080 pixels",
            value_ar: "1920 × 1080 بكسل",
          },
          {
            name_en: "Operating System",
            name_ar: "نظام التشغيل",
            value_en: "Windows 11 Home",
            value_ar: "ويندوز 11 المنزلي",
          },
        ],
        keyPoints: [
          {
            name_en: "CPU",
            name_ar: "المعالج",
            value_en: "AMD Ryzen™ 5 7520U",
            value_ar: "AMD Ryzen™ 5 7520U",
          },
          {
            name_en: "RAM",
            name_ar: "الذاكرة العشوائية",
            value_en: "16GB LPDDR5-5500",
            value_ar: "16 جيجابايت LPDDR5-5500",
          },
          {
            name_en: "Storage",
            name_ar: "التخزين",
            value_en: "512GB SSD M.2 NVMe 4.0×4",
            value_ar: "512 جيجابايت SSD M.2 NVMe 4.0×4",
          },
          {
            name_en: "GPU",
            name_ar: "بطاقة الرسومات",
            value_en: "AMD Radeon™ 610M",
            value_ar: "AMD Radeon™ 610M",
          },
          {
            name_en: "Screen",
            name_ar: "الشاشة",
            value_en: '15.6" Full-HD (1920×1080)',
            value_ar: "15.6 بوصة Full-HD (1920×1080)",
          },
        ],
      };

    // 📱 Android Phones
    case CATEGORIES.ANDROID_PHONES:
      return {
        attributes: [
          {
            name_en: "Brand",
            name_ar: "الماركة",
            value_en: "Samsung",
            value_ar: "سامسونج",
          },
          {
            name_en: "Model",
            name_ar: "الموديل",
            value_en: "Galaxy A55",
            value_ar: "Galaxy A55",
          },
          {
            name_en: "Storage",
            name_ar: "السعة التخزينية",
            value_en: "256 GB",
            value_ar: "256 جيجابايت",
          },
          {
            name_en: "RAM",
            name_ar: "الذاكرة العشوائية",
            value_en: "8 GB",
            value_ar: "8 جيجابايت",
          },
          {
            name_en: "Battery",
            name_ar: "البطارية",
            value_en: "5000 mAh",
            value_ar: "5000 مللي أمبير",
          },
          {
            name_en: "Screen Size",
            name_ar: "حجم الشاشة",
            value_en: "6.6 inches",
            value_ar: "6.6 بوصة",
          },
          {
            name_en: "Screen Type",
            name_ar: "نوع الشاشة",
            value_en: "Super AMOLED",
            value_ar: "Super AMOLED",
          },
          {
            name_en: "Camera",
            name_ar: "الكاميرا",
            value_en: "50MP + 12MP + 5MP",
            value_ar: "50 + 12 + 5 ميجابكسل",
          },
          {
            name_en: "Operating System",
            name_ar: "نظام التشغيل",
            value_en: "Android 14",
            value_ar: "أندرويد 14",
          },
        ],
        keyPoints: [
          {
            name_en: "Performance",
            name_ar: "الأداء",
            value_en: "Exynos 1480 octa-core processor",
            value_ar: "معالج Exynos 1480 ثماني النواة",
          },
          {
            name_en: "Screen",
            name_ar: "الشاشة",
            value_en: "Super AMOLED 120Hz immersive",
            value_ar: "شاشة Super AMOLED 120Hz غامرة",
          },
          {
            name_en: "Camera",
            name_ar: "الكاميرا",
            value_en: "50MP with optical stabilization",
            value_ar: "50 ميجابكسل مع تثبيت بصري",
          },
          {
            name_en: "Battery",
            name_ar: "البطارية",
            value_en: "2-day battery + 25W fast charging",
            value_ar: "بطارية تدوم يومين + شحن سريع 25 واط",
          },
        ],
      };

    // 🍏 iPhones
    case CATEGORIES.IPHONES:
      return {
        attributes: [
          {
            name_en: "Brand",
            name_ar: "الماركة",
            value_en: "Apple",
            value_ar: "آبل",
          },
          {
            name_en: "Model",
            name_ar: "الموديل",
            value_en: "iPhone 15",
            value_ar: "آيفون 15",
          },
          {
            name_en: "Storage",
            name_ar: "السعة التخزينية",
            value_en: "128 GB",
            value_ar: "128 جيجابايت",
          },
          {
            name_en: "RAM",
            name_ar: "الذاكرة العشوائية",
            value_en: "6 GB",
            value_ar: "6 جيجابايت",
          },
          {
            name_en: "Battery",
            name_ar: "البطارية",
            value_en: "3349 mAh",
            value_ar: "3349 مللي أمبير",
          },
          {
            name_en: "Screen Size",
            name_ar: "حجم الشاشة",
            value_en: "6.1 inches",
            value_ar: "6.1 بوصة",
          },
          {
            name_en: "Screen Type",
            name_ar: "نوع الشاشة",
            value_en: "Super Retina XDR OLED",
            value_ar: "Super Retina XDR OLED",
          },
          {
            name_en: "Camera",
            name_ar: "الكاميرا",
            value_en: "48MP + 12MP",
            value_ar: "48 + 12 ميجابكسل",
          },
          {
            name_en: "Operating System",
            name_ar: "نظام التشغيل",
            value_en: "iOS 17",
            value_ar: "iOS 17",
          },
        ],
        keyPoints: [
          {
            name_en: "Performance",
            name_ar: "الأداء",
            value_en: "A16 Bionic ultra-fast chip",
            value_ar: "شريحة A16 Bionic فائقة السرعة",
          },
          {
            name_en: "Camera",
            name_ar: "الكاميرا",
            value_en: "48MP with improved portrait mode",
            value_ar: "48 ميجابكسل مع وضع بورتريه محسّن",
          },
          {
            name_en: "Design",
            name_ar: "التصميم",
            value_en: "Rounded edges in recycled aluminum",
            value_ar: "حواف منحنية من الألومنيوم المعاد تدويره",
          },
          {
            name_en: "Security",
            name_ar: "الأمان",
            value_en: "Face ID and IP68 protection",
            value_ar: "Face ID وحماية IP68",
          },
        ],
      };

    // ⌨️ Keyboards
    case CATEGORIES.KEYBOARDS:
      return {
        attributes: [
          {
            name_en: "Brand",
            name_ar: "الماركة",
            value_en: "Logitech",
            value_ar: "لوجيتك",
          },
          {
            name_en: "Model",
            name_ar: "الموديل",
            value_en: "MX Mechanical",
            value_ar: "MX Mechanical",
          },
          {
            name_en: "Connectivity",
            name_ar: "الاتصال",
            value_en: "Bluetooth / USB-C",
            value_ar: "بلوتوث / USB-C",
          },
          {
            name_en: "Type",
            name_ar: "النوع",
            value_en: "Mechanical",
            value_ar: "ميكانيكية",
          },
          {
            name_en: "Switch Type",
            name_ar: "نوع المفتاح",
            value_en: "Tactile",
            value_ar: "ملموس",
          },
          {
            name_en: "Backlight",
            name_ar: "الإضاءة الخلفية",
            value_en: "Adjustable White",
            value_ar: "أبيض قابل للتعديل",
          },
          {
            name_en: "Battery Life",
            name_ar: "عمر البطارية",
            value_en: "15 days (or 10 months without backlight)",
            value_ar: "15 يوم (أو 10 أشهر بدون إضاءة)",
          },
        ],
        keyPoints: [
          {
            name_en: "Comfort",
            name_ar: "الراحة",
            value_en: "Ultra-stable keys for smooth typing",
            value_ar: "مفاتيح فائقة الثبات لكتابة سلسة",
          },
          {
            name_en: "Connectivity",
            name_ar: "الاتصال",
            value_en: "Multi-device via Easy-Switch",
            value_ar: "متعدد الأجهزة عبر Easy-Switch",
          },
          {
            name_en: "Design",
            name_ar: "التصميم",
            value_en: "Premium aluminum structure",
            value_ar: "هيكل ألومنيوم فاخر",
          },
        ],
      };

    // 🖱️ Mice
    case CATEGORIES.MICE:
      return {
        attributes: [
          {
            name_en: "Brand",
            name_ar: "الماركة",
            value_en: "Logitech",
            value_ar: "لوجيتك",
          },
          {
            name_en: "Model",
            name_ar: "الموديل",
            value_en: "MX Master 3S",
            value_ar: "MX Master 3S",
          },
          { name_en: "DPI", name_ar: "DPI", value_en: 8000, value_ar: 8000 },
          { name_en: "Buttons", name_ar: "الأزرار", value_en: 7, value_ar: 7 },
          {
            name_en: "Connectivity",
            name_ar: "الاتصال",
            value_en: "Bluetooth / USB-C",
            value_ar: "بلوتوث / USB-C",
          },
          {
            name_en: "Battery Life",
            name_ar: "عمر البطارية",
            value_en: "70 days",
            value_ar: "70 يوم",
          },
        ],
        keyPoints: [
          {
            name_en: "Precision",
            name_ar: "الدقة",
            value_en: "Darkfield 8000 DPI sensor",
            value_ar: "مستشعر Darkfield 8000 DPI",
          },
          {
            name_en: "Comfort",
            name_ar: "الراحة",
            value_en: "Ergonomic sculpted shape",
            value_ar: "شكل منحوت مريح",
          },
          {
            name_en: "Productivity",
            name_ar: "الإنتاجية",
            value_en: "Silent and fast Magspeed wheel",
            value_ar: "عجلة Magspeed صامتة وسريعة",
          },
        ],
      };

    // 🎧 Headphones & Accessories
    case CATEGORIES.HEADPHONES:
    case CATEGORIES.SMARTPHONE_ACCESSORIES:
      return {
        attributes: [
          {
            name_en: "Brand",
            name_ar: "الماركة",
            value_en: "Sony",
            value_ar: "سوني",
          },
          {
            name_en: "Model",
            name_ar: "الموديل",
            value_en: "WH-1000XM5",
            value_ar: "WH-1000XM5",
          },
          {
            name_en: "Type",
            name_ar: "النوع",
            value_en: "Over-ear",
            value_ar: "فوق الأذن",
          },
          {
            name_en: "Noise Cancellation",
            name_ar: "إلغاء الضوضاء",
            value_en: "Active",
            value_ar: "نشط",
          },
          {
            name_en: "Battery Life",
            name_ar: "عمر البطارية",
            value_en: "30 hours",
            value_ar: "30 ساعة",
          },
          {
            name_en: "Connectivity",
            name_ar: "الاتصال",
            value_en: "Bluetooth 5.2 / 3.5mm Jack",
            value_ar: "بلوتوث 5.2 / مقبس 3.5 ملم",
          },
        ],
        keyPoints: [
          {
            name_en: "Sound",
            name_ar: "الصوت",
            value_en: "High-resolution audio with LDAC",
            value_ar: "صوت عالي الدقة مع LDAC",
          },
          {
            name_en: "Comfort",
            name_ar: "الراحة",
            value_en: "Soft memory foam cushions",
            value_ar: "وسائد من رغوة الذاكرة الناعمة",
          },
          {
            name_en: "Technology",
            name_ar: "التقنية",
            value_en: "AI adaptive noise cancellation",
            value_ar: "إلغاء ضوضاء تكيفي بالذكاء الاصطناعي",
          },
        ],
      };

    // Default fallback
    default:
      return {
        attributes: [
          {
            name_en: "Brand",
            name_ar: "الماركة",
            value_en: "Generic",
            value_ar: "عام",
          },
          {
            name_en: "Condition",
            name_ar: "الحالة",
            value_en: "New",
            value_ar: "جديد",
          },
        ],
        keyPoints: [
          {
            name_en: "Quality",
            name_ar: "الجودة",
            value_en: "Reliable and certified product",
            value_ar: "منتج موثوق ومعتمد",
          },
        ],
      };
  }
};

// Get image by category
const getImagesByCategory = (category: string, index: number) => {
  switch (category) {
    case CATEGORIES.ANDROID_PHONES:
    case CATEGORIES.IPHONES:
      return {
        coverUrl: _smartphoneImages[index % _smartphoneImages.length],
        images: [
          _smartphoneImages[index % _smartphoneImages.length],
          _smartphoneImages[(index + 1) % _smartphoneImages.length],
          _smartphoneImages[(index + 2) % _smartphoneImages.length],
        ],
      };
    case CATEGORIES.GAMING_LAPTOPS:
    case CATEGORIES.ULTRABOOKS:
    case CATEGORIES.DESKTOP_PCS:
      return {
        coverUrl: _pcImages[index % _pcImages.length],
        images: [
          _pcImages[index % _pcImages.length],
          _pcImages[(index + 1) % _pcImages.length],
          _pcImages[(index + 2) % _pcImages.length],
        ],
      };
    case CATEGORIES.HEADPHONES:
    case CATEGORIES.SMARTPHONE_ACCESSORIES:
      return {
        coverUrl: _headPhonesImages[index % _headPhonesImages.length],
        images: [
          _headPhonesImages[index % _headPhonesImages.length],
          _headPhonesImages[(index + 1) % _headPhonesImages.length],
        ],
      };
    case CATEGORIES.KEYBOARDS:
      return {
        coverUrl: _keyboardImages[index % _keyboardImages.length],
        images: [
          _keyboardImages[index % _keyboardImages.length],
          _keyboardImages[(index + 1) % _keyboardImages.length],
        ],
      };
    case CATEGORIES.MICE:
      return {
        coverUrl: _mouseImages[index % _mouseImages.length],
        images: [_mouseImages[index % _mouseImages.length]],
      };
    default:
      return {
        coverUrl: _pcImages[0],
        images: [_pcImages[0]],
      };
  }
};

export const localizeAttributes = (
  attributes: {
    name_en: string;
    name_ar: string;
    value_en: string | boolean | number;
    value_ar: string | boolean | number;
  }[],
  locale: string = "en"
): ProductAttribute[] => {
  return attributes.map((attr) => ({
    name: locale === "ar" ? attr.name_ar : attr.name_en,
    value: locale === "ar" ? attr.value_ar : attr.value_en,
  }));
};

const generateProductsForCategory = (
  category: string,
  startIndex: number,
  count: number,
  locale: string = "en"
): Product[] => {
  const namesEn = mockProductNamesEn[category];
  const namesAr = mockProductNamesAr[category];
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
    const index = startIndex + i;
    const nameIndex = i % namesEn.length;
    const nameEn = namesEn[nameIndex];
    const nameAr = namesAr[nameIndex];
    const images = getImagesByCategory(category, i);

    const basePrice =
      category === CATEGORIES.ANDROID_PHONES || category === CATEGORIES.IPHONES
        ? 400 + Math.floor(randomNumbers[i] * 1000)
        : category === CATEGORIES.GAMING_LAPTOPS ||
          category === CATEGORIES.ULTRABOOKS ||
          category === CATEGORIES.DESKTOP_PCS
        ? 600 + Math.floor(randomNumbers[i] * 2000)
        : 30 + Math.floor(randomNumbers[i] * 300);

    const { attributes, keyPoints } = generateAttributesAndKeyPoints(category);
    const isOutOfStock = i % 15 === 0;
    const stock = isOutOfStock ? 0 : 3 + Math.floor(randomNumbers[i] * 50);
    const isBestSeller = i % 4 === 0;
    const discountPercentage = generateDiscount(index);

    const suffix =
      i > namesEn.length - 1 ? ` (${Math.floor(i / namesEn.length) + 1})` : "";

    const name = locale === "ar" ? `${nameAr}${suffix}` : `${nameEn}${suffix}`;

    const localizedAttributes = attributes
      ? localizeAttributes(attributes, locale)
      : undefined;
    const localizedKeyPoints = keyPoints
      ? localizeAttributes(keyPoints, locale)
      : undefined;

    products.push({
      productId: `prod-${index}`,
      slug: `${nameEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`,
      name,
      description:
        locale === "ar"
          ? `${nameAr} عالي الجودة مع ميزات وأداء ممتاز. مثالي للاستخدام اليومي والمهام الاحترافية.`
          : `High-quality ${nameEn} with excellent features and performance. Perfect for everyday use and professional tasks.`,
      subDescription:
        locale === "ar"
          ? `منتج فاخر بتقنية متقدمة`
          : `Premium product with advanced technology`,
      seoTitle:
        locale === "ar"
          ? `${nameAr} - اشتري أونلاين`
          : `${nameEn} - Buy Online`,
      seoDescription:
        locale === "ar"
          ? `تسوق ${nameAr} بأفضل سعر ومواصفات. منتج عالي الجودة مع ضمان.`
          : `Shop ${nameEn} with best price and features. High-quality product with warranty.`,
      price: basePrice,
      discountPercentage,
      priceSale: discountPercentage
        ? basePrice - (basePrice * discountPercentage) / 100
        : undefined,
      stock,
      coverUrl: images.coverUrl,
      images: images.images,
      categoryIds: [category],
      primaryCategoryId: category,
      warranty: 1 + (i % 3),
      isBestSeller,
      totalSold: index + 33,
      isNew: true,
      attributes: localizedAttributes,
      keyPoints: localizedKeyPoints,
      createdAt: new Date(mockDates[index % mockDates.length]),
      updatedAt: new Date("2025-10-12T12:00:00Z"),
    });
  }

  return products;
};

let randomIndex = 0;

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomValue = randomNumbers[randomIndex % randomNumbers.length];
    randomIndex++;

    const j = Math.floor(randomValue * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const allGeneratedProductsEn: Product[] = [
  ...generateProductsForCategory(CATEGORIES.KEYBOARDS, 1, 40, "en"),
  ...generateProductsForCategory(CATEGORIES.MICE, 101, 40, "en"),
  ...generateProductsForCategory(CATEGORIES.HEADPHONES, 201, 40, "en"),
  ...generateProductsForCategory(CATEGORIES.GAMING_LAPTOPS, 301, 40, "en"),
  ...generateProductsForCategory(CATEGORIES.ULTRABOOKS, 401, 40, "en"),
  ...generateProductsForCategory(CATEGORIES.DESKTOP_PCS, 501, 40, "en"),
  ...generateProductsForCategory(CATEGORIES.ANDROID_PHONES, 601, 45, "en"),
  ...generateProductsForCategory(CATEGORIES.IPHONES, 701, 35, "en"),
  ...generateProductsForCategory(
    CATEGORIES.SMARTPHONE_ACCESSORIES,
    801,
    45,
    "en"
  ),
];

const allGeneratedProductsAr: Product[] = [
  ...generateProductsForCategory(CATEGORIES.KEYBOARDS, 1, 40, "ar"),
  ...generateProductsForCategory(CATEGORIES.MICE, 101, 40, "ar"),
  ...generateProductsForCategory(CATEGORIES.HEADPHONES, 201, 40, "ar"),
  ...generateProductsForCategory(CATEGORIES.GAMING_LAPTOPS, 301, 40, "ar"),
  ...generateProductsForCategory(CATEGORIES.ULTRABOOKS, 401, 40, "ar"),
  ...generateProductsForCategory(CATEGORIES.DESKTOP_PCS, 501, 40, "ar"),
  ...generateProductsForCategory(CATEGORIES.ANDROID_PHONES, 601, 45, "ar"),
  ...generateProductsForCategory(CATEGORIES.IPHONES, 701, 35, "ar"),
  ...generateProductsForCategory(
    CATEGORIES.SMARTPHONE_ACCESSORIES,
    801,
    45,
    "ar"
  ),
];

// Export function that returns products based on locale
export const getMockProducts = (locale: string = "en"): Product[] => {
  const products =
    locale === "ar" ? allGeneratedProductsAr : allGeneratedProductsEn;
  return shuffleArray(products);
};
export const mockProducts: Product[] = shuffleArray(allGeneratedProductsEn);

// Helper function to find category by slug
export const findCategoryBySlug = (slug: string) => {
  for (const category of _mockCategories) {
    if (category.slug === slug) return category;
    if (category.children) {
      const child = category.children.find((c) => c.slug === slug);
      if (child) return child;
    }
  }
  return null;
};

// Utility functions
export const getProductById = (
  productId: string,
  locale: string = "en"
): Product | undefined => {
  const products = getMockProducts(locale);
  return products.find((p) => p.productId === productId);
};

export const getProductBySlug = (
  productSlug: string,
  locale: string = "en"
): Product | undefined => {
  const products = getMockProducts(locale);
  return products.find((p) => p.slug === productSlug);
};

export const getProductsByCategory = (
  categoryId: string,
  locale: string = "en"
): Product[] => {
  const products = getMockProducts(locale);
  return products.filter((p) => p.categoryIds.includes(categoryId));
};

export const getProductsByCategorySlug = (
  slug: string,
  locale: string = "en"
): Product[] => {
  const category = findCategoryBySlug(slug);
  if (!category) return [];

  const products = getMockProducts(locale);
  let filteredProducts = products.filter((p) =>
    p.categoryIds.includes(category.categoryId)
  );

  if (category.children && category.children.length > 0) {
    const childProducts = category.children.flatMap((child) =>
      products.filter((p) => p.categoryIds.includes(child.categoryId))
    );
    filteredProducts = [...filteredProducts, ...childProducts];
  }

  return shuffleArray(filteredProducts);
};

export const getBestSellerProducts = (locale: string = "en"): Product[] => {
  const products = getMockProducts(locale);
  return products.filter((p) => p.isBestSeller === true);
};

export const getPromotionProducts = (locale: string = "en"): Product[] => {
  const products = getMockProducts(locale);
  return products.filter((p) => p.discountPercentage !== undefined);
};

// ProductCardItem versions - with locale support
export const getProductCardItems = (
  products: Product[],
  locale: string = "en" // Keep for consistency but not needed anymore
): ProductCardItem[] => {
  return products.map((product) => {
    const discount = product.discountPercentage;
    const priceSale =
      discount && discount > 0
        ? product.price - (product.price * discount) / 100
        : product.price;

    const discountPercentage = discount && discount > 0 ? discount : 0;

    return {
      productId: product.productId,
      name: product.name,
      price: product.price,
      priceSale,
      stock: product.stock,
      slug: product.slug,
      ...(discountPercentage > 0 && { discountPercentage }),
      coverUrl: product.coverUrl,
      isNew: product.isNew,
      createdAt: product.createdAt,
      categoryIds: product.categoryIds,
      totalSold: product.totalSold,
    };
  });
};

export const getProductCardItemsByCategory = (
  categoryId: string,
  locale: string = "en"
): ProductCardItem[] => {
  const products = getProductsByCategory(categoryId, locale);
  return getProductCardItems(products, locale);
};

export const getProductCardItemsByCategorySlug = (
  slug: string,
  locale: string = "en"
): ProductCardItem[] => {
  const products = getProductsByCategorySlug(slug, locale);
  return getProductCardItems(products, locale);
};

export const getBestSellerProductCardItems = (
  locale: string = "en"
): ProductCardItem[] => {
  const products = getBestSellerProducts(locale); // Add locale here
  return getProductCardItems(products, locale);
};

export const getPromotionProductCardItems = (
  locale: string = "en"
): ProductCardItem[] => {
  const products = getPromotionProducts(locale); // Add locale here
  return getProductCardItems(products, locale);
};

// Best offers for homepage
export const _mockBestOfferProducts = (
  locale: string = "en"
): ProductCardItem[] => {
  const products = getMockProducts(locale); // Changed from mockProducts
  return getProductCardItems(
    products.filter((p) => p.discountPercentage !== undefined).slice(0, 12),
    locale
  );
};

export const _mockBestSellersProducts = (
  locale: string = "en"
): ProductCardItem[] => {
  const products = getMockProducts(locale); // Changed from mockProducts
  return getProductCardItems(
    products.filter((p) => p.isBestSeller === true).slice(0, 12),
    locale
  );
};

// Raw hero products data
const _heroMockProductsData: ProductBackend[] = [
  {
    productId: "prod-hero-1",
    slug: "lcd-backlit",
    price: 1200,
    discountPercentage: 15,
    priceSale: 1200 - (1200 * 15) / 100,
    stock: 15,
    coverUrl: "/images/lcd/lcd.png",
    images: [],
    categoryIds: ["2-3"],
    primaryCategoryId: "2-3",
    warranty: 2,
    isBestSeller: true,
    totalSold: 33,
    createdAt: new Date("2025-10-12T12:00:00Z"),
    updatedAt: new Date("2025-10-12T12:00:00Z"),
    translations: [
      {
        locale: "en",
        name: "LCD Backlit Monitor",
        description:
          "High-quality LED-backlit LCD monitor with 1080p resolution and 16:9 aspect ratio. Perfect for gaming and professional work.",
        subDescription:
          "Computer Monitors LED-backlit LCD 1080p High-definition television 16:9",
        seoTitle: "LCD Backlit Monitor - Buy Online",
        seoDescription:
          "Shop LCD backlit monitor with 1080p resolution. High-quality display for work and entertainment.",
      },
      {
        locale: "ar",
        name: "شاشة LCD بإضاءة خلفية",
        description:
          "شاشة LCD عالية الجودة بإضاءة خلفية LED بدقة 1080p ونسبة عرض إلى ارتفاع 16:9. مثالية للألعاب والعمل الاحترافي.",
        subDescription:
          "شاشات كمبيوتر LED-backlit LCD 1080p تلفزيون عالي الدقة 16:9",
        seoTitle: "شاشة LCD بإضاءة خلفية - اشتري أونلاين",
        seoDescription:
          "تسوق شاشة LCD بإضاءة خلفية بدقة 1080p. عرض عالي الجودة للعمل والترفيه.",
      },
    ],
  },
  {
    productId: "prod-hero-2",
    slug: "samsung-galaxy-s25",
    price: 1100,
    discountPercentage: 15,
    priceSale: 1100 - (1100 * 15) / 100,
    stock: 20,
    coverUrl: "/images/tel/tel1.png",
    images: [
      "https://images.pexels.com/photos/30909359/pexels-photo-30909359.jpeg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/14979021/pexels-photo-14979021.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["3-1"],
    primaryCategoryId: "3-1",
    warranty: 1,
    isBestSeller: false,
    totalSold: 44,
    bgGradient: "from-orange-50 via-pink-50 to-blue-50",
    createdAt: new Date("2025-10-12T12:00:00Z"),
    updatedAt: new Date("2025-10-12T12:00:00Z"),
    translations: [
      {
        locale: "en",
        name: "Samsung Galaxy S25",
        description:
          "Powerful Samsung phone with cutting-edge features, incredible camera, and lightning-fast performance.",
        subDescription: "Powerful Samsung phone with cutting-edge features.",
        seoTitle: "Samsung Galaxy S25 - Buy Online",
        seoDescription:
          "Shop Samsung Galaxy S25 with best price. Powerful Android phone with amazing features.",
      },
      {
        locale: "ar",
        name: "سامسونج جالاكسي S25",
        description:
          "هاتف سامسونج قوي بمميزات متطورة وكاميرا رائعة وأداء فائق السرعة.",
        subDescription: "هاتف سامسونج قوي بمميزات متطورة.",
        seoTitle: "سامسونج جالاكسي S25 - اشتري أونلاين",
        seoDescription:
          "تسوق سامسونج جالاكسي S25 بأفضل سعر. هاتف أندرويد قوي بمميزات رائعة.",
      },
    ],
  },
  {
    productId: "prod-hero-3",
    slug: "asus-vivobook",
    price: 250,
    discountPercentage: 15,
    priceSale: 250 - (250 * 15) / 100,
    stock: 30,
    coverUrl: "/images/pc/pc.png",
    images: [
      "https://images.pexels.com/photos/5202961/pexels-photo-5202961.jpeg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["2-2"],
    primaryCategoryId: "2-2",
    warranty: 1,
    isBestSeller: true,
    totalSold: 25,
    bgGradient: "from-yellow-50 via-yellow-100 to-blue-100",
    createdAt: new Date("2025-10-12T12:00:00Z"),
    updatedAt: new Date("2025-10-12T12:00:00Z"),
    translations: [
      {
        locale: "en",
        name: "Asus Vivobook",
        description:
          "Asus Vivobook 15 X1504VA-NJ446W with Intel i5-1335U processor. Perfect laptop for work and entertainment.",
        subDescription: "Asus Vivobook 15 X1504VA-NJ446W – Intel i5-1335U",
        seoTitle: "Asus Vivobook 15 - Buy Online",
        seoDescription:
          "Shop Asus Vivobook 15 with Intel i5 processor. Reliable laptop for everyday tasks.",
      },
      {
        locale: "ar",
        name: "أسوس فيفوبوك",
        description:
          "أسوس فيفوبوك 15 X1504VA-NJ446W مع معالج Intel i5-1335U. لابتوب مثالي للعمل والترفيه.",
        subDescription: "أسوس فيفوبوك 15 X1504VA-NJ446W – Intel i5-1335U",
        seoTitle: "أسوس فيفوبوك 15 - اشتري أونلاين",
        seoDescription:
          "تسوق أسوس فيفوبوك 15 مع معالج Intel i5. لابتوب موثوق للمهام اليومية.",
      },
    ],
  },
  {
    productId: "prod-hero-4",
    slug: "hp-elitedesk",
    price: 2500,
    discountPercentage: 15,
    priceSale: 2500 - (2500 * 15) / 100,
    stock: 5,
    coverUrl: "/images/pc/pc1.png",
    images: [
      "https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/5202961/pexels-photo-5202961.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["2-3"],
    primaryCategoryId: "2-3",
    warranty: 3,
    isBestSeller: true,
    totalSold: 44,
    bgGradient: "from-purple-50 via-blue-50 to-cyan-50",
    createdAt: new Date("2025-10-12T12:00:00Z"),
    updatedAt: new Date("2025-10-12T12:00:00Z"),
    translations: [
      {
        locale: "en",
        name: 'HP Elitedesk 600 G3 Mini"',
        description:
          "HP Elitedesk 600 G3 Mini with Core i5 6th Gen, 8GB RAM, and 256GB SSD. Compact and powerful desktop PC.",
        subDescription:
          "HP Elitedesk 600 G3 Mini Core i5 - 6th Gen - 8GB, 256GB SSD",
        seoTitle: "HP Elitedesk 600 G3 Mini - Buy Online",
        seoDescription:
          "Shop HP Elitedesk 600 G3 Mini desktop. Powerful and compact PC for office work.",
      },
      {
        locale: "ar",
        name: 'إتش بي إليت ديسك 600 G3 ميني"',
        description:
          "إتش بي إليت ديسك 600 G3 ميني مع Core i5 الجيل السادس، 8 جيجابايت رام، و256 جيجابايت SSD. حاسوب مكتبي مدمج وقوي.",
        subDescription:
          "إتش بي إليت ديسك 600 G3 ميني Core i5 - الجيل السادس - 8 جيجابايت، 256 جيجابايت SSD",
        seoTitle: "إتش بي إليت ديسك 600 G3 ميني - اشتري أونلاين",
        seoDescription:
          "تسوق إتش بي إليت ديسك 600 G3 ميني. حاسوب مكتبي قوي ومدمج للعمل المكتبي.",
      },
    ],
  },
  {
    productId: "prod-hero-5",
    slug: "xiaomi-redmi",
    price: 80,
    discountPercentage: 10,
    priceSale: 80 - (80 * 10) / 100,
    stock: 50,
    coverUrl: "/images/tel/tel3.png",
    images: [
      "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["3-1"],
    primaryCategoryId: "3-1",
    warranty: 2,
    isBestSeller: false,
    totalSold: 64,
    bgGradient: "from-orange-50 via-pink-50 to-blue-50",
    createdAt: new Date("2025-10-12T12:00:00Z"),
    updatedAt: new Date("2025-10-12T12:00:00Z"),
    translations: [
      {
        locale: "en",
        name: "XIAOMI Redmi 15C",
        description:
          'XIAOMI Redmi 15C with 6.9" display, 4GB RAM, and 128GB storage. Affordable smartphone with great features.',
        subDescription: 'XIAOMI Redmi 15C 6.9" – 4GB + 128GB',
        seoTitle: "XIAOMI Redmi 15C - Buy Online",
        seoDescription:
          "Shop XIAOMI Redmi 15C with large display. Affordable phone with excellent value.",
      },
      {
        locale: "ar",
        name: "شاومي ريدمي 15C",
        description:
          "شاومي ريدمي 15C مع شاشة 6.9 بوصة، 4 جيجابايت رام، و128 جيجابايت تخزين. هاتف ذكي بسعر مناسب ومميزات رائعة.",
        subDescription: 'شاومي ريدمي 15C 6.9" – 4 جيجابايت + 128 جيجابايت',
        seoTitle: "شاومي ريدمي 15C - اشتري أونلاين",
        seoDescription:
          "تسوق شاومي ريدمي 15C مع شاشة كبيرة. هاتف بسعر مناسب وقيمة ممتازة.",
      },
    ],
  },
];

// _heroMockProducts - Returns hero products with translations based on locale
export const _heroMockProducts = (locale: string = "en"): Product[] => {
  return _heroMockProductsData.map((backendProduct): Product => {
    const translation =
      backendProduct.translations.find((t) => t.locale === locale) ||
      backendProduct.translations[0];
    const { translations, ...rest } = backendProduct;

    // Helper to map attributes based on locale
    const mapAttributes = (
      attributes?: ProductAttributeBackend[]
    ): ProductAttribute[] | undefined => {
      if (!attributes) return undefined;
      return attributes.map((attr) => ({
        name: locale === "ar" ? attr.name_ar : attr.name_en,
        value: locale === "ar" ? attr.value_ar : attr.value_en,
      }));
    };

    return {
      ...rest,
      name: translation.name,
      description: translation.description,
      subDescription: translation.subDescription,
      seoTitle: translation.seoTitle,
      seoDescription: translation.seoDescription,
      keyPoints: mapAttributes(backendProduct.keyPoints),
      attributes: mapAttributes(backendProduct.attributes),
    };
  });
};

export function getBestOfferProductsPaginated(
  locale: string,
  page: number,
  limit: number
) {
  const products = getMockProducts(locale)
    .filter((p) => p.discountPercentage);

  const mapped = getProductCardItems(products, locale);

  return paginate(mapped, page, limit);
}

export function getProductCardItemsByCategorySlugPaginated(
  locale: string,
  slug: string,
  page: number,
  limit: number
) {
  const products = getProductCardItemsByCategorySlug(slug, locale);

  return paginate(products, page, limit);
}