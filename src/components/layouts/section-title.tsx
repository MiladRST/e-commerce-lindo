import Image from "next/image";
import  leafImg from "@/public/images/leaf.png";
export default function SectionTitle({ title }: { title: string }){
    return (
        <div className="w-fit relative pl-5">
            <span className="absolute left-0 bottom-1">
                <Image 
                src={leafImg} 
                alt="leaf" 
                width={102} 
                height={48} 
                className="object-contain" style={{ transform: "scaleX(-1)"}} />
            </span>
            <h2 className="text-xl font-bold flex items-center gap-1"> 
                { title.split(' ').map((word, index) => (
                    <span key={index} className={`${index === 0 ? "text-primary" : "text-secondary"}`}>{word}</span>
                ))}
            </h2>
        </div>
    )
}