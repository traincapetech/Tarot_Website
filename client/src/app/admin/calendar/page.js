import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Video, TrendingUp } from "lucide-react";

export const metadata = {
    title: "Admin Calendar | Earth Healers",
    description: "View upcoming bookings and sessions.",
};

const MOCK_BOOKINGS = [
    {
        id: "1",
        date: "Tomorrow",
        time: "10:00 AM",
        type: "Astrology Consultation",
        client: "Sarah J.",
        email: "sarah@example.com",
        status: "confirmed",
        link: "meet.google.com/abc-defg-hij"
    },
    {
        id: "2",
        date: "Tomorrow",
        time: "2:00 PM",
        type: "Tarot Reading",
        client: "Michael T.",
        email: "michael@example.com",
        status: "confirmed",
        link: "meet.google.com/xyz-uvwx-yz"
    },
    {
        id: "3",
        date: "Thursday",
        time: "11:30 AM",
        type: "Tarot Reading",
        client: "Amanda K.",
        email: "amanda@example.com",
        status: "pending",
        link: "Pending generation"
    }
];

export default function AdminCalendar() {
    return (
        <main className="min-h-screen bg-earth-50 text-earth-900 dark:bg-earth-950 dark:text-earth-50 flex flex-col selection:bg-gold-500/30">
            <Navbar />

            <div className="flex-grow pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-12 relative z-10">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div>
                            <span className="text-sm uppercase tracking-widest text-gold-600 dark:text-gold-400 font-semibold mb-2 block">
                                ✧ Dashboard
                            </span>
                            <h1 className="font-heading text-4xl md:text-5xl font-bold">Session Calendar</h1>
                        </div>

                        <div className="glass-card px-6 py-4 rounded-xl flex items-center gap-4">
                            <div className="bg-gold-500/10 p-3 rounded-full text-gold-600 dark:text-gold-400">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-earth-900/60 dark:text-earth-50/60 font-medium">This Week</p>
                                <p className="text-2xl font-bold">12 Sessions</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="glass-card p-6 rounded-2xl">
                                <h3 className="font-heading text-xl font-bold mb-4">Quick Stats</h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center pb-4 border-b border-earth-800/10 dark:border-earth-50/10">
                                        <span className="text-earth-900/70 dark:text-earth-50/70">Astrology</span>
                                        <span className="font-semibold px-3 py-1 bg-amethyst-500/10 text-amethyst-700 dark:text-amethyst-400 rounded-full text-sm">5 Bookings</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-earth-900/70 dark:text-earth-50/70">Tarot</span>
                                        <span className="font-semibold px-3 py-1 bg-gold-500/10 text-gold-700 dark:text-gold-400 rounded-full text-sm">7 Bookings</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass-card p-6 rounded-2xl bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-red-300">
                                <h3 className="font-heading text-xl font-bold mb-2">Need a break?</h3>
                                <p className="text-sm opacity-80 mb-6">Block off time in your schedule to prevent new bookings.</p>
                                <button className="w-full py-3 bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 rounded-xl font-medium transition-colors">
                                    Block Schedule
                                </button>
                            </div>
                        </div>

                        {/* Schedule List */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="font-heading text-2xl font-bold">Upcoming</h2>
                                <button className="text-sm text-gold-600 dark:text-gold-400 hover:underline font-medium">View All</button>
                            </div>

                            {MOCK_BOOKINGS.map((booking) => (
                                <div key={booking.id} className="glass-card p-6 rounded-2xl border-l-4 border-l-gold-500 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
                                    <div className="md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-earth-800/10 dark:border-earth-50/10 pb-4 md:pb-0 md:pr-6 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 text-earth-900/70 dark:text-earth-50/70 mb-1">
                                            <Calendar size={16} /> <span className="text-sm font-medium">{booking.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xl font-bold">
                                            <Clock size={20} className="text-gold-500" /> <span>{booking.time}</span>
                                        </div>
                                    </div>

                                    <div className="flex-grow flex flex-col justify-center">
                                        <h3 className="font-heading text-xl font-bold mb-1">{booking.type}</h3>
                                        <div className="flex items-center gap-4 text-sm text-earth-900/70 dark:text-earth-50/70 mb-3">
                                            <span className="flex items-center gap-1.5"><User size={14} /> {booking.client}</span>
                                            <span>•</span>
                                            <a href={`mailto:${booking.email}`} className="hover:text-gold-500 transition-colors">{booking.email}</a>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${booking.status === 'confirmed' ? 'bg-green-500/10 text-green-700 dark:text-green-400' : 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400'}`}>
                                                {booking.status.toUpperCase()}
                                            </span>
                                            <a href={`https://${booking.link}`} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1.5 text-amethyst-600 dark:text-amethyst-400 hover:text-amethyst-700 font-medium bg-amethyst-500/10 px-3 py-1 rounded-full">
                                                <Video size={14} /> Join Room
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
