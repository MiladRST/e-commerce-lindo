import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import categoryImage from "@/public/images/ring.png";
export default function ProductCategories() {
    return (
        <section className="py-10">
            <div className="w-fit border bg-transparent p-2 my-2" style={{ borderRadius: "999px 999px 100px 100px"}}>
                <div className="bg-white flex flex-col items-center justify-center p-2 gap-2" style={{ borderRadius: "999px 999px 100px 100px"}}>
                    <div className="relative bg-[#F2DFCE] w-32 h-16 overflow-hidden p-2 mb-2" style={{ borderRadius: "999px 999px 100px 100px"}}>
                        <Image src={categoryImage} alt="category" fill className="object-contain" />
                    </div>
                    <h2>انگشتر</h2>
                    <Badge variant="default">Ring</Badge>
                </div>
            </div>
        </section>
    )
}