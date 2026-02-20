"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const EVENTS = [
    {
        id: 1,
        title: "New Moon Intentions Ceremony",
        date: "Aug 16, 2023",
        time: "7:00 PM - 8:30 PM",
        location: "Online (Zoom)",
        type: "Workshop",
    },
    {
        id: 2,
        title: "Crystal Healing Fundamentals",
        date: "Sep 02, 2023",
        time: "10:00 AM - 12:00 PM",
        location: "Earth Healers Studio",
        type: "Masterclass",
    },
    {
        id: 3,
        title: "Tarot for Beginners",
        date: "Sep 15, 2023",
        time: "6:30 PM - 8:00 PM",
        location: "Online (Zoom)",
        type: "Course",
    }
];

export default function EventsSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-earth-900 text-earth-50 dark:bg-earth-950">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amethyst-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2 text-gold-400 mb-4 font-medium tracking-wide uppercase text-sm"
                        >
                            ✧ Gather & Grow
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-4xl lg:text-5xl font-bold mb-4"
                        >
                            Upcoming Gatherings
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-earth-50/70 text-lg leading-relaxed"
                        >
                            Join our community for transformative workshops, ceremonies, and courses designed to elevate your spiritual practice.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex-shrink-0 mb-2"
                    >
                        <Link
                            href="/events"
                            className="group inline-flex items-center gap-2 border-b-2 border-gold-500 text-gold-400 font-semibold hover:text-gold-300 transition-colors pb-1 text-lg"
                        >
                            View all events
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {EVENTS.map((event, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            key={event.id}
                            className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-3xl p-8 relative group flex flex-col h-full backdrop-blur-sm"
                        >
                            <div className="mb-8">
                                <span className="inline-block bg-amethyst-500/20 text-amethyst-300 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
                                    {event.type}
                                </span>
                                <h3 className="font-heading text-2xl font-semibold mb-6 group-hover:text-gold-400 transition-colors leading-snug">
                                    {event.title}
                                </h3>

                                <ul className="space-y-4 text-earth-50/80">
                                    <li className="flex items-start gap-4">
                                        <Calendar size={20} className="text-gold-500 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-earth-50">{event.date}</p>
                                            <p className="text-sm opacity-80">{event.time}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <MapPin size={20} className="text-gold-500 shrink-0 mt-0.5" />
                                        <span className="text-sm pt-0.5 leading-relaxed">{event.location}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/10">
                                <Link
                                    href={`/events/${event.id}`}
                                    className="block w-full text-center bg-white border border-white text-earth-900 py-4 rounded-xl font-semibold hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg hover:shadow-none"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
