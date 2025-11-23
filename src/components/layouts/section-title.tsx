import Image from "next/image";
import  leafImg from "@/public/images/leaf.png";
export default function SectionTitle({ title }: { title: string }){
    return (
        <div className="w-fit relative pr-5">
            <span className="absolute right-0 bottom-0">
                <Image src={leafImg} alt="leaf" width={102} height={48} className="object-contain" />
            </span>
            <h2 className="text-xl font-bold flex items-center gap-1"> 
                { title.split(' ').map((word, index) => (
                    <span key={index} className={`${index === 0 ? "text-primary" : "text-secondary"}`}>{word}</span>
                ))}
            </h2>
        </div>
    )
}