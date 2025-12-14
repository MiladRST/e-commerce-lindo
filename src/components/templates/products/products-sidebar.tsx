
//components
import FiltersSidebar from "@/components/templates/products/FiltersSidebar";
//types
import type { ProductCategory, ProductsSearchParams } from '@/types'

export default async function ProductsSidebar({ filters } : { filters: ProductsSearchParams }) {

    const response = await fetch('https://dummyjson.com/products/categories')
    if(!response.ok) {
        throw new Error('Failed to fetch categories')
    }
    const data = await response.json()
    const categories = data as ProductCategory[]

    return <FiltersSidebar currentFilters={filters} categories={categories} />
    
}