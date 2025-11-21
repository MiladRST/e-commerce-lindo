export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <h1>Product detail page {id}</h1>
}