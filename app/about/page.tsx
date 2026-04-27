import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  BadgeDollarSign,
  CreditCard,
  MapPin,
  Wrench,
  Snowflake,
  Flame,
} from "lucide-react";

export const metadata = {
  title: "About KayBecs Heating & Air | El Paso HVAC Company",
  description:
    "Learn about KayBecs Heating & Air, a trusted licensed and insured HVAC company serving El Paso, TX with heating, cooling, evaporative cooling, repairs, replacements, and maintenance.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#EEF5F9]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B2D6B] px-6 py-28 text-white">
        <div className="pointer-events-none absolute left-[-160px] top-[-140px] h-[420px] w-[540px] rounded-full bg-sky-400/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-180px] bottom-[-160px] h-[460px] w-[560px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1280px] text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-300">
            About KayBecs Heating & Air
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-[46px] font-black uppercase leading-[0.92] tracking-[-0.04em] md:text-[72px]">
            Reliable HVAC Service Built Around El Paso Homes
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
            KayBecs Heating & Air provides dependable heating, cooling,
            evaporative cooling, repairs, replacements, and maintenance for
            homeowners throughout El Paso, TX.
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

      {/* STORY */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute left-[-180px] top-20 h-[380px] w-[520px] rounded-full bg-white/70 blur-3xl" />
        <div className="pointer-events-none absolute right-[-160px] bottom-20 h-[380px] w-[520px] rounded-full bg-sky-100/80 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
              Who We Are
            </p>

            <h2 className="mt-4 text-[42px] font-black uppercase leading-[0.95] tracking-[-0.035em] text-[#062B63] md:text-[58px]">
              Local HVAC Help You Can Actually Count On
            </h2>

            <div className="mt-6 h-[6px] w-32 bg-[#E6E548]" />
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              KayBecs Heating & Air is a trusted HVAC company serving El Paso,
              Texas and surrounding communities. We help homeowners keep their
              homes comfortable with reliable heating, cooling, evaporative
              cooling, repairs, replacements, and maintenance.
            </p>

            <p>
              Our approach is simple: show up, communicate clearly, provide
              honest recommendations, and do the job right. Whether you need a
              fast repair, a seasonal tune-up, or a system replacement, our goal
              is to make the process straightforward and stress-free.
            </p>

            <p className="font-bold text-[#062B63]">
              We are licensed and insured, and we offer discounts for seniors,
              military members, first responders, and cash payments.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Licensed & Insured",
                text: "Professional HVAC service backed by proper licensing and insurance.",
                icon: ShieldCheck,
              },
              {
                title: "Heating & Cooling",
                text: "Repairs, tune-ups, maintenance, and replacements for residential systems.",
                icon: Wrench,
              },
              {
                title: "Evaporative Cooling",
                text: "Service, installation, replacement, and conversions for evaporative coolers.",
                icon: Snowflake,
              },
              {
                title: "Financing Available",
                text: "Financing options available for repairs, service, and installations.",
                icon: CreditCard,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border-2 border-sky-100 bg-white p-7 shadow-[0_18px_45px_rgba(7,27,58,0.08)] transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_24px_60px_rgba(7,27,58,0.14)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] text-sky-500">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-black uppercase leading-tight text-[#071B3A]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
              What We Help With
            </p>

            <h2 className="mt-4 text-[40px] font-black uppercase leading-[0.95] tracking-[-0.035em] text-[#062B63] md:text-[58px]">
              Heating, Cooling, Repairs & Replacements
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              From preventive maintenance to refrigerated air replacements,
              KayBecs is built to help El Paso homeowners stay comfortable
              year-round.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Preventive Maintenance",
              "Heating & Cooling Tune-Ups",
              "Heating Repairs",
              "Cooling Repairs",
              "Evaporative Cooling Service",
              "Evaporative Cooler Installation",
              "Evaporative Cooler Replacement",
              "Evaporative Cooler Conversions",
              "Furnace Replacements",
              "Refrigerated Air Replacements",
              "Senior Discounts",
              "Military & First Responder Discounts",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-sky-100 bg-[#EEF8FF] px-6 py-5 text-center text-sm font-black uppercase tracking-[0.08em] text-[#071B3A]"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOUNTS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1280px] rounded-[32px] border-2 border-[#0B2D6B] bg-white p-8 shadow-[10px_10px_0_#0B2D6B] md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
                Added Value
              </p>

              <h2 className="mt-4 text-[38px] font-black uppercase leading-[0.95] tracking-[-0.035em] text-[#062B63] md:text-[54px]">
                Discounts & Financing Available
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                KayBecs offers discounts for seniors, military members, first
                responders, and cash payments. Financing is also available for
                repairs, service, and installations.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#EEF8FF] p-7 text-center">
                <BadgeDollarSign className="mx-auto h-10 w-10 text-sky-500" />
                <h3 className="mt-4 text-xl font-black uppercase text-[#071B3A]">
                  Discounts
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Seniors, military, first responders, and cash payments.
                </p>
              </div>

              <div className="rounded-3xl bg-[#EEF8FF] p-7 text-center">
                <CreditCard className="mx-auto h-10 w-10 text-sky-500" />
                <h3 className="mt-4 text-xl font-black uppercase text-[#071B3A]">
                  Financing
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Available for repairs, service, and installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071F4A] px-6 py-20 text-center text-white">
        <MapPin className="mx-auto h-9 w-9 text-sky-400" />

        <h2 className="mx-auto mt-5 max-w-4xl text-[38px] font-black uppercase leading-tight tracking-[-0.035em] md:text-[56px]">
          Need HVAC Service in El Paso?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
          Call KayBecs today for heating, cooling, evaporative cooling, repairs,
          tune-ups, replacements, and installations.
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