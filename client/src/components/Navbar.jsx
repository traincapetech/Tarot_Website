"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${isScrolled ? "bg-earth-50/70 dark:bg-earth-950/70 py-4 shadow-sm" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center">
                <Link href="/">
                    <span className="font-heading text-2xl font-bold tracking-widest text-gold-500">
                        EARTH HEALERS
                    </span>
                </Link>
                <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    <Link href="/shop" className="hover:text-gold-500 transition-colors font-medium">Shop</Link>
                    <Link href="/book" className="hover:text-gold-500 transition-colors font-medium">Book</Link>
                    <Link href="/about" className="hover:text-gold-500 transition-colors font-medium">About</Link>
                    <Link href="/events" className="hover:text-gold-500 transition-colors font-medium">Events</Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <button aria-label="Account" className="p-2 rounded-full hover:bg-earth-800/10 dark:hover:bg-earth-50/10 transition-colors">
                        <User size={20} />
                    </button>
                    <button aria-label="Cart" className="p-2 rounded-full hover:bg-earth-800/10 dark:hover:bg-earth-50/10 transition-colors relative">
                        <ShoppingBag size={20} />
                        <span className="absolute top-0 right-0 bg-gold-500 text-xs w-4 h-4 rounded-full flex items-center justify-center text-white font-bold">
                            0
                        </span>
                    </button>
                </div>
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-6"
                >
                    <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading">Shop</Link>
                    <Link href="/book" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading">Book</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading">About</Link>
                    <Link href="/events" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading">Events</Link>
                </motion.div>
            )}
        </nav>
    );
}
