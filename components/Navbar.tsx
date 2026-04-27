"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-[78px] max-w-[1450px] items-center justify-between px-4 sm:h-[84px] md:h-[92px] md:px-8 xl:px-12 2xl:px-16">
        <Link
          href="/"
          aria-label="Go to KayBecs homepage"
          onClick={() => {
            closeMenu();
            window.scrollTo(0, 0);
          }}
          className="relative flex h-[48px] w-[158px] shrink-0 items-center overflow-hidden sm:h-[54px] sm:w-[185px] md:h-[64px] md:w-[220px]"
        >
          <Image
            src="/KayBecs_Logo_Recc.png"
            alt="KayBecs Heating & Air"
            fill
            priority
            sizes="(max-width: 640px) 158px, (max-width: 768px) 185px, 220px"
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-10 xl:flex">
          <Link
            href="/"
            className="text-[14px] font-black uppercase tracking-[0.12em] text-slate-900 transition hover:text-sky-500"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[14px] font-black uppercase tracking-[0.12em] text-slate-900 transition hover:text-sky-500"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-[14px] font-black uppercase tracking-[0.12em] text-slate-900 transition hover:text-sky-500"
          >
            Services
          </Link>

          <Link
            href="/#contact"
            className="text-[14px] font-black uppercase tracking-[0.12em] text-slate-900 transition hover:text-sky-500"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="tel:9152742685"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500 text-white transition hover:bg-sky-400 xl:hidden"
            aria-label="Call KayBecs"
          >
            <Phone className="h-4 w-4 shrink-0" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 xl:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          <Link
            href="tel:9152742685"
            className="hidden shrink-0 items-center justify-center rounded-xl bg-sky-500 px-7 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-sky-400 xl:inline-flex"
          >
            <Phone className="mr-2 h-4 w-4 shrink-0" />
            Call Now
          </Link>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <nav className="mx-auto flex max-w-[1450px] flex-col px-5 py-5">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-base font-black uppercase tracking-[0.12em] text-slate-900"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-base font-black uppercase tracking-[0.12em] text-slate-900"
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-base font-black uppercase tracking-[0.12em] text-slate-900"
            >
              Services
            </Link>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-base font-black uppercase tracking-[0.12em] text-slate-900"
            >
              Contact
            </Link>

            <Link
              href="tel:9152742685"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white"
            >
              <Phone className="mr-2 h-4 w-4 shrink-0" />
              Call Now
            </Link>
          </nav>
        </div>
      )}

      <div className="h-[4px] w-full bg-gradient-to-r from-[#062B63] via-sky-500 to-[#062B63]" />
    </header>
  );
}