import { Suspense } from "react";
import Image from "next/image"
//types
import type { Metadata } from "next";
//components
import HeroSlider from "@/components/templates/home/hero-slider";
import LatestProducts from "@/components/templates/home/latest-products";
import FullBanner from "@/components/templates/home/full-banner";
import ProductCategories from "@/components/templates/home/product-categories";

export const metadata: Metadata = {
  title: "Home",
}

export default async function Home() {

  return (
   <>
   <section className="flex items-center gap-4">
    
    <div className="w-full lg:grow lg:w-3/5 max-w-full">
      <HeroSlider />
    </div>

    <div className="hidden lg:block relative w-72 h-[450px] shrink-0">
      <Image src="/images/hero-static.png" alt="hero slide 2" fill />
    </div>

   </section>


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
