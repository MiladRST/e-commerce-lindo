"use client"
//shadcn
import { Button } from "@/components/ui/button"
//icons
import { ChevronUp, ChevronDown } from "lucide-react";


const ProductCount = ({ 
    count, 
    increment, 
    decrement
} : { 
    count: number;
    increment: () => void;
    decrement: () => void; 
}) => {
    return(
        <div className="flex items-center gap-4 bg-popover rounded-2xl px-4 py-2">
            <Button variant="ghost" onClick={increment} size={null} asChild>
                <ChevronUp className="text-primary text-lg" />
            </Button>
            <span className="text-sm select-none">{ count }</span>
            <Button variant="ghost" onClick={decrement} size={null} asChild disabled={count === 0 }>
                <ChevronDown className="text-primary text-lg" />
            </Button>
        </div>
    )
}


export default ProductCount;