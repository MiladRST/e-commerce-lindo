
import CategorySlider from "./category-slider";
import type { ProductCategory } from "@/types";
import { BASE_URL} from '@/constants'

export default async function ProductCategories() {

    async function getCategories() {
        try {
            const response = await fetch(`${BASE_URL}/products/categories`, {
                next: { revalidate: 60 * 5 },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch categories: ${response.status}`);
            }

            const data = await response.json();

            if (!Array.isArray(data) || data.length === 0) {
                return null;
            }

            return data;
        } catch (error) {
            console.error("Error fetching categories:", error);
            return null;
        }
    }

    const categories = await getCategories();

    if (!categories) {
        return <div>No categories found</div>
    }

    return (
        <section className="py-10">
            <CategorySlider categories={categories as ProductCategory[]} />
        </section>
    )
}