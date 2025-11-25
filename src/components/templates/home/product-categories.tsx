
import { Suspense } from "react";
import CategorySlider from "./category-slider";
import type { ProductCategory } from "@/types";
export default async function ProductCategories() {

    async function getCategories() {
        try {
            const response = await fetch("https://dummyjson.com/products/categories", {
                next: { revalidate: 60 * 5 },
                // cache: "force-cache" (default) for static data,
                // or "no-store" if data must always be fresh.
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
            <Suspense fallback={<div>Loading...</div>}>
                <CategorySlider categories={categories as ProductCategory[]} />
            </Suspense>
        </section>
    )
}