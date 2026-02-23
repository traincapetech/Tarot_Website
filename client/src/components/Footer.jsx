import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-earth-950 text-earth-50 pt-24 pb-12 border-t border-earth-800/50">
            <div className="container mx-auto px-4 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-heading text-2xl font-bold tracking-widest text-gold-500">
                                EARTH HEALERS
                            </span>
                        </Link>
                        <p className="text-earth-50/70 mb-8 leading-relaxed">
                            Your sanctuary for spiritual tools, mystical guidance, and restorative healing. Elevate your journey with our ethically sourced collection.
                        </p>
                        <div className="flex space-x-4 text-gold-500">
                            <a href="#" aria-label="Instagram" className="hover:text-gold-400 transition-colors bg-earth-900 border border-earth-800/50 p-2.5 rounded-full">
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-gold-400 transition-colors bg-earth-900 border border-earth-800/50 p-2.5 rounded-full">
                                <Facebook size={20} />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-gold-400 transition-colors bg-earth-900 border border-earth-800/50 p-2.5 rounded-full">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading text-xl font-semibold mb-6 text-white tracking-wide">Quick Links</h4>
                        <ul className="space-y-4 text-earth-50/70">
                            <li><Link href="/shop" className="hover:text-gold-400 transition-colors">Shop All</Link></li>
                            <li><Link href="/book" className="hover:text-gold-400 transition-colors">Book a Reading</Link></li>
                            <li><Link href="/about" className="hover:text-gold-400 transition-colors">Our Story</Link></li>
                            <li><Link href="/events" className="hover:text-gold-400 transition-colors">Events & Workshops</Link></li>
                            <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading text-xl font-semibold mb-6 text-white tracking-wide">Support</h4>
                        <ul className="space-y-4 text-earth-50/70">
                            <li><Link href="/faq" className="hover:text-gold-400 transition-colors">FAQs</Link></li>
                            <li><Link href="/shipping" className="hover:text-gold-400 transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading text-xl font-semibold mb-6 text-white tracking-wide">Contact</h4>
                        <ul className="space-y-4 text-earth-50/70">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-gold-500 shrink-0 mt-1" />
                                <span className="leading-relaxed">123 Spiritual Way,<br />Cosmic City, ST 12345</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={20} className="text-gold-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className="text-gold-500 shrink-0" />
                                <span>hello@earthhealers.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-earth-800/50 flex flex-col md:flex-row justify-between items-center text-earth-50/50 text-sm">
                    <p>© {new Date().getFullYear()} Earth Healers. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Designed with intention & light.</p>
                </div>
            </div>
        </footer>
    );
}
