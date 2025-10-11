import type {
  Product,
  ProductAttribute,
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
const generateDiscount = (index: number): number | undefined => {
  if (index % 3 === 0) {
    return [10, 15, 20, 25, 30][index % 5];
  }
  return undefined;
};

export const generateAttributesAndKeyPoints = (
  category: string
): { attributes?: ProductAttribute; keyPoints?: ProductAttribute } => {
  switch (category) {
    // 💻 Laptops (Gaming, Ultrabooks, etc.)
    case CATEGORIES.GAMING_LAPTOPS:
    case CATEGORIES.ULTRABOOKS:
    case CATEGORIES.DESKTOP_PCS:
      return {
        attributes: {
          Marque: "Lenovo",
          État: "Neuf",
          "Modèle du Processeur": "AMD Ryzen 5",
          "Type de Processeur": "Ryzen 5 7520U",
          "Vitesse de Processeur": "2,8 GHz (jusqu’à 4,3 GHz en mode boost)",
          "Taille de la Mémoire": "16 Go",
          "Type de Mémoire": "LPDDR5",
          "Disque Dur": "SSD 512 Go",
          "Disque Secondaire": "Aucun",
          "Type de Disque": "SSD (Solid State Drive)",
          "Format de Disque": "M.2 NVMe",
          "Graphique Intégrée": "AMD Radeon™ 610M",
          "Taille de l'Écran": "15.6 Pouces",
          Résolution: "1920 x 1080 pixels",
          "Type de Dalle": "TN",
          "Écran Tactile": "Non",
          "Réseau Sans-fil": "Bluetooth, WiFi",
          "WebCam Intégrée": "Oui",
          "Haut-Parleurs Intégrés": "Oui",
          "Norme du Clavier": "AZERTY",
          Couleur: "Cloud Grey",
          Batterie: "3 cellules 47Whr",
          "Système d’Exploitation": "Windows 11 Famille",
        },
        keyPoints: {
          CPU: "AMD Ryzen™ 5 7520U",
          RAM: "16GB LPDDR5-5500",
          Stockage: "512GB SSD M.2 NVMe 4.0×4",
          GPU: "AMD Radeon™ 610M",
          Écran: "15.6″ TN Full-HD (1920×1080)",
          Communication: "Wi-Fi + Bluetooth",
          Clavier: "AZERTY Français",
          Système: "Windows 11 Famille",
          Cadeau: "Sacoche 15.6″ Casual Toploader",
        },
      };

    // 📱 Téléphones Android
    case CATEGORIES.ANDROID_PHONES:
      return {
        attributes: {
          Marque: "Samsung",
          Modèle: "Galaxy A55",
          "Capacité de Stockage": "256 Go",
          RAM: "8 Go",
          Batterie: "5000 mAh",
          "Taille de l’Écran": "6.6 pouces",
          "Type d’Écran": "Super AMOLED",
          Résolution: "1080 x 2340 pixels",
          AppareilPhoto: "50MP + 12MP + 5MP",
          "AppareilPhoto Avant": "32MP",
          Système: "Android 14",
          Couleur: "Noir Graphite",
        },
        keyPoints: {
          Performance: "Processeur Exynos 1480 octa-core",
          Écran: "Super AMOLED 120Hz immersif",
          AppareilPhoto: "50MP avec stabilisation optique",
          Batterie: "Autonomie de 2 jours + charge rapide 25W",
          Design: "Finition en métal premium",
        },
      };

    // 🍏 iPhones
    case CATEGORIES.IPHONES:
      return {
        attributes: {
          Marque: "Apple",
          Modèle: "iPhone 15",
          "Capacité de Stockage": "128 Go",
          RAM: "6 Go",
          Batterie: "3349 mAh",
          "Taille de l’Écran": "6.1 pouces",
          "Type d’Écran": "Super Retina XDR OLED",
          Résolution: "1179 x 2556 pixels",
          AppareilPhoto: "48MP + 12MP",
          "AppareilPhoto Avant": "12MP",
          Système: "iOS 17",
          Couleur: "Bleu",
        },
        keyPoints: {
          Performance: "Puce A16 Bionic ultra-rapide",
          AppareilPhoto: "48MP avec mode portrait amélioré",
          Design: "Bords arrondis en aluminium recyclé",
          Sécurité: "Face ID et protection IP68",
          Écosystème: "Compatible MagSafe et AirPods",
        },
      };

    // ⌨️ Claviers
    case CATEGORIES.KEYBOARDS:
      return {
        attributes: {
          Marque: "Logitech",
          Modèle: "MX Mechanical",
          Connectivité: "Bluetooth / USB-C",
          Type: "Mécanique",
          "Type d’Interrupteur": "Tactile",
          Rétroéclairage: "Blanc ajustable",
          Autonomie: "15 jours (ou 10 mois sans rétroéclairage)",
          Compatibilité: "Windows / macOS / Linux",
        },
        keyPoints: {
          Confort: "Touches ultra-stables pour frappe fluide",
          Connectivité: "Multi-device via Easy-Switch",
          Design: "Structure aluminium haut de gamme",
        },
      };

    // 🖱️ Souris
    case CATEGORIES.MICE:
      return {
        attributes: {
          Marque: "Logitech",
          Modèle: "MX Master 3S",
          DPI: "8000",
          Boutons: 7,
          Connectivité: "Bluetooth / USB-C",
          Autonomie: "70 jours",
          Couleur: "Graphite",
        },
        keyPoints: {
          Précision: "Capteur Darkfield 8000 DPI",
          Confort: "Forme ergonomique sculptée",
          Productivité: "Molette Magspeed silencieuse et rapide",
        },
      };

    // 🎧 Casques
    case CATEGORIES.HEADPHONES:
      return {
        attributes: {
          Marque: "Sony",
          Modèle: "WH-1000XM5",
          Type: "Over-ear",
          "Réduction de Bruit": "Active",
          Autonomie: "30 heures",
          Connectivité: "Bluetooth 5.2 / Jack 3.5mm",
          Poids: "250g",
          Couleur: "Noir Mat",
        },
        keyPoints: {
          Son: "Audio haute résolution avec LDAC",
          Confort: "Coussinets doux en mousse à mémoire",
          Technologie: "Annulation de bruit adaptative IA",
        },
      };

    // 🖥️ Par défaut (autres catégories)
    default:
      return {
        attributes: { Marque: "Generic", État: "Neuf" },
        keyPoints: { Qualité: "Produit fiable et certifié" },
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
    const { attributes, keyPoints } = generateAttributesAndKeyPoints(category);
    const isOutOfStock = i % 15 === 0;
    const stock = isOutOfStock ? 0 : 3 + Math.floor(Math.random() * 50);
    const isisBestSeller = i % 4 === 0;
    const discountPercentage = generateDiscount(index);

    products.push({
      productId: `prod-${index}`,
      name: `${name} ${
        i > names.length - 1 ? `(${Math.floor(i / names.length) + 1})` : ""
      }`,
      slug: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`,
      description: `High-quality ${name} with excellent features and performance. Perfect for everyday use and professional tasks.`,
      subDescription: `Premium product with advanced technology`,
      price: basePrice,
      discountPercentage,
      priceSale: discountPercentage
        ? basePrice - (basePrice * discountPercentage) / 100
        : undefined,
      stock,
      coverUrl: images.coverUrl,
      images: images.images,
      categoryIds: [category],
      primaryCategoryId: category[0],
      warranty: 1 + (i % 3),
      isBestSeller: isisBestSeller,
      isNew: Math.random() > 0.7,
      attributes,
      keyPoints,
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

export const getProductBySlug = (productSlug: string): Product | undefined => {
  return mockProducts.find((p) => p.slug === productSlug);
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

export const getisBestSellerProducts = (): Product[] => {
  return mockProducts.filter((p) => p.isBestSeller === true);
};

export const getPromotionProducts = (): Product[] => {
  return mockProducts.filter((p) => p.discountPercentage !== undefined);
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

export const getisBestSellerProductCardItems = (): ProductCardItem[] => {
  const products = getisBestSellerProducts();
  return getProductCardItems(products);
};

export const getPromotionProductCardItems = (): ProductCardItem[] => {
  const products = getPromotionProducts();
  return getProductCardItems(products);
};

export const getProductCardItems = (products: Product[]): ProductCardItem[] => {
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
      slug: product.slug,
      ...(discountPercentage > 0 && { discountPercentage }),
      coverUrl: product.coverUrl,
      isNew: Math.random() > 0.7,
    };
  });
};

// Best offers for homepage
export const _mockBestOfferProducts: ProductCardItem[] = getProductCardItems(
  mockProducts.filter((p) => p.discountPercentage !== undefined).slice(0, 12)
);

export const _mockBestSellersProducts: ProductCardItem[] = getProductCardItems(
  mockProducts.filter((p) => p.isBestSeller === true).slice(0, 12)
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
    discountPercentage: 15,
    priceSale: 1200 - (1200 * 15) / 100,
    stock: 15,
    coverUrl: "/images/lcd/lcd.png",
    images: [],
    categoryIds: ["2-3"], // Desktop PCs
    primaryCategoryId: "2-3",
    warranty: 2,
    isBestSeller: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-hero-2",
    name: "Samsung Galaxy S25",
    slug: "samsung-galaxy-s25",
    subDescription: "Powerful Samsung phone with cutting-edge features.",
    price: 1100,
    discountPercentage: 15,
    priceSale: 1100 - (1100 * 15) / 100,
    stock: 20,
    coverUrl: "/images/tel/tel1.png",
    images: [
      "https://images.pexels.com/photos/30909359/pexels-photo-30909359.jpeg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/14979021/pexels-photo-14979021.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["3-1"], // Android Phones
    primaryCategoryId: "3-1",
    warranty: 1,
    isBestSeller: false,
    bgGradient: "from-orange-50 via-pink-50 to-blue-50",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-hero-3",
    name: "Asus Vivobook",
    slug: "asus-vivobook",
    subDescription: "Asus Vivobook 15 X1504VA-NJ446W – Intel i5-1335U",
    price: 250,
    discountPercentage: 15,
    priceSale: 250 - (250 * 15) / 100,
    stock: 30,
    coverUrl: "/images/pc/pc.png",
    images: [
      "https://images.pexels.com/photos/5202961/pexels-photo-5202961.jpeg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["2-2"], // Ultrabooks
    primaryCategoryId: "2-2",
    warranty: 1,
    isBestSeller: true,
    bgGradient: "from-yellow-50 via-yellow-100 to-blue-100",
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
    discountPercentage: 15,
    priceSale: 2500 - (2500 * 15) / 100,
    stock: 5,
    coverUrl: "/images/pc/pc1.png",
    images: [
      "https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/5202961/pexels-photo-5202961.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["2-3"], // Desktop PCs
    primaryCategoryId: "2-3",
    warranty: 3,
    isBestSeller: true,
    bgGradient: "from-purple-50 via-blue-50 to-cyan-50",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-hero-5",
    name: "XIAOMI Redmi",
    slug: "xiaomi-redmi",
    subDescription: 'XIAOMI Redmi 15C 6.9" – 4GB + 128GB',
    price: 80,
    discountPercentage: 10,
    priceSale: 80 - (80 * 10) / 100,
    stock: 50,
    coverUrl: "/images/tel/tel3.png",
    images: [
      "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&",
      "https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&",
    ],
    categoryIds: ["3-1"], // Android Phones
    primaryCategoryId: "3-1",
    warranty: 2,
    isBestSeller: false,
    bgGradient: "from-orange-50 via-pink-50 to-blue-50",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
