import Image from "next/image"
import Link from "next/link"
import {Card, CardContent,CardHeader} from "@/components/ui/card"

import type { Product } from "@/types"

export default function ProductCard({ product } : { product: Product }) {
    return (
        <Link href={`/products/${product.id}`} className="group block">
            
            <Card className="relative max-w-full">
                {/* discount badge */}
                {product?.discountPercentage && (
                    <span className="absolute z-10 top-0 left-3 bg-secondary text-white flex flex-col text-xs w-10 h-10 flex items-center justify-center rounded-b-full">
                        {product.discountPercentage.toFixed(1)}
                        <span>%</span>
                    </span>
                )}

                <CardHeader>
                    <div className="relative h-[150px] w-full flex items-center justify-center mx-auto rounded-2xl overflow-hidden">
                        <Image 
                        src={product?.thumbnail} 
                        alt={product?.title} 
                        width={150} 
                        height={150} 
                        loading="lazy"
                        className="object-contain" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h3 className="min-h-12 line-clamp-2 font-semibold group-hover:text-primary transition-all duration-300">
                            {product?.title}
                        </h3>
                        <div className="flex items-center gap-2"> 
                            <span className="text-base text-primary font-bold"> 
                                ${product?.price} 
                            </span>
                            
                            {product?.discountPercentage && (
                                <span className="text-muted-foreground text-sm line-through"> ${( product.price / (1 - product.discountPercentage / 100) ).toFixed(2)}  </span>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card> 
        </Link>

    )
}