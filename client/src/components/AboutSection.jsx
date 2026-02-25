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
                            className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden flex items-center justify-center border border-white/10"
                        >
                            <img
                                src="data:image/svg+xml;utf8,%3Csvg%20width%3D%22800%22%20height%3D%221000%22%20viewBox%3D%220%200%20800%201000%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2314532d%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23052e16%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%221000%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22500%22%20r%3D%22300%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%2210%2015%22%20opacity%3D%220.3%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22500%22%20r%3D%22280%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%221%22%20opacity%3D%220.1%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22470%22%20font-family%3D%22sans-serif%22%20font-size%3D%2270%22%20font-weight%3D%22bold%22%20fill%3D%22%23F8F3E6%22%20text-anchor%3D%22middle%22%3EOur%20Vision%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22550%22%20font-family%3D%22sans-serif%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22%23D4AF37%22%20text-anchor%3D%22middle%22%3EHealing%20Begins%20Within%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22300%22%20font-family%3D%22sans-serif%22%20font-size%3D%2280%22%20fill%3D%22%23D4AF37%22%20text-anchor%3D%22middle%22%20opacity%3D%220.5%22%3E%E2%9C%A6%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22760%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20letter-spacing%3D%224%22%20fill%3D%22%23F8F3E6%22%20text-anchor%3D%22middle%22%20opacity%3D%220.4%22%3EEARTH%20HEALERS%3C%2Ftext%3E%3C%2Fsvg%3E"
                                alt="Our Vision"
                                className="w-full h-full object-cover"
                            />
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
                                Founded by <a href="https://www.instagram.com/toughest.girl/" target="_blank" className="text-gold-600 dark:text-gold-400 font-medium">@toughest.girl</a>, Earth Healers is more than an online boutique—it's a sanctuary for souls seeking clarity, healing, and alignment.
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
