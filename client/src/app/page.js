import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-earth-50 text-earth-900 dark:bg-earth-950 dark:text-earth-50 selection:bg-gold-500/30">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      <EventsSection />
      <Footer />
    </main>
  );
}
