"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden glass-card flex items-center justify-center p-8"
                        >
                            <div className="text-center z-10">
                                <span className="text-amethyst-500 font-heading text-6xl mb-6 block">🌿</span>
                                <p className="font-heading text-3xl font-light italic opacity-90 leading-relaxed">
                                    "Healing begins within."
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amethyst-500/10 rounded-full blur-[60px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400/10 rounded-full blur-[60px] pointer-events-none" />
                        </motion.div>

                        {/* External Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-400/20 rounded-full blur-[40px] pointer-events-none" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2 text-amethyst-600 dark:text-amethyst-400 mb-4 font-medium tracking-wide uppercase text-sm"
                        >
                            ✧ Our Vision
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                        >
                            Guiding Your Light
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-lg text-earth-900/80 dark:text-earth-50/80 mb-10"
                        >
                            <p>
                                Founded by <span className="text-gold-600 dark:text-gold-400 font-medium">@toughest.girl</span>, Earth Healers is more than an online boutique—it's a sanctuary for souls seeking clarity, healing, and alignment.
                            </p>
                            <p>
                                We believe that the earth provides everything we need to heal. From ethically sourced crystals to profound tarot and astrology readings, every offering is curated with intention and deeply rooted in spiritual wisdom.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-2 border-b-2 border-amethyst-500 text-amethyst-600 dark:text-amethyst-400 font-semibold hover:text-amethyst-500 transition-colors pb-1 text-lg"
                            >
                                Read our story
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
