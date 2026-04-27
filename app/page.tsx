import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import LocalStory from "@/components/LocalStory";
import ContactCTA from "@/components/ContactCTA";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <LocalStory />
      <ContactCTA />
      <ContactUs />
      <Footer />
    </main>
  );
};