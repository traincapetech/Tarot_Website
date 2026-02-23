"use client";

import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOCK_EVENTS } from "@/lib/mockData";
import { Calendar, Clock, MapPin, User, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function EventDetailPage() {
    const params = useParams();
    const event = MOCK_EVENTS.find(e => e.id === parseInt(params.id));
    const [isRegistered, setIsRegistered] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    if (!event) {
        notFound();
    }

    const handleRegister = () => {
        setIsRegistering(true);
        // Simulate API call to register
        setTimeout(() => {
            setIsRegistering(false);
            setIsRegistered(true);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-earth-50 text-earth-900 dark:bg-earth-950 dark:text-earth-50 flex flex-col selection:bg-gold-500/30">
            <Navbar />

            <div className="flex-grow pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="container mx-auto px-4 lg:px-12 relative z-10 max-w-6xl">
                    <Link href="/events" className="inline-flex items-center gap-2 text-earth-900/60 dark:text-earth-50/60 hover:text-gold-500 transition-colors mb-8 font-medium">
                        <ArrowLeft size={18} /> Back to Events
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content (Left, 2 columns wide on LG) */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Hero Header */}
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-amethyst-500/10 text-amethyst-700 dark:text-amethyst-400 text-sm font-bold tracking-wider uppercase mb-4">
                                    {event.type}
                                </span>
                                <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                    {event.title}
                                </h1>
                                <p className="text-xl text-earth-900/70 dark:text-earth-50/70 leading-relaxed">
                                    {event.description}
                                </p>
                            </div>

                            {/* Mystical Image Placeholder */}
                            <div className="relative h-64 md:h-96 w-full rounded-2xl bg-earth-800/10 dark:bg-earth-50/10 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-earth-900/40 via-transparent to-transparent z-10" />
                                <span className="text-[8rem] md:text-[12rem] opacity-80 filter drop-shadow-2xl relative z-0 animate-pulse-slow">
                                    {event.image}
                                </span>
                            </div>

                            {/* What to Expect */}
                            <div className="glass-card p-8 rounded-2xl">
                                <h2 className="font-heading text-2xl font-bold mb-6">What to Expect</h2>
                                <ul className="space-y-4">
                                    {event.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="mt-1 bg-gold-500/20 p-1.5 rounded-full text-gold-600 dark:text-gold-400">
                                                <CheckCircle size={16} />
                                            </div>
                                            <span className="text-lg text-earth-900/80 dark:text-earth-50/80">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        {/* Sidebar / Registration Panel (Right, 1 column wide on LG) */}
                        <div className="lg:col-span-1">
                            <div className="glass-card p-8 rounded-2xl sticky top-32 border-2 border-gold-500/10 shadow-xl">

                                <div className="mb-8 p-6 bg-earth-900/5 dark:bg-earth-50/5 rounded-xl border border-earth-800/10 dark:border-earth-50/10 text-center">
                                    <span className="block text-sm font-bold text-earth-900/50 dark:text-earth-50/50 uppercase tracking-wider mb-2">Registration Fee</span>
                                    <span className="font-heading text-5xl font-bold text-earth-900 dark:text-earth-50">
                                        {event.price === 0 ? "Free" : `$${event.price}`}
                                    </span>
                                </div>

                                <div className="space-y-6 mb-8 text-earth-900/80 dark:text-earth-50/80 font-medium">
                                    <div className="flex items-start gap-4">
                                        <Calendar className="w-6 h-6 text-gold-500 shrink-0" />
                                        <span>{event.fullDate}</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-6 h-6 text-gold-500 shrink-0" />
                                        <span>{event.time} ({event.duration})</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-gold-500 shrink-0" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-start gap-4 pt-4 border-t border-earth-800/10 dark:border-earth-50/10">
                                        <User className="w-6 h-6 text-amethyst-500 shrink-0" />
                                        <span>Hosted by {event.host}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between text-sm mb-4 font-medium px-2">
                                    <span className="text-earth-900/60 dark:text-earth-50/60">Spots Left</span>
                                    <span className="text-amethyst-600 dark:text-amethyst-400 bg-amethyst-500/10 px-2 py-0.5 rounded-full">{event.spotsAvailable}</span>
                                </div>

                                <AnimatePresence mode="wait">
                                    {isRegistered ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="w-full py-4 px-6 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-inner"
                                        >
                                            <CheckCircle size={20} /> Registered Successfully
                                        </motion.div>
                                    ) : (
                                        <motion.button
                                            key="register"
                                            onClick={handleRegister}
                                            disabled={isRegistering || event.spotsAvailable === 0}
                                            className="w-full py-4 text-center bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 rounded-xl font-medium transition-all hover:bg-earth-800 dark:hover:bg-earth-100 disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg"
                                        >
                                            {isRegistering ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
                                                    Processing...
                                                </>
                                            ) : event.spotsAvailable === 0 ? (
                                                "Sold Out"
                                            ) : (
                                                "Reserve My Spot"
                                            )}
                                        </motion.button>
                                    )}
                                </AnimatePresence>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
