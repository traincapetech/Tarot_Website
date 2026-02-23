"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ServiceSelection from "@/components/booking/ServiceSelection";
import DateTimeSelection from "@/components/booking/DateTimeSelection";
import PersonalDetailsForm from "@/components/booking/PersonalDetailsForm";
import PaymentMock from "@/components/booking/PaymentMock";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import { Check } from "lucide-react";

export default function BookingWizard() {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        service: null, // "tarot" | "astrology"
        date: "",
        time: "",
        details: {
            name: "",
            email: "",
            phone: "",
            birthDate: "",
            birthTime: "",
            birthLocation: "",
            notes: ""
        }
    });

    const isAstrology = bookingData.service === "astrology";

    // Steps configuration
    const steps = [
        { id: 1, label: "Service" },
        { id: 2, label: "Date & Time" },
        { id: 3, label: "Details" },
        { id: 4, label: "Payment" },
        { id: 5, label: "Confirmation" }
    ];

    const nextStep = () => setStep(s => Math.min(s + 1, 5));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    return (
        <div className="w-full">
            {/* Progress Stepper */}
            {step < 5 && (
                <div className="max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-between relative">
                        {/* Connecting Line */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-earth-800/10 dark:bg-earth-50/10 -z-10 rounded-full" />

                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gold-500 -z-10 rounded-full transition-all duration-500"
                            style={{ width: `${((step - 1) / 3) * 100}%` }}
                        />

                        {steps.slice(0, 4).map((s) => (
                            <div key={s.id} className="flex flex-col items-center gap-3 bg-earth-50 dark:bg-earth-950 px-2">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2 ${step > s.id
                                            ? "bg-gold-500 border-gold-500 text-white"
                                            : step === s.id
                                                ? "border-gold-500 text-gold-600 dark:text-gold-400 bg-earth-50 dark:bg-earth-950"
                                                : "border-earth-800/20 dark:border-earth-50/20 text-earth-900/40 dark:text-earth-50/40"
                                        }`}
                                >
                                    {step > s.id ? <Check size={20} /> : s.id}
                                </div>
                                <span className={`text-xs font-medium uppercase tracking-wider hidden sm:block ${step >= s.id ? "text-earth-900 dark:text-earth-50" : "text-earth-900/40 dark:text-earth-50/40"
                                    }`}>
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Step Content Content */}
            <div className="relative min-h-[500px]">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <ServiceSelection
                            key="step1"
                            selectedService={bookingData.service}
                            onSelect={(service) => setBookingData(prev => ({ ...prev, service }))}
                            onNext={nextStep}
                        />
                    )}

                    {step === 2 && (
                        <DateTimeSelection
                            key="step2"
                            selectedDate={bookingData.date}
                            setSelectedDate={(date) => setBookingData(prev => ({ ...prev, date }))}
                            selectedTime={bookingData.time}
                            setSelectedTime={(time) => setBookingData(prev => ({ ...prev, time }))}
                            onNext={nextStep}
                            onBack={prevStep}
                        />
                    )}

                    {step === 3 && (
                        <PersonalDetailsForm
                            key="step3"
                            details={bookingData.details}
                            setDetails={(newDetails) => setBookingData(prev => ({ ...prev, details: typeof newDetails === 'function' ? newDetails(prev.details) : newDetails }))}
                            isAstrology={isAstrology}
                            onNext={nextStep}
                            onBack={prevStep}
                        />
                    )}

                    {step === 4 && (
                        <PaymentMock
                            key="step4"
                            bookingData={bookingData}
                            onComplete={nextStep}
                            onBack={prevStep}
                        />
                    )}

                    {step === 5 && (
                        <BookingConfirmation
                            key="step5"
                            bookingData={bookingData}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
