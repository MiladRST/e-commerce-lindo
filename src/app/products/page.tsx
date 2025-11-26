import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
}

import { Suspense } from 'react';
// import ProductGrid from '@/components/ProductGrid';
// import { getProducts } from '@/lib/api';
import FiltersSidebar from "@/components/templates/products/FiltersSidebar";
import ProductsList from "@/components/templates/products/ProductsList";
import type { ProductCategory, ProductsSearchParams } from "@/types";
import ProductCardSkeleton from "@/components/skeleton/product-card";


export default async function ProductsPage({ searchParams }: { searchParams: Promise<ProductsSearchParams> }) {
    
  const { category, minPrice, maxPrice, search, sort } = await searchParams;

  console.log('page searchParams =>', await searchParams)

  const response = await fetch('https://dummyjson.com/products/categories')
  const data = await response.json()
  const categories = data as ProductCategory[]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      
      <div className="flex gap-8">
        {/* Client Component for interactive filters */}
        <aside className="w-64 shrink-0">
          <FiltersSidebar 
          currentFilters={{ category, minPrice, maxPrice, search, sort }} 
          categories={categories}
          />
        </aside>

        {/* Server Component for products with Suspense */}
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

