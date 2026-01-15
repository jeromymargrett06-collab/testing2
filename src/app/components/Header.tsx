import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

export const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Everyday Attire
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-center gap-6 mt-4">
          <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
