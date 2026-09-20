import type { ReactNode } from "react";
import { ArrowRight, Camera, Settings2, Shirt } from "lucide-react";

export function VirtualTryOn() {
  return (
    <section className="py-4 sm:py-6">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:px-14"
          style={{
            background:
              "linear-gradient(105deg, var(--ff-banner-from) 0%, var(--ff-banner-to) 100%)",
          }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1.1fr] lg:gap-6">
            <div className="max-w-sm text-white">
              <h2 className="font-serif text-[32px] font-medium sm:text-[36px]">
                Virtual Try-On
              </h2>
              <p className="mt-2 text-[14px] text-white/85">
                See how it looks on you before you buy!
              </p>
              <a
                href="#try-on"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-ff-olive transition-opacity hover:opacity-90"
              >
                Try It Now
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white sm:gap-8">
              <Step icon={<Camera className="size-5" />} label="Upload Photo" />
              <Step icon={<Settings2 className="size-5" />} label="AI Fit" />
              <Step icon={<Shirt className="size-5" />} label="See the Look" />
            </div>

            <div className="relative flex items-center justify-center gap-3 lg:justify-end">
              <PhoneMock dress />
              <PhoneMock />
              <div className="absolute -right-2 -bottom-4 hidden max-w-[150px] text-right sm:block lg:relative lg:right-0 lg:bottom-0 lg:ml-2">
                <p className="font-serif text-[20px] leading-snug text-white/95">
                  Fashion Your Way
                  <br />
                  Try Before You Buy
                </p>
                <LeafAccent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="flex size-12 items-center justify-center rounded-full border border-white/35 bg-white/10">
        {icon}
      </span>
      <span className="text-[11px] font-medium tracking-wide text-white/90">
        {label}
      </span>
    </div>
  );
}

function PhoneMock({ dress }: { dress?: boolean }) {
  return (
    <div className="relative h-[160px] w-[78px] overflow-hidden rounded-[18px] border-[3px] border-white/40 bg-[#f3efe8] shadow-lg sm:h-[180px] sm:w-[88px]">
      <div className="absolute top-2 left-1/2 h-1.5 w-8 -translate-x-1/2 rounded-full bg-black/15" />
      <svg
        viewBox="0 0 88 180"
        className="absolute inset-0 h-full w-full text-ff-olive"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        {dress ? (
          <>
            <path d="M34 50 H54 L58 70 L68 150 H20 L30 70 Z" />
            <path d="M34 50 C38 58 50 58 54 50" />
            <circle cx="44" cy="42" r="8" />
          </>
        ) : (
          <>
            <path d="M28 48 L22 58 L28 64 V120 H60 V64 L66 58 L60 48 C52 56 36 56 28 48 Z" />
            <path d="M34 120 H54 L56 150 H32 Z" />
            <circle cx="44" cy="40" r="7" />
          </>
        )}
      </svg>
    </div>
  );
}

function LeafAccent() {
  return (
    <svg
      className="mt-2 ml-auto h-12 w-16 text-white/40"
      viewBox="0 0 64 48"
      fill="currentColor"
      aria-hidden
    >
      <ellipse cx="40" cy="14" rx="16" ry="7" transform="rotate(25 40 14)" />
      <ellipse cx="28" cy="28" rx="18" ry="8" transform="rotate(-15 28 28)" />
      <path
        d="M20 40 C30 28 42 18 52 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
