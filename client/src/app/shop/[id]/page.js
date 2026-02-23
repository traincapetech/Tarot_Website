import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductTabs from "@/components/ProductTabs";
import ProductReviews from "@/components/ProductReviews";
import RelatedProducts from "@/components/RelatedProducts";

import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS } from "@/lib/mockData";

export default async function ProductDetailPage({ params }) {
    // Await the params before using them as required in Next.js 15+
    const resolvedParams = await params;
    const productId = resolvedParams.id;

    const product = MOCK_PRODUCTS.find(p => p.id === parseInt(productId));

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-earth-50 text-earth-900 dark:bg-earth-950 dark:text-earth-50 flex flex-col selection:bg-gold-500/30">
            <Navbar />

            <div className="container mx-auto px-4 lg:px-12 flex-grow pb-24 pt-32">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-earth-900/60 dark:text-earth-50/60 mb-8 mt-4">
                    <a href="/shop" className="hover:text-gold-500 transition-colors">Shop</a>
                    <span>/</span>
                    <a href={`/shop?category=${product.category}`} className="hover:text-gold-500 transition-colors">{product.category}</a>
                    <span>/</span>
                    <span className="font-medium text-earth-900 dark:text-earth-50">{product.name}</span>
                </div>

                {/* Main Product Area (Gallery + Info) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <ProductGallery images={product.images} name={product.name} />

                    <div className="sticky top-32">
                        <ProductInfo product={product} />
                    </div>
                </div>

                {/* Tabs Section for Description/Properties/Shipping */}
                <ProductTabs product={product} />

                {/* Reviews Section */}
                <ProductReviews />

                {/* Related Products Section */}
                <RelatedProducts />
            </div>

            <Footer />
        </main>
    );
}
