import type { ArticleInt } from "@/types"
export default async function ArticlePage({ params} : { params: Promise<{ id: string}>}) {
    const { id } = await params

    const response = await fetch(`https://dummyjson.com/posts/${id}`, { next: { revalidate: 60 * 5}})

    if(!response.ok) {
        return <div>Failed to fetch article</div>
    }

    const article: ArticleInt = await response.json()

    return(
        <section>
            <h1 className="text-2xl font-bold">{article?.title}</h1>
            <p className="text-sm text-gray-500">{article?.body}</p>
        </section>
    )
}