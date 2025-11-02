import React, { useMemo, useState } from 'react';
import { Printer, Package, Palette } from 'lucide-react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import TemplateGallery from './components/TemplateGallery';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  // Product catalog
  const products = useMemo(
    () => [
      {
        id: 'business-cards',
        title: 'Business Cards',
        description: 'Premium stocks, matte or glossy finishes, rounded corners.',
        longDescription:
          'Create unforgettable first impressions with premium cards. Choose from a variety of paper stocks, sizes, and finishes to match your brand.',
        icon: Printer,
        badge: 'Best Seller',
        basePrice: 19.99,
        options: {
          sizes: ['Standard', 'Premium'],
          finishes: ['Matte', 'Glossy'],
        },
      },
      {
        id: 'flyers',
        title: 'Marketing Flyers',
        description: 'Vibrant color, multiple sizes and folds for any campaign.',
        longDescription:
          'High-impact flyers that get noticed. Great for events, promotions, and menus with crisp print and vivid colors.',
        icon: Package,
        badge: 'New',
        basePrice: 24.99,
        options: {
          sizes: ['A5', 'A4', 'Letter'],
          finishes: ['Matte', 'Glossy'],
        },
      },
      {
        id: 'banners',
        title: 'Banners & Signs',
        description: 'Indoor and outdoor durable materials, grommets included.',
        longDescription:
          'Weather-resistant materials for indoor and outdoor use. Perfect for storefronts, trade shows, and events.',
        icon: Package,
        badge: 'Popular',
        basePrice: 39.99,
        options: {
          sizes: ['2x4 ft', '3x6 ft', '4x8 ft'],
          finishes: ['Matte'],
        },
      },
      {
        id: 'apparel',
        title: 'Custom Apparel',
        description: 'T‑shirts, hoodies, and polos with your logo or design.',
        longDescription:
          'Soft, durable apparel customized with your artwork. Outfit your team or sell your own merch with premium prints.',
        icon: Palette,
        badge: 'Staff Pick',
        basePrice: 14.99,
        options: {
          sizes: ['S', 'M', 'L', 'XL'],
          finishes: ['Screen Print', 'DTG'],
        },
      },
    ],
    []
  );

  // Template gallery data
  const templates = useMemo(
    () => [
      { id: 't1', title: 'Minimal Card', category: 'Business Cards', productId: 'business-cards' },
      { id: 't2', title: 'Gradient Card', category: 'Business Cards', productId: 'business-cards' },
      { id: 't3', title: 'Bold Promo', category: 'Flyers', productId: 'flyers' },
      { id: 't4', title: 'Event Flyer', category: 'Flyers', productId: 'flyers' },
      { id: 't5', title: 'Grand Opening', category: 'Banners', productId: 'banners' },
      { id: 't6', title: 'Icon Sticker', category: 'Stickers', productId: 'business-cards' },
    ],
    []
  );

  // App state
  const [view, setView] = useState('home'); // 'home' | 'product' | 'templates' | 'cart' | 'checkout'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [preselectedTemplate, setPreselectedTemplate] = useState(null);
  const [cart, setCart] = useState([]);

  const navigateHome = () => setView('home');
  const openTemplates = () => setView('templates');
  const openCart = () => setView('cart');

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setView('product');
  };

  const handleUseTemplate = (template) => {
    const product = products.find((p) => p.id === template.productId) || products[0];
    setPreselectedTemplate(template);
    setSelectedProduct(product);
    setView('product');
  };

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setPreselectedTemplate(null);
    setView('cart');
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const goToCheckout = () => setView('checkout');

  const placeOrder = (details) => {
    // In a full app, send details + cart to backend; for now, reset and show a simple confirmation.
    alert(`Thanks ${details.name}! Your order is placed.`);
    setCart([]);
    setSelectedProduct(null);
    setPreselectedTemplate(null);
    setView('home');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={navigateHome} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600" />
            <span className="text-lg font-bold tracking-tight">PrintCraft</span>
          </button>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <button onClick={navigateHome} className="hover:text-gray-900">Home</button>
            <button onClick={() => setView('templates')} className="hover:text-gray-900">Templates</button>
            <button onClick={openCart} className="hover:text-gray-900">Cart ({cart.length})</button>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={openTemplates} className="hidden rounded-md px-3 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 sm:inline-flex">Browse templates</button>
            <button onClick={openCart} className="rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-black">View cart ({cart.length})</button>
          </div>
        </div>
      </header>

      <main>
        {view === 'home' && (
          <>
            <Hero onStartShopping={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} />
            <ProductShowcase products={products} onSelect={handleProductSelect} />
            <HowItWorks />
            <div id="reviews">
              <Testimonials />
            </div>
            <TemplateGallery templates={templates} onUseTemplate={handleUseTemplate} />
          </>
        )}

        {view === 'product' && (
          <ProductDetail
            product={selectedProduct}
            preselectedTemplate={preselectedTemplate}
            onBack={navigateHome}
            onAddToCart={addToCart}
          />
        )}

        {view === 'templates' && (
          <TemplateGallery templates={templates} onUseTemplate={handleUseTemplate} />
        )}

        {view === 'cart' && (
          <Cart items={cart} onRemove={removeFromCart} onCheckout={goToCheckout} />
        )}

        {view === 'checkout' && (
          <Checkout items={cart} onPlaceOrder={placeOrder} onBackToCart={() => setView('cart')} />
        )}
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Support</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-gray-900">File Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Get in touch</h3>
              <p className="mt-3 text-sm text-gray-600">Questions about a project? Our print experts are here to help.</p>
              <button className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Contact sales</button>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:flex-row">
            <p>© {new Date().getFullYear()} PrintCraft. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
