"use client";
import { motion } from "framer-motion";

export default function PersonalDetailsForm({ details, setDetails, isAstrology, onNext, onBack }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prev => ({ ...prev, [name]: value }));
    };

    const isFormValid = () => {
        if (!details.name || !details.email || !details.phone) return false;
        if (isAstrology && (!details.birthDate || !details.birthTime || !details.birthLocation)) return false;
        return true;
    };

    const inputClasses = "w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-earth-800/20 dark:border-earth-50/20 focus:outline-none focus:ring-2 focus:ring-gold-500 backdrop-blur-sm transition-all";
    const labelClasses = "block text-sm font-medium text-earth-900/80 dark:text-earth-50/80 mb-2 pl-1";

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl mx-auto"
        >
            <div className="text-center mb-10">
                <h2 className="font-heading text-3xl font-bold mb-3">Your Details</h2>
                <p className="text-earth-900/60 dark:text-earth-50/60">
                    {isAstrology
                        ? "Please provide accurate birth data for your astrological chart."
                        : "Tell us about yourself and your intentions for the reading."}
                </p>
            </div>

            <div className="glass-card p-8 rounded-2xl mb-10 space-y-6">
                {/* Standard Info */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={details.name || ""}
                            onChange={handleChange}
                            placeholder="Luna Sol"
                            className={inputClasses}
                            required
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>Phone Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={details.phone || ""}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className={inputClasses}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Email Address *</label>
                    <input
                        type="email"
                        name="email"
                        value={details.email || ""}
                        onChange={handleChange}
                        placeholder="luna@cosmos.com"
                        className={inputClasses}
                        required
                    />
                    <p className="text-xs text-earth-900/40 dark:text-earth-50/40 mt-2 pl-1">
                        We will send your booking confirmation and meeting link to this address.
                    </p>
                </div>

                {/* Astrology Specific Info */}
                {isAstrology && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="p-6 bg-earth-900/5 dark:bg-earth-50/5 rounded-xl border border-earth-800/10 dark:border-earth-50/10 space-y-6"
                    >
                        <h3 className="font-medium text-amethyst-600 dark:text-amethyst-400 flex items-center gap-2">
                            ✧ Astrological Chart Data
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClasses}>Date of Birth *</label>
                                <input
                                    type="date"
                                    name="birthDate"
                                    value={details.birthDate || ""}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <div>
                                <label className={labelClasses}>Exact Time of Birth *</label>
                                <input
                                    type="time"
                                    name="birthTime"
                                    value={details.birthTime || ""}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className={labelClasses}>City/Town of Birth *</label>
                            <input
                                type="text"
                                name="birthLocation"
                                value={details.birthLocation || ""}
                                onChange={handleChange}
                                placeholder="e.g., Sedona, Arizona, USA"
                                className={inputClasses}
                                required
                            />
                        </div>
                    </motion.div>
                )}

                <div>
                    <label className={labelClasses}>Intentions or Notes (Optional)</label>
                    <textarea
                        name="notes"
                        value={details.notes || ""}
                        onChange={handleChange}
                        placeholder="Is there a specific area of life you'd like to focus on?"
                        rows={4}
                        className={`${inputClasses} resize-none`}
                    />
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={onBack}
                    className="px-8 py-3 bg-transparent text-earth-900 dark:text-earth-50 border border-earth-900/20 dark:border-earth-50/20 rounded-full font-medium transition-all hover:bg-earth-900/5 dark:hover:bg-earth-50/5"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    disabled={!isFormValid()}
                    className="px-8 py-3 bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 rounded-full font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                    Continue to Payment
                </button>
            </div>
        </motion.div>
    );
}
