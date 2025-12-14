'use client';

import type { ProductCategory, ProductsSearchParams } from '@/types';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';
//shadcn ui
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label"
//icons
import { Loader2 } from 'lucide-react';

export default function FiltersSidebar({ currentFilters, categories } : 
  { currentFilters: ProductsSearchParams , categories: ProductCategory[]}
) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();
  
  // Local state for immediate UI updates
  const [search, setSearch] = useState(currentFilters.search || '');
  const [minPrice, setMinPrice] = useState(Number(currentFilters.minPrice) || 0);
  const [maxPrice, setMaxPrice] = useState(Number(currentFilters.maxPrice) || 1000);
  const [category, setCategory] = useState(currentFilters.category || 'all');
  // Update URL with new filters

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log('params => ', params)
  
    if (key === 'category') {
      setCategory(value);
    }
    
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const handlePriceRangeChange = (value: number[]) => {
    console.log(value);
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters('search', search);
  };

  const clearFilters = () => {
    setSearch('');
    setMinPrice(0);
    setMaxPrice(0);
    setCategory('all');
    //
    startTransition(() => {
      router.push(pathname);
    });
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      {/* <div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-2 border rounded-lg"
          />
        </form>
      </div> */}

      {/* Category Filter */}
      { categories.length > 0 && (
      <div className="border border-primary rounded-lg p-4">
        <h3 className="font-semibold text-primary mb-3">دسته بندی محصولات</h3>
        <div className="flex flex-col gap-2 bg-white max-h-[300px] overflow-y-auto rounded-lg p-4">
          <RadioGroup 
          onValueChange={(value) => updateFilters('category', value)} 
          value={currentFilters.category || 'all'}
          style={{ direction: 'rtl' }}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">همه دسته بندی ها</Label>
            </div>
          
            { categories.map((category: ProductCategory) => (
              <div key={category.slug} className="flex items-center gap-2">
                <RadioGroupItem value={category.slug} id={category.slug}  />
                <Label htmlFor={category.slug}>{category.name}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      )}

      {/* Price Range */}
      <div className="border border-primary rounded-lg p-4">
        <h3 className="font-semibold text-primary mb-3">محدوده قیمت</h3>
        <div className="space-y-2" dir="ltr">
          <Slider 
          
            dir="ltr"
            min={0}
            max={1000}
            value={[minPrice, maxPrice]}
            onValueChange={handlePriceRangeChange}
            disabled={isPending}
          />

          {minPrice} - {maxPrice}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-semibold mb-3">Sort By</h3>
        <select
          value={currentFilters.sort || ''}
          onChange={(e) => updateFilters('sort', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          disabled={isPending}
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        disabled={isPending}
        className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors disabled:opacity-50"
      >
        Clear All Filters
      </button>

      {/* Loading indicator */}
      {isPending && (
        <div className="fixed z-99999 inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-sm text-white text-center">
          <Loader2 className="animate-spin" />
        </div>
      )}
    </div>
  );
}