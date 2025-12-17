import { Skeleton } from "@/components/ui/skeleton"

export default function ArticleCardSkeleton() {
    return (
        <div className="group block">
            <div className="relative flex flex-col gap-5 max-w-full">
                
                <Skeleton className="relative h-[208px] w-full flex items-center justify-center mx-auto rounded-2xl overflow-hidden" />
                
                <Skeleton 
                className="h-6 absolute bottom-14 left-1/2 -translate-x-1/2 text-xs z-10" />
                    
                <Skeleton className="min-h-12 text-center text-sm truncate font-normal group-hover:text-primary transition-all duration-300" />
                
            </div> 
        </div>
    )
}