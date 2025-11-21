import Container from "@/components/modules/container";
import Link from "next/link";
//shadcn
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
//others
import { UserRound, ShoppingCart } from "lucide-react";
//components
import HeaderMenu from "./menu";
import Logo from "@/components/modules/logo";
export default function Header() {
    return (
        <header>
            <Container>
                <div className="relative flex items-center justify-between py-4">
                    
                    <Logo />

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
                </div>

                <HeaderMenu />

            
            </Container>
        </header>
    )
}