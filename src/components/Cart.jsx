import React from 'react';
import { Trash2, ArrowRight } from 'lucide-react';

const Cart = ({ items, onRemove, onCheckout }) => {
  const subtotal = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Your cart</h2>
        {items.length === 0 ? (
          <p className="mt-4 text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.size} · {item.finish} · {item.qty} qty</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                    <button onClick={() => onRemove(item.id)} className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Order summary</h3>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
              <button
                onClick={onCheckout}
                className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Checkout <ArrowRight className="ml-2 inline h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
