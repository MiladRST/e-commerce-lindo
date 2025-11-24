import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-amber-200 flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <Link href="/">Home page</Link>
            <Link href="/dashboard/analytics">Analytics</Link>  
            <Link href="/dashboard/users">Users</Link>
            {children}
        </div>
    )
}