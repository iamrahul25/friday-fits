"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { formatINR } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ff-card">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-ff-text shadow-sm backdrop-blur-sm transition-colors hover:text-ff-olive"
        >
          <Heart
            className={`size-4 ${liked ? "fill-ff-olive text-ff-olive" : ""}`}
          />
        </button>
      </div>
      <div className="mt-3 px-0.5">
        <h3 className="text-[13px] font-semibold text-ff-text">{product.name}</h3>
        <p className="mt-0.5 text-[13px] text-ff-text">{formatINR(product.price)}</p>
        <div className="mt-2.5 flex items-center gap-1.5">
          {product.colors.map((color) => (
            <span
              key={color}
              className="size-3.5 rounded-full border border-black/10"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
