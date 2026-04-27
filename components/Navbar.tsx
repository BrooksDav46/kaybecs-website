"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1450px] items-center justify-between px-4 sm:h-[82px] md:h-[94px] md:px-8 xl:px-12 2xl:px-16">
        <Link
          href="/"
          className="flex h-[48px] w-[165px] shrink-0 items-center overflow-hidden sm:h-[56px] sm:w-[195px] md:h-[76px] md:w-[260px]"
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Go to KayBecs homepage"
        >
          <Image
            src="/KayBecs_Logo_Recc.png"
            alt="KayBecs Heating & Air"
            width={260}
            height={76}
            priority
            sizes="(max-width: 640px) 165px, (max-width: 768px) 195px, 260px"
            className="block h-full w-full object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-12 xl:flex">
          <Link
            href="/"
            className="text-[15px] font-black uppercase tracking-[0.12em] text-slate-900 transition hover:text-sky-500"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[15px] font-black uppercase tracking-[0.12em] text-slate-900 transition hover:text-sky-500"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-[15px] font-black uppercase tracking-[0.12em] text-slate-900 transition hover:text-sky-500"
          >
            Services
          </Link>

          <Link
            href="/#contact"
            className="text-[15px] font-black uppercase tracking-[0.12em] text-slate-900 transition hover:text-sky-500"
          >
            Contact Us
          </Link>
        </nav>

        <Link
          href="tel:9152742685"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-sky-500 px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:bg-sky-400 sm:px-5 xl:hidden"
        >
          <Phone className="mr-2 h-4 w-4 shrink-0" />
          Call
        </Link>

        <Link
          href="tel:9152742685"
          className="hidden shrink-0 items-center justify-center rounded-xl bg-sky-500 px-8 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-sky-400 xl:inline-flex"
        >
          <Phone className="mr-2 h-4 w-4 shrink-0" />
          Call Now
        </Link>
      </div>

      <div className="h-[5px] w-full bg-gradient-to-r from-[#062B63] via-sky-500 to-[#062B63]" />
    </header>
  );
}