"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Clock, Video } from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function BookingConfirmation({ bookingData }) {
    const serviceName = bookingData.service === "tarot" ? "Tarot Reading" : "Astrology Consultation";

    useEffect(() => {
        // Trigger subtle confetti celebration on mount
        const duration = 1000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 50,
                origin: { x: 0 },
                colors: ['#EAB308', '#9333EA', '#15803D'] // gold, amethyst, green
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 50,
                origin: { x: 1 },
                colors: ['#EAB308', '#9333EA', '#15803D']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl mx-auto text-center"
        >
            <div className="flex justify-center mb-8">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                >
                    <CheckCircle className="w-24 h-24 text-green-500" />
                </motion.div>
            </div>

            <h2 className="font-heading text-4xl font-bold mb-4">Your Journey Begins</h2>
            <p className="text-xl text-earth-900/70 dark:text-earth-50/70 mb-10">
                Thank you, <span className="font-semibold text-earth-900 dark:text-earth-50">{bookingData.details.name.split(' ')[0]}</span>. Your booking is confirmed.
            </p>

            <div className="glass-card p-8 rounded-2xl mb-10 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-[40px] pointer-events-none" />

                <h3 className="font-heading text-2xl font-bold mb-6 text-center border-b border-earth-800/10 dark:border-earth-50/10 pb-4">
                    {serviceName}
                </h3>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
                    <div className="flex flex-col items-center gap-2 text-earth-900/80 dark:text-earth-50/80">
                        <Calendar className="w-8 h-8 text-gold-500 mb-1" />
                        <span className="font-medium text-lg text-earth-900 dark:text-earth-50">{bookingData.date}</span>
                        <span className="text-sm uppercase tracking-wider">Date</span>
                    </div>

                    <div className="hidden sm:block w-px h-16 bg-earth-800/10 dark:bg-earth-50/10" />

                    <div className="flex flex-col items-center gap-2 text-earth-900/80 dark:text-earth-50/80">
                        <Clock className="w-8 h-8 text-gold-500 mb-1" />
                        <span className="font-medium text-lg text-earth-900 dark:text-earth-50">{bookingData.time}</span>
                        <span className="text-sm uppercase tracking-wider">Time</span>
                    </div>
                </div>

                <div className="bg-earth-900/5 dark:bg-earth-50/5 p-4 rounded-xl flex items-start gap-4 text-sm text-earth-900/80 dark:text-earth-50/80">
                    <Video className="w-6 h-6 text-amethyst-500 shrink-0 mt-0.5" />
                    <p>
                        A calendar invitation containing your secure Google Meet link has been sent to <strong>{bookingData.details.email}</strong>. Please join the room 5 minutes prior to your scheduled time.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href="/shop"
                    className="px-8 py-4 bg-transparent text-earth-900 dark:text-earth-50 border border-earth-900/20 dark:border-earth-50/20 rounded-full font-medium transition-all hover:bg-earth-900/5 dark:hover:bg-earth-50/5 flex-1"
                >
                    Visit Shop
                </Link>
                <Link
                    href="/"
                    className="px-8 py-4 bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 rounded-full font-medium transition-all hover:scale-105 shadow-lg flex-1"
                >
                    Return Home
                </Link>
            </div>
        </motion.div>
    );
}
