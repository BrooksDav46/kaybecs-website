import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="relative overflow-hidden bg-[#EAF7FF]">
      <div className="pointer-events-none absolute left-[-120px] top-24 h-[280px] w-[420px] rounded-full bg-[#BFEAFF]/80 blur-3xl" />
      <div className="pointer-events-none absolute right-[-160px] top-44 h-[340px] w-[520px] rounded-full bg-[#D8F4FF]/90 blur-3xl" />
      <div className="pointer-events-none absolute bottom-32 left-[35%] h-[220px] w-[360px] rounded-full bg-white/70 blur-3xl" />

      <div className="relative z-10 h-[10px] w-full bg-[#0EA5E9]" />
      <div className="relative z-10 h-[4px] w-full bg-[#0B2D6B]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20">
        <div className="mx-auto max-w-5xl rounded-3xl border-2 border-[#0B2D6B] bg-white px-8 py-12 text-center shadow-[10px_10px_0_#0B2D6B]">
          <p className="mb-3 text-xl font-semibold italic text-[#0B2D6B]">
            Need Fast HVAC Help?
          </p>

          <h2 className="text-4xl font-black uppercase tracking-[-0.04em] text-[#071B3A] md:text-6xl">
            We’re Already On Our Way.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-slate-700">
            Call KayBecs Heating & Air for dependable heating and cooling service
            in El Paso, TX.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="tel:9152742685"
              className="inline-flex items-center justify-center rounded-xl bg-[#0EA5E9] px-8 py-5 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#0284C7]"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#0B2D6B] bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.14em] text-[#0B2D6B] hover:bg-[#F1F8FF]"
            >
              Request Estimate
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 px-6 pb-16 pt-24 lg:grid-cols-3">
        <div className="self-start rounded-3xl border-4 border-[#0EA5E9] bg-white/90 p-7 text-center shadow-[0_15px_40px_rgba(7,27,58,0.10)]">
          <h3 className="text-2xl font-black uppercase text-[#071B3A]">
            Contact Info
          </h3>

          <div className="mt-6 space-y-5 text-slate-700">
            <div>
              <MapPin className="mx-auto mb-2 h-7 w-7 text-[#0EA5E9]" />
              <p className="font-black text-[#071B3A]">Service Area</p>
              <p className="mt-2 leading-7">
                Serving El Paso, TX and nearby communities
              </p>
            </div>

            <div>
              <Phone className="mx-auto mb-2 h-7 w-7 text-[#0EA5E9]" />
              <p className="font-black text-[#071B3A]">Phone</p>
              <Link
                href="tel:9152742685"
                className="mt-2 block text-xl font-black text-[#0EA5E9]"
              >
                (915) 274-2685
              </Link>
            </div>

            <div>
              <Clock className="mx-auto mb-2 h-7 w-7 text-[#0EA5E9]" />
              <p className="font-black text-[#071B3A]">Office Hours</p>
              <p className="mt-2">
                Available for repairs, installs & maintenance
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative flex h-[310px] w-[310px] items-center justify-center overflow-hidden rounded-full bg-[#EAF7FF] shadow-[0_20px_60px_rgba(7,27,58,0.15)] md:h-[340px] md:w-[340px]">
            <Image
              src="/KayBecs_Logo.png"
              alt="KayBecs Heating Cooling and Refrigeration"
              width={420}
              height={420}
              className="h-[330px] w-[330px] object-cover md:h-[365px] md:w-[365px]"
              priority
            />
          </div>

          <Link
            href="tel:9152742685"
            className="mt-8 whitespace-nowrap text-5xl font-black tracking-[-0.05em] text-[#0EA5E9] md:text-6xl"
          >
            915-274-2685
          </Link>

          <p className="mt-4 max-w-md text-xl font-semibold italic text-[#071B3A]">
            Reliable heating and air service for El Paso homes.
          </p>

          <div className="mt-6 flex items-center gap-1 text-[#0EA5E9]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>

          <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-[#071B3A]">
            Trusted Local HVAC Service
          </p>
        </div>

        <div className="self-start rounded-3xl border-4 border-[#0EA5E9] bg-white/90 p-7 text-center shadow-[0_15px_40px_rgba(7,27,58,0.10)]">
          <h3 className="text-2xl font-black uppercase text-[#071B3A]">
            Helpful Links
          </h3>

          <div className="mt-6 space-y-4">
            <Link
              href="/#contact"
              className="block rounded-xl bg-[#0EA5E9] px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#0284C7]"
            >
              Schedule Service
            </Link>

            <div className="block cursor-default rounded-xl bg-[#0B2D6B] px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#071B3A]">
              Heating
            </div>

            <div className="block cursor-default rounded-xl bg-[#0B2D6B] px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#071B3A]">
              Cooling
            </div>

            <div className="block cursor-default rounded-xl bg-[#0B2D6B] px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#071B3A]">
              Maintenance
            </div>

            <div className="block cursor-default rounded-xl bg-[#0B2D6B] px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#071B3A]">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}