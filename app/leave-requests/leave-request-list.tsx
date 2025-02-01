"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { LeaveRequestDetails } from "./leave-request-details"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ReloadIcon } from "@radix-ui/react-icons"
import Loader from "../Loader/loader"



export function LeaveRequestList() {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([])
  const [selectedRequest, setSelectedRequest] = useState<LeaveRequest | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchLeaveRequests() {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/leave-requests")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: LeaveRequest[] = await response.json()
      setLeaveRequests(data)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("An unknown error occurred while fetching leave requests")
      }
      console.error("Error fetching leave requests:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchLeaveRequests()
  }, []) //Fixed: Added empty dependency array to only run on mount

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        {/* {isLoading ? <Loader /> : <div> Loading leave requests...</div>} */}
        Loading leave requests...
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {error}
          <Button variant="outline" className="mt-2" onClick={fetchLeaveRequests}>
            Try Again
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaveRequests.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No leave requests found
              </TableCell>
            </TableRow>
          ) : (
            leaveRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.employee}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.startDate}</TableCell>
                <TableCell>{request.endDate}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  <Button variant="outline" onClick={() => setSelectedRequest(request)}>
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {selectedRequest && <LeaveRequestDetails request={selectedRequest} onClose={() => setSelectedRequest(null)} />}
    </div>
  )
}

