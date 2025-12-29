import Link from "next/link";
//types
import type { Product, ProductsSearchParams } from "@/types";
//shadcn ui
import { Button } from "@/components/ui/button";
//components
import ProductCard from "@/components/modules/product-card";
//constants
import { BASE_URL } from "@/constants";

export default async function ProductsList(
  { searchParams } : 
  { searchParams: Promise<{[key:string] : string | string[] | undefined }> }
) {

  const filters = await searchParams;
  console.log('product filters =>', filters)

  
  const getProducts = async (filters: ProductsSearchParams) => {
    const { category, q, sort, order, page } = filters

    const limit = 20
    const skip = page && /^\d+$/.test(String(page)) ? ((Number(page)-1) * limit) : 1
     
    let baseUrl = `${BASE_URL}/products${q ? `/search?q=${q}&` : '?'}limit=${limit}&skip=${skip}`

    if(category && category !== 'all') {
      baseUrl = `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
    }

    console.log('baseUrl => ', baseUrl)

    try {
        const response = await fetch(
          baseUrl, 
          { next: { revalidate: 60 * 2}}
        )
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

  const { products } = await getProducts(filters)
  
  // if(category && category !== 'all' && products.length > 0) {
  //   products = products.filter((product: Product) => product.category === category)
  // }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 text-center py-12">
        <p>محصولی یافت نشد. لطفاً فیلترها را تنظیم کنید. </p>
        <Button asChild variant="secondary">
          <Link href="/products">
          View all products
          </Link>
        </Button>
      </div>
    );
  }
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}