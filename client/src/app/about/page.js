import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Eye, Heart, Compass, Instagram, Leaf } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "About | Earth Healers",
    description: "Discover the vision and story behind Earth Healers.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-earth-50 text-earth-900 dark:bg-earth-950 dark:text-earth-50 flex flex-col selection:bg-gold-500/30">
            <Navbar />

            <div className="flex-grow pt-32 pb-24 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amethyst-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                <div className="container mx-auto px-4 lg:px-12 relative z-10 space-y-32">

                    {/* Header Section */}
                    <section className="text-center max-w-4xl mx-auto mt-12">
                        <span className="text-sm uppercase tracking-widest text-gold-600 dark:text-gold-400 font-semibold mb-4 block">
                            ✧ Our Essence ✧
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">Awakening the Soul's Journey</h1>
                        <p className="text-xl text-earth-900/70 dark:text-earth-50/70 leading-relaxed">
                            Earth Healers is a sanctuary for those seeking to realign with their highest cosmic potential. We weave ancient wisdom with modern healing to guide you back home to yourself.
                        </p>
                    </section>

                    {/* Brand Story Section */}
                    <section className="relative">
                        <div className="absolute inset-0 bg-white/40 dark:bg-black/20 backdrop-blur-3xl lg:rounded-[3rem] -z-10" />
                        <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
                            <div className="order-2 lg:order-1 space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-900/5 dark:bg-earth-50/5 text-earth-900/80 dark:text-earth-50/80 text-sm font-medium mb-4">
                                    <Leaf size={16} className="text-earth-600 dark:text-earth-400" />
                                    How It Began
                                </div>
                                <h2 className="font-heading text-4xl font-bold">The Brand Story</h2>
                                <div className="space-y-4 text-lg text-earth-900/70 dark:text-earth-50/70 leading-relaxed">
                                    <p>
                                        Earth Healers was born from a profound realization: in our fast-paced, modern world, the sacred connection to the earth and to our own inner divinity has been dangerously severed. We noticed a collective yearning—a silent cry for grounding, clarity, and authentic healing.
                                    </p>
                                    <p>
                                        What started as a small, passionate community sharing metaphysical insights and crystal healing practices quickly blossomed into a global platform. Whether through the mystical art of tarot, the cosmic blueprint of astrology, or the tangible energy of sacred tools, we realized that people needed a trusted bridge between the physical and spiritual realms.
                                    </p>
                                    <p>
                                        Today, Earth Healers stands as a beacon of light, offering curated tools and deeply intuitive readings. Our mission is not just to heal, but to empower you to become the healer of your own life.
                                    </p>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden glass-card p-2 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-earth-900/20 to-transparent z-10" />
                                {/* Real Image */}
                                <div className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden relative border border-earth-800/10 dark:border-earth-50/10">
                                    <img src="data:image/svg+xml;utf8,%3Csvg%20width%3D%22800%22%20height%3D%221000%22%20viewBox%3D%220%200%20800%201000%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23831843%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233a091d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%221000%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22500%22%20r%3D%22300%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%2210%2015%22%20opacity%3D%220.3%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22500%22%20r%3D%22280%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%221%22%20opacity%3D%220.1%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22540%22%20font-family%3D%22sans-serif%22%20font-size%3D%22200%22%20fill%3D%22%23D4AF37%22%20text-anchor%3D%22middle%22%20opacity%3D%220.5%22%3E%F0%9F%95%AF%EF%B8%8F%3C%2Ftext%3E%3C%2Fsvg%3E" alt="Amethyst Insight" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Vision Section */}
                    <section className="text-center max-w-5xl mx-auto">
                        <h2 className="font-heading text-4xl font-bold mb-16">Our Vision</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-amethyst-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Eye className="w-8 h-8 text-amethyst-600 dark:text-amethyst-400" />
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-3">Clarity</h3>
                                <p className="text-earth-900/70 dark:text-earth-50/70">
                                    To strip away the illusions of the matrix and provide crystal-clear cosmic insight through trusted divination and astrological mapping.
                                </p>
                            </div>

                            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Compass className="w-8 h-8 text-gold-600 dark:text-gold-400" />
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-3">Empowerment</h3>
                                <p className="text-earth-900/70 dark:text-earth-50/70">
                                    To equip seekers with the spiritual tools—both physical and mental—required to navigate their destiny with absolute authority.
                                </p>
                            </div>

                            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-earth-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="w-8 h-8 text-earth-700 dark:text-earth-400" />
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-3">Healing</h3>
                                <p className="text-earth-900/70 dark:text-earth-50/70">
                                    To foster a deeply grounded community where profound emotional, energetic, and spiritual healing is accessible to all who seek it.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Mentor Information Section */}
                    <section className="glass-card p-8 lg:p-12 rounded-[2rem] md:rounded-[3rem] border-2 border-gold-500/20 shadow-[0_0_50px_rgba(234,179,8,0.05)]">
                        <div className="flex flex-col md:flex-row gap-12 items-center">

                            {/* Profile Image Area */}
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-gold-500 via-amethyst-500 to-earth-500">
                                    <div className="w-full h-full bg-earth-50 dark:bg-earth-950 rounded-full overflow-hidden relative flex items-center justify-center shadow-inner">
                                        <div className="absolute inset-0 bg-earth-900/5 dark:bg-earth-50/5 flex items-center justify-center">
                                            <img src="data:image/svg+xml;utf8,%3Csvg%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23064e3b%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23022c22%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22480%22%20font-family%3D%22sans-serif%22%20font-size%3D%22300%22%20fill%3D%22%23D4AF37%22%20text-anchor%3D%22middle%22%20opacity%3D%220.8%22%3E%F0%9F%91%A4%3C%2Ftext%3E%3C%2Fsvg%3E" alt="Mentor Profile" className="w-full h-full object-cover" />
                                        </div>
                                    </div>

                                    {/* Verification/Badge */}
                                    <div className="absolute bottom-4 right-4 bg-white dark:bg-black rounded-full p-2 shadow-lg">
                                        <div className="bg-gold-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
                                            <Sparkles size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Biography Content */}
                            <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                                <div>
                                    <span className="text-sm uppercase tracking-widest text-amethyst-600 dark:text-amethyst-400 font-semibold mb-2 block">
                                        Lead Intuitive & Founder
                                    </span>
                                    <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-2">The Mentor</h2>
                                    <a
                                        href="https://www.instagram.com/toughest.girl/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 hover:text-gold-500 font-medium text-lg transition-colors group"
                                    >
                                        <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                                        @toughest.girl
                                    </a>
                                </div>

                                <div className="space-y-4 text-lg text-earth-900/70 dark:text-earth-50/70 leading-relaxed max-w-2xl">
                                    <p>
                                        Known purely as her moniker, <strong>@toughest.girl</strong> embodies the archetype of the fierce, resilient healer. She believes that the deepest spiritual wisdom often comes from navigating the hardest terrains of human experience.
                                    </p>
                                    <p>
                                        With years of profound study in astrological charting, esoteric divination, and quantum energetic healing, she stepped forward to create Earth Healers. Her approach isn't about sugar-coating reality; it's about radical truth, empowering her clients to sever energetic cords that no longer serve them and step fully into their sovereign power.
                                    </p>
                                    <p>
                                        "True strength isn't the absence of vulnerability," she often says. "It is the courage to keep your heart open to the universe, even when it's bruised. That is the alchemy of a true earth healer."
                                    </p>
                                </div>

                                <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                                    <a
                                        href="https://www.instagram.com/_earth_healers_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
                                    >
                                        <Instagram size={18} />
                                        Follow Earth Healers
                                    </a>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
