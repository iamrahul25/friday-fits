"use client";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.396-1.722-4.07-4.183-4.07-2.849 0-4.52 2.136-4.52 4.345 0 .86.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621A10 10 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

const FOOTER_COLS = [
  {
    title: "Shop",
    links: ["All Products", "New In", "Sale"],
  },
  {
    title: "Help",
    links: ["FAQ", "Shipping", "Returns"],
  },
  {
    title: "About",
    links: ["Our Story", "Sustainability", "Contact Us"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ff-border bg-ff-surface">
      <div className="mx-auto max-w-[1400px] px-4 pt-12 pb-8 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr_1.2fr]">
          <div>
            <a href="/" className="inline-block">
              <span className="font-serif text-[24px] font-semibold text-ff-text">
                FridayFits
              </span>
              <span className="mt-0.5 block text-[8px] font-medium tracking-[0.28em] text-ff-muted uppercase">
                Wear Your Story
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ff-muted">
              Everyday fashion, extraordinary you. Styles for every mood, every
              moment.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[13px] font-semibold text-ff-text">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[12px] text-ff-muted transition-colors hover:text-ff-olive"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-serif text-lg text-ff-text">
              Join Our Community
            </h3>
            <form
              className="mt-4 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-ff-border bg-ff-bg px-4 py-2.5 text-[12px] text-ff-text outline-none placeholder:text-ff-muted focus:ring-1 focus:ring-ff-olive/30"
              />
              <button
                type="submit"
                className="rounded-full bg-ff-olive px-5 py-2.5 text-[12px] font-medium whitespace-nowrap text-white transition-colors hover:bg-ff-olive-dark"
              >
                Subscribe →
              </button>
            </form>
            <div className="mt-5 flex items-center gap-3 text-ff-muted">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full p-1.5 transition-colors hover:bg-ff-search hover:text-ff-olive"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="rounded-full p-1.5 transition-colors hover:bg-ff-search hover:text-ff-olive"
              >
                <PinterestIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="rounded-full p-1.5 transition-colors hover:bg-ff-search hover:text-ff-olive"
              >
                <YoutubeIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full p-1.5 transition-colors hover:bg-ff-search hover:text-ff-olive"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ff-border pt-6 text-[11px] text-ff-muted sm:flex-row sm:items-center">
          <p>© 2024 FridayFits. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a href="#" className="hover:text-ff-olive">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-ff-olive">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
