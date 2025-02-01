import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Clock, Calendar, FileCheck,Cake,UserPlus  } from "lucide-react"
import Link from "next/link"
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employees Listing</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+4 from last month</p>
          </CardContent>
        </Card> */}
         {/* Employees Listing */}
         <Link href="/employees">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Employees Listing</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+4 from last month</p>
            </CardContent>
          </Card>
        </Link>
            {/* Birthday/Work Anniversary */}
            <Link href="/birthday-anniversary">
            <Card className="cursor-pointer hover:shadow-lg transition pb-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
            <CardTitle className="text-sm font-medium">Birthday/Work Aniversary of the Month</CardTitle>
            <Cake className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {/* <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">-2 from yesterday</p> */}
          </CardContent>
        </Card>
        </Link>

        {/* Current Openings */}
        <Link href="/current-openings">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Openings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
        </Link>


        
        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Birthday/Work Aniversary of the Month</CardTitle>
            <Cake className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {/* <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">-2 from yesterday</p> */}
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Opening</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
        <Link href="/add-employee">
        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Add New Employee</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">+2 uploaded today</p>
          </CardContent>
        </Card>   </Link>
      </div>
    </div>
  )
}

