import Link from "next/link";
import {
  ShieldCheck,
  Wrench,
  Snowflake,
  Flame,
  Wind,
  Fan,
  RefreshCw,
  Home,
  BadgeCheck,
  Percent,
  CreditCard,
  Phone,
} from "lucide-react";

const services = [
  {
    title: "Preventive Maintenance",
    description:
      "Keep your HVAC system running longer, cleaner, and more efficiently with routine maintenance.",
    icon: ShieldCheck,
  },
  {
    title: "Heating & Cooling Tune-Ups",
    description:
      "Seasonal tune-ups for heating and cooling systems to help prevent breakdowns before extreme weather hits.",
    icon: Wrench,
  },
  {
    title: "Heating Repairs",
    description:
      "Fast service and repair for furnaces, heating systems, and home comfort equipment.",
    icon: Flame,
  },
  {
    title: "Cooling Repairs",
    description:
      "Reliable air conditioning diagnostics, repairs, and service for El Paso homes.",
    icon: Snowflake,
  },
  {
    title: "Evaporative Cooling Repairs",
    description:
      "Service and repairs for evaporative coolers, swamp coolers, and related cooling systems.",
    icon: Wind,
  },
  {
    title: "Evaporative Cooler Installation",
    description:
      "Professional evaporative cooler installation and replacement for residential properties.",
    icon: Fan,
  },
  {
    title: "Evaporative Cooler Conversions",
    description:
      "Convert or upgrade your evaporative cooling setup for better comfort and performance.",
    icon: RefreshCw,
  },
  {
    title: "Furnace Replacements",
    description:
      "Replace outdated or unreliable furnace systems with dependable heating equipment.",
    icon: Home,
  },
  {
    title: "Refrigerated Air Replacements",
    description:
      "Upgrade or replace refrigerated air systems for stronger, more efficient cooling.",
    icon: Snowflake,
  },
];

const benefits = [
  {
    title: "Licensed & Insured",
    description: "Work with a local HVAC team you can trust.",
    icon: BadgeCheck,
  },
  {
    title: "Discounts Available",
    description: "Senior, military, first responder, and cash payment discounts available.",
    icon: Percent,
  },
  {
    title: "Financing Available",
    description: "Financing options available for repairs, service, and installations.",
    icon: CreditCard,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#EEF5F9]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B2D6B] px-6 py-24 text-white">
        <div className="pointer-events-none absolute left-[-180px] top-[-140px] h-[420px] w-[520px] rounded-full bg-sky-400/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-180px] bottom-[-160px] h-[460px] w-[560px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1280px] text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-300">
            KayBecs Heating & Air
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-[48px] font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-[72px]">
            HVAC Services in El Paso, TX
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
            From preventive maintenance and tune-ups to repairs, replacements,
            evaporative cooling, and refrigerated air upgrades, KayBecs helps
            keep your home comfortable year-round.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="tel:9152742685"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-sky-400"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.14em] text-[#0B2D6B] transition hover:bg-sky-50"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute left-[-140px] top-20 h-[320px] w-[460px] rounded-full bg-[#CDEFFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute right-[-120px] bottom-20 h-[340px] w-[500px] rounded-full bg-white/80 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-500">
              What We Do
            </p>

            <h2 className="mt-3 text-[38px] font-black uppercase leading-[0.95] tracking-[-0.035em] text-[#062B63] md:text-[56px]">
              Heating, Cooling & Evaporative Cooling Services
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Clear service options for homeowners who need honest HVAC support,
              fast repairs, and dependable system replacements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border-2 border-sky-100 bg-white p-8 shadow-[0_18px_45px_rgba(7,27,58,0.08)] transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_24px_60px_rgba(7,27,58,0.14)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] text-sky-500 transition group-hover:bg-sky-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-[#071B3A]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-7 text-slate-700">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px] rounded-[32px] border-2 border-[#0B2D6B] bg-white p-8 shadow-[10px_10px_0_#0B2D6B] md:p-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl bg-[#EEF8FF] p-7 text-center"
                >
                  <Icon className="mx-auto h-9 w-9 text-sky-500" />

                  <h3 className="mt-4 text-xl font-black uppercase text-[#071B3A]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-700">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#071F4A] px-6 py-16 text-center text-white">
        <h2 className="text-[36px] font-black uppercase leading-tight tracking-[-0.03em] md:text-[52px]">
          Need HVAC Service?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
          Call KayBecs today for repairs, maintenance, tune-ups, replacements,
          and installation service in El Paso.
        </p>

        <Link
          href="tel:9152742685"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-sky-400"
        >
          <Phone className="mr-2 h-5 w-5" />
          Call 915-274-2685
        </Link>
      </section>
    </main>
  );
}