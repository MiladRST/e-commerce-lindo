export default function Container({ extraClasses = '', children }: { extraClasses?: string , children: React.ReactNode }) {
    return (
        <div className={`container mx-auto px-4 ${extraClasses}`}>
            {children}
        </div>
    )
}