// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// const leaveRequests = [
//   {
//     id: "LEA001",
//     employee: "Prince ",
//     type: "Vacation",
//     startDate: "2024-02-01",
//     endDate: "2024-02-05",
//     status: "Pending",
//   },
//   {
//     id: "LEA002",
//     employee: "Dogra",
//     type: "Sick Leave",
//     startDate: "2024-02-10",
//     endDate: "2024-02-11",
//     status: "Approved",
//   },
  
// ]

// export default function LeaveRequestsPage() {
//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl font-bold tracking-tight">Leave Requests</h2>
//           <p className="text-muted-foreground">Manage employee leave requests here.</p>
//         </div>
//         <Button>Request Leave</Button>
//       </div>
//       <div className="flex items-center gap-4">
//         <Select>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Filter by status" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All</SelectItem>
//             <SelectItem value="pending">Pending</SelectItem>
//             <SelectItem value="approved">Approved</SelectItem>
//             <SelectItem value="rejected">Rejected</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {leaveRequests.map((request) => (
//           <Card key={request.id}>
//             <CardHeader>
//               <CardTitle>{request.employee}</CardTitle>
//               <CardDescription>{request.type}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-sm text-muted-foreground">Duration:</span>
//                   <span className="text-sm">
//                     {request.startDate} - {request.endDate}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-sm text-muted-foreground">Status:</span>
//                   <span
//                     className={`text-sm font-medium ${
//                       request.status === "Approved"
//                         ? "text-green-600"
//                         : request.status === "Rejected"
//                           ? "text-red-600"
//                           : "text-yellow-600"
//                     }`}
//                   >
//                     {request.status}
//                   </span>
//                 </div>
//                 <div className="flex gap-2 mt-4">
//                   <Button size="sm" variant="outline" className="flex-1">
//                     View Details
//                   </Button>
//                   {request.status === "Pending" && (
//                     <>
//                       <Button size="sm" variant="default" className="flex-1">
//                         Approve
//                       </Button>
//                       <Button size="sm" variant="destructive" className="flex-1">
//                         Reject
//                       </Button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

import { Suspense } from "react"
import { LeaveRequestList } from "./leave-request-list"
import { LeaveRequestFilters } from "./leave-request-filters"
import { CreateLeaveRequestButton } from "./create-leave-request-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LeaveRequestsPage() {
  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Leave Requests</CardTitle>
          <CardDescription>Manage and view employee leave requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-between items-center">
            <LeaveRequestFilters />
            <CreateLeaveRequestButton />
          </div>
          <Suspense fallback={<div>Loading leave requests...</div>}>
            <LeaveRequestList />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}



