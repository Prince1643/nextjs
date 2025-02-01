"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Users, Calendar, ClipboardList, Settings, LayoutDashboard, Network } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const navItems = [
  {
    title: "Home",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    href: "/employees",
    icon: Users,
  }, 
  {
    title: "Organization",
    href: "/organization",
    icon: Network,
  },
  {
    title: "Leave Requests",
    href: "/leave-requests",
    icon: Calendar,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function MainNav() {
  const pathname = usePathname()
  const user = {
    name: "Prince Barpagga",
    position: "Software Developer",
    avatar: "/images/user.jfif",
  }
  return (
    <nav className="flex flex-col space-y-1">
       {/* Profile Section */}
       <div className="flex items-center gap-3 p-3 border-b">
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-gray-500">{user.position}</p>
        </div>
      </div>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:active-tab hover:text-accent-foreground",
            pathname === item.href ? "active-tab" : "transparent",
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

