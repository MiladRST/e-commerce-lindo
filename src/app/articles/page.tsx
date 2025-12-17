//types
import type { ArticleInt } from "@/types"
//components
import ArticleCard from "@/components/modules/article-card"
//shadcn ui
import {PaginationWithLinks} from '@/components/ui/pagination-with-links'

export default async function ArticlesPage(
    { searchParams } : 
    { searchParams : Promise<{[key:string] : string | string[] | undefined }>}
) {

    const sParams = await searchParams

    console.log('searchParams => ', sParams)

    const currentPage = Number(sParams['page']) || 1
    const perPage = 20

    console.log('currentPage => ', currentPage)
    
    const response = await fetch(
        `https://dummyjson.com/posts?limit=${perPage}&skip=${perPage*(currentPage-1)}` 
        , { next: { revalidate: 60 * 5 }}
    )

    if(!response.ok) {
        throw new Error('something wrong occured!')
    }

    const data = await response.json()

    const { posts:articles, total } = data

    console.log(data)

    return (
        <>
            {
                articles?.length ===  0 ? (
                    <div>no articles available</div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {
                                articles.map((article: ArticleInt) => {
                                    return (
                                    <ArticleCard key={article.id} article={article} />
                                    )
                                })
                            }
                        </div>

                        <div dir='ltr' className="my-8">
                            <PaginationWithLinks 
                            page={currentPage}
                            pageSize={perPage}
                            totalCount={total}
                            navigationMode="router"
                            />
                        </div>
                    </>
                )
            }
        </>
    )
}