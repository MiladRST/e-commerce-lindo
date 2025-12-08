import { 
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

export default async function FAQPage() {

    return(
        <>
            <div className="bg-[url('/images/faq.png')] bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-t-none
            md:absolute md:-top-8 md:right-4 md:left-4 p-4 md:pt-10 h-60
            flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-white text-2xl font-bold">
                        سوالات متداول
                    </h2>
                   
                </div>
            </div>

            <div className="mt-8 md:mt-50 mb-10">
                <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
                >
                    {
                        Array.from({length: 10}).map((_, index) =>{ return (
                            <AccordionItem value={`item-${index+1}`} key={index}>
                                <AccordionTrigger className="text-right leading-7">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                                </AccordionTrigger>
                                <AccordionContent>
                                <p className="leading-7">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت  گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                                </p>
                                
                                </AccordionContent>
                            </AccordionItem>
                        )})
                    }
                
                
                </Accordion>
            </div>
        </>
    )
}