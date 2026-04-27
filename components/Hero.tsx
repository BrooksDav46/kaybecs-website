"use client";

import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A2F73]">
      <div className="relative min-h-[560px] w-full md:min-h-[620px] xl:min-h-[700px]">
        <Image
          src="/KB_Banner.png"
          alt="Kaybecs Heating & Air hero banner"
          fill
          priority
          className="object-cover object-[72%_center] contrast-105 saturate-105"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,43,99,0.94)_0%,rgba(10,60,144,0.78)_45%,rgba(10,76,179,0.28)_75%)] md:bg-[linear-gradient(90deg,rgba(6,43,99,0.88)_0%,rgba(10,60,144,0.55)_35%,rgba(10,76,179,0.18)_65%,rgba(10,76,179,0.0)_85%)]" />

        <div className="relative mx-auto flex min-h-[560px] max-w-[1450px] items-center px-5 py-10 md:min-h-[620px] md:px-8 xl:min-h-[650px] xl:px-12 2xl:px-16">
          <div className="max-w-[650px]">
            
            {/* HEADING */}
            <motion.h1
              initial={isMobile ? false : "hidden"}
              animate={isMobile ? undefined : "show"}
              variants={isMobile ? undefined : fadeLeft}
              className="text-[42px] font-black leading-[0.92] tracking-tight text-white sm:text-[54px] md:text-[78px] xl:text-[92px]"
            >
              Reliable Heating & Air Service{" "}
              <span className="text-[#7DD3FC]">in El Paso, TX</span>
            </motion.h1>

            {/* CONTENT */}
            <motion.div
              initial={isMobile ? false : "hidden"}
              animate={isMobile ? undefined : "show"}
              variants={
                isMobile
                  ? undefined
                  : {
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.15,
                          delayChildren: 0.15,
                        },
                      },
                    }
              }
            >
              <motion.p
                variants={isMobile ? undefined : fadeIn}
                className="mt-5 max-w-[620px] text-[17px] leading-[1.6] text-white/90 md:mt-6 md:text-[22px]"
              >
                Fast, dependable heating and cooling services for homes in El
                Paso. Call now for repairs, installations, and maintenance.
              </motion.p>

              <motion.div
                variants={isMobile ? undefined : fadeIn}
                className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-7 md:gap-4"
              >
                <Link
                  href="tel:9152742685"
                  className="inline-flex min-w-[190px] items-center justify-center rounded-xl bg-sky-500 px-6 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-400 md:min-w-[220px] md:rounded-2xl md:px-8 md:text-xl"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-black text-[#0A4CB3] transition hover:-translate-y-0.5 hover:bg-slate-100 md:min-w-[270px] md:rounded-2xl md:px-8 md:text-xl"
                >
                  Request Estimate
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-[8px] bg-[#062B63] md:h-[10px]" />
          <div className="h-[14px] bg-[#dbe7ef] md:h-[18px]" />
        </div>
      </div>
    </section>
  );
}