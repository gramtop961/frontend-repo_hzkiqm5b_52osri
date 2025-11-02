import React, { useMemo, useState } from 'react';
import { Palette, Filter } from 'lucide-react';

const categories = ['All', 'Business Cards', 'Flyers', 'Banners', 'Stickers'];

const TemplateCard = ({ template, onUse }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="aspect-[4/3] w-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500 p-[2px]">
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
          <div className="h-16 w-24 rounded-md bg-gradient-to-br from-indigo-200 via-pink-200 to-amber-200" />
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-sm font-semibold text-gray-900">{template.title}</h4>
        <p className="mt-1 text-xs text-gray-600">{template.category}</p>
        <button
          onClick={() => onUse(template)}
          className="mt-3 inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-black"
        >
          <Palette className="h-4 w-4" /> Use template
        </button>
      </div>
    </div>
  );
};

const TemplateGallery = ({ templates, onUseTemplate }) => {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => {
    if (active === 'All') return templates;
    return templates.filter((t) => t.category === active);
  }, [active, templates]);

  return (
    <section className="bg-gradient-to-b from-white to-indigo-50/60">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Design template gallery</h2>
            <p className="mt-2 text-gray-600">Customize professionally designed templates in minutes.</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Filter className="h-4 w-4 text-gray-500" />
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-3 py-1 ring-1 transition ${
                  active === c
                    ? 'bg-indigo-600 text-white ring-indigo-600'
                    : 'bg-white text-gray-700 ring-gray-200 hover:bg-gray-50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TemplateCard key={t.id} template={t} onUse={onUseTemplate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;
