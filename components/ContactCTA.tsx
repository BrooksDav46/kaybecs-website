export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#EEF5F9] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-80px] h-[420px] w-[520px] rounded-full bg-white/50 blur-3xl" />
        <div className="absolute right-[-160px] top-20 h-[420px] w-[520px] rounded-full bg-sky-100/70 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="relative rounded-[28px] border-2 border-[#0A2F73] bg-[linear-gradient(180deg,#F7FCFF_0%,#EDF5FA_100%)] px-9 py-12 shadow-[10px_10px_0_0_#062B63] md:px-12 md:py-14 lg:px-14 lg:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-[42px] font-black uppercase leading-[0.92] tracking-[-0.035em] text-[#062B63] md:text-[56px] lg:text-[64px]">
                Need to Schedule an Appointment?
              </h2>

              <div className="mt-5 h-[6px] w-32 bg-[#E6E548]" />

              <div className="mt-7 max-w-[600px] space-y-6 text-[17px] leading-8 text-slate-700 md:text-[18px]">
                <p>
                  KayBecs Heating & Air provides fast, dependable HVAC service
                  across El Paso. From repairs to full system installs, we make
                  it simple to get your home comfortable again.
                </p>

                <p>
                  Whether you need service now or want to plan ahead, our team is
                  ready to help with honest recommendations and reliable local
                  support.
                </p>

                <p className="font-black text-[#062B63]">
                  Let us help you keep your home comfortable year-round.
                </p>
              </div>
            </div>

            <div>
              <form
                action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT_HERE"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New KayBecs Appointment Request"
                />

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  required
                  className="h-[50px] w-full rounded-lg border border-sky-200 bg-white px-5 text-base text-slate-800 outline-none transition focus:border-sky-400"
                />

                <select
                  name="newCustomer"
                  required
                  className="h-[50px] w-full rounded-lg border border-sky-200 bg-white px-5 text-base text-slate-800 outline-none transition focus:border-sky-400"
                >
                  <option value="">Are You a New Customer?*</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  required
                  className="h-[50px] w-full rounded-lg border border-sky-200 bg-white px-5 text-base text-slate-800 outline-none transition focus:border-sky-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="h-[50px] w-full rounded-lg border border-sky-200 bg-white px-5 text-base text-slate-800 outline-none transition focus:border-sky-400"
                />

                <select
                  name="serviceRequested"
                  required
                  className="h-[50px] w-full rounded-lg border border-sky-200 bg-white px-5 text-base text-slate-800 outline-none transition focus:border-sky-400"
                >
                  <option value="">Service Requested*</option>
                  <option value="Preventive Maintenance">
                    Preventive Maintenance
                  </option>
                  <option value="Heating and Cooling Tune-Up">
                    Heating and Cooling Tune-Up
                  </option>
                  <option value="Heating Service or Repair">
                    Heating Service or Repair
                  </option>
                  <option value="Cooling Service or Repair">
                    Cooling Service or Repair
                  </option>
                  <option value="Evaporative Cooling Service or Repair">
                    Evaporative Cooling Service or Repair
                  </option>
                  <option value="Evaporative Cooler Installation or Replacement">
                    Evaporative Cooler Installation / Replacement
                  </option>
                  <option value="Evaporative Cooler Conversion">
                    Evaporative Cooler Conversion
                  </option>
                  <option value="Furnace Replacement">
                    Furnace Replacement
                  </option>
                  <option value="Refrigerated Air Replacement">
                    Refrigerated Air Replacement
                  </option>
                  <option value="Financing Information">
                    Financing Information
                  </option>
                  <option value="Other">Other</option>
                </select>

                <input
                  type="text"
                  name="howDidYouHearAboutUs"
                  placeholder="How Did You Hear About Us?*"
                  required
                  className="h-[50px] w-full rounded-lg border border-sky-200 bg-white px-5 text-base text-slate-800 outline-none transition focus:border-sky-400"
                />

                <textarea
                  name="message"
                  placeholder="Message*"
                  required
                  className="min-h-[135px] w-full rounded-lg border border-sky-200 bg-white px-5 py-4 text-base text-slate-800 outline-none transition focus:border-sky-400"
                />

                <button
                  type="submit"
                  className="mt-1 inline-flex min-w-[200px] items-center justify-center rounded-xl bg-[#062B63] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0A4CB3]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-[-21%] z-20 w-[122%] overflow-hidden">
        <div className="origin-right skew-y-[-1.9deg]">
          <div className="h-[70px] w-full bg-[linear-gradient(270deg,#9FD38C_0%,#E6E548_50%,#9FD38C_100%)]" />
          <div className="h-[12px] w-full bg-[#17356D]" />
        </div>
      </div>
    </section>
  );
}