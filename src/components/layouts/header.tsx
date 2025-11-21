import Container from "@/components/modules/container";
import Link from "next/link";
import Image from "next/image";
//shadcn
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
//others
import { UserRound, ShoppingCart, Menu } from "lucide-react";
import logoImage from "@/public/images/logo.png";
//
import { NAVIGATION_ITEMS } from "@/constants";

export default function Header() {
    return (
        <header>
            <Container>
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="shrink-0 inline-block relative h-10 w-32">
                        <Image src={logoImage} alt="logo" fill  className="object-contain" />
                    </Link>

                    <div className="hidden md:flex items-center flex-row-reverse gap-4">
                        {/* login & regiter */}
                        <Button variant="ghost" asChild>
                            <Link href="/login" className="flex items-center bg-white text-primary rounded-lg hover:bg-primary hover:text-white gap-2">
                                <UserRound size={20} />
                                ورود / ثبت نام 
                            </Link>
                        </Button>

                        <Button variant="secondary" asChild>
                            <Link href="/card" className="w-9 h-9 relative flex items-center justify-center rounded-lg">
                                <Badge variant="default" className="absolute w-6 h-6 -top-2 -right-2 text-[10px] flex items-center justify-center">0</Badge>
                                <ShoppingCart size={20} />
                            </Link>
                        </Button>                        
                    </div>

                    <Button variant="default" className="md:hidden" size="icon" asChild>
                        <span>
                            <Menu size={20} />
                        </span>
                    </Button>
                </div>

                <div className="md:bg-primary text-white py-4 rounded-full rounded-tr-none">
                    <nav>
                        <ul className="flex items-center justify-center gap-4">
                            {NAVIGATION_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Button variant="ghost" asChild>
                                        <Link href={item.href}>
                                        {item.label}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </Container>
        </header>
    )
}