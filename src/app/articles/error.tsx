"use client"
export default function ArticlesError({ error }: { error: Error }) {
    console.log('error', error)
    return (
        <>
            <h1>Error: something went wrong!</h1>
        </>
    )
}