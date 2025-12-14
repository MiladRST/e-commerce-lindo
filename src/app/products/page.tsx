import { Suspense } from 'react';
//components
import ProductsList from "@/components/templates/products/products-list";
import ProductsSidebar from "@/components/templates/products/products-sidebar";
import ProductCardSkeleton from "@/components/skeleton/product-card";
//types
import type { Metadata } from "next";
import type { ProductsSearchParams } from "@/types";

export const metadata: Metadata = {
  title: "Products",
}
export default async function ProductsPage({ searchParams }: { searchParams: Promise<ProductsSearchParams> }) {
    
  const { category, minPrice, maxPrice, search, sort } = await searchParams;

  const filters = {
    category,
    minPrice,
    maxPrice,
    search,
    sort,
  }

  console.log('page searchParams =>', await searchParams)

  


  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="flex gap-8">

        <aside className="w-80 shrink-0">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductsSidebar filters={filters} />
          </Suspense>
        </aside>
        
        <main className="flex-1">
          <Suspense fallback={<ProductsSkeleton />}>
            <ProductsList searchParams={searchParams} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}


function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(6)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

