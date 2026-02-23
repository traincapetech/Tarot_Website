"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import ProductCard from "./ProductCard";
import { MOCK_PRODUCTS } from "@/lib/mockData";

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
                    {MOCK_PRODUCTS.slice(0, 4).map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
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
