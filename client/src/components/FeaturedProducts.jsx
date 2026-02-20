"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";

// Mock data
const PRODUCTS = [
    { id: 1, name: "Amethyst Cluster", price: "$45.00", category: "Crystal", image: "🟣", purpose: "Protection & Intuition" },
    { id: 2, name: "Rose Quartz Wand", price: "$30.00", category: "Healing Tool", image: "🌸", purpose: "Love & Harmony" },
    { id: 3, name: "Clear Quartz Sphere", price: "$65.00", category: "Crystal", image: "⚪", purpose: "Clarity & Energy" },
    { id: 4, name: "Mystic Tarot Deck", price: "$40.00", category: "Divination", image: "🃏", purpose: "Guidance" },
];

export default function FeaturedProducts() {
    return (
        <section className="py-24 relative overflow-hidden bg-earth-100/30 dark:bg-earth-950/50">
            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center space-x-2 text-gold-600 dark:text-gold-400 mb-4 font-medium tracking-wide uppercase text-sm"
                    >
                        ✧ Our Collection
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl lg:text-5xl font-bold mb-6"
                    >
                        Featured Treasures
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-earth-900/70 dark:text-earth-50/70 max-w-2xl mx-auto text-lg"
                    >
                        Handpicked sacred items and tools to elevate your space, enhance your intuition, and nurture your spirit.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map((product, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            key={product.id}
                            className="glass-card rounded-2xl p-4 group cursor-pointer"
                        >
                            <div className="aspect-[4/5] rounded-xl bg-earth-800/5 dark:bg-earth-50/5 flex items-center justify-center text-8xl mb-6 relative overflow-hidden transition-all group-hover:bg-earth-800/10 dark:group-hover:bg-earth-50/10">
                                <span className="group-hover:scale-110 transition-transform duration-500">
                                    {product.image}
                                </span>

                                {/* Overlay Add to Cart button */}
                                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 shadow-xl text-sm">
                                        <ShoppingBag size={18} />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>

                            <div className="px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-heading text-xl font-semibold">{product.name}</h3>
                                    <span className="text-gold-600 dark:text-gold-400 font-medium">{product.price}</span>
                                </div>
                                <p className="text-sm text-earth-900/60 dark:text-earth-50/60 mb-3">{product.category} • {product.purpose}</p>
                                <div className="flex text-gold-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <Link href="/shop" className="inline-block border border-earth-900/30 dark:border-earth-50/30 hover:border-earth-900 dark:hover:border-earth-50 px-8 py-4 rounded-full font-medium transition-all hover:bg-earth-900/5 dark:hover:bg-earth-50/5">
                        View Complete Collection
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
