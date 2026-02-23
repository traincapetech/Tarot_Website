import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function EventCard({ event }) {
    return (
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-xl transition-shadow duration-300">
            {/* Image Placeholder */}
            <div className="relative h-48 w-full bg-earth-800/10 dark:bg-earth-50/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500 relative z-0">
                    {event.image}
                </span>

                {/* Date Badge over image */}
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 rounded-lg text-center shadow-lg">
                    <span className="block text-xs font-bold text-earth-900/60 dark:text-earth-50/60 uppercase">{event.month}</span>
                    <span className="block text-xl font-heading font-bold text-gold-600 dark:text-gold-400 leading-none">{event.day}</span>
                </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold tracking-wider uppercase text-amethyst-600 dark:text-amethyst-400 bg-amethyst-500/10 px-2 py-1 rounded-full">
                        {event.type}
                    </span>
                    <span className="font-bold text-lg text-earth-900 dark:text-earth-50">
                        {event.price === 0 ? "Free" : `$${event.price}`}
                    </span>
                </div>

                <h3 className="font-heading text-2xl font-bold mb-3 line-clamp-2">
                    {event.title}
                </h3>

                <div className="space-y-2 mb-6 text-sm text-earth-900/70 dark:text-earth-50/70 flex-grow">
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gold-500" />
                        <span>{event.time} ({event.duration})</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gold-500" />
                        <span>{event.fullDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gold-500" />
                        <span>{event.location}</span>
                    </div>
                </div>

                <Link
                    href={`/events/${event.id}`}
                    className="w-full py-3 text-center bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 rounded-xl font-medium transition-all hover:bg-earth-800 dark:hover:bg-earth-100"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
