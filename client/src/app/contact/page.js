"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-earth-50 text-earth-900 dark:bg-earth-950 dark:text-earth-50 flex flex-col selection:bg-gold-500/30">
            <Navbar />

            <div className="flex-grow pt-32 pb-24 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amethyst-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

                <div className="container mx-auto px-4 lg:px-12 relative z-10">

                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm uppercase tracking-widest text-gold-600 dark:text-gold-400 font-semibold mb-4 block">
                            ✧ Get in Touch ✧
                        </span>
                        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Reach Out to the Cosmos</h1>
                        <p className="text-xl text-earth-900/70 dark:text-earth-50/70">
                            Whether you have a question about a reading, need guidance on a crystal, or simply want to connect, we are here to listen.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Contact Information */}
                        <div className="order-2 lg:order-1 space-y-8">
                            <div>
                                <h2 className="font-heading text-3xl font-bold mb-6">Contact Information</h2>
                                <p className="text-earth-900/70 dark:text-earth-50/70 mb-8">
                                    Our sanctuary operates in both the physical and digital realms. Drop us a message, email, or visit our physical space for in-person alignment.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a href="mailto:hello@earthhealers.com" className="flex items-start gap-4 p-4 rounded-xl hover:bg-earth-900/5 dark:hover:bg-earth-50/5 transition-colors group">
                                    <div className="bg-earth-900/10 dark:bg-earth-50/10 p-3 rounded-full text-earth-900 dark:text-earth-50 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Email Us</h3>
                                        <p className="text-earth-900/60 dark:text-earth-50/60">hello@earthhealers.com</p>
                                    </div>
                                </a>

                                <a href="tel:+15551234567" className="flex items-start gap-4 p-4 rounded-xl hover:bg-earth-900/5 dark:hover:bg-earth-50/5 transition-colors group">
                                    <div className="bg-earth-900/10 dark:bg-earth-50/10 p-3 rounded-full text-earth-900 dark:text-earth-50 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Call Us</h3>
                                        <p className="text-earth-900/60 dark:text-earth-50/60">+1 (555) 123-4567</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-earth-900/5 dark:hover:bg-earth-50/5 transition-colors group">
                                    <div className="bg-earth-900/10 dark:bg-earth-50/10 p-3 rounded-full text-earth-900 dark:text-earth-50 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg flex items-center gap-2">WhatsApp <span className="text-xs bg-[#25D366]/20 text-[#25D366] px-2 py-0.5 rounded-full uppercase tracking-wider">Fastest</span></h3>
                                        <p className="text-earth-900/60 dark:text-earth-50/60">Message us directly for quick inquiries</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-4 rounded-xl">
                                    <div className="bg-earth-900/10 dark:bg-earth-50/10 p-3 rounded-full text-earth-900 dark:text-earth-50">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">The Sanctuary Location</h3>
                                        <p className="text-earth-900/60 dark:text-earth-50/60">1111 Cosmic Avenue<br />Sedona, AZ 86336</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="order-1 lg:order-2 glass-card p-8 md:p-10 rounded-[2rem] border-2 border-gold-500/10 shadow-[0_0_50px_rgba(234,179,8,0.05)] relative overflow-hidden">
                            <h2 className="font-heading text-3xl font-bold mb-8">Send a Message</h2>

                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="absolute inset-0 z-10 bg-white/90 dark:bg-black/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                                    >
                                        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle size={40} />
                                        </div>
                                        <h3 className="font-heading text-3xl font-bold mb-2">Message Sent</h3>
                                        <p className="text-earth-900/70 dark:text-earth-50/70">
                                            Your energy has been received. We will connect with you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6 relative z-0"
                                    >
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-80">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl bg-earth-900/5 dark:bg-earth-50/5 border border-earth-800/10 dark:border-earth-50/10 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all font-medium"
                                                placeholder="What shall we call you?"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-80">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl bg-earth-900/5 dark:bg-earth-50/5 border border-earth-800/10 dark:border-earth-50/10 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all font-medium"
                                                placeholder="Where can we reply?"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-80">Your Message</label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl bg-earth-900/5 dark:bg-earth-50/5 border border-earth-800/10 dark:border-earth-50/10 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all font-medium resize-none"
                                                placeholder="How can we assist your journey?"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 rounded-xl font-medium transition-all hover:bg-earth-800 dark:hover:bg-earth-100 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Google Maps Embed */}
            <div className="w-full h-96 relative border-t-4 border-gold-500">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.659343997531!2d-111.76449172355599!3d34.86475657551068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2sSedona%2C%20AZ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000 saturate-150"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Overlay to enforce dark mode aesthetics until hovered */}
                <div className="absolute inset-0 bg-earth-900/30 dark:bg-black/50 pointer-events-none mix-blend-multiply" />
            </div>

            <Footer />
        </main>
    );
}
