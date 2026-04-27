"use client";

import {
  Flame,
  Snowflake,
  Wind,
  Wrench,
  BadgePercent,
} from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
    },
  },
};

const fadeCard: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

const cards = [
  {
    icon: Flame,
    title: "Heating",
    text: "Reliable heating repair, replacement, and seasonal service for homes in El Paso.",
  },
  {
    icon: Snowflake,
    title: "Cooling",
    text: "Fast AC repair and cooling services to keep your home comfortable.",
  },
  {
    icon: Wrench,
    title: "Maintain",
    text: "Routine HVAC maintenance that helps your system run efficiently and last longer.",
  },
  {
    icon: Wind,
    title: "Quality",
    text: "Indoor air quality solutions that help your home feel cleaner and more comfortable.",
  },
  {
    icon: BadgePercent,
    title: "Value",
    text: "Honest recommendations, dependable workmanship, and HVAC solutions.",
  },
];

const valueCards = [
  {
    title: "Fast",
    subtitle: "Quick HVAC Service Across El Paso",
    text: "KayBecs Heating & Air helps El Paso homeowners get fast response times for repairs, maintenance, and service calls when comfort matters most.",
    cta: "Contact Today",
  },
  {
    title: "Honest",
    subtitle: "Clear Pricing And Straight Answers",
    text: "We believe in honest recommendations, dependable workmanship, and HVAC service that makes sense for your home, system, and budget.",
    cta: "Contact Today",
  },
  {
    title: "Local",
    subtitle: "Built For El Paso Homes",
    text: "From heating and cooling repairs to ongoing maintenance, KayBecs provides local HVAC service designed for El Paso homeowners year-round.",
    cta: "Contact Today",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F8FCFF_0%,#F1F8FC_16%,#EAF4FA_38%,#E1EEF7_68%,#D7E8F3_100%)] px-6 pb-24 pt-24 lg:px-10"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-44 w-[34rem] rounded-br-[8rem] bg-sky-100/90" />
      <div className="pointer-events-none absolute left-10 top-6 h-40 w-[26rem] rounded-full bg-white/60 blur-[10px]" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[340px] w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_34%)]" />
        <div className="absolute right-0 top-[35%] h-[420px] w-full bg-[radial-gradient(circle_at_center_right,rgba(186,219,239,0.16),transparent_28%)]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-full bg-[linear-gradient(180deg,rgba(223,238,247,0)_0%,rgba(210,229,241,0.42)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1450px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-10 text-center"
        >
          <h2 className="mx-auto max-w-[900px] text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-[#062B63] md:text-5xl">
            Quality Heating & Air Conditioning Company
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[22px] italic leading-relaxed text-[#0A4CB3] md:text-[24px]">
            HVAC service for El Paso homes and surrounding areas
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeCard}
                className="group relative min-h-[320px] rounded-[18px] border-2 border-[#0A2F73] bg-white px-5 pb-8 pt-8 shadow-[9px_9px_0_0_#062B63] transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-[11px_11px_0_0_#38BDF8]"
              >
                <div className="flex justify-center">
                  <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-[#0A4CB3] transition duration-300 group-hover:bg-sky-100 group-hover:text-sky-500">
                    <Icon className="h-10 w-10 shrink-0 stroke-[2.2]" />
                  </div>
                </div>

                <h3 className="mt-6 text-center text-[1.75rem] font-black uppercase text-[#062B63]">
                  {card.title}
                </h3>

                <p className="mt-4 text-center text-[14px] leading-7 text-slate-700">
                  {card.text}
                </p>

                <div className="mt-6 text-center">
                  <span className="text-[15px] font-black uppercase tracking-[0.12em] text-[#0891B2]">
                    Read More
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-9 mt-28 text-center"
        >
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-[#062B63] md:text-5xl">
            Choose Kaybecs
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-2 xl:grid-cols-3">
          {valueCards.map((card) => {
            return (
              <motion.article
                key={card.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeCard}
                className="group relative flex min-h-[520px] w-full flex-col justify-between rounded-[5px] border-2 border-dashed border-[#0891B2] bg-[linear-gradient(180deg,#D6E6F0_0%,#C9DDEA_100%)] px-8 py-10 text-center sm:px-12 sm:py-12"
              >
                <div>
                  <h3 className="text-[52px] font-black leading-none text-[#062B63] sm:text-[64px]">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-[20px] font-semibold text-[#062B63]">
                    {card.subtitle}
                  </p>

                  <p className="mt-6 text-[16px] leading-8 text-slate-700">
                    {card.text}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="tel:9152742685"
                    className="mx-auto inline-flex w-full max-w-[250px] items-center justify-center rounded-[10px] bg-[#062B63] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0A4CB3]"
                  >
                    {card.cta}
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}