"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A2F73]">
      <div className="relative h-[600px] w-full sm:h-[640px] md:h-[700px] xl:h-[760px]">
        <Image
          src="/KB_Banner.png"
          alt="Kaybecs Heating & Air Service in El Paso, TX"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-center"
        />

        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(6,43,99,0.95)_0%,rgba(10,47,115,0.85)_50%,rgba(10,76,179,0.35)_100%)] md:bg-[linear-gradient(90deg,rgba(6,43,99,0.9)_0%,rgba(10,60,144,0.6)_40%,rgba(10,76,179,0.1)_75%)]" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto flex h-full max-w-[1450px] items-center px-5 pt-20 pb-16 sm:px-6 md:px-8 xl:px-12 2xl:px-16"
        >
          <div className="w-full max-w-[650px]">
            <motion.h1
              variants={fadeUp}
              className="text-[40px] font-black leading-[0.95] tracking-tight text-white sm:text-[54px] md:text-[78px] xl:text-[92px]"
            >
              Reliable Heating & Air Service{" "}
              <span className="text-[#7DD3FC]">in El Paso, TX</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[620px] text-[17px] leading-[1.6] text-white/90 sm:text-[18px] md:mt-6 md:text-[22px]"
            >
              Fast, dependable heating and cooling services for homes in El
              Paso. Call now for repairs, installations, and maintenance.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex w-full flex-col gap-3 sm:flex-row md:mt-7 md:gap-4"
            >
              <Link
                href="tel:9152742685"
                className="inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-6 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-400 sm:w-auto md:min-w-[220px] md:rounded-2xl md:px-8 md:text-xl"
              >
                <Phone className="mr-3 h-5 w-5 shrink-0" />
                Call Now
              </Link>

              <Link
                href="/#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-black text-[#0A4CB3] transition hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto md:min-w-[270px] md:rounded-2xl md:px-8 md:text-xl"
              >
                Request Estimate
                <ArrowRight className="ml-3 h-5 w-5 shrink-0" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 z-20 w-full">
          <div className="h-[8px] bg-[#062B63] md:h-[10px]" />
          <div className="h-[14px] bg-[#dbe7ef] md:h-[18px]" />
        </div>
      </div>
    </section>
  );
}