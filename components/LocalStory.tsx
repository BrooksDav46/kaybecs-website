"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
};

export default function LocalStory() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B2D6B]">
      <div className="absolute left-[-21%] top-0 z-20 w-[122%] overflow-hidden">
        <div className="origin-left -skew-y-[2.2deg]">
          <div className="h-[12px] w-full bg-[#17356D]" />
          <div className="h-[58px] w-full bg-[linear-gradient(90deg,#9FD38C_0%,#E6E548_50%,#9FD38C_100%)] md:h-[80px]" />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/LocalStory.png"
          alt="Kaybecs technician working on HVAC system"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="block object-cover object-left"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,43,99,0.88)_0%,rgba(10,60,144,0.78)_42%,rgba(10,76,179,0.96)_100%)] lg:bg-[linear-gradient(90deg,rgba(6,43,99,0.38)_0%,rgba(10,60,144,0.28)_34%,rgba(10,76,179,0.80)_56%,rgba(10,76,179,0.96)_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] lg:grid-cols-[1fr_1fr]">
        <div className="hidden min-h-[760px] lg:block" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex min-h-[720px] items-center px-5 py-28 sm:px-6 md:min-h-[760px] md:px-12 xl:px-16"
        >
          <div className="max-w-[690px]">
            <h2 className="text-[36px] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-[44px] md:text-[56px] xl:text-[64px]">
              El Paso Heating & Air Conditioning Service You Can Count On
            </h2>

            <div className="mt-6 h-[4px] w-full max-w-[520px] bg-[#9FE3C2]" />

            <div className="mt-7 space-y-6 text-[16px] leading-8 text-white/90 md:text-[17px]">
              <p>
                KayBecs Heating, Cooling & Refrigeration provides dependable HVAC
                service throughout El Paso, specializing in maintenance, repair,
                and system performance optimization for residential homes.
              </p>

              <p>
                Our approach focuses on long-term reliability, helping homeowners
                reduce breakdowns, extend equipment lifespan, and maintain
                efficient heating and cooling year-round.
              </p>

              <p>
                When you choose KayBecs, you're working with a local HVAC team
                committed to fast response times, honest recommendations, and
                service that keeps your home comfortable in every season.
              </p>
            </div>

            <div className="mt-9">
              <Link
                href="tel:9152742685"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#E6E548] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#062B63] transition hover:bg-[#f1ef69] sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                Schedule Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-[-21%] z-20 w-[122%] overflow-hidden">
        <div className="origin-left skew-y-[2.2deg]">
          <div className="h-[58px] w-full bg-[linear-gradient(90deg,#9FD38C_0%,#E6E548_50%,#9FD38C_100%)] md:h-[80px]" />
          <div className="h-[12px] w-full bg-[#17356D]" />
        </div>
      </div>
    </section>
  );
}