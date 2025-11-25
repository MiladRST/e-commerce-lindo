import Image from "next/image"
import { notFound } from "next/navigation";
import type { Product } from "@/types"
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const getSingleProduct = async ( id: string) => {
        try{
            const response = await fetch(`https://dummyjson.com/products/${id}`)

            if (!response.ok) {
                throw new Error(`Failed to fetch product: ${response.status}`);
            }

            const data = await response.json();
            return data;

        }catch(error){
            console.error("Error fetching product:", error);
            return null;
        }
    }

    const product : Product | null = await getSingleProduct(id)
    console.log(product)

    if(!product) {
        return notFound()
    }
    
    return (
        <>
            <h1>{product.title} - {product.brand} </h1>
            <Image src={product.thumbnail} alt={product.title} width={250} height={250} />
        </>
    )
}