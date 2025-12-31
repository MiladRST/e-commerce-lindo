'use client';

import type { ProductCategory, ProductsSearchParams } from '@/types';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useTransition, useEffect } from 'react';
//shadcn ui
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
//components
import TransitionLoader from "@/components/modules/transition-loader"
//icons
import { Loader2 } from 'lucide-react';


export default function FiltersSidebar({ categories } : 
  { categories: ProductCategory[]}
) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();
  
  // Local state for immediate UI updates
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [category , setCategory] = useState(searchParams.get('category') || 'all');
  
  // Update URL with new filters
  const updateFilters = (key: string, value: string) => {
    

    // console.log(searchParams.toString());
    // const params = new URLSearchParams(searchParams.toString());
    // console.log('params => ', params.get('page'))
 
    
    // if (value) {
    //   params.set(key, value);
    // } else {
    //   params.delete(key);
    // }

    // console.log('pathName is =>', pathname);
    
    startTransition(() => {
      router.push(`${pathname}?${key}=${value}`);
    });
  };


  const handleCategory = (value: string) => {
    setCategory(value)
    if(search.trim() !== '') setSearch('')  
    updateFilters('category', value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(search.trim() === '') return
    setCategory('all')
    updateFilters('q', search);
  };

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
    //
    startTransition(() => {
      router.push(pathname);
    });
  };



  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <form onSubmit={handleSearchSubmit} className='flex items-center gap-1'>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."  
            className="border border-primary"          
          />
          <Button variant='default' type='submit'>search</Button>

        </form>
      </div>

      {/* Category Filter */}
      { categories.length > 0 && (
      <div className="border border-primary rounded-lg p-4">
        <h3 className="font-semibold text-primary mb-3">Categories</h3>
        <div className="flex flex-col gap-2 bg-white max-h-[300px] overflow-y-auto rounded-lg p-4">
          <RadioGroup 
          onValueChange={(value) => handleCategory(value)} 
          value={category}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All</Label>
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


      {/* Sort */}
      {/* <div>
        <h3 className="font-semibold mb-3">Sort By</h3>
        <select
          value={''}
          onChange={(e) => updateFilters('sort', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          disabled={isPending}
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div> */}

      {/* Clear Filters */}
      { (search || category !== 'all') && <Button
        onClick={clearFilters}
        disabled={isPending}
        className="w-full">
        Clear All Filters
      </Button>
      }

      {/* Loading indicator */}
      {isPending && <TransitionLoader />}
    </div>
  );
}