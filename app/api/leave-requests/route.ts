import { NextResponse } from "next/server"

// Define the LeaveRequest type
// type LeaveRequest = {
//   id: number
//   employee: string
//   type: string
//   startDate: string
//   endDate: string
//   status: string
// }

export async function GET() {
  
  const leaveRequests: LeaveRequest[] = [
    {
      id: 1,
      employee: "John Doe",
      type: "Vacation",
      startDate: "2025-07-01",
      endDate: "2025-07-05",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Jane Smith",
      type: "Sick Leave",
      startDate: "2025-07-10",
      endDate: "2025-07-11",
      status: "Approved",
    },
    {
      id: 3,
      employee: "Mike Johnson",
      type: "Personal Leave",
      startDate: "2025-07-15",
      endDate: "2025-07-16",
      status: "Pending",
    },
  ]

  return NextResponse.json(leaveRequests)
}

