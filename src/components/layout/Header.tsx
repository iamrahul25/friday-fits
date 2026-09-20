"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  User,
  X,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import type { ThemeId } from "@/lib/types";

const THEMES: { id: ThemeId; label: string }[] = [
  { id: "olive", label: "Olive & Beige" },
  { id: "blush", label: "Warm Blush" },
  { id: "midnight", label: "Midnight" },
];

const NAV_LINKS = [
  { label: "Women", href: "#", hasDropdown: true },
  { label: "New In", href: "#new-arrivals" },
  { label: "Collections", href: "#categories" },
  { label: "Sale", href: "#", isSale: true },
  { label: "Blog", href: "#" },
];

function LeafMark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-ff-olive/35 text-ff-olive ${className ?? ""}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-[55%]">
        <path
          d="M12 20C12 20 5 15.2 5 10C5 6.5 8 4 12 4C16 4 19 6.5 19 10C19 15.2 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinejoin="round"
        />
        <path
          d="M12 20V8.5"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <path
          d="M12 11.5C13.8 10.6 15.6 9.2 17 7.4"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Header() {
  const { theme, setTheme } = useTheme();
  const [themeOpen, setThemeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setThemeOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-ff-border/40 bg-ff-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[88px] max-w-[1600px] items-center gap-4 px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:px-10">
        <a href="/" className="flex shrink-0 items-center gap-2.5">
          <LeafMark className="size-10" />
          <span>
            <span className="block font-serif text-[24px] leading-none font-semibold tracking-tight text-ff-text sm:text-[28px]">
              FridayFits
            </span>
            <span className="mt-1 block text-[8px] font-medium tracking-[0.32em] text-ff-muted uppercase">
              Wear Your Story
            </span>
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`inline-flex items-center gap-1 text-[13px] font-medium transition-colors hover:text-ff-olive ${
                link.isSale
                  ? "rounded-full bg-ff-blush px-3 py-1 text-ff-text"
                  : "text-ff-text"
              }`}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="size-3.5 opacity-60" strokeWidth={1.5} />
              )}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center justify-end gap-1.5 sm:gap-2.5 lg:ml-0">
          <label className="relative hidden w-[220px] xl:w-[280px] md:block">
            <span className="sr-only">Search</span>
            <input
              type="search"
              placeholder="Search for tops, dresses, accessories..."
              className="w-full rounded-full border border-ff-border/70 bg-ff-search/80 py-2.5 pr-10 pl-4 text-[12px] text-ff-text outline-none placeholder:text-ff-muted/75 focus:border-ff-olive/30 focus:ring-1 focus:ring-ff-olive/20"
            />
            <Search
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ff-muted"
              strokeWidth={1.5}
            />
          </label>

          <div className="relative" ref={themeRef}>
            <button
              type="button"
              onClick={() => setThemeOpen((o) => !o)}
              className="inline-flex items-center gap-1 rounded-full p-2 text-ff-text transition-colors hover:bg-ff-search"
              aria-label="Theme"
              aria-expanded={themeOpen}
            >
              {theme === "midnight" ? (
                <Moon className="size-[18px]" strokeWidth={1.5} />
              ) : (
                <Sun className="size-[18px]" strokeWidth={1.5} />
              )}
              <ChevronDown className="hidden size-3 opacity-60 sm:block" strokeWidth={1.5} />
            </button>
            {themeOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-ff-border bg-ff-surface py-1 shadow-sm"
              >
                {THEMES.map((t) => (
                  <li key={t.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={theme === t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeOpen(false);
                      }}
                      className={`block w-full px-3.5 py-2 text-left text-[12px] transition-colors hover:bg-ff-search ${
                        theme === t.id
                          ? "font-semibold text-ff-olive"
                          : "text-ff-text"
                      }`}
                    >
                      {t.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            className="hidden rounded-full p-2 text-ff-text transition-colors hover:bg-ff-search sm:inline-flex"
            aria-label="Account"
          >
            <User className="size-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="hidden rounded-full p-2 text-ff-text transition-colors hover:bg-ff-search sm:inline-flex"
            aria-label="Wishlist"
          >
            <Heart className="size-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="relative rounded-full p-2 text-ff-text transition-colors hover:bg-ff-search"
            aria-label="Bag"
          >
            <ShoppingBag className="size-[18px]" strokeWidth={1.5} />
            <span className="absolute top-0.5 right-0.5 flex size-4 items-center justify-center rounded-full bg-ff-olive text-[9px] font-semibold text-white">
              0
            </span>
          </button>

          <button
            type="button"
            className="rounded-full p-2 text-ff-text transition-colors hover:bg-ff-search lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="size-5" strokeWidth={1.5} />
            ) : (
              <Menu className="size-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-ff-border bg-ff-surface lg:hidden">
          <nav className="mx-auto flex max-w-[1600px] flex-col gap-1 px-4 py-4 sm:px-6">
            <label className="relative mb-3 md:hidden">
              <span className="sr-only">Search</span>
              <input
                type="search"
                placeholder="Search for tops, dresses, accessories..."
                className="w-full rounded-full border border-ff-border/70 bg-ff-search/80 py-2.5 pr-10 pl-4 text-[13px] outline-none"
              />
              <Search className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ff-muted" />
            </label>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-3 text-[14px] font-medium ${
                  link.isSale
                    ? "bg-ff-blush text-ff-text"
                    : "text-ff-text hover:bg-ff-search"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2 border-t border-ff-border pt-3 sm:hidden">
              <a href="#" className="flex-1 rounded-lg px-3 py-2.5 text-center text-[13px] text-ff-muted hover:bg-ff-search">
                Account
              </a>
              <a href="#" className="flex-1 rounded-lg px-3 py-2.5 text-center text-[13px] text-ff-muted hover:bg-ff-search">
                Wishlist
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
