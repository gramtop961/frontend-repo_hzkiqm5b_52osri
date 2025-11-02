import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Jordan M.',
    role: 'Founder, Bright Studio',
    quote:
      'Print quality is excellent and turnaround is fast. The online templates made it so easy to launch our new brand materials.',
    rating: 5,
  },
  {
    name: 'Ava R.',
    role: 'Event Manager',
    quote:
      'Banners and flyers arrived ahead of schedule and looked fantastic. Will definitely reorder for our next event.',
    rating: 5,
  },
  {
    name: 'Daniel K.',
    role: 'Coffee Shop Owner',
    quote:
      'Love the custom stickers and apparel — colors really pop and the fabric feels great. Customers notice the difference!',
    rating: 5,
  },
];

const Stars = ({ count = 5 }) => (
  <div className="flex items-center gap-1 text-amber-500">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Loved by small businesses</h2>
            <p className="mt-2 text-gray-600">Thousands of 5-star reviews from creators, founders, and teams.</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <Stars count={r.rating} />
              <p className="mt-3 text-gray-700">“{r.quote}”</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                <p className="text-xs text-gray-500">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
