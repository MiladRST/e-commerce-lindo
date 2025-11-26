"use client"
export default function ProductDetailError({ error }: { error: Error }) {
    console.log('error', error)
    return (
        <>
            <h1>Error: something went wrong!</h1>
        </>
    )
}