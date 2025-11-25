import { Suspense } from "react";
import Link from "next/link";
import ProductsListSkeleton from "@/components/skeleton/products-list";
import ProductCard from "@/components/modules/product-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/types";
import SectionTitle from "@/components/layouts/section-title";

export default async function LatestProducts() {
    const getLatestProducts = async () => {
        try{
            const response = await fetch('https://dummyjson.com/products?limit=10' , { 
                next: { revalidate: 60 * 5 /*5 minutes*/ }
            })
            
            if (!response.ok) {
                throw new Error(`Failed to fetch latest products: ${response.status}`);
            }

            const data = await response.json();
            const { products } = data
            console.log('latest-products =>', products)


            if (!Array.isArray(products) || products.length === 0) {
                return null;
            }

            return products;

        }catch(error){
            console.error("Error fetching latest products:", error);
            return null;
        }
    }

    const products = await getLatestProducts()
    

    if (!products?.length) {
        return <div>No products found</div>
    }

    return (
        <section className="py-10">
            <div className="flex items-center justify-between mb-4 md:mb-10">

                <SectionTitle title="جدیدترین محصولات" />
                

                <Button variant="default" asChild>
                    <Link href="/products" className="flex items-center gap-2">
                        مشاهده همه
                        <ArrowLeft size={20} />
                    </Link>
                </Button>
            </div>
            <Suspense fallback={<ProductsListSkeleton />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                product list
            </Suspense>
        </section>
    )
}