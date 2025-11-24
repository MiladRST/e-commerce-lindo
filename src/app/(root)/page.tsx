import LatestProducts from "@/components/templates/home/latest-products";
import FullBanner from "@/components/templates/home/full-banner";

export default async function Home() {

  return (
   <>
    {/* products list */}
    <LatestProducts />

    {/* full banner */}
    <FullBanner />
   </>
  );
}
