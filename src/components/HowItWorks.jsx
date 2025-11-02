import React from 'react';
import { CheckCircle, Palette, Upload, Shield } from 'lucide-react';

const steps = [
  {
    title: 'Choose a product',
    desc: 'Pick from cards, flyers, banners, apparel and more.',
    icon: CheckCircle,
  },
  {
    title: 'Customize your design',
    desc: 'Start from a template or create from scratch in minutes.',
    icon: Palette,
  },
  {
    title: 'Upload and approve',
    desc: 'Upload artwork, preview instant proofs, and approve for print.',
    icon: Upload,
  },
  {
    title: 'Print & deliver fast',
    desc: 'We produce with quality checks and ship to your door.',
    icon: Shield,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-gradient-to-b from-white to-indigo-50/60">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-2 text-gray-600">Simple steps from idea to doorstep.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
