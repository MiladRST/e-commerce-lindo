import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import bannerImage from "@/public/images/fullbanner.png";
import { ArrowRight } from "lucide-react";
export default function FullBanner() {
    return (
        <section className="py-10">
            <div className="relative w-full h-[246px] rounded-2xl overflow-hidden">
                <Image src={bannerImage} alt="banner" fill className="object-cover" />
                <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center gap-4 text-white">
                    <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet.</h2>
                    <Button variant="ghost" asChild>
                        <Link href="/products" className="bg-white hover:bg-secondary text-primary hover:text-white rounded-lg gap-2">
                            View all
                            <ArrowRight size={20} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}