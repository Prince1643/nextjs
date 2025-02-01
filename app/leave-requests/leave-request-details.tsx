"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type LeaveRequest = {
  id: number
  employee: string
  type: string
  startDate: string
  endDate: string
  status: string
}

interface LeaveRequestDetailsProps {
  request: LeaveRequest
  onClose: () => void
}

export function LeaveRequestDetails({ request, onClose }: LeaveRequestDetailsProps) {
  const handleApprove = () => {
    // Implement approval logic
    console.log("Approving request:", request.id)
    onClose()
  }

  const handleReject = () => {
    // Implement rejection logic
    console.log("Rejecting request:", request.id)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Leave Request Details</DialogTitle>
          <DialogDescription>Review the leave request details below.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Employee:</span>
            <span className="col-span-3">{request.employee}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Type:</span>
            <span className="col-span-3">{request.type}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Start Date:</span>
            <span className="col-span-3">{request.startDate}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">End Date:</span>
            <span className="col-span-3">{request.endDate}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Status:</span>
            <span className="col-span-3">{request.status}</span>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleReject}>
            Reject
          </Button>
          <Button onClick={handleApprove}>Approve</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

