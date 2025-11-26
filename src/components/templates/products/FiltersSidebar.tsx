'use client';

import { ProductCategory } from '@/types';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';

interface FiltersSidebarProps {
 
}

export default function FiltersSidebar({ currentFilters, categories }: { currentFilters: {
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    search?: string;
    sort?: string;
  } , categories: ProductCategory[]}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  // Local state for immediate UI updates
  const [search, setSearch] = useState(currentFilters.search || '');
  const [minPrice, setMinPrice] = useState(currentFilters.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(currentFilters.maxPrice || '');

  // Update URL with new filters
  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters('search', search);
  };

  const clearFilters = () => {
    setSearch('');
    setMinPrice('');
    setMaxPrice('');
    startTransition(() => {
      router.push(pathname);
    });
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <h3 className="font-semibold mb-3">Search</h3>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-2 border rounded-lg"
          />
        </form>
      </div>

      {/* Category Filter */}
      { categories.length > 0 && (
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <select
          value={currentFilters.category || ''}
          onChange={(e) => updateFilters('category', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          disabled={isPending}
        >
          <option value="">All Categories</option>
          { categories.map((category: ProductCategory) => (
            <option key={category.slug} value={category.slug}>{category.name}</option>
          ))}
        </select>
      </div>
      )}

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            onBlur={() => updateFilters('minPrice', minPrice)}
            placeholder="Min price"
            className="w-full px-3 py-2 border rounded-lg"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onBlur={() => updateFilters('maxPrice', maxPrice)}
            placeholder="Max price"
            className="w-full px-3 py-2 border rounded-lg"
          />
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
        <div className="text-sm text-gray-500 text-center">
          Updating...
        </div>
      )}
    </div>
  );
}