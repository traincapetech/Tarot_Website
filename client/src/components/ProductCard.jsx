"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product, index = 0 }) {
    // Parsing the numeric float from price string like "$45.00" just to show it
    // This expects product.price to be a string or number
    const formattedPrice = typeof product.price === 'number'
        ? `$${product.price.toFixed(2)}`
        : product.price;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * (index % 10) }}
            className="flex flex-col h-full"
        >
            <Link href={`/shop/${product.id}`} className="glass-card rounded-2xl p-4 group cursor-pointer flex flex-col h-full transition-transform hover:-translate-y-1">
                <div className="aspect-[4/5] rounded-xl bg-earth-800/5 dark:bg-earth-50/5 flex items-center justify-center text-8xl mb-6 relative overflow-hidden transition-all group-hover:bg-earth-800/10 dark:group-hover:bg-earth-50/10 shrink-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay Add to Cart button - Pills shaped, slides up */}
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <button
                            onClick={(e) => {
                                e.preventDefault(); // Prevent navigating to PDP when clicking Add to Cart
                                // Add to cart logic here
                            }}
                            className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 shadow-xl text-sm"
                        >
                            <ShoppingBag size={18} />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>

                <div className="px-2 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2 gap-2">
                        <h3 className="font-heading text-lg font-semibold line-clamp-2">{product.name}</h3>
                        <span className="text-gold-600 dark:text-gold-400 font-medium whitespace-nowrap">{formattedPrice}</span>
                    </div>
                    <p className="text-sm text-earth-900/60 dark:text-earth-50/60 mb-3 mt-auto">
                        {product.category} • {product.purpose}
                    </p>
                    <div className="flex text-gold-500">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < (product.rating || 5) ? "currentColor" : "none"} stroke="currentColor" />)}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
