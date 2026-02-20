"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Sarah L.",
        role: "Spiritual Seeker",
        content: "The amethyst cluster I received is absolutely stunning. The energy it brings to my meditation space is profound.",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael T.",
        role: "Astrology Client",
        content: "My astrology reading was incredibly insightful. It helped me understand my current life path with such clarity.",
        rating: 5,
    },
    {
        id: 3,
        name: "Elena R.",
        role: "Regular Customer",
        content: "Earth Healers is my go-to for all my crystal needs. Their packaging is beautiful and you can feel the intention behind every order.",
        rating: 5,
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden bg-earth-50 dark:bg-earth-950">
            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center space-x-2 text-gold-600 dark:text-gold-400 mb-4 font-medium tracking-wide uppercase text-sm"
                    >
                        ✧ Community Love
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl lg:text-5xl font-bold mb-6"
                    >
                        Voices of Healing
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            key={testimonial.id}
                            className="glass-card rounded-3xl p-8 lg:p-10 relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-8 right-8 text-gold-500/10" size={80} />

                            <div className="flex text-gold-500 mb-8 relative z-10">
                                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                            </div>

                            <p className="text-lg text-earth-900/80 dark:text-earth-50/80 mb-8 italic relative z-10 font-medium leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="mt-auto relative z-10 pt-6 border-t border-earth-900/10 dark:border-earth-50/10">
                                <h4 className="font-heading font-bold text-xl mb-1">{testimonial.name}</h4>
                                <p className="text-sm text-earth-900/60 dark:text-earth-50/60 font-medium">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
