"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      
      <div className="mx-auto flex h-[78px] max-w-[1450px] items-center justify-between px-4 sm:h-[84px] md:h-[92px] md:px-8 xl:px-12 2xl:px-16">
        
        {/* LOGO */}
        <Link
          href="/"
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

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 xl:flex">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          
          {/* MOBILE CALL BUTTON */}
          <Link
            href="tel:9152742685"
            className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-3 py-2 text-xs font-black uppercase text-white xl:hidden"
          >
            <Phone className="h-4 w-4" />
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* DESKTOP CTA */}
          <Link
            href="tel:9152742685"
            className="hidden rounded-xl bg-sky-500 px-7 py-3 text-sm font-black uppercase text-white xl:inline-flex"
          >
            Call Now
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="xl:hidden border-t border-slate-200 bg-white">
          <div className="flex flex-col px-6 py-5 space-y-4">
            <Link onClick={() => setOpen(false)} href="/" className="mobile-link">Home</Link>
            <Link onClick={() => setOpen(false)} href="/about" className="mobile-link">About</Link>
            <Link onClick={() => setOpen(false)} href="/services" className="mobile-link">Services</Link>
            <Link onClick={() => setOpen(false)} href="/#contact" className="mobile-link">Contact</Link>

            <Link
              href="tel:9152742685"
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-black uppercase text-white"
            >
              Call Now
            </Link>
          </div>
        </div>
      )}

      {/* STRIP */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#062B63] via-sky-500 to-[#062B63]" />
    </header>
  );
}