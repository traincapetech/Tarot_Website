"use client";
import { motion } from "framer-motion";
import { Sparkles, Moon, CheckCircle } from "lucide-react";

export default function ServiceSelection({ selectedService, onSelect, onNext }) {
    const services = [
        {
            id: "tarot",
            title: "Tarot Reading",
            description: "A deep dive into your current energetic path using the mystic art of Tarot. Gain clarity on love, career, and personal growth.",
            duration: "60 mins",
            price: "$85",
            icon: <Sparkles className="w-8 h-8 mb-4 text-gold-500" />
        },
        {
            id: "astrology",
            title: "Astrology Consultation",
            description: "Understand your soul's blueprint by exploring your natal chart. Discover your strengths, challenges, and upcoming transits.",
            duration: "90 mins",
            price: "$120",
            icon: <Moon className="w-8 h-8 mb-4 text-amethyst-500" />
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-4xl mx-auto"
        >
            <div className="text-center mb-10">
                <h2 className="font-heading text-3xl font-bold mb-3">Select a Service</h2>
                <p className="text-earth-900/60 dark:text-earth-50/60">Choose the type of guidance you are seeking today.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
                {services.map((service) => (
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={service.id}
                        onClick={() => onSelect(service.id)}
                        className={`glass-card p-8 rounded-2xl cursor-pointer border-2 transition-all ${selectedService === service.id
                            ? "border-gold-500 bg-gold-500/5 dark:bg-gold-500/10 shadow-[0_0_30px_rgba(234,179,8,0.15)]"
                            : "border-transparent hover:border-earth-800/20 dark:hover:border-earth-50/20"
                            }`}
                    >
                        <div className="flex justify-between items-start">
                            {service.icon}
                            {selectedService === service.id && (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-gold-500 text-earth-900 text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1.5 shadow-md"
                                >
                                    <CheckCircle size={14} /> Selected
                                </motion.span>
                            )}
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-earth-900/70 dark:text-earth-50/70 mb-6 min-h-[80px]">
                            {service.description}
                        </p>
                        <div className="flex items-center justify-between font-medium">
                            <span className="text-earth-900/50 dark:text-earth-50/50">{service.duration}</span>
                            <span className="text-gold-600 dark:text-gold-400 text-xl">{service.price}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-end">
                <button
                    onClick={onNext}
                    disabled={!selectedService}
                    className="px-8 py-3 bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 rounded-full font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                    Continue to Date Selection
                </button>
            </div>
        </motion.div>
    );
}
