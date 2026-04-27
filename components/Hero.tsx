import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A2F73]">
      <div className="relative min-h-[560px] w-full md:min-h-[640px] xl:min-h-[700px]">
        <Image
          src="/KB_Banner.png"
          alt="Kaybecs Heating & Air hero banner"
          fill
          priority
          className="object-cover object-[70%_center]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,43,99,0.94)_0%,rgba(10,60,144,0.78)_45%,rgba(10,76,179,0.28)_75%)]" />

        <div className="relative mx-auto flex min-h-[560px] max-w-[1450px] items-center px-5 py-10 md:min-h-[640px] md:px-8 xl:min-h-[650px] xl:px-12 2xl:px-16">
          <div className="max-w-[650px]">
            <h1 className="text-[43px] font-black leading-[0.92] tracking-tight text-white sm:text-[54px] md:text-[72px] xl:text-[92px]">
              Reliable Heating & Air Service{" "}
              <span className="text-[#7DD3FC]">in El Paso, TX</span>
            </h1>

            <p className="mt-5 max-w-[620px] text-[17px] leading-[1.6] text-white/90 md:text-[22px]">
              Fast, dependable heating and cooling services for homes in El
              Paso. Call now for repairs, installations, and maintenance.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="tel:9152742685"
                className="inline-flex min-w-[190px] items-center justify-center rounded-xl bg-sky-500 px-6 py-4 text-base font-black text-white transition hover:bg-sky-400 md:min-w-[220px] md:text-xl"
              >
                <Phone className="mr-3 h-5 w-5" />
                Call Now
              </Link>

              <Link
                href="/#contact"
                className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-black text-[#0A4CB3] transition hover:bg-slate-100 md:min-w-[270px] md:text-xl"
              >
                Request Estimate
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-[8px] bg-[#062B63]" />
          <div className="h-[14px] bg-[#dbe7ef]" />
        </div>
      </div>
    </section>
  );
}