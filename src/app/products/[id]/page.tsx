import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image"
import { notFound } from "next/navigation";
import type { Product } from "@/types"

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
    //console.log('single product', product)

    //check if no product is available
    if(!product) {
        return <div>Something went wrong!</div>
    }

    //return the product details
    return (
        <>
            <h1>{product.title} - {product.brand} </h1>
            <Image src={product.thumbnail} alt={product.title} width={250} height={250} />
        </>
    )
}