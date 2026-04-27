"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function LocalStory() {
  return (
    <section className="relative overflow-hidden bg-[#0B2D6B]">
      {/* TOP STRIPES */}
      <div className="absolute top-0 left-[-21%] z-20 w-[122%] overflow-hidden">
        <div className="origin-left -skew-y-[2.2deg]">
          <div className="h-[12px] w-full bg-[#17356D]" />
          <div className="h-[80px] w-full bg-[linear-gradient(90deg,#9FD38C_0%,#E6E548_50%,#9FD38C_100%)]" />
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/LocalStory.png"
          alt="Kaybecs technician working on HVAC system"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-left"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,43,99,0.38)_0%,rgba(10,60,144,0.28)_34%,rgba(10,76,179,0.80)_56%,rgba(10,76,179,0.96)_100%)]" />

      {/* CONTENT */}
      <div className="relative mx-auto grid max-w-[1500px] lg:grid-cols-[1fr_1fr]">
        <div className="hidden min-h-[760px] lg:block" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeRight}
          className="flex min-h-[760px] items-center px-8 py-28 md:px-12 xl:px-16"
        >
          <div className="max-w-[690px]">
            <h2 className="text-[42px] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-[56px] xl:text-[64px]">
              El Paso Heating & Air Conditioning Service You Can Count On
            </h2>

            <div className="mt-6 h-[4px] w-[82%] bg-[#9FE3C2]" />

            <div className="mt-7 space-y-6 text-[17px] leading-8 text-white/90">
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
                className="inline-flex items-center justify-center rounded-xl bg-[#E6E548] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#062B63] transition hover:bg-[#f1ef69]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM STRIPES */}
      <div className="absolute bottom-0 left-[-21%] z-20 w-[122%] overflow-hidden">
        <div className="origin-left skew-y-[2.2deg]">
          <div className="h-[80px] w-full bg-[linear-gradient(90deg,#9FD38C_0%,#E6E548_50%,#9FD38C_100%)]" />
          <div className="h-[12px] w-full bg-[#17356D]" />
        </div>
      </div>
    </section>
  );
}