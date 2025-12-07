import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactImg from "@/public/images/contact.png";
import SectionTitle from "@/components/layouts/section-title";
import ContactForm from "@/components/templates/contact/form";
import { SOCIAL_LINKS } from "@/constants";


export const metadata: Metadata = {
  title: "Contact",
}

export default function ContactPage() {
    return (
      <div className="grid grid-cols-12 lg:gap-8">

        <div className="col-span-12 lg:col-span-7 flex items-center gap-x-2">

          <div className="shrink-0 hidden lg:block relative w-2/5 h-[437px]">
            <Image src={ContactImg} alt="contact" fill className="object-cover" />
          </div>

          <div className="w-full flex flex-col gap-4">
            
            <SectionTitle title="تماس با ما" />

            <div className="bg-secondary rounded-4xl flex flex-col gap-2 p-8 lg:pr-12 lg:-mr-10">
              {/* address */}
              <h6 className="text-primary font-bold">
                آدرس
              </h6>
              <p className="text-white text-sm">تهران، خیابان آزادی، بلوار آزادی، نبش کوچه 12، پلاک 12</p>

              {/* support */}
              <h6 className="text-primary font-bold">
                پشتیبانی
              </h6>
              <p className="text-white text-sm">پشتیبانی 24 ساعته</p>

              {/* email */}
              <h6 className="text-primary font-bold">
                ایمیل
              </h6>
              <p className="text-white text-sm">info@example.com</p>

              {/* social media */}
              <h6 className="text-primary font-bold">
                شبکه های اجتماعی
              </h6>
              <div className="flex items-center gap-3">                        
                  {SOCIAL_LINKS.map((link) => {
                      return (
                          <Link href={link.href} target="_blank" key={link.label}>
                              <link.icon className="size-4 text-white" />
                          </Link>
                      )
                  })}
              </div>
            </div>
          </div>

        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="mt-10 lg:mt-22">
            <ContactForm />
          </div>
        </div>
      </div>
    )
}