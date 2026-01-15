import { HeroSlider } from './HeroSlider';
import { ProductCard } from './ProductCard';
import { products, testimonials } from '@/app/data/products';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const featuredProducts = products.filter(p => p.category === 'women').slice(0, 10);
  const newArrivals = [...products].sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Featured Products */}
      <section id="featured" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our handpicked collection for women</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">New Arrivals</h2>
            <p className="text-gray-600">Fresh styles just added to our collection</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1920)'
              }}
            >
              <div className="h-full w-full bg-gradient-to-r from-purple-900 to-pink-900 bg-opacity-75 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">Special Offer</h2>
                  <p className="text-xl mb-6">Get 30% off on all new arrivals this week!</p>
                  <p className="text-lg mb-8">Use code: NEWCOLLECTION30 at checkout</p>
                  <Link
                    to="/#featured"
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Real reviews from real customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{testimonial.comment}</p>
                <p className="text-xs text-gray-500 font-semibold">{testimonial.product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
