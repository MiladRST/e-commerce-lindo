export interface Product {
    id: number | string;
    title: string;
    description: string;
    category: string;
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: Array<string>,
    brand: string,
    sku: string,
    weight: number,
    dimensions: object,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Array<string>,
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: object,
    images: Array<string>,
    thumbnail: string,
}

export interface ProductCategory {
    slug: string;
    name: string;
    url: string;
}

// products
interface ProductsSearchParams {
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  search?: string;
  sort?: string;
}