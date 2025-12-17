import ArticleCardSkeleton from '@/components/skeleton/article-card'

export default function ArticlesLoadingPage() {
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
            <ArticleCardSkeleton key={index} />
        ))}
       </div>
    )
}