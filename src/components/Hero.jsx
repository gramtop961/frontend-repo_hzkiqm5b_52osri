import React from 'react';
import { Printer, ShoppingCart, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs text-indigo-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Premium online printing, fast turnaround
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Bring your brand to life with beautiful prints
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              From business cards to banners, apparel to packaging — design online in minutes and get professional quality delivered to your door.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Start shopping
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-indigo-700 ring-1 ring-indigo-200 transition hover:bg-indigo-50"
              >
                <Printer className="h-5 w-5" />
                How it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                24–48h production on most items
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                Free design templates
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
            <div className="absolute -left-10 -bottom-16 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="relative mx-auto max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white">
                  <Printer className="h-20 w-20 text-indigo-600" />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900">Design online, print on demand</h3>
                <p className="mt-1 text-sm text-gray-600">Upload your artwork or customize templates. Instant proofing and fast shipping.</p>
                <div className="mt-4 flex gap-3">
                  <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
                    Create a design
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
                    Browse templates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
