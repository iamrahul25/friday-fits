import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  Tops: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M16 10 L12 16 L16 20 V38 H32 V20 L36 16 L32 10 C28 14 20 14 16 10 Z" />
      <path d="M20 10 C22 13 26 13 28 10" />
    </svg>
  ),
  Dresses: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M20 8 H28 L30 16 L36 40 H12 L18 16 Z" />
      <path d="M20 8 C22 12 26 12 28 8" />
    </svg>
  ),
  Bottoms: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M16 10 H32 L34 40 H26 L24 24 L22 40 H14 Z" />
      <path d="M16 14 H32" />
    </svg>
  ),
  "Co-ords": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M16 8 L12 14 L16 18 V26 H32 V18 L36 14 L32 8 Z" />
      <path d="M16 28 H32 L34 40 H14 Z" />
    </svg>
  ),
  "Ethnic Wear": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M18 8 H30 L34 16 V40 H14 V16 Z" />
      <path d="M18 8 C20 12 28 12 30 8" />
      <path d="M14 22 H34" />
    </svg>
  ),
  Activewear: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M18 10 L14 16 L18 20 V36 H30 V20 L34 16 L30 10 Z" />
      <path d="M20 28 H28" />
    </svg>
  ),
  Jackets: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M16 10 L10 16 L14 20 V40 H34 V20 L38 16 L32 10 C28 14 20 14 16 10 Z" />
      <path d="M24 18 V40" />
    </svg>
  ),
  Skirts: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M18 12 H30 L38 40 H10 Z" />
      <path d="M18 12 C20 16 28 16 30 12" />
    </svg>
  ),
  "T-Shirts": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M16 12 L10 18 L14 22 V38 H34 V22 L38 18 L32 12 C28 16 20 16 16 12 Z" />
    </svg>
  ),
  Shirts: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-8">
      <path d="M16 10 L12 16 L16 20 V38 H32 V20 L36 16 L32 10 C28 14 20 14 16 10 Z" />
      <path d="M24 18 V38" />
      <circle cx="24" cy="24" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="24" cy="30" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
};

type Category = { id: string; name: string; slug: string };

export function ShopByCategory({ categories }: { categories: Category[] }) {
  return (
    <section id="categories" className="bg-ff-bg py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-[28px] font-medium text-ff-text sm:text-[32px]">
            Shop by Category
          </h2>
          <a
            href="#"
            className="text-[13px] font-medium text-ff-text transition-colors hover:text-ff-olive"
          >
            View All →
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 sm:gap-5 lg:justify-between lg:overflow-visible">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.slug}`}
              className="group flex min-w-[76px] flex-col items-center gap-2.5"
            >
              <span className="flex size-[76px] items-center justify-center rounded-full bg-ff-card text-ff-text transition-transform group-hover:scale-[1.04] sm:size-[84px]">
                {ICONS[cat.name] ?? ICONS.Tops}
              </span>
              <span className="text-center text-[12px] font-medium text-ff-text">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
