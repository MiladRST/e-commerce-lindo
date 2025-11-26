import type { Product, ProductsSearchParams } from "@/types";
import ProductCard from "@/components/modules/product-card";

export default async function ProductsList({ searchParams } : { 
    searchParams: Promise<ProductsSearchParams> }) {

  const { category, minPrice, maxPrice, search, sort } = await searchParams;

  const getProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products', { next: { revalidate: 60 * 2}})
        if(!response.ok) {
            throw new Error('Failed to fetch products')
        }

        const data = await response.json()

        return { data , products: data.products}
    }catch(error) {
        console.error('Error fetching products:', error)
        return { data: null, products: [] }
    }
  }

  let { products } = await getProducts()
  
  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No products found. Try adjusting your filters.
      </div>
    );
  }

  if(category) {
    products = products.filter((product: Product) => product.category === category)
  }
   

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}