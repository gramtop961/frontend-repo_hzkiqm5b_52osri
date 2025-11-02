import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onSelect }) => {
  const { title, description, icon: Icon, badge } = product;
  return (
    <button
      onClick={() => onSelect(product)}
      className="group relative w-full rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
    >
      {badge && (
        <div className="absolute right-4 top-4 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          {badge}
        </div>
      )}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white transition group-hover:bg-black">
        <ShoppingCart className="h-4 w-4" />
        View details
      </span>
    </button>
  );
};

const ProductShowcase = ({ products, onSelect }) => {
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
            <ProductCard key={p.id} product={p} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
