
//components
import ProductsFilters from "@/components/templates/products/products-filters";
//types
import type { ProductCategory } from '@/types'
//constants
import { BASE_URL } from "@/constants";

export default async function ProductsSidebar() {

    const response = await fetch(`${BASE_URL}/products/categories`, { next : { revalidate: 60 * 60 }})

    if(!response.ok) {
        throw new Error('Failed to fetch categories')
    }
    const data = await response.json()
    const categories = data as ProductCategory[]

    return <ProductsFilters categories={categories} />
    
}