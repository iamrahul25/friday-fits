import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { ProductSection } from "@/components/home/ProductSection";
import { VirtualTryOn } from "@/components/home/VirtualTryOn";
import { TrustBar } from "@/components/home/TrustBar";
import products from "@/data/products.json";
import categories from "@/data/categories.json";
import type { Product } from "@/lib/types";

export default function Home() {
  const allProducts = products as Product[];
  const newArrivals = allProducts.filter((p) => p.id.startsWith("na-"));
  const trending = allProducts.filter((p) => p.id.startsWith("tr-")).slice(0, 5);

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <ShopByCategory categories={categories} />
        <ProductSection
          id="new-arrivals"
          title="New Arrivals"
          subtitle="Fresh styles, made for your next chapter."
          products={newArrivals}
        />
        <VirtualTryOn />
        <ProductSection
          id="trending"
          title="Trending This Week"
          subtitle="What everyone’s adding to cart right now."
          products={trending}
          showSustainable
        />
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
