import ProductCard from "@/components/ProductCard";
import { MOCK_PRODUCTS } from "@/lib/mockData";

export default function RelatedProducts() {
    return (
        <section className="mt-24 pt-16 border-t border-earth-800/10 dark:border-earth-50/10">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <span className="text-sm uppercase tracking-widest text-gold-600 dark:text-gold-400 font-semibold mb-2 block">
                        ✧ Perfect Pairings
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold">You May Also Like</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MOCK_PRODUCTS.slice(4, 8).map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>
        </section>
    );
}
