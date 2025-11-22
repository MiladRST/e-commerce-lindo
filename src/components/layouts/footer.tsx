import Image from "next/image"
import Link from "next/link";
import Container from "@/components/modules/container";
import { Button } from "@/components/ui/button";
import SubscribeForm from "./subscribe-form";
//
import BgImg from "@/public/images/newsletter.png"
import { FOOTER_LINKS } from "@/constants";

export default function Footer() {

    return (
        <footer>
            <Container>
                <div className="bg-secondary rounded-lg overflow-hidden">
                    {/* news letter */}
                    <div className="relative w-full min-h-56 py-20 px-4 flex flex-col items-center justify-center">   
                        <Image src={BgImg} fill alt="news_letter" className="object-cover" />

                        <div className="relative z-2 text-white flex flex-col items-center gap-3">
                            <h3 className="text-2xl font-bold">عضویت در خبرنامه</h3>
                            <p className="font-light text-center">برای با خبر شدن از آخرین اخبار و تخفیف ها ایمیل خود را ارسال کنید .</p>
                            <SubscribeForm />
                        </div>
                    </div>

                    {/* footer */}
                    <div className="grid grid-cols-12 gap-4 py-10 md:py-20 px-4 md:px-10">

                        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 text-white ">
                            <h6 className="text-sm font-bold mb-2">درباره فروشگاه</h6>
                            <p className="w-full lg:w-3/4 text-[13px] leading-7">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در و سطرآنچنان که لازم است، و بـرای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه...
                            </p>
                        </div>

                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col sm:flex-row gap-4">
                            <ul className="w-full sm:w-1/2 flex flex-col gap-2">
                                <li className="mb-5">
                                    <h6 className="text-white text-sm font-bold">همکاری با ما</h6>
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
                                    <h6 className="text-white text-sm font-bold">لینک های مفید</h6>
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
                                <Image src="/images/payment.png" alt="payment" width={40} height={40} />
                                <h6 className="text-white text-[13px] text-center">پرداخت در محل</h6>
                               </div>

                               <div className="flex flex-col items-center gap-4">
                                <Image src="/images/support.png" alt="support" width={40} height={40} />
                                <h6 className="text-white text-[13px] text-center">پشتیبانی 24 ساعته</h6>
                               </div>

                               <div className="flex flex-col items-center gap-4">
                                <Image src="/images/shipment.png" alt="shipment" width={40} height={40} />
                                <h6 className="text-white text-[13px] text-center">ارسال سریع</h6>
                               </div>

                               <div className="flex flex-col items-center gap-4">
                                <Image src="/images/original.png" alt="original" width={40} height={40} />
                                <h6 className="text-white text-[13px] text-center">ضمانت اصل بودن کالا</h6>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}