import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {return <>{children}</>
  // return (
  //   <div className="flex min-h-screen">
  //     {/* Sidebar */}
  //     <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
  //       <div className="flex h-full flex-col">
  //         <div className="border-b p-4">
  //           <h2 className="text-lg font-semibold">HR Portal</h2>
  //         </div>
  //         <div className="flex-1 p-4">
  //           <MainNav />
  //         </div>
  //       </div>
  //     </div>
  //     {/* Main content */}
  //     <div className="flex-1">
  //       <header className="border-b">
  //         <div className="flex h-16 items-center px-4 gap-4">
  //           <div className="flex-1">
  //             <h1 className="text-lg font-semibold">Dashboard</h1>
  //           </div>
  //           <UserNav />
  //         </div>
  //       </header>
  //       <main className="flex-1 p-4 md:p-6">{children}</main>
  //     </div>
  //   </div>
  // )
}

