"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductTabs({ product }) {
    const [activeTab, setActiveTab] = useState("description");

    const tabs = [
        { id: "description", label: "Description" },
        { id: "properties", label: "Healing Properties" },
        { id: "shipping", label: "Shipping & Returns" },
    ];

    return (
        <div className="mt-20 glass-card rounded-3xl p-6 md:p-10">
            {/* Tab Navigation */}
            <div className="flex space-x-8 border-b border-earth-800/10 dark:border-earth-50/10 mb-8 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-4 text-lg font-heading relative whitespace-nowrap transition-colors ${activeTab === tab.id
                                ? "text-gold-600 dark:text-gold-400 font-bold"
                                : "text-earth-900/60 dark:text-earth-50/60 hover:text-earth-900 dark:hover:text-earth-50 font-medium"
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTabIndicator"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
                <AnimatePresence mode="wait">
                    {activeTab === "description" && (
                        <motion.div
                            key="description"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="prose dark:prose-invert max-w-none text-earth-900/80 dark:text-earth-50/80 leading-relaxed"
                        >
                            <p className="mb-4">
                                {product.description || "This exceptional piece has been carefully hand-selected for its unique energy signature and physical beauty. Each item in our collection is treated with reverence, ethically sourced from trusted miners and artisans who share our respect for the Earth."}
                            </p>
                            <p>
                                Whether you are beginning your spiritual journey or expanding your sacred tools, this {product.name} serves as a powerful conduit for manifestation and deep inner work. The natural variations in physical appearance are a testament to its authentic creation within the earth.
                            </p>
                        </motion.div>
                    )}

                    {activeTab === "properties" && (
                        <motion.div
                            key="properties"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="prose dark:prose-invert max-w-none text-earth-900/80 dark:text-earth-50/80 leading-relaxed"
                        >
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="text-amethyst-500 font-bold">•</span>
                                    <span><strong>Primary Intention:</strong> {product.purpose || "Spiritual Growth & Connection"}</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-amethyst-500 font-bold">•</span>
                                    <span><strong>Chakra Alignment:</strong> {product.chakra || "Third Eye & Crown Chakras"}</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-amethyst-500 font-bold">•</span>
                                    <span><strong>Zodiac Affinity:</strong> {product.zodiac || "Aquarius, Pisces"}</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-amethyst-500 font-bold">•</span>
                                    <span><strong>Element:</strong> {product.element || "Air & Water"}</span>
                                </li>
                                <li className="flex gap-4 mt-4 text-earth-900/90 dark:text-earth-50/90 bg-amethyst-500/5 p-4 rounded-xl border border-amethyst-500/10">
                                    <span className="text-amethyst-500 font-bold">✨</span>
                                    <span><em>Ritual Tip:</em> Cleanse under the light of the full moon and set your intentions while holding the item close to your heart space.</span>
                                </li>
                            </ul>
                        </motion.div>
                    )}

                    {activeTab === "shipping" && (
                        <motion.div
                            key="shipping"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="prose dark:prose-invert max-w-none text-earth-900/80 dark:text-earth-50/80 leading-relaxed"
                        >
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-heading font-semibold text-earth-900 dark:text-earth-50 text-lg mb-2">Conscious Shipping</h4>
                                    <p>All orders are ritually cleansed and packed with recyclable, earth-friendly materials. Please allow 2-3 business days for processing. Standard shipping averages 4-7 business days within the US. Free shipping on all orders over $100.</p>
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-earth-900 dark:text-earth-50 text-lg mb-2">Returns & Exchanges</h4>
                                    <p>Due to the personal nature of energetic tools, we generally do not accept returns. However, if your item arrives damaged, please contact us within 48 hours with photographs so we can make it right. We want your spirit to be completely at peace with your purchase.</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
