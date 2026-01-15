import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/app/context/CartContext';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/components/HomePage';
import { CartPage } from '@/app/components/CartPage';
import { AboutPage } from '@/app/components/AboutPage';
import { ContactPage } from '@/app/components/ContactPage';
import { PrivacyPage } from '@/app/components/PrivacyPage';
import { TermsPage } from '@/app/components/TermsPage';
import { ReturnsPage } from '@/app/components/ReturnsPage';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/returns" element={<ReturnsPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" richColors />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
