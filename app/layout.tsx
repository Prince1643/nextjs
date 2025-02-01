// import "./globals.css"
// import { Inter } from 'next/font/google'
// import { ThemeProvider } from "./components/theme-provider"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "HR Portal",
//   description: "Manage your HR tasks efficiently",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


// import "@/app/globals.css"
// import { Inter } from "next/font/google"
// import { ThemeProvider } from "./components/theme-provider"
// import { MainNav } from "./components/main-nav"
// import { UserNav } from "./components/user-nav"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "HR Portal",
//   description: "Manage your HR tasks efficiently",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//           <div className="flex min-h-screen">
//             {/* Sidebar */}
//             <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
//               <div className="flex h-full flex-col">
//                 <div className="border-b p-4">
//                   <h2 className="text-lg font-semibold">HR Portal</h2>
//                 </div>
//                 <div className="flex-1 p-4">
//                   <MainNav />
//                 </div>
//               </div>
//             </div>
//             {/* Main content */}
//             <div className="flex-1">
//               <header className="border-b">
//                 <div className="flex h-16 items-center px-4 gap-4">
//                   <div className="flex-1">
//                     <h1 className="text-lg font-semibold">HR Portal</h1>
//                   </div>
//                   <UserNav />
//                 </div>
//               </header>
//               <main className="flex-1 p-4 md:p-6">{children}</main>
//             </div>
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

"use client";

import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import { MainNav } from "./components/main-nav";
import { UserNav } from "./components/user-nav";
import { usePathname } from "next/navigation"; // Import usePathname to check current route

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  // Define pages where the sidebar should be hidden
  const isAuthPage = pathname === "/login" || pathname === "/forgot-password";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            {/* Conditionally render sidebar only if NOT on the login page */}
            {!isAuthPage && (
              <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
                <div className="flex h-full flex-col">
                  <div className="border-b p-4">
                    {/* <h2 className="text-lg font-semibold">HR Portal</h2> */}
                    <img src="/images/logo.png" alt="HR Portal Logo" className="h-10 w-auto"  />
                  </div>
                  <div className="flex-1 p-4">
                    <MainNav />
                  </div>
                </div>
              </div>
            )}

            {/* Main content */}
            <div className="flex-1">
              {/* Conditionally render header only if NOT on login page */}
              {!isAuthPage && (
                <header className="border-b">
                  <div className="flex h-16 items-center px-4 gap-4">
                    <div className="flex-1">
                      {/* <h1 className="text-lg font-semibold">HR Portal</h1> */}
                    </div>
                    <UserNav />
                  </div>
                </header>
              )}

              <main className="flex-1 p-4 md:p-6">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
