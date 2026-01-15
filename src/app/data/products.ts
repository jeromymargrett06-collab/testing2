export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'women' | 'men';
  type: string;
  description: string;
}

export const products: Product[] = [
  // Women's Products (Featured)
  {
    id: 'w1',
    name: 'Classic Blue Jeans',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1565292334631-95d1dd9e2970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGplYW5zJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjgzODkzODF8MA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'women',
    type: 'Jeans',
    description: 'Comfortable high-waisted denim jeans with a classic fit'
  },
  {
    id: 'w2',
    name: 'Elegant White Top',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1763935558903-b83c17bf3656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRvcCUyMGNsb3RoaW5nfGVufDF8fHx8MTc2ODUwNjgwNnww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'women',
    type: 'Top',
    description: 'Stylish and versatile white top perfect for any occasion'
  },
  {
    id: 'w3',
    name: 'Summer Crop Top',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1648322332223-2b772db71933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNyb3AlMjB0b3B8ZW58MXx8fHwxNzY4NDg0ODYxfDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'women',
    type: 'Crop Top',
    description: 'Trendy crop top for a modern, casual look'
  },
  {
    id: 'w4',
    name: 'Designer Handbag',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1760624294504-211e763ee0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhbmRiYWclMjBhY2Nlc3Nvcnl8ZW58MXx8fHwxNzY4NTA2ODA3fDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'women',
    type: 'Handbag',
    description: 'Luxury leather handbag with spacious interior'
  },
  {
    id: 'w5',
    name: 'Comfort Sandals',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1732708862549-714f7478ca31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNhbmRhbHMlMjBzaG9lc3xlbnwxfHx8fDE3Njg1MDYzNjF8MA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'women',
    type: 'Sandals',
    description: 'Stylish and comfortable summer sandals'
  },
  {
    id: 'w6',
    name: 'Skinny Fit Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
    category: 'women',
    type: 'Jeans',
    description: 'Modern skinny fit jeans in dark wash'
  },
  {
    id: 'w7',
    name: 'Floral Blouse',
    price: 55.99,
    image: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=400',
    category: 'women',
    type: 'Top',
    description: 'Feminine floral print blouse for spring'
  },
  {
    id: 'w8',
    name: 'Athletic Crop Top',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1578342976795-062a1b744f37?w=400',
    category: 'women',
    type: 'Crop Top',
    description: 'Performance crop top for active lifestyle'
  },
  {
    id: 'w9',
    name: 'Crossbody Bag',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
    category: 'women',
    type: 'Handbag',
    description: 'Compact crossbody bag for everyday use'
  },
  {
    id: 'w10',
    name: 'Platform Sandals',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1603808033176-b1a8951ddeb1?w=400',
    category: 'women',
    type: 'Sandals',
    description: 'Trendy platform sandals with ankle strap'
  },
  // Men's Products
  {
    id: 'm1',
    name: 'Casual Shirt',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1651592440650-2c1dfddf3573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjYXN1YWwlMjBzaGlydHxlbnwxfHx8fDE3Njg1MDYzNjJ8MA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'men',
    type: 'Shirt',
    description: 'Comfortable casual shirt for everyday wear'
  },
  {
    id: 'm2',
    name: 'Denim Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'men',
    type: 'Jeans',
    description: 'Classic fit denim jeans for men'
  },
  {
    id: 'm3',
    name: 'Polo T-Shirt',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400',
    category: 'men',
    type: 'T-Shirt',
    description: 'Premium cotton polo shirt'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely love the quality of the jeans! Perfect fit and super comfortable. Will definitely shop again.',
    product: 'Classic Blue Jeans',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  },
  {
    id: 2,
    name: 'Emily Davis',
    rating: 5,
    comment: 'The crop top is exactly what I was looking for. Great material and true to size!',
    product: 'Summer Crop Top',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
  },
  {
    id: 3,
    name: 'Michael Brown',
    rating: 4,
    comment: 'Fast delivery and excellent customer service. The casual shirt fits perfectly!',
    product: 'Casual Shirt',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
  },
  {
    id: 4,
    name: 'Jessica Wilson',
    rating: 5,
    comment: 'Beautiful handbag! The quality exceeded my expectations. Highly recommend Everyday Attire!',
    product: 'Designer Handbag',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100'
  }
];
