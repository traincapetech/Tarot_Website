"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductGallery({ images, name }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Fallback if no images provided
    const displayImages = images?.length > 0 ? images : ["https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=800"];

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
            {/* Thumbnails (Vertical on Desktop, Horizontal on Mobile) */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24 shrink-0 pb-2 md:pb-0">
                {displayImages.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`View ${name} image ${idx + 1}`}
                        className={`relative w-20 md:w-full aspect-square rounded-xl bg-earth-800/5 dark:bg-earth-50/5 flex items-center justify-center text-3xl overflow-hidden transition-all duration-300 shrink-0 ${activeImageIndex === idx
                            ? "ring-2 ring-gold-500 ring-offset-2 ring-offset-earth-50 dark:ring-offset-earth-950"
                            : "hover:bg-earth-800/10 dark:hover:bg-earth-50/10 border border-transparent"
                            }`}
                    >
                        <img src={img} alt={`${name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-grow aspect-square md:aspect-auto md:h-[600px] rounded-2xl bg-earth-800/5 dark:bg-earth-50/5 flex items-center justify-center text-9xl relative overflow-hidden">
                <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <img src={displayImages[activeImageIndex]} alt={`${name} main`} className="w-full h-full object-cover" />
                </motion.div>

                {/* Decorative corner accents simulating a premium product photo */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-500/30 rounded-tl-lg pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-500/30 rounded-br-lg pointer-events-none" />
            </div>
        </div>
    );
}
