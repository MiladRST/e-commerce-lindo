// built-in
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
//types
import type { Product } from "@/types"
//components
import ProductGallery from "@/components/templates/products/single/product-gallery"
import ProductDetails from "@/components/templates/products/single/product-details"
import ProductAssurance from "@/components/templates/products/single/product-assurance";
import AddToCart from "@/components/templates/products/single/add-to-cart";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params
 
  // fetch data
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const product = await response.json()

  // optionally access and extend (rather than replace) parent metadata
  //const previousTitle = (await parent).title || ""
  //console.log('previousTitle', previousTitle);
   
  return {
    title: product.title,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;


    const response = await fetch(`https://dummyjson.com/products/${id}`)
    //console.log('single product response', response)

    //check if the product is not found
    if(!response.ok) {
        throw new Error('Failed to fetch product', { cause: response.status })
    }

    if(response.status === 404) {
        return notFound()
    }

    const product : Product | null = await response.json()
    console.log('single product', product)

    //check if no product is available
    if(!product) {
        return <div>Something went wrong!</div>
    }

    //return the product details
    return (
        <>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-6 ">
              {/* product gallery */}
              <div className="w-full mx-auto md:shrink-0 md:max-w-[400px]">
                <ProductGallery images={product?.images || []} />
              </div>

              {/* product details */}
              <div className="w-auto grow">
                <ProductDetails product={product} />
              </div>

              {/* product card */}
              <div className="w-full flex flex-col gap-4 lg:shrink-0 lg:max-w-68 ">
                <ProductAssurance />
                <AddToCart product={product} />
              </div>

            </div>
        </>
    )
}