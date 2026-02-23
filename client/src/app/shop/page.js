"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

import { MOCK_PRODUCTS } from "@/lib/mockData";

const CATEGORIES = ["All", "Crystal", "Healing Tool", "Divination", "Jewelry"];
const PURPOSES = ["All", "Protection", "Love", "Wealth", "Intuition", "Healing"];
const ITEMS_PER_PAGE = 8;

export default function ShopPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPurpose, setSelectedPurpose] = useState("All");
    const [sortOption, setSortOption] = useState("newest"); // 'newest', 'price-low', 'price-high'
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // 1. Filter logic
    let filteredProducts = MOCK_PRODUCTS.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesPurpose = selectedPurpose === "All" || product.purpose === selectedPurpose;
        return matchesSearch && matchesCategory && matchesPurpose;
    });

    // 2. Sort logic
    filteredProducts.sort((a, b) => {
        if (sortOption === "price-low") return a.price - b.price;
        if (sortOption === "price-high") return b.price - a.price;
        // newest keeps original array order (mocking id as chronologically inserted)
        return b.id - a.id;
    });

    // 3. Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Handle page resets when filters change
    const handleFilterChange = (setter, value) => {
        setter(value);
        setCurrentPage(1);
    };

    return (
        <main className="min-h-screen bg-earth-50 text-earth-900 dark:bg-earth-950 dark:text-earth-50 flex flex-col">
            <Navbar />

            {/* Page Header */}
            <div className="pt-32 pb-16 bg-earth-100/30 dark:bg-earth-900/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-12 relative z-10 text-center">
                    <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Sacred Shop</h1>
                    <p className="text-lg text-earth-900/70 dark:text-earth-50/70 max-w-2xl mx-auto">
                        Curated crystals, tools, and divination decks to support your journey.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-12 py-12 flex-grow flex flex-col lg:flex-row gap-8">

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden flex justify-between items-center mb-4">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="flex items-center gap-2 border border-earth-800/20 dark:border-earth-50/20 px-4 py-2 rounded-xl"
                    >
                        <SlidersHorizontal size={18} /> Filters
                    </button>

                    {/* Simple Sort Dropdown for Mobile - Usually in a proper select but kept simple here */}
                    <select
                        className="bg-transparent border border-earth-800/20 dark:border-earth-50/20 rounded-xl px-4 py-2 appearance-none text-earth-900 dark:text-earth-50"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="newest">Newest Arrivals</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>

                {/* Sidebar / Filters */}
                <aside className={`${isFilterOpen ? "block" : "hidden"} lg:block w-full lg:w-1/4 shrink-0 space-y-8`}>
                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search treasures..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-earth-800/20 dark:border-earth-50/20 focus:outline-none focus:ring-2 focus:ring-gold-500 backdrop-blur-sm"
                            value={searchQuery}
                            onChange={(e) => handleFilterChange(setSearchQuery, e.target.value)}
                        />
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-900/50 dark:text-earth-50/50" />
                    </div>

                    <div className="glass-card p-6 rounded-2xl">
                        <h3 className="font-heading font-semibold text-lg mb-4 border-b border-earth-800/10 dark:border-earth-50/10 pb-2">Category</h3>
                        <ul className="space-y-3">
                            {CATEGORIES.map(category => (
                                <li key={category}>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedCategory === category ? 'bg-gold-500 border-gold-500' : 'border-earth-800/30 dark:border-earth-50/30 group-hover:border-gold-400'}`}>
                                            {selectedCategory === category && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                                        </div>
                                        <input
                                            type="radio"
                                            className="hidden"
                                            name="category"
                                            checked={selectedCategory === category}
                                            onChange={() => handleFilterChange(setSelectedCategory, category)}
                                        />
                                        <span className={selectedCategory === category ? 'font-medium' : 'text-earth-900/70 dark:text-earth-50/70 group-hover:text-earth-900 dark:group-hover:text-earth-50'}>
                                            {category}
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card p-6 rounded-2xl">
                        <h3 className="font-heading font-semibold text-lg mb-4 border-b border-earth-800/10 dark:border-earth-50/10 pb-2">Intention & Purpose</h3>
                        <ul className="space-y-3">
                            {PURPOSES.map(purpose => (
                                <li key={purpose}>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedPurpose === purpose ? 'bg-amethyst-500 border-amethyst-500' : 'border-earth-800/30 dark:border-earth-50/30 group-hover:border-amethyst-400'}`}>
                                            {selectedPurpose === purpose && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                                        </div>
                                        <input
                                            type="radio"
                                            className="hidden"
                                            name="purpose"
                                            checked={selectedPurpose === purpose}
                                            onChange={() => handleFilterChange(setSelectedPurpose, purpose)}
                                        />
                                        <span className={selectedPurpose === purpose ? 'font-medium' : 'text-earth-900/70 dark:text-earth-50/70 group-hover:text-earth-900 dark:group-hover:text-earth-50'}>
                                            {purpose}
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Clear Filters */}
                    {(selectedCategory !== "All" || selectedPurpose !== "All" || searchQuery !== "") && (
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("All");
                                setSelectedPurpose("All");
                                setCurrentPage(1);
                            }}
                            className="w-full py-3 text-sm font-medium border border-earth-800/20 dark:border-earth-50/20 rounded-xl hover:bg-earth-800/5 dark:hover:bg-earth-50/5 transition-colors"
                        >
                            Clear All Filters
                        </button>
                    )}
                </aside>

                {/* Main Product Grid Area */}
                <div className="flex-grow">
                    {/* Desktop Sort Options (Header above grid) */}
                    <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-earth-800/10 dark:border-earth-50/10">
                        <p className="text-earth-900/60 dark:text-earth-50/60">
                            Showing <span className="font-medium text-earth-900 dark:text-earth-50">{filteredProducts.length}</span> results
                        </p>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-earth-900/60 dark:text-earth-50/60">Sort by:</span>
                            <div className="relative">
                                <select
                                    className="bg-transparent pl-2 pr-8 py-1 appearance-none font-medium cursor-pointer focus:outline-none"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                >
                                    <option value="newest" className="text-black">Newest Arrivals</option>
                                    <option value="price-low" className="text-black">Price: Low to High</option>
                                    <option value="price-high" className="text-black">Price: High to Low</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20 glass-card rounded-2xl">
                            <span className="text-6xl mb-4 block">🍃</span>
                            <h3 className="font-heading text-2xl font-bold mb-2">No items found</h3>
                            <p className="text-earth-900/60 dark:text-earth-50/60">
                                Try adjusting your filters to find what you're looking for.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {paginatedProducts.map((product, index) => (
                                    <ProductCard key={product.id} product={product} index={index} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center space-x-2 mt-16 pt-8 border-t border-earth-800/10 dark:border-earth-50/10">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-earth-800/10 dark:hover:bg-earth-50/10'}`}
                                    >
                                        Previous
                                    </button>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-colors flex items-center justify-center ${currentPage === i + 1
                                                ? 'bg-gold-500 text-white'
                                                : 'hover:bg-earth-800/10 dark:hover:bg-earth-50/10'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-earth-800/10 dark:hover:bg-earth-50/10'}`}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
