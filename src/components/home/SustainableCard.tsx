export function SustainableCard() {
  return (
    <article className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl bg-ff-card p-5 sm:p-6">
      <LeafDecor />
      <div className="relative z-10">
        <h3 className="font-serif text-[22px] leading-tight text-ff-text sm:text-[24px]">
          Sustainable
          <br />
          Style
        </h3>
        <p className="mt-2 max-w-[140px] text-[12px] leading-relaxed text-ff-muted">
          Better choices. A brighter tomorrow.
        </p>
      </div>
      <a
        href="#"
        className="relative z-10 inline-flex w-fit items-center rounded-full bg-ff-olive px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-ff-olive-dark"
      >
        Learn More →
      </a>
    </article>
  );
}

function LeafDecor() {
  return (
    <svg
      className="pointer-events-none absolute right-0 bottom-0 h-[70%] w-[70%] text-ff-olive opacity-[0.18]"
      viewBox="0 0 160 180"
      fill="currentColor"
      aria-hidden
    >
      <ellipse cx="110" cy="40" rx="36" ry="16" transform="rotate(35 110 40)" />
      <ellipse cx="80" cy="70" rx="40" ry="18" transform="rotate(-20 80 70)" />
      <ellipse cx="120" cy="95" rx="34" ry="15" transform="rotate(50 120 95)" />
      <ellipse cx="70" cy="120" rx="38" ry="16" transform="rotate(10 70 120)" />
      <path
        d="M90 20 C85 70 95 110 100 170"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
