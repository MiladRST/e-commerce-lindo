import { Suspense } from "react";
import Link from "next/link";
import Container from "@/components/modules/container";
import ProductsListSkeleton from "@/components/skeleton/products-list";
import ProductCard from "@/components/modules/product-card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";

export default async function LatestProducts() {
    const res = await fetch('https://fakestoreapi.com/products' , { next: { revalidate: 60 * 5 /*5 minutes*/ }})
    const products: Product[] = await res.json()

    if (!products?.length) {
        return <div>No products found</div>
    }

    return (
        <Container extraClasses="py-10">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">جدیدترین محصولات</h2>

                <Button variant="default" asChild>
                    <Link href="/products">مشاهده همه</Link>
                </Button>
            </div>
            <Suspense fallback={<ProductsListSkeleton />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {products?.length > 0 && products.slice(0, 10).map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Suspense>
        </Container>
    )
}