import Image from "next/image"
import Link from "next/link"
import {Card, CardContent,CardHeader} from "@/components/ui/card"

import type { Product } from "@/types"

export default function ProductCard({ product } : { product: Product }) {
    return (
        <Link href={`/products/${product.id}`} className="group block">
            
            <Card className="relative max-w-full">
                {/* discount badge */}
                {product?.hasDiscount && (
                    <span className="absolute z-10 top-0 left-3 bg-secondary text-white w-9 h-9 flex items-center justify-center rounded-b-full">%</span>
                )}

                <CardHeader>
                    <div className="relative h-[167px] w-full mx-auto rounded-2xl overflow-hidden">
                        <Image 
                        src={product?.image} 
                        alt={product?.title} 
                        width={198} 
                        height={167} 
                        loading="lazy"
                        className="object-contain" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h3 className="min-h-12 line-clamp-2 font-semibold group-hover:text-primary transition-all duration-300">
                            {product?.title}
                        </h3>
                        <div className="flex flex-col gap-1"> 
                            <span className="text-sm text-primary font-bold"> {product?.price} <b>تومان</b>  </span>
                            {product?.hasDiscount && (
                                <span className="text-muted-foreground text-xs line-through"> {product?.price} <b>تومان</b>  </span>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card> 
        </Link>

    )
}