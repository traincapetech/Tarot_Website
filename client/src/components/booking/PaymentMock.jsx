"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Lock, Sparkles } from "lucide-react";

export default function PaymentMock({ bookingData, onComplete, onBack }) {
    const [isProcessing, setIsProcessing] = useState(false);

    // Service prices match ServiceSelection
    const price = bookingData.service === "tarot" ? 85 : 120;
    const serviceName = bookingData.service === "tarot" ? "Tarot Reading" : "Astrology Consultation";

    const handlePayment = () => {
        setIsProcessing(true);
        // Simulate network request
        setTimeout(() => {
            setIsProcessing(false);
            onComplete();
        }, 2500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
        >
            {/* Order Summary Form */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1 space-y-6 sticky top-32">
                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="font-heading text-xl font-bold mb-6 border-b border-earth-800/10 dark:border-earth-50/10 pb-4">
                        Booking Summary
                    </h3>

                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-start">
                            <span className="text-earth-900/70 dark:text-earth-50/70">{serviceName}</span>
                            <span className="font-medium">${price.toFixed(2)}</span>
                        </div>

                        <div className="text-sm bg-earth-900/5 dark:bg-earth-50/5 p-4 rounded-xl border border-earth-800/10 dark:border-earth-50/10 text-earth-900/80 dark:text-earth-50/80">
                            <p><strong>Date:</strong> {bookingData.date || "Not selected"}</p>
                            <p className="mt-1"><strong>Time:</strong> {bookingData.time || "Not selected"} (Local Time)</p>
                            <p className="mt-1 flex items-center gap-1 opacity-70 mt-2">
                                <Sparkles size={14} className="text-gold-500" /> Virtual Session Link will be emailed.
                            </p>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-earth-800/10 dark:border-earth-50/10 flex justify-between items-center text-xl font-bold">
                        <span>Total</span>
                        <span className="text-gold-600 dark:text-gold-400">${price.toFixed(2)}</span>
                    </div>
                </div>

                <button
                    onClick={onBack}
                    className="w-full px-8 py-3 bg-transparent text-earth-900 dark:text-earth-50 border border-earth-900/20 dark:border-earth-50/20 rounded-full font-medium transition-all hover:bg-earth-900/5 dark:hover:bg-earth-50/5 text-center"
                >
                    Back
                </button>
            </div>

            {/* Payment Details */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
                <div className="text-center lg:text-left mb-8">
                    <h2 className="font-heading text-3xl font-bold mb-3">Secure Checkout</h2>
                    <p className="text-earth-900/60 dark:text-earth-50/60 flex items-center justify-center lg:justify-start gap-2">
                        <Lock size={16} /> All transactions are highly encrypted and serene.
                    </p>
                </div>

                <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                    <AnimatePresence>
                        {isProcessing && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center"
                            >
                                <div className="w-16 h-16 border-4 border-gold-500/30 border-t-gold-500 rounded-full animate-spin mb-6" />
                                <h3 className="font-heading text-2xl font-bold mb-2 text-earth-900 dark:text-earth-50">Aligning the Stars...</h3>
                                <p className="text-earth-900/60 dark:text-earth-50/60">Processing your cosmic transaction securely.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex gap-4 mb-8">
                        <button className="flex-1 py-4 border-2 border-gold-500 bg-gold-500/5 rounded-xl flex justify-center items-center gap-2 font-medium">
                            <CreditCard size={20} className="text-gold-600" /> Credit Card
                        </button>
                        <button className="flex-1 py-4 border border-earth-800/10 dark:border-earth-50/10 rounded-xl flex justify-center items-center opacity-50 cursor-not-allowed hidden sm:flex">
                            PayPal
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-earth-900/80 dark:text-earth-50/80 mb-2 pl-1">Name on Card</label>
                            <input
                                type="text"
                                defaultValue={bookingData.details.name || ""}
                                placeholder="Luna Sol"
                                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-earth-800/20 dark:border-earth-50/20 focus:outline-none focus:ring-2 focus:ring-gold-500 backdrop-blur-sm transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-earth-900/80 dark:text-earth-50/80 mb-2 pl-1">Card Number (Mock)</label>
                            <div className="relative">
                                <CreditCard size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-900/40 dark:text-earth-50/40" />
                                <input
                                    type="text"
                                    placeholder="0000 0000 0000 0000"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-earth-800/20 dark:border-earth-50/20 focus:outline-none focus:ring-2 focus:ring-gold-500 backdrop-blur-sm transition-all font-mono"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-earth-900/80 dark:text-earth-50/80 mb-2 pl-1">Expiry Date</label>
                                <input
                                    type="text"
                                    placeholder="MM / YY"
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-earth-800/20 dark:border-earth-50/20 focus:outline-none focus:ring-2 focus:ring-gold-500 backdrop-blur-sm transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-earth-900/80 dark:text-earth-50/80 mb-2 pl-1">CVC</label>
                                <input
                                    type="text"
                                    placeholder="123"
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-earth-800/20 dark:border-earth-50/20 focus:outline-none focus:ring-2 focus:ring-gold-500 backdrop-blur-sm transition-all"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handlePayment}
                            className="w-full mt-4 py-4 bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 rounded-xl font-bold text-lg transition-all hover:bg-earth-800 dark:hover:bg-white shadow-xl flex items-center justify-center gap-3"
                        >
                            <Lock size={18} /> Pay ${price.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
