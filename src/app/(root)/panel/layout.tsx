export default function PanelLayout({ children }: { children: React.ReactNode }) { 
    return (
        <div className="bg-amber-200 flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Panel</h1>
            {children}
        </div>
    )
}