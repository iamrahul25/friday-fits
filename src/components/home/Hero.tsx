"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Package,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { siteImages } from "@/lib/site-images";

const SLIDES = [
  {
    id: 1,
    eyebrow: "Everyday Fashion, Extraordinary You",
    titleLine1: "Find Your",
    titleLine2: "Friday Fit",
    body: "Trendy styles, timeless essentials and everything in between.\nBecause every day is a reason to dress up.",
  },
  {
    id: 2,
    eyebrow: "New Season Essentials",
    titleLine1: "Soft Layers,",
    titleLine2: "Sharp Looks",
    body: "Curated pieces that move with your week.\nElevated basics made for real life.",
  },
  {
    id: 3,
    eyebrow: "Wear Your Story",
    titleLine1: "Made for Your",
    titleLine2: "Fridays",
    body: "From brunch to late nights — we’ve got you.\nDress for the mood you want to keep.",
  },
];

const FEATURES = [
  {
    icon: <Package className="size-4" strokeWidth={1.5} />,
    title: "Free Shipping",
    detail: "on orders above ₹999",
  },
  {
    icon: <RefreshCw className="size-4" strokeWidth={1.5} />,
    title: "Easy Returns",
    detail: "7 days hassle free",
  },
  {
    icon: <ShieldCheck className="size-4" strokeWidth={1.5} />,
    title: "Secure Payments",
    detail: "Powered by Razorpay",
  },
  {
    icon: <Leaf className="size-4" strokeWidth={1.5} />,
    title: "Sustainable Fashion",
    detail: "A greener tomorrow",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  const prev = () => setIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1));

  return (
    <section className="relative overflow-hidden bg-ff-hero">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:min-h-[620px] lg:grid-cols-2 lg:gap-10 lg:py-12 xl:gap-14 xl:min-h-[680px]">
          {/* Left content */}
          <div className="relative z-10 order-1 max-w-xl lg:self-center">
            <p className="text-[10px] font-medium tracking-[0.22em] text-ff-muted uppercase sm:text-[11px] sm:tracking-[0.24em]">
              {slide.eyebrow}
            </p>

            <h1 className="mt-4 font-serif text-[36px] leading-[1.08] font-medium tracking-tight text-ff-text sm:mt-5 sm:text-[52px] lg:text-[60px] xl:text-[68px]">
              {slide.titleLine1}
              <br />
              <em className="font-serif italic text-ff-olive">
                {slide.titleLine2}
              </em>
            </h1>

            <p className="mt-4 max-w-md text-[13px] leading-relaxed whitespace-pre-line text-ff-muted sm:mt-6 sm:text-[15px]">
              {slide.body}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
              <a
                href="#new-arrivals"
                className="inline-flex items-center gap-2 rounded-full bg-ff-olive px-5 py-3 text-[12px] font-medium text-white transition-colors hover:bg-ff-olive-dark sm:px-7 sm:py-3.5 sm:text-[13px]"
              >
                Shop New Arrivals
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full border border-ff-olive bg-transparent px-5 py-3 text-[12px] font-medium text-ff-olive transition-colors hover:bg-ff-olive hover:text-white sm:px-7 sm:py-3.5 sm:text-[13px]"
              >
                Explore Collections
              </a>
            </div>
          </div>

          {/* Right editorial image — stacks below CTAs on mobile */}
          <div className="relative order-2 mx-auto w-full max-w-[640px] lg:mx-0 lg:max-w-none lg:justify-self-end">
            <div className="relative mx-auto aspect-[5/6] w-full max-w-[100%] sm:aspect-[4/5] sm:max-w-[480px] lg:h-[500px] lg:max-w-[520px] lg:aspect-auto xl:h-[540px] xl:max-w-[560px]">
              <div className="absolute inset-0 overflow-hidden rounded-[40px] bg-ff-beige shadow-[0_20px_50px_-28px_rgba(41,43,37,0.35)] sm:rounded-[64px] lg:rounded-[80px]">
                <Image
                  src={siteImages.heroFashion}
                  alt="Woman in an olive floral dress enjoying golden hour light"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 480px, 560px"
                  className="object-cover object-[72%_30%] sm:object-[70%_28%] lg:object-[68%_26%]"
                />
              </div>

              {/* Olive circular badge */}
              <div className="absolute -top-1 -left-1 z-20 flex size-[84px] rotate-[-8deg] items-center justify-center rounded-full bg-ff-olive text-center text-white shadow-sm sm:size-[110px] sm:-top-3 sm:-left-3 md:size-[124px]">
                <p className="font-serif text-[11px] leading-[1.2] sm:text-[13px] md:text-[14px]">
                  Good
                  <br />
                  Outfits
                  <br />
                  Brighter
                  <br />
                  Days
                  <br />
                  <span className="text-[11px] sm:text-[12px]">♡</span>
                </p>
              </div>

              {/* Polaroid — tablet+ */}
              <div className="absolute top-[10%] -right-1 z-20 hidden w-[100px] rotate-[6deg] bg-ff-surface p-1.5 shadow-[0_12px_30px_-12px_rgba(41,43,37,0.4)] sm:block sm:w-[120px] sm:p-2 md:-right-3 md:w-[132px]">
                <div className="relative aspect-square overflow-hidden bg-ff-beige">
                  <Image
                    src={siteImages.heroPolaroid}
                    alt="Woman in an olive top — same girl, new fits"
                    fill
                    sizes="132px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-1.5 px-0.5 pb-0.5 text-center font-serif text-[11px] leading-snug text-ff-text sm:mt-2 sm:text-[13px]">
                  Same Girl
                  <br />
                  New Fits ♡
                </p>
              </div>

              {/* Sustainability card — tablet+ */}
              <a
                href="#"
                className="absolute right-1 bottom-6 z-20 hidden max-w-[120px] rounded-2xl border border-ff-border/60 bg-[#FAF8F2]/95 px-3 py-2.5 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5 sm:block sm:max-w-[140px] sm:px-4 sm:py-3 md:right-0 md:bottom-10"
              >
                <p className="font-serif text-[12px] leading-snug text-ff-text sm:text-[14px]">
                  Fashion
                  <br />
                  for a Kinder
                  <br />
                  Tomorrow
                </p>
                <span className="mt-1.5 inline-block text-ff-olive sm:mt-2">
                  →
                </span>
              </a>

              {/* Handwritten script */}
              <p className="pointer-events-none absolute -bottom-0.5 left-3 z-20 max-w-[120px] font-script text-[22px] leading-tight text-ff-olive sm:left-5 sm:text-[30px] md:-bottom-2 md:left-7 md:text-[32px]">
                Style
                <br />
                Your Mood ♡
              </p>
            </div>
          </div>
        </div>

        {/* Service features */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 border-t border-ff-border/70 py-6 sm:flex sm:flex-wrap sm:items-start sm:gap-x-10 sm:gap-y-5 sm:py-7 lg:gap-x-12">
          {FEATURES.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-between gap-3 border-t border-ff-border/50 pb-7 pt-4 sm:pb-8 sm:pt-5">
          <div className="flex items-center gap-0.5 font-serif text-[12px] tracking-wide text-ff-muted sm:text-[14px]">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className="inline-flex items-center"
                aria-label={`Go to slide ${i + 1}`}
              >
                {i > 0 && (
                  <span className="mx-1.5 text-ff-border sm:mx-3" aria-hidden>
                    ───
                  </span>
                )}
                <span
                  className={
                    i === index
                      ? "font-semibold text-ff-olive"
                      : "hover:text-ff-text"
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          <div className="flex gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex size-9 items-center justify-center rounded-full border border-ff-olive/30 bg-ff-surface text-ff-olive transition-colors hover:bg-ff-olive hover:text-white sm:size-10"
            >
              <ChevronLeft className="size-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex size-9 items-center justify-center rounded-full border border-ff-olive/30 bg-ff-surface text-ff-olive transition-colors hover:bg-ff-olive hover:text-white sm:size-10"
            >
              <ChevronRight className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  detail,
}: {
  icon: ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-ff-border bg-ff-surface text-ff-olive">
        {icon}
      </span>
      <div>
        <p className="text-[12px] font-semibold text-ff-text sm:whitespace-nowrap">
          {title}
        </p>
        <p className="text-[11px] leading-snug text-ff-muted sm:whitespace-nowrap">
          {detail}
        </p>
      </div>
    </div>
  );
}
