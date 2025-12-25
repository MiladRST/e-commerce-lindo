
"use client"

import { useState } from 'react'
//shadcn
import { Button } from "@/components/ui/button";
//components
import ProductCount from '@/components/modules/product-count';
//icons
import { ShoppingCart } from "lucide-react";
//types
import type { Product } from '@/types'

const AddToCart = ({ product } : { product : Product }) => {

    const [count, setCount] = useState(1)


    const increment = () => {
        setCount( prev => prev + 1 )
    }

    const decrement = () => {
        if(count === 1 ) return;

        setCount( prev => prev - 1 )
    }

    return(
        <>
            <div className="flex items-center justify-between gap-2">
                <span className="font-bold">Count:</span>
                <ProductCount 
                    count={count} 
                    increment={increment} 
                    decrement={decrement} 
                />
            </div>
            <div className="flex items-center justify-between gap-4">
                <span className="font-bold">Price:</span> 
                <span className="font-bold text-xl">${count === 0 ? product.price : (product.price * count).toFixed(2) }</span>
            </div>
            <Button className="w-full h-12" size="lg" >
                <ShoppingCart className="mr-2" />
                Add To Cart
            </Button>
        </>
    )
}

export default AddToCart;