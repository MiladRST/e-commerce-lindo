import Link from "next/link";
import type { Product, ProductsSearchParams } from "@/types";
import ProductCard from "@/components/modules/product-card";
import { Button } from "@/components/ui/button";

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
  
  if(category && category !== 'all' && products.length > 0) {
    products = products.filter((product: Product) => product.category === category)
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 text-center py-12">
        <p>محصولی یافت نشد. لطفاً فیلترها را تنظیم کنید. </p>
        <Button asChild variant="secondary">
          <Link href="/products">
          مشاهده همه محصولات
          </Link>
        </Button>
      </div>
    );
  }
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}