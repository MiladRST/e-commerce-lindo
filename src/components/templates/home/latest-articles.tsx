import Link from 'next/link'
//components
import SectionTitle from "@/components/layouts/section-title";
import ArticleCard from '@/components/modules/article-card';
//shadcn ui
import { Button } from '@/components/ui/button';
//icons
import { ArrowRight } from 'lucide-react';
//types
import type { ArticleInt } from '@/types'
export default async function LatestArticles() {

    const response = await fetch('https://dummyjson.com/posts' , { next: { revalidate: 60 * 5 }})

    if(!response.ok) {
        return <div>Failed to fetch latest articles</div>
    }

    const data = await response.json()
    
    const { posts: articles } = data 

    console.log('latest articles data', articles)

    return (
        <section className="py-10">
            <div className="flex items-center justify-between mb-4 md:mb-10">

                <SectionTitle title="Latest Articles" />
                
                <Button variant="default" asChild>
                    <Link href="/articles" className="flex items-center gap-2">
                        View all
                        <ArrowRight size={20} />
                    </Link>
                </Button>
            </div>

            {
                articles.length === 0 ? (
                    <div>No articles available</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        { articles.slice(0,4).map((article: ArticleInt) => {
                            return (
                                <ArticleCard key={article.id} article={article} />
                            )
                        })}
                    </div>
                )
            }
            
        </section>
    )
}