import React, { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const ProductDetail = ({ product, onBack, onAddToCart, preselectedTemplate }) => {
  const [size, setSize] = useState(product?.options?.sizes?.[0] || 'Standard');
  const [finish, setFinish] = useState(product?.options?.finishes?.[0] || 'Matte');
  const [qty, setQty] = useState(100);

  const price = useMemo(() => {
    const base = product?.basePrice || 10;
    const finishMultiplier = finish === 'Glossy' ? 1.1 : 1;
    const sizeMultiplier = size === 'Premium' ? 1.25 : 1;
    return Math.round(base * finishMultiplier * sizeMultiplier * (qty / 100) * 100) / 100;
  }, [product, finish, size, qty]);

  if (!product) return null;

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <button onClick={onBack} className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to products
        </button>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                <div className="h-28 w-44 rounded-lg bg-gradient-to-br from-indigo-200 via-pink-200 to-amber-200" />
              </div>
            </div>
            {preselectedTemplate && (
              <div className="flex items-center gap-2 p-4 text-sm text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> Template selected: {preselectedTemplate.title}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.title}</h1>
            <p className="mt-2 text-gray-600">{product.longDescription || product.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-900">Size</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(product.options?.sizes || ['Standard', 'Premium']).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`rounded-md px-3 py-1.5 text-sm ring-1 transition ${
                        size === s ? 'bg-gray-900 text-white ring-gray-900' : 'bg-white text-gray-700 ring-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Finish</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(product.options?.finishes || ['Matte', 'Glossy']).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFinish(f)}
                      className={`rounded-md px-3 py-1.5 text-sm ring-1 transition ${
                        finish === f ? 'bg-gray-900 text-white ring-gray-900' : 'bg-white text-gray-700 ring-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-gray-900">Quantity</label>
              <div className="mt-2 flex items-center gap-3">
                <input
                  type="number"
                  min={50}
                  step={50}
                  value={qty}
                  onChange={(e) => setQty(parseInt(e.target.value || '0'))}
                  className="w-32 rounded-md border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-600">packs of 100 recommended</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">Starting at</p>
                <p className="text-2xl font-semibold text-gray-900">${price.toFixed(2)}</p>
              </div>
              <button
                onClick={() =>
                  onAddToCart({
                    id: `${product.id}-${size}-${finish}-${qty}`,
                    productId: product.id,
                    title: product.title,
                    size,
                    finish,
                    qty,
                    price,
                  })
                }
                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
