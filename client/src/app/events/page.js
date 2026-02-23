"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { MOCK_EVENTS } from "@/lib/mockData";

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-earth-50 text-earth-900 dark:bg-earth-950 dark:text-earth-50 flex flex-col">
            <Navbar />

            {/* Page Header */}
            <div className="pt-32 pb-16 bg-earth-100/30 dark:bg-earth-900/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amethyst-400/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-12 relative z-10 text-center">
                    <span className="text-sm uppercase tracking-widest text-amethyst-600 dark:text-amethyst-400 font-semibold mb-4 block">
                        ✧ Gatherings & Workshops ✧
                    </span>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Upcoming Events</h1>
                    <p className="text-lg text-earth-900/70 dark:text-earth-50/70 max-w-2xl mx-auto">
                        Join our community for transformative rituals, masterclasses, and sacred ceremonies. Find your next alignment below.
                    </p>
                </div>
            </div>

            {/* Events List */}
            <div className="container mx-auto px-4 lg:px-12 py-16 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_EVENTS.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

                {MOCK_EVENTS.length === 0 && (
                    <div className="text-center py-20 glass-card rounded-2xl max-w-2xl mx-auto mt-8">
                        <span className="text-6xl mb-4 block">🌙</span>
                        <h3 className="font-heading text-2xl font-bold mb-2">The Stars are Aligning</h3>
                        <p className="text-earth-900/60 dark:text-earth-50/60">
                            We are currently preparing our next season of offerings. Check back soon for new events, or sign up for our newsletter to be the first to know.
                        </p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
