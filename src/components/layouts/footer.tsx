import Image from "next/image"
import Link from "next/link";
import Container from "@/components/modules/container";
import { Button } from "@/components/ui/button";
import SubscribeForm from "./subscribe-form";
//
import BgImg from "@/public/images/newsletter.png"
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";

export default function Footer() {

    return (
        <footer>
            <Container>
                <div className="bg-secondary rounded-2xl overflow-hidden">
                    {/* news letter */}
                    <div className="relative w-full min-h-56 py-20 px-4 flex flex-col items-center justify-center rounded-2xl">   
                        <Image src={BgImg} fill alt="news_letter" className="object-cover" />

                        <div className="relative z-2 text-white flex flex-col items-center gap-3">
                            <h3 className="text-2xl font-bold">Newsletter</h3>
                            <p className="font-light text-center">
                                To stay informed about the latest news and discounts, please enter your email.
                                </p>
                            <SubscribeForm />
                        </div>
                    </div>

                    {/* footer */}
                    <div className="grid grid-cols-12 gap-4 py-10 md:py-20 px-4 md:px-10">

                        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 text-white ">
                            <h6 className="text-sm font-bold mb-2">About Lindo</h6>
                            <p className="w-full lg:w-3/4 text-[13px] leading-7">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam odit recusandae facere tempore ea fugiat.
                            </p>
                        </div>

                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col sm:flex-row gap-4">
                            <ul className="w-full sm:w-1/2 flex flex-col gap-2">
                                <li className="mb-5">
                                    <h6 className="text-white text-sm font-bold">Collaborate With Us</h6>
                                </li>
                               { FOOTER_LINKS.map((link) => {
                                return (
                                    <li key={link.label}>
                                        <Button variant={null} size={null} asChild>
                                            <Link href={link.href} className="text-white text-[13px] hover:text-primary">
                                                {link.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )
                               })}
                            </ul>

                            <ul className="w-full sm:w-1/2 flex flex-col gap-2">
                                <li className="mb-5">
                                    <h6 className="text-white text-sm font-bold">Useful Links</h6>
                                </li>
                               { FOOTER_LINKS.map((link) => {
                                return (
                                    <li key={link.label}>
                                        <Button variant={null} size={null} asChild>
                                            <Link href={link.href} className="text-white text-[13px] hover:text-primary">
                                                {link.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )
                               })}
                            </ul>
                        </div>

                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex items-center justify-center">
                            <div className="w-fit mx-auto grid grid-cols-2 gap-6 items-center justify-center">
                               <div className="flex flex-col items-center gap-4">
                                <Image src="/images/payment.png" alt="payment" 
                                width={40} height={40} 
                                style={{ width:'auto', height: 'auto'}} />
                                    <h6 className="text-white text-[13px] text-center">
                                        Easy Payment
                                    </h6>
                                </div>

                               <div className="flex flex-col items-center gap-4">
                                <Image src="/images/support.png" alt="support" 
                                width={40} height={40} 
                                style={{ width:'auto', height: 'auto'}} />
                                <h6 className="text-white text-[13px] text-center">
                                    24/7 Support
                                </h6>
                               </div>

                               <div className="flex flex-col items-center gap-4">
                                <Image src="/images/shipment.png" alt="shipment" 
                                width={40} height={40} 
                                style={{ width:'auto', height: 'auto'}} />
                                <h6 className="text-white text-[13px] text-center">
                                    Fast Shipment
                                </h6>
                               </div>

                               <div className="flex flex-col items-center gap-4">
                                <Image src="/images/original.png" alt="original" 
                                width={40} height={40} 
                                style={{ width:'auto', height: 'auto'}} />
                                <h6 className="text-white text-[13px] text-center">
                                    Original Products
                                </h6>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-foreground text-xs gap-4 py-6">
                    <div>made with ❤️ by <Link href="https://miladrastin.ir" target="_blank" className="text-sky-500">Milad Rastin</Link></div>
                    <div className="flex items-center gap-3">                        
                        {SOCIAL_LINKS.map((link) => {
                            return (
                                <Link href={link.href} target="_blank" key={link.label}>
                                    <link.icon className="size-4" />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </footer>
    )
}