import type {
  Product,
  ProductVariant,
  Discount,
  ProductCardItem,
} from "../types/product";
import { _mockCategories } from "./_category";
import { _mock } from "./_mock";
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

const getCategoryIdBySlug = (slug: string): string | undefined => {
  for (const cat of _mockCategories) {
    if (cat.slug === slug) return cat.categoryId;
    if (cat.children) {
      const child = cat.children.find((c) => c.slug === slug);
      if (child) return child.categoryId;
    }
  }
  return undefined;
};

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

// Product names by category
const mockProductNames = {
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

// Generate discount
const generateDiscount = (index: number): Discount | undefined => {
  if (index % 3 === 0) {
    return {
      type: "percentage",
      value: [10, 15, 20, 25, 30][index % 5],
      startAt: new Date().toISOString(),
      endAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    };
  }
  return undefined;
};

// Generate variants
const generateVariants = (
  productId: string,
  category: string,
  basePrice: number
): ProductVariant[] => {
  if (
    category === CATEGORIES.ANDROID_PHONES ||
    category === CATEGORIES.IPHONES
  ) {
    return [
      {
        id: `var-${productId}-1`,
        productId,
        name: "128GB, Black",
        price: basePrice,
        stock: 10,
        attributes: { storage: "128GB", color: "Black" },
      },
      {
        id: `var-${productId}-2`,
        productId,
        name: "256GB, Silver",
        price: basePrice + 100,
        stock: 8,
        attributes: { storage: "256GB", color: "Silver" },
      },
      {
        id: `var-${productId}-3`,
        productId,
        name: "512GB, Gold",
        price: basePrice + 200,
        stock: 5,
        attributes: { storage: "512GB", color: "Gold" },
      },
    ];
  }

  if (
    category === CATEGORIES.GAMING_LAPTOPS ||
    category === CATEGORIES.ULTRABOOKS ||
    category === CATEGORIES.DESKTOP_PCS
  ) {
    return [
      {
        id: `var-${productId}-1`,
        productId,
        name: "8GB RAM, 256GB SSD",
        price: basePrice,
        stock: 7,
        attributes: { ram: "8GB", storage: "256GB" },
      },
      {
        id: `var-${productId}-2`,
        productId,
        name: "16GB RAM, 512GB SSD",
        price: basePrice + 200,
        stock: 6,
        attributes: { ram: "16GB", storage: "512GB" },
      },
      {
        id: `var-${productId}-3`,
        productId,
        name: "32GB RAM, 1TB SSD",
        price: basePrice + 400,
        stock: 4,
        attributes: { ram: "32GB", storage: "1TB" },
      },
    ];
  }

  return [];
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

// Generate mock products (40+ products per category)
const generateProductsForCategory = (
  category: string,
  startIndex: number,
  count: number
): Product[] => {
  const names = mockProductNames[category];
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
    const index = startIndex + i;
    const nameIndex = i % names.length;
    const name = names[nameIndex];
    const images = getImagesByCategory(category, i);

    const basePrice =
      category === CATEGORIES.ANDROID_PHONES || category === CATEGORIES.IPHONES
        ? 400 + Math.floor(Math.random() * 1000)
        : category === CATEGORIES.GAMING_LAPTOPS ||
          category === CATEGORIES.ULTRABOOKS ||
          category === CATEGORIES.DESKTOP_PCS
        ? 600 + Math.floor(Math.random() * 2000)
        : 30 + Math.floor(Math.random() * 300);

    const isOutOfStock = i % 15 === 0;
    const stock = isOutOfStock ? 0 : 3 + Math.floor(Math.random() * 50);
    const isBestSeller = i % 4 === 0;
    const discount = generateDiscount(index);

    products.push({
      productId: `prod-${index}`,
      name: `${name} ${
        i > names.length - 1 ? `(${Math.floor(i / names.length) + 1})` : ""
      }`,
      slug: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`,
      description: `High-quality ${name} with excellent features and performance. Perfect for everyday use and professional tasks.`,
      subDescription: `Premium product with advanced technology`,
      price: basePrice,
      discount,
      stock,
      coverUrl: images.coverUrl,
      images: images.images,
      categoryIds: [category],
      warranty: 1 + (i % 3),
      bestSeller: isBestSeller,
      variants: generateVariants(`prod-${index}`, category, basePrice),
      createdAt: new Date(
        Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
      ),
      updatedAt: new Date(),
    });
  }

  return products;
};

// Helper function to shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Generate all products - Mixed categories
const allGeneratedProducts: Product[] = [
  // Peripherals
  ...generateProductsForCategory(CATEGORIES.KEYBOARDS, 1, 40),
  ...generateProductsForCategory(CATEGORIES.MICE, 101, 40),
  ...generateProductsForCategory(CATEGORIES.HEADPHONES, 201, 40),

  // Laptops/PCs
  ...generateProductsForCategory(CATEGORIES.GAMING_LAPTOPS, 301, 40),
  ...generateProductsForCategory(CATEGORIES.ULTRABOOKS, 401, 40),
  ...generateProductsForCategory(CATEGORIES.DESKTOP_PCS, 501, 40),

  // Smartphones
  ...generateProductsForCategory(CATEGORIES.ANDROID_PHONES, 601, 45),
  ...generateProductsForCategory(CATEGORIES.IPHONES, 701, 35),
  ...generateProductsForCategory(CATEGORIES.SMARTPHONE_ACCESSORIES, 801, 45),
];

// Shuffle the products for better mix
export const mockProducts: Product[] = shuffleArray(allGeneratedProducts);

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
export const getProductById = (productId: string): Product | undefined => {
  return mockProducts.find((p) => p.productId === productId);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return mockProducts.filter((p) => p.categoryIds.includes(categoryId));
};

export const getProductsByCategorySlug = (slug: string): Product[] => {
  const category = findCategoryBySlug(slug);
  if (!category) return [];

  // Get products for this category
  let products = getProductsByCategory(category.categoryId);

  // If category has children, also get products from all subcategories
  if (category.children && category.children.length > 0) {
    const childProducts = category.children.flatMap((child) =>
      getProductsByCategory(child.categoryId)
    );
    products = [...products, ...childProducts];
  }

  // Shuffle products to mix categories
  return shuffleArray(products);
};

export const getBestSellerProducts = (): Product[] => {
  return mockProducts.filter((p) => p.bestSeller === true);
};

export const getPromotionProducts = (): Product[] => {
  return mockProducts.filter((p) => p.discount !== undefined);
};

// ProductCardItem versions
export const getProductCardItemsByCategory = (
  categoryId: string
): ProductCardItem[] => {
  const products = getProductsByCategory(categoryId);
  return getProductCardItems(products);
};

export const getProductCardItemsByCategorySlug = (
  slug: string
): ProductCardItem[] => {
  const products = getProductsByCategorySlug(slug);
  return getProductCardItems(products);
};

export const getBestSellerProductCardItems = (): ProductCardItem[] => {
  const products = getBestSellerProducts();
  return getProductCardItems(products);
};

export const getPromotionProductCardItems = (): ProductCardItem[] => {
  const products = getPromotionProducts();
  return getProductCardItems(products);
};

export const getProductCardItems = (products: Product[]): ProductCardItem[] => {
  return products.map((product) => {
    const discount = product.discount;
    const priceSale =
      discount && discount.value > 0
        ? product.price - (product.price * discount.value) / 100
        : product.price;

    const discountPercentage =
      discount && discount.value > 0 ? discount.value : 0;

    return {
      productId: product.productId,
      name: product.name,
      price: product.price,
      priceSale,
      ...(discountPercentage > 0 && { discountPercentage }),
      coverUrl: product.coverUrl,
      new: Math.random() > 0.7,
    };
  });
};

// Best offers for homepage
export const _mockBestOfferProducts: ProductCardItem[] = getProductCardItems(
  mockProducts.filter((p) => p.discount !== undefined).slice(0, 12)
);

export const _mockBestSellersProducts: ProductCardItem[] = getProductCardItems(
  mockProducts.filter((p) => p.bestSeller === true).slice(0, 12)
);

// _heroMockProducts - Updated with new category IDs
export const _heroMockProducts: Product[] = [
  {
    productId: "prod-hero-1",
    name: "lcd-backlit",
    slug: "lcd-backlit",
    subDescription:
      "Computer Monitors LED-backlit LCD 1080p High-definition television 16:9",
    price: 1200,
    discount: {
      type: "percentage",
      value: 10,
      startAt: new Date().toISOString(),
      endAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    stock: 15,
    coverUrl: "/images/lcd/lcd.png",
    images: [],
    categoryIds: ["2-3"], // Desktop PCs
    warranty: 2,
    bestSeller: true,
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-hero-2",
    name: "Samsung Galaxy S25",
    slug: "samsung-galaxy-s25",
    subDescription: "Powerful Samsung phone with cutting-edge features.",
    price: 1100,
    discount: undefined,
    stock: 20,
    coverUrl: "/images/tel/tel1.png",
    images: [
      "https://images.pexels.com/photos/30909359/pexels-photo-30909359.jpeg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/14979021/pexels-photo-14979021.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["3-1"], // Android Phones
    warranty: 1,
    bestSeller: false,
    bgGradient: "from-orange-50 via-pink-50 to-blue-50",
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-hero-3",
    name: "Asus Vivobook",
    slug: "asus-vivobook",
    subDescription: "Asus Vivobook 15 X1504VA-NJ446W – Intel i5-1335U",
    price: 250,
    discount: { type: "fixed", value: 30 },
    stock: 30,
    coverUrl: "/images/pc/pc.png",
    images: [
      "https://images.pexels.com/photos/5202961/pexels-photo-5202961.jpeg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["2-2"], // Ultrabooks
    warranty: 1,
    bestSeller: true,
    bgGradient: "from-yellow-50 via-yellow-100 to-blue-100",
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-hero-4",
    name: 'Hp Elitedesk"',
    slug: "hp-elitedesk",
    subDescription:
      "Hp Elitedesk 600 G3 Mini Core i5 - 6th Gén - 8Go , 256Go SSD",
    price: 2500,
    discount: { type: "percentage", value: 15 },
    stock: 5,
    coverUrl: "/images/pc/pc1.png",
    images: [
      "https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/5202961/pexels-photo-5202961.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["2-3"], // Desktop PCs
    warranty: 3,
    bestSeller: true,
    bgGradient: "from-purple-50 via-blue-50 to-cyan-50",
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-hero-5",
    name: "XIAOMI Redmi",
    slug: "xiaomi-redmi",
    subDescription: 'XIAOMI Redmi 15C 6.9" – 4GB + 128GB',
    price: 80,
    discount: undefined,
    stock: 50,
    coverUrl: "/images/tel/tel3.png",
    images: [
      "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["3-1"], // Android Phones
    warranty: 2,
    bestSeller: false,
    bgGradient: "from-orange-50 via-pink-50 to-blue-50",
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
