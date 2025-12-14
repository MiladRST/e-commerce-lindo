import React from 'react'
import Image from 'next/image'
interface AssuranceItem {
    id: number;
    title: string;
    image:string
}

const assuranceItems : AssuranceItem[] = [
    {
        id:1,
        title: 'پرداخت در محل',
        image:'/images/payment.png'
    },
    {
        id:2,
        title: 'پشتیبانی 24 ساعته',
        image: '/images/support.png'   
    },
    {
        id: 3,
        title: 'ارسال سریع',
        image: '/images/shipment.png'
    },
    {
        id:4,
        title: 'گارانتی اصالت کالا',
        image: '/images/original.png'
    }
]

const ProductAsurance = () => {
    return (
        <div className="flex flex-row flex-wrap justify-around md:flex-nowrap lg:flex-col lg:divide-y bg-secondary rounded-2xl py-4 px-8">
        { 
            assuranceItems.map( item => (
                <React.Fragment key={item.id}>
                    <div className="flex flex-col flex-1/2 justify-center lg:flex-row lg:flex-1 items-center gap-4 py-4">
                        <Image src={item.image} alt={item.title} 
                        width={40} height={40} 
                        style={{ width:'auto', height: 'auto'}} />
                        <h6 className="inline-block lg:min-w-24 text-white text-[12px] text-center">{item.title}</h6>
                    </div>
                </React.Fragment>
            ))
        }
        </div>
    )
}

export default ProductAsurance;