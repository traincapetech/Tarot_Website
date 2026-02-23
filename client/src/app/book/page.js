import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingWizard from "./BookingWizard";

export const metadata = {
    title: "Book a Reading | Earth Healers",
    description: "Schedule your Tarot or Astrology session with Earth Healers.",
};

export default function BookPage() {
    return (
        <main className="min-h-screen bg-earth-50 text-earth-900 dark:bg-earth-950 dark:text-earth-50 flex flex-col selection:bg-gold-500/30">
            <Navbar />

            <div className="flex-grow pt-32 pb-24 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amethyst-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

                <div className="container mx-auto px-4 lg:px-12 relative z-10">
                    <BookingWizard />
                </div>
            </div>

            <Footer />
        </main>
    );
}
