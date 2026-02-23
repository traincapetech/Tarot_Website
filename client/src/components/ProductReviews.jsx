"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Mock reviews
const MOCK_REVIEWS = [
    {
        id: 1,
        author: "Luna M.",
        date: "August 12, 2023",
        rating: 5,
        title: "Absolutely Beautiful energy!",
        content: "The moment I held this in my hands I felt a profound sense of peace. The packaging was stunning and so thoughtful. Recommend Earth Healers to all my friends now."
    },
    {
        id: 2,
        author: "James T.",
        date: "July 28, 2023",
        rating: 5,
        title: "Exactly as pictured",
        content: "Very high quality. The shipping was fast and it arrived perfectly safe. Have been using it in my daily practice ever since."
    },
    {
        id: 3,
        author: "Elena R.",
        date: "June 15, 2023",
        rating: 4,
        title: "Great piece, smaller than expected",
        content: "The energy is pure and it's a beautiful item, but it is slightly smaller than I visualized based on the photos. Still love it though."
    }
];

export default function ProductReviews() {
    return (
        <div className="mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-earth-800/10 dark:border-earth-50/10">
                <div>
                    <h2 className="font-heading text-3xl font-bold mb-2">Customer Reviews</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex text-gold-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" className={i === 4 ? "opacity-50" : ""} />
                            ))}
                        </div>
                        <span className="text-earth-900/60 dark:text-earth-50/60 font-medium">4.8 out of 5 (12 reviews)</span>
                    </div>
                </div>

                <button className="mt-6 md:mt-0 px-6 py-3 border-2 border-earth-900 dark:border-earth-50 rounded-full font-medium hover:bg-earth-900 hover:text-earth-50 dark:hover:bg-earth-50 dark:hover:text-earth-900 transition-colors">
                    Write a Review
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MOCK_REVIEWS.map((review, index) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-2xl glass-card relative"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-earth-800/10 dark:bg-earth-50/10 flex items-center justify-center font-heading font-bold text-earth-900 dark:text-earth-50">
                                    {review.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold">{review.author}</p>
                                    <p className="text-xs text-earth-900/50 dark:text-earth-50/50">{review.date}</p>
                                </div>
                            </div>

                            <div className="flex text-gold-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" />
                                ))}
                            </div>
                        </div>

                        <h4 className="font-bold mb-2 text-lg">{review.title}</h4>
                        <p className="text-earth-900/80 dark:text-earth-50/80 leading-relaxed">
                            "{review.content}"
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <button className="text-amethyst-600 dark:text-amethyst-400 font-medium hover:text-amethyst-500 transition-colors">
                    Load more reviews (9)
                </button>
            </div>
        </div>
    );
}
