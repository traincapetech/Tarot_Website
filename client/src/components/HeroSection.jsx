"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Abstract mystical background blurs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-amethyst-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-3/5 max-w-3xl pt-10 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center space-x-2 text-gold-600 dark:text-gold-400 mb-6 font-medium tracking-wide uppercase text-sm"
                    >
                        <Sparkles size={16} />
                        <span>Awaken Your Spirit</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
                            Let's <span className="text-gradient">Heal</span> Together.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-lg md:text-xl text-earth-900/80 dark:text-earth-50/80 mb-10 max-w-2xl leading-relaxed">
                            Discover premium crystals, gemstone tools, and insightful tarot & astrology sessions to guide your spiritual journey and restore balance to your life.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/shop"
                            className="group flex items-center justify-center gap-2 bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                        >
                            Shop Collection
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/book"
                            className="flex items-center justify-center glass px-8 py-4 rounded-full font-medium transition-all hover:bg-white/40 dark:hover:bg-black/40 hover:scale-105"
                        >
                            Book a Reading
                        </Link>
                    </motion.div>
                </div>

                {/* Right side floating elements (e.g. image or mystical shapes) */}
                <div className="w-full lg:w-2/5 mt-16 lg:mt-0 relative hidden md:flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative w-full max-w-md rounded-[2rem] overflow-hidden flex items-center justify-center shadow-2xl"
                    >
                        {/* High quality hero image */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg"
                            alt="Crystal Healing"
                            className="w-full h-auto object-cover block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-0 z-20 flex items-end p-8">
                            <p className="font-heading text-2xl font-light italic text-earth-50">
                                "The soul is healed by being with it."
                            </p>
                        </div>

                        {/* Decorative rings */}
                        <div className="absolute inset-0 border-[1px] border-gold-500/20 rounded-[2rem] m-4 pointer-events-none" />
                        <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2rem] m-8 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
