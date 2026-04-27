import { Star, Phone } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-[#062B63] text-white">
      <div className="mx-auto flex max-w-[1450px] flex-col items-center justify-between gap-2 px-6 py-3 text-sm font-bold lg:flex-row lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 text-center lg:justify-start">
          <div className="flex items-center gap-1 text-[#38BDF8]">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
          <span className="text-white/95">
            Trusted heating & air service in El Paso, TX
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-center lg:justify-end">
          <span className="text-white/90">
            Available for repairs, installs & maintenance
          </span>
          <Link
            href="tel:5555555555"
            className="inline-flex items-center gap-2 font-extrabold text-[#38BDF8] transition hover:text-white"
          >
            <Phone className="h-4 w-4" />
            (915) 274-2685
          </Link>
        </div>
      </div>
    </div>
  );
}