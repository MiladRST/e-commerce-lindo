export default function Container({ extraClasses = '', children }: { extraClasses?: string , children: React.ReactNode }) {
    return (
        <div className={`container mx-auto max-w-[1310px] px-4 ${extraClasses}`}>
            {children}
        </div>
    )
}