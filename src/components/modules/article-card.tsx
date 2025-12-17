import Image from "next/image"
import Link from "next/link"
//shadcn ui
import { Badge } from '@/components/ui/badge'
//types
import type { ArticleInt } from "@/types"

export default function ArticleCard({ article } : { article: ArticleInt }) {
    return (
        <Link href={`/articles/${article.id}`} className="group block">
            <div className="relative flex flex-col gap-5 max-w-full">
                
                <div className="relative h-[208px] w-full flex items-center justify-center mx-auto rounded-2xl overflow-hidden">
                    <Image 
                    src={`/images/placeholder.webp`}
                    alt={article?.title} 
                    fill 
                    loading="lazy"
                    className="object-cover" />

                </div>

                <Badge variant="secondary"
                className="h-6 absolute bottom-14 left-1/2 -translate-x-1/2 text-xs z-10 ">
                    مقاله
                </Badge>

                 <h3 className="min-h-12 text-center text-sm truncate font-normal group-hover:text-primary transition-all duration-300">
                    {article?.title}
                </h3>
            </div> 
        </Link>

    )
}