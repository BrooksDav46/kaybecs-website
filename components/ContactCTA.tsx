export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#EEF5F9] py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="relative rounded-[22px] border-2 border-[#0A2F73] bg-[linear-gradient(180deg,#F7FCFF_0%,#EDF5FA_100%)] px-5 py-8 shadow-[6px_6px_0_0_#062B63] md:rounded-[28px] md:px-12 md:py-14 lg:px-14 lg:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-[36px] font-black uppercase leading-[0.92] tracking-[-0.035em] text-[#062B63] md:text-[56px] lg:text-[64px]">
                Need to Schedule an Appointment?
              </h2>

              <div className="mt-4 h-[5px] w-28 bg-[#E6E548]" />

              <div className="mt-6 max-w-[600px] space-y-5 text-[16px] leading-8 text-slate-700 md:text-[18px]">
                <p>
                  KayBecs Heating & Air provides fast, dependable HVAC service
                  across El Paso.
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

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <input type="text" name="fullName" placeholder="Full Name*" required className="h-[48px] w-full rounded-lg border border-sky-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-sky-400 md:h-[50px] md:text-base" />

              <select name="newCustomer" required className="h-[48px] w-full rounded-lg border border-sky-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-sky-400 md:h-[50px] md:text-base">
                <option value="">Are You a New Customer?*</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <input type="tel" name="phone" placeholder="Phone*" required className="h-[48px] w-full rounded-lg border border-sky-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-sky-400 md:h-[50px] md:text-base" />

              <input type="email" name="email" placeholder="Email*" required className="h-[48px] w-full rounded-lg border border-sky-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-sky-400 md:h-[50px] md:text-base" />

              <select name="serviceRequested" required className="h-[48px] w-full rounded-lg border border-sky-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-sky-400 md:h-[50px] md:text-base">
                <option value="">Service Requested*</option>
                <option value="Preventive Maintenance">Preventive Maintenance</option>
                <option value="Heating and Cooling Tune-Up">Heating and Cooling Tune-Up</option>
                <option value="Heating Service or Repair">Heating Service or Repair</option>
                <option value="Cooling Service or Repair">Cooling Service or Repair</option>
                <option value="Evaporative Cooling Service or Repair">Evaporative Cooling Service or Repair</option>
                <option value="Evaporative Cooler Installation or Replacement">Evaporative Cooler Installation / Replacement</option>
                <option value="Evaporative Cooler Conversion">Evaporative Cooler Conversion</option>
                <option value="Furnace Replacement">Furnace Replacement</option>
                <option value="Refrigerated Air Replacement">Refrigerated Air Replacement</option>
                <option value="Financing Information">Financing Information</option>
                <option value="Other">Other</option>
              </select>

              <textarea name="message" placeholder="Message*" required className="min-h-[120px] w-full rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:border-sky-400 md:text-base" />

              <button type="submit" className="inline-flex w-full items-center justify-center rounded-xl bg-[#062B63] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0A4CB3] sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-[-21%] z-0 w-[122%] overflow-hidden">
        <div className="origin-right skew-y-[-1.9deg]">
          <div className="h-[50px] w-full bg-[linear-gradient(270deg,#9FD38C_0%,#E6E548_50%,#9FD38C_100%)] md:h-[70px]" />
          <div className="h-[10px] w-full bg-[#17356D]" />
        </div>
      </div>
    </section>
  );
}