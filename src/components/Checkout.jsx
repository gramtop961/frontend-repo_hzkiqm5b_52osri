import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Checkout = ({ items, onPlaceOrder, onBackToCart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const canSubmit = name && email && address && items.length > 0;

  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Checkout</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-900">Full name</label>
              <input
                className="mt-2 w-full rounded-md border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-md border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="jane@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900">Shipping address</label>
              <textarea
                className="mt-2 w-full rounded-md border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="123 Main St, City, Country"
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 rounded-md bg-emerald-50 p-3 text-sm text-emerald-700">
              <CheckCircle2 className="h-4 w-4" /> Secure checkout — your data is protected.
            </div>
            <div className="flex gap-3">
              <button
                onClick={onBackToCart}
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
              >
                Back to cart
              </button>
              <button
                disabled={!canSubmit}
                onClick={() => canSubmit && onPlaceOrder({ name, email, address })}
                className={`rounded-md px-4 py-2 text-sm font-medium text-white ${
                  canSubmit ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-300'
                }`}
              >
                Place order
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Order items</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {items.map((i) => (
                <li key={i.id} className="flex items-center justify-between">
                  <span className="text-gray-700">{i.title} · {i.size} · {i.finish} · {i.qty}</span>
                  <span className="font-medium text-gray-900">${i.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
