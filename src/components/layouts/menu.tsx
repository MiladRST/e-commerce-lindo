"use client";
import Link from "next/link"
import { useState, useEffect } from "react";
//shadcn
import { Button } from "@/components/ui/button";
//constants
import { NAVIGATION_ITEMS } from "@/constants";
import { MenuIcon } from "lucide-react";
//components
import Logo from "@/components/modules/logo";


export default function Menu() {

    const [isMenuActive, setIsMenuActive] = useState(false);

    const getScreenWidth = () : void => {
        if(window.innerWidth > 767) {
            setIsMenuActive(false);
        }
    } 

    useEffect(() => {
        window.addEventListener("resize", getScreenWidth);
        return () => window.removeEventListener("resize", getScreenWidth);
    }, [])


    return (
        <>
            <Button variant="default" 
            onClick={() => setIsMenuActive(!isMenuActive)} 
            className="absolute top-4 left-4 md:hidden" 
            size="icon" asChild>
                <span>
                    <MenuIcon size={20} />          
                </span>
            </Button>
            <nav>
            
            {/* backdrop layer */}
            <div 
            className={`backdrop_layer ${isMenuActive ? 'visible' : 'invisible'} `} 
            onClick={() => setIsMenuActive(false)}>
            </div> 

            {/* menu list */}   
            <ul className={`transition fixed z-9999 top-0 right-0 bottom-0 w-3/4 bg-white flex flex-col shadow-md p-4 md:shadow-none
            md:relative md:top-none md:bottom-none md:right-none md:flex-row md:items-center md:justify-center
            md:w-full md:bg-primary md:text-white md:py-4 md:px-0 md:rounded-full md:rounded-tr-none md:translate-none 
            md:transition-none md:visible
            ${ isMenuActive ? '' : 'invisible translate-x-full'  }`}>

                <li className="md:hidden">
                    <Logo />
                </li>

                {NAVIGATION_ITEMS.map((item) => (
                    <li key={item.href}>
                        <Button variant={null} asChild>
                            <Link href={item.href} 
                            className="inline-block text-primary md:text-white md:hover:text-primary md:hover:bg-white">
                            {item.label}
                            </Link>
                        </Button>
                    </li>
                ))}

            </ul>
        </nav>
        </>
        
    )
}