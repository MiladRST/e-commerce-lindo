import Container from "@/components/modules/container";
import LatestProducts from "@/components/templates/home/latest-products";
//types

export default async function Home() {

  
  
  return (
   <>
    <Container extraClasses="py-10">
      {/* products list */}
      <LatestProducts />
    </Container>
   </>
  );
}
