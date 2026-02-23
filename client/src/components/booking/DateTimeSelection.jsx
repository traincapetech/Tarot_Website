"use client";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

export default function DateTimeSelection({ selectedDate, setSelectedDate, selectedTime, setSelectedTime, onNext, onBack }) {
    // Generate next 14 days for mock calendar
    const today = new Date();
    const availableDates = Array.from({ length: 14 }).map((_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() + i + 1); // Start from tomorrow
        return d;
    });

    // Mock time slots
    const availableTimes = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-4xl mx-auto"
        >
            <div className="text-center mb-10">
                <h2 className="font-heading text-3xl font-bold mb-3">Choose Date & Time</h2>
                <p className="text-earth-900/60 dark:text-earth-50/60">Select a time that aligns with your schedule.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-center gap-2 mb-6 text-earth-900 dark:text-earth-50 font-medium pb-4 border-b border-earth-800/10 dark:border-earth-50/10">
                        <CalendarIcon size={20} className="text-gold-500" />
                        <h3>Select Date</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {availableDates.map((date, i) => {
                            const dateString = date.toISOString().split('T')[0];
                            const isSelected = selectedDate === dateString;

                            // Don't show Sundays (mocking unavailable)
                            if (date.getDay() === 0) return null;

                            return (
                                <button
                                    key={i}
                                    onClick={() => { setSelectedDate(dateString); setSelectedTime(""); }}
                                    className={`p-3 rounded-lg text-sm transition-all border ${isSelected
                                            ? "border-gold-500 bg-gold-500/10 text-gold-700 dark:text-gold-400 font-medium"
                                            : "border-earth-800/10 dark:border-earth-50/10 hover:border-gold-500/50 hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    {formatDate(date)}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="glass-card p-6 rounded-2xl flex flex-col">
                    <div className="flex items-center gap-2 mb-6 text-earth-900 dark:text-earth-50 font-medium pb-4 border-b border-earth-800/10 dark:border-earth-50/10">
                        <Clock size={20} className="text-gold-500" />
                        <h3>Select Time</h3>
                    </div>

                    {!selectedDate ? (
                        <div className="flex-grow flex items-center justify-center text-earth-900/40 dark:text-earth-50/40 italic">
                            Please select a date first
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-3">
                            {availableTimes.map((time, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedTime(time)}
                                    className={`p-3 rounded-lg text-sm transition-all border ${selectedTime === time
                                            ? "border-gold-500 bg-gold-500/10 text-gold-700 dark:text-gold-400 font-medium"
                                            : "border-earth-800/10 dark:border-earth-50/10 hover:border-gold-500/50 hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    )}
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
                    disabled={!selectedDate || !selectedTime}
                    className="px-8 py-3 bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 rounded-full font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                    Continue to Details
                </button>
            </div>
        </motion.div>
    );
}
