import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { SustainableCard } from "./SustainableCard";

type ProductSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  products: Product[];
  showSustainable?: boolean;
};

export function ProductSection({
  id,
  title,
  subtitle,
  products,
  showSustainable = false,
}: ProductSectionProps) {
  return (
    <section id={id} className="bg-ff-bg py-10 sm:py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-[28px] font-medium text-ff-text sm:text-[32px]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-[13px] text-ff-muted">{subtitle}</p>
            )}
          </div>
          <a
            href="#"
            className="shrink-0 text-[13px] font-medium text-ff-text transition-colors hover:text-ff-olive"
          >
            View All →
          </a>
        </div>

        <div
          className={`grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 ${
            showSustainable
              ? "lg:grid-cols-6"
              : "lg:grid-cols-3 xl:grid-cols-6"
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {showSustainable && <SustainableCard />}
        </div>
      </div>
    </section>
  );
}
