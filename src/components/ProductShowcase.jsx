import React from 'react';
import { Package, Palette, Printer, ShoppingCart } from 'lucide-react';

const products = [
  {
    title: 'Business Cards',
    description: 'Premium stocks, matte or glossy finishes, rounded corners.',
    icon: Printer,
    badge: 'Best Seller',
  },
  {
    title: 'Marketing Flyers',
    description: 'Vibrant color, multiple sizes and folds for any campaign.',
    icon: Package,
    badge: 'New',
  },
  {
    title: 'Banners & Signs',
    description: 'Indoor and outdoor durable materials, grommets included.',
    icon: Package,
    badge: 'Popular',
  },
  {
    title: 'Custom Apparel',
    description: 'T‑shirts, hoodies, and polos with your logo or design.',
    icon: Palette,
    badge: 'Staff Pick',
  },
  {
    title: 'Stickers & Labels',
    description: 'Kiss-cut, die-cut, roll labels — waterproof and durable.',
    icon: Package,
    badge: 'Hot',
  },
  {
    title: 'Mugs & Gifts',
    description: 'Personalized gifts for teams, clients, and events.',
    icon: Package,
    badge: 'Gifting',
  },
];

const ProductCard = ({ title, description, Icon, badge }) => (
  <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="absolute right-4 top-4 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
      {badge}
    </div>
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{description}</p>
    <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-black">
      <ShoppingCart className="h-4 w-4" />
      Shop now
    </button>
  </div>
);

const ProductShowcase = () => {
  return (
    <section id="products" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured products</h2>
            <p className="mt-2 text-gray-600">Everything you need to promote your business and brand.</p>
          </div>
          <a href="#" className="text-sm font-medium text-indigo-700 hover:text-indigo-900">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.title} title={p.title} description={p.description} Icon={p.icon} badge={p.badge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
