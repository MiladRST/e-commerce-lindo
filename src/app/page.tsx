import { Suspense } from "react";
//types
import type { Metadata } from "next";
//components
import LatestProducts from "@/components/templates/home/latest-products";
import FullBanner from "@/components/templates/home/full-banner";
import ProductCategories from "@/components/templates/home/product-categories";

export const metadata: Metadata = {
  title: "Home",
}

export default async function Home() {

  return (
   <>
  <Suspense fallback={<div>fetching categories ...</div>}>
    <ProductCategories />
  </Suspense>
  
  <Suspense fallback={<div>fetching latest products ...</div>}>
   <LatestProducts />
  </Suspense>

   <FullBanner />

   </>
  )
}
