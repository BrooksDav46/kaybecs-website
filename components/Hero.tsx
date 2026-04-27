"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.12,
      duration: 0.6,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A2F73]">
      <div className="relative min-h-[620px] w-full xl:min-h-[700px]">
        <Image
          src="/KB_Banner.png"
          alt="Kaybecs Heating & Air hero banner"
          fill
          priority
          className="object-cover object-[72%_center] contrast-105 saturate-105"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,43,99,0.88)_0%,rgba(10,60,144,0.55)_35%,rgba(10,76,179,0.18)_65%,rgba(10,76,179,0.0)_85%)]" />

        <div className="relative mx-auto flex min-h-[620px] max-w-[1450px] items-center px-8 py-12 xl:min-h-[650px] xl:px-12 2xl:px-16">
          <div className="max-w-[650px]">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeLeft}
              className="mt-15 text-[64px] font-black leading-[0.88] tracking-tight text-white md:text-[78px] xl:text-[92px]"
            >
              Reliable Heating & Air Service{" "}
              <span className="text-[#7DD3FC]">in El Paso, TX</span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.15,
                  },
                },
              }}
            >
              <motion.p
                variants={fadeIn}
                className="mt-6 max-w-[620px] text-[20px] leading-[1.6] text-white/90 md:text-[22px]"
              >
                Fast, dependable heating and cooling services for homes in El
                Paso. Call now for repairs, installations, and maintenance.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="mt-7 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="tel:9152742685"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-sky-500 px-8 py-4 text-xl font-black text-white shadow-[0_16px_36px_rgba(14,165,233,0.28)] transition hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex min-w-[270px] items-center justify-center rounded-2xl bg-white px-8 py-4 text-xl font-black text-[#0A4CB3] shadow-[0_16px_36px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Request Estimate
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-[10px] bg-[#062B63] shadow-[0_-2px_6px_rgba(0,0,0,0.25)]" />
          <div className="h-[18px] bg-[#dbe7ef]" />
        </div>
      </div>
    </section>
  );
}