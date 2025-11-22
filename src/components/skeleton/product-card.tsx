import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function ProductCardSkeleton() {
    return (
        <>
            <Card className="relative max-w-full">

                <CardHeader>
                    <div className="relative h-[167px] w-full mx-auto rounded-2xl overflow-hidden">
                        <Skeleton className="h-full w-full" />
                    </div>
                </CardHeader>
                
                <CardContent>
                    <div className="flex flex-col items-center gap-4 text-center">
                        {/* Title skeleton */}
                        <Skeleton className="h-12 w-3/4" />
                        
                        {/* Price skeleton */}
                        <div className="flex flex-col gap-1 w-full items-center"> 
                            <Skeleton className="h-5 w-24" />
                            {/* Optional discount price skeleton */}
                            <Skeleton className="h-4 w-20" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}