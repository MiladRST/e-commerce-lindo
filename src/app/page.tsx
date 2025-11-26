import type { Metadata } from "next";

import LatestProducts from "@/components/templates/home/latest-products";
import FullBanner from "@/components/templates/home/full-banner";
import ProductCategories from "@/components/templates/home/product-categories";

export const metadata: Metadata = {
  title: "Home",
}

export default async function Home() {

  return (
   <>

   <ProductCategories />
   <LatestProducts />
   <FullBanner />
   </>
  )
}
