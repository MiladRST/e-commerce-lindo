import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logo.png";

export default function Logo() {
    return (
        <Link href="/" className="shrink-0 inline-block relative h-10 w-32">
            <Image src={logoImage} alt="logo" fill  className="object-contain" />
        </Link>
    )
}