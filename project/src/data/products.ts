export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'EcoFlow Cup',
    category: 'cups',
    price: 499, // ₹45 * 75 (approximate conversion)
    originalPrice: 699, // ₹60 * 75
    rating: 4.8,
    reviews: 1234,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHhhLw8RkyPjF-nGtd52lM0y8XgofEPxnNKOiGgQY-Wort52TXMqaIoqfNV08U1PXKJyQmJWVGJr5lzPgmemZe9n8bIAtXMiOnvChkuNaeufLpslpLPRFU4w',
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHhhLw8RkyPjF-nGtd52lM0y8XgofEPxnNKOiGgQY-Wort52TXMqaIoqfNV08U1PXKJyQmJWVGJr5lzPgmemZe9n8bIAtXMiOnvChkuNaeufLpslpLPRFU4w',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSg_uJU2IpPOfYthwuroav_CgrvsGRGEzG-Ldepfi7rMlv-jUs1nH2Vg7KJID7UujIofvBsYn-70_vf-ea47iFMzg3XqrKey99DubTnfirdPSGDLHRw1M6SAw',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjdMGyNIB7oLMQE6SIlGgAJaHUjTsbEYDmbvBYwYR3cXgptfsBdWSuxYju0QJQNzRcrDmvqRTzdKUZxUjAOQNkat9Ljmot7TfPzhvM8ZaEnHSleE06VQ'
    ],
    description: 'Our flagship menstrual cup made from premium medical-grade silicone. Designed for comfort and reliability, the EcoFlow Cup provides up to 12 hours of protection.',
    features: ['12hr Protection', 'Medical Grade Silicone', '10 Year Lifespan', 'Eco-Friendly', 'Easy to Clean'],
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Clear', 'Pink', 'Purple'],
    inStock: true,
    isBestseller: true
  },
  {
    id: 2,
    name: 'Reusable Sanitary Pads',
    category: 'underwear',
    price: 259, // ₹32 * 75
    originalPrice: 399, // ₹40 * 75
    rating: 4.9,
    reviews: 892,
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/377286315/GV/IE/YY/78215961/4-piece-pink-reusable-pads.jpg',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2024/1/377286315/GV/IE/YY/78215961/4-piece-pink-reusable-pads.jpg',
      'https://fabpad.in/cdn/shop/products/81eDZD_6J3S._SL1500.jpg?v=1750922735&width=1100'
    ],
    description: 'Ultra-absorbent period underwear that feels just like regular underwear. Perfect for light to heavy flow days with leak-proof protection.',
    features: ['Ultra Absorbent', 'Leak-Proof', 'Machine Washable', 'Comfortable Fit', 'Odor Control'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Nude', 'Navy'],
    inStock: true,
    isNew: true
  },
  {
    id: 3,
    name: 'Travel Kit Pro',
    category: 'accessories',
    price: 999, // ₹25 * 75
    originalPrice: 1199, // ₹35 * 75
    rating: 4.7,
    reviews: 456,
    image: 'https://caresakhi-testing.vercel.app/travel%20kit.png',
    images: [
      'https://caresakhi-testing.vercel.app/travel%20kit.png'
    ],
    description: 'Complete travel kit with sterilizer, storage pouch, and cleaning tablets. Perfect for maintaining hygiene on the go.',
    features: ['Sterilizer Included', 'Compact Design', 'Travel Friendly', 'Cleaning Tablets', 'Storage Pouch'],
    sizes: ['One Size'],
    colors: ['Pink', 'Blue', 'Green'],
    inStock: true
  },
  {
    id: 4,
    name: 'PureFlex Cup',
    category: 'cups',
    price: 3900, // ₹52 * 75
    originalPrice: 4875, // ₹65 * 75
    rating: 4.9,
    reviews: 2156,
    image: 'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Premium platinum silicone cup with extra-soft material for sensitive users. Features easy-grip stem and smooth removal.',
    features: ['Extra Soft', 'Easy Removal', 'Platinum Silicone', 'Hypoallergenic', 'Long-lasting'],
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Clear', 'Teal', 'Rose'],
    inStock: true,
    isBestseller: true
  },
  {
    id: 5,
    name: 'ActiveFlow Brief',
    category: 'underwear',
    price: 2850, // ₹38 * 75
    rating: 4.8,
    reviews: 567,
    image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'High-performance period underwear designed for active lifestyles. Moisture-wicking and breathable fabric.',
    features: ['Moisture-Wicking', 'Breathable', 'Athletic Fit', 'Quick-Dry', 'Anti-Microbial'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    inStock: true
  },
  {
    id: 6,
    name: 'Starter Kit',
    category: 'kits',
    price: 6675, // ₹89 * 75
    originalPrice: 9000, // ₹120 * 75
    rating: 4.9,
    reviews: 234,
    image: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Complete starter kit with cup, period underwear, and travel accessories. Perfect for first-time users.',
    features: ['Complete Kit', 'Beginner Friendly', 'Educational Guide', 'Multiple Products', 'Great Value'],
    sizes: ['Small Kit', 'Medium Kit', 'Large Kit'],
    colors: ['Mixed'],
    inStock: true,
    isNew: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'cups', name: 'Menstrual Cups', count: products.filter(p => p.category === 'cups').length },
  { id: 'underwear', name: 'Period Underwear', count: products.filter(p => p.category === 'underwear').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
  { id: 'kits', name: 'Starter Kits', count: products.filter(p => p.category === 'kits').length }
];
