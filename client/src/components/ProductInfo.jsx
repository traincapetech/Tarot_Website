"use client";

import { useState } from "react";
import { Star, Minus, Plus, ShoppingBag, Heart } from "lucide-react";

export default function ProductInfo({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        if (quantity < (product.stock || 10)) setQuantity(quantity + 1);
    };

    const formattedPrice = typeof product.price === 'number'
        ? `$${product.price.toFixed(2)}`
        : product.price;

    const isOutOfStock = product.stock === 0;

    return (
        <div className="flex flex-col justify-center h-full">
            {/* Category & Rating */}
            <div className="flex items-center justify-between mb-4">
                <p className="text-sm uppercase tracking-widest text-amethyst-600 dark:text-amethyst-400 font-semibold">
                    {product.category}
                </p>
                <div className="flex items-center gap-1 text-gold-500">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill={i < (product.rating || 5) ? "currentColor" : "none"} stroke="currentColor" />
                        ))}
                    </div>
                    <span className="text-sm text-earth-900/60 dark:text-earth-50/60 ml-1">
                        ({product.reviewsCount || 12})
                    </span>
                </div>
            </div>

            {/* Main Title & Price */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-earth-800/10 dark:border-earth-50/10">
                <span className="text-3xl font-medium text-gold-600 dark:text-gold-400">
                    {formattedPrice}
                </span>

                {/* Stock Status Badge */}
                <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full ${isOutOfStock ? 'bg-red-500/10 text-red-600 dark:text-red-400' : 'bg-green-500/10 text-green-700 dark:text-green-400'}`}>
                    {isOutOfStock ? "Out of Stock" : "In Stock"}
                </span>
            </div>

            {/* Short Description */}
            <p className="text-lg text-earth-900/80 dark:text-earth-50/80 mb-8 leading-relaxed">
                {product.shortDescription || "Elevate your spiritual journey with this ethically sourced treasure. Crafted with the purest intentions to bring balance and harmony to your sacred space."}
            </p>

            {/* Purpose Banner */}
            <div className="bg-earth-100/50 dark:bg-earth-900/30 rounded-xl p-4 mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amethyst-500/20 text-amethyst-600 dark:text-amethyst-400 flex items-center justify-center shrink-0">
                    ✧
                </div>
                <div>
                    <p className="text-sm text-earth-900/60 dark:text-earth-50/60">Primary Intention</p>
                    <p className="font-semibold text-earth-900 dark:text-earth-50">{product.purpose}</p>
                </div>
            </div>

            {/* Add To Cart Area */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Quantity Selector */}
                <div className="flex items-center justify-between border border-earth-800/20 dark:border-earth-50/20 rounded-full h-14 w-full sm:w-32 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                    <button
                        onClick={handleDecrease}
                        disabled={isOutOfStock || quantity <= 1}
                        className="w-10 h-10 flex items-center justify-center text-earth-900/70 dark:text-earth-50/70 hover:text-earth-900 dark:hover:text-earth-50 disabled:opacity-50 transition-colors ml-1"
                        aria-label="Decrease quantity"
                    >
                        <Minus size={18} />
                    </button>
                    <span className="font-medium text-lg w-8 text-center">{quantity}</span>
                    <button
                        onClick={handleIncrease}
                        disabled={isOutOfStock || quantity >= (product.stock || 10)}
                        className="w-10 h-10 flex items-center justify-center text-earth-900/70 dark:text-earth-50/70 hover:text-earth-900 dark:hover:text-earth-50 disabled:opacity-50 transition-colors mr-1"
                        aria-label="Increase quantity"
                    >
                        <Plus size={18} />
                    </button>
                </div>

                {/* CTA Buttons */}
                <button
                    disabled={isOutOfStock}
                    className="flex-grow h-14 bg-earth-900 text-earth-50 dark:bg-earth-50 dark:text-earth-900 flex items-center justify-center gap-2 rounded-full font-medium hover:scale-[1.02] transform transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                    <ShoppingBag size={20} />
                    {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                </button>

                {/* Wishlist Button */}
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`h-14 w-14 shrink-0 border rounded-full flex items-center justify-center transition-all ${isWishlisted
                            ? 'border-red-500 bg-red-50 text-red-500 dark:bg-red-500/10'
                            : 'border-earth-800/20 dark:border-earth-50/20 hover:border-earth-900 dark:hover:border-earth-50 text-earth-900/60 dark:text-earth-50/60'
                        }`}
                    aria-label="Add to wishlist"
                >
                    <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
            </div>

            {/* Small Shipping Info */}
            <div className="text-sm text-earth-900/60 dark:text-earth-50/60 flex flex-col gap-2">
                <p>🚚 Free shipping on orders over $100</p>
                <p>✨ Ethically sourced and ritually cleansed</p>
            </div>
        </div>
    );
}
