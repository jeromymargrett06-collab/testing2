import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1601234979142-1fb9d0431bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920',
    title: 'New Collection',
    description: 'Discover our latest arrivals in premium fashion for women and men',
    cta: 'Shop Now'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1766524871302-88590e1fa1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920',
    title: 'Summer Sale',
    description: 'Up to 50% off on selected items. Limited time offer!',
    cta: 'View Deals'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920',
    title: 'Premium Quality',
    description: 'Handpicked styles crafted with attention to detail',
    cta: 'Explore'
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8">{slide.description}</p>
                <Link
                  to="/#featured"
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-900" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-900" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
