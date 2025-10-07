import type { Product, ProductVariant, Discount } from "../types/product";
import { _mock } from "./_mock";

// Stock options
export const PRODUCT_STOCK_OPTIONS = [
  { value: "in stock", label: "In stock" },
  { value: "out of stock", label: "Out of stock" },
];

// Noms par catégorie
const mockProductNames: Record<string, string[]> = {
  "Mobile Phones": [
    "iPhone 15 Pro",
    "Samsung Galaxy S25",
    "Xiaomi Redmi Note 14",
  ],
  "Phone Accessories": [
    "AirPods Pro",
    "Bose QuietComfort Earbuds",
    "Anker PowerCore 20000",
  ],
  Computers: ['MacBook Pro 16"', "Dell XPS 15", "HP Spectre x360"],
};

// Générateur simple de discount
const generateDiscount = (index: number): Discount | undefined => {
  if (index % 3 === 0) {
    return {
      type: "percentage",
      value: 10 + (index % 4) * 5,
      startAt: new Date().toISOString(),
      endAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 jours
    };
  }
  return undefined;
};

// Générer des variantes mock
const generateVariants = (
  productId: string,
  index: number
): ProductVariant[] => {
  return [
    {
      id: `var-${productId}-1`,
      productId,
      name: "256GB, Noir",
      price: 50 + index * 10,
      stock: 10 + index,
      attributes: { storage: "256GB", color: "Black" },
    },
    {
      id: `var-${productId}-2`,
      productId,
      name: "512GB, Blanc",
      price: 60 + index * 10,
      stock: 5 + index,
      attributes: { storage: "512GB", color: "White" },
    },
  ];
};

// Générer produits mock
export const mockProducts: Product[] = Array.from({ length: 12 }).map(
  (_, i) => {
    const categories = Object.keys(mockProductNames);
    const category = categories[i % categories.length];
    const name =
      mockProductNames[category][i % mockProductNames[category].length];

    const isOutOfStock = i % 5 === 0;
    const stock = isOutOfStock ? 0 : 5 + (i % 10);

    return {
      productId: `prod-${i + 1}`,
      name,
      slug: name.toLowerCase().replace(/\s/g, "-"),
      description: _mock.deviceDescription(i),
      price: 100 + i * 20,
      discount: generateDiscount(i),
      stock,
      coverUrl: `https://picsum.photos/300/300?random=${i + 1}`,
      images: [
        `https://picsum.photos/300/300?random=${i + 1}`,
        `https://picsum.photos/300/300?random=${i + 2}`,
      ],
      categoryIds: [category],
      warranty: 1 + (i % 3),
      bestSeller: i % 3 === 0,
      variants: generateVariants(`prod-${i + 1}`, i),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
);

// _heroMockProducts
export const _heroMockProducts: Product[] = [
  {
    productId: "prod-1",
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
    categoryIds: ["mobile-phones"],
    warranty: 2,
    bestSeller: true,
    variants: [
      {
        id: "var-1",
        productId: "prod-1",
        name: "256GB, Black",
        price: 1200,
        stock: 10,
        attributes: { storage: "256GB", color: "Black" },
      },
      {
        id: "var-2",
        productId: "prod-1",
        name: "512GB, Silver",
        price: 1350,
        stock: 5,
        attributes: { storage: "512GB", color: "Silver" },
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-2",
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
    categoryIds: ["mobile-phones"],
    warranty: 1,
    bestSeller: false,
    bgGradient: "from-orange-50 via-pink-50 to-blue-50",
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-3",
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
    categoryIds: ["phone-accessories"],
    warranty: 1,
    bestSeller: true,
    bgGradient: "from-yellow-50 via-yellow-100 to-blue-100",
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-4",
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
    categoryIds: ["computers"],
    warranty: 3,
    bestSeller: true,
    bgGradient: "from-purple-50 via-blue-50 to-cyan-50",
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: "prod-5",
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
    categoryIds: ["phone-accessories"],
    warranty: 2,
    bestSeller: false,
    bgGradient: "from-orange-50 via-pink-50 to-blue-50",
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
