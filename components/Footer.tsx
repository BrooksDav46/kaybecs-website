import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071F4A] text-white">
      {/* TOP STRIPE */}
      <div className="h-[6px] w-full bg-gradient-to-r from-[#062B63] via-sky-500 to-[#062B63]" />

      <div className="mx-auto max-w-[1450px] px-8 py-10 xl:px-12 2xl:px-16">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          
          {/* LEFT */}
          <div className="text-sm text-white/80">
            <p className="font-semibold text-white">
              KayBecs Heating & Air
            </p>
            <p className="mt-1">
              Reliable HVAC service in El Paso, TX
            </p>
          </div>

          {/* CENTER NAV */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
            <Link href="/" className="hover:text-sky-400">
              Home
            </Link>
            <Link href="#about" className="hover:text-sky-400">
              About
            </Link>
            <Link href="#services" className="hover:text-sky-400">
              Services
            </Link>
            <Link href="#contact" className="hover:text-sky-400">
              Contact
            </Link>
          </div>

          {/* RIGHT */}
          <div className="text-sm">
            <div className="flex items-center justify-center gap-2 md:justify-end">
              <Phone className="h-4 w-4 text-sky-400" />
              <Link href="tel:9152742685" className="font-bold hover:text-sky-400">
                (915) 274-2685
              </Link>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2 text-white/80 md:justify-end">
              <MapPin className="h-4 w-4 text-sky-400" />
              <span>El Paso, TX</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} KayBecs Heating & Air. All rights reserved.
      </div>
    </footer>
  );
}