//components
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Container from "@/components/modules/container";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <main>
                <Container extraClasses="py-10">
                {children}
                </Container>
            </main>
            <Footer />
        </>
    )
}