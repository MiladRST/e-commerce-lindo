'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react'
//components
import TransitionLoader  from '@/components/modules/transition-loader'
//icons
import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function Pagination (
    { totalItems, itemsPerPage=10, maxVisible = 5 } : 
    { totalItems: number; itemsPerPage?:number; maxVisible?:number; }
) {

  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  //
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Number(searchParams.get('page')) || 1;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftSiblingIndex = Math.max(currentPage - 1, 1);
      const rightSiblingIndex = Math.min(currentPage + 1, totalPages);
      
      const showLeftDots = leftSiblingIndex > 2;
      const showRightDots = rightSiblingIndex < totalPages - 1;
      
      pages.push(1);
      
      if (showLeftDots) {
        pages.push('...');
      }
      
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      
      if (showRightDots) {
        pages.push('...');
      }
      
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());

    startTransition(() => {
        router.push(`?${params.toString()}`);
    })
    
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <>
        {isPending && <TransitionLoader />}

        <div className="pagination-container">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="paginate-buttons back-button"
            >
                <ChevronLeft size={20}/>
            </button>

            <div className="flex gap-1">
                {pageNumbers.map((page, idx) => {
                if (page === '...') {
                    return (
                    <span
                        key={`dots-${idx}`}
                        className="px-4 py-2 flex items-center text-gray-500"
                    >
                        ...
                    </span>
                    );
                }

                return (
                    <button
                    key={page}
                    onClick={() => handlePageChange(page as number)}
                    className={`paginate-buttons ${ currentPage === page && 'active-page' }`}
                    >
                    {page}
                    </button>
                );
                })}
            </div>

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="paginate-buttons next-button"
            >
                <ChevronRight size={20}/>
            </button>
        </div>
        
    </>
  );
};

