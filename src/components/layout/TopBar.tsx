export function TopBar() {
  return (
    <div className="bg-ff-promo text-white">
      <div className="mx-auto flex h-[36px] max-w-[1600px] items-center justify-between gap-3 px-4 text-[11px] tracking-wide sm:px-6 lg:px-10">
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden sm:gap-3">
          <p className="shrink-0 whitespace-nowrap">
            <span className="mr-1" aria-hidden>
              🚚
            </span>
            Free shipping on orders above ₹999
          </p>
          <span className="hidden text-white/40 sm:inline" aria-hidden>
            ·
          </span>
          <p className="hidden truncate sm:inline">
            10% off on your first order · Use code{" "}
            <span className="rounded-full bg-[#FAF8F2] px-2 py-0.5 font-semibold tracking-[0.12em] text-ff-olive-dark">
              FRIDAY10
            </span>
          </p>
        </div>
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <a href="#" className="transition-opacity hover:opacity-80">
            Help
          </a>
          <span className="text-white/40">|</span>
          <a href="#" className="transition-opacity hover:opacity-80">
            Track Order
          </a>
          <span className="text-white/40">|</span>
          <a href="#" className="transition-opacity hover:opacity-80">
            Wishlist
          </a>
        </div>
      </div>
    </div>
  );
}
