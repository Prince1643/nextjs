"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function LeaveRequestFilters() {
  const [status, setStatus] = useState("all")
  const [dateRange, setDateRange] = useState("all")

  const handleFilter = async () => {
    // Implement filtering logic here
    //  onFilter({ status, dateRange })
    console.log("Filtering with:", { status, dateRange })
    try {
        const queryParams = new URLSearchParams()
    
        if (status !== "all") {
          queryParams.append("status", status)
        }
        if (dateRange !== "all") {
          queryParams.append("dateRange", dateRange)
        }
    
        const response = await fetch(`/api/leave-requests?${queryParams.toString()}`)
        
        if (!response.ok) {
          throw new Error(`Error fetching filtered data: ${response.status}`)
        }
    
        const filteredData = await response.json()
        console.log("Filtered Leave Requests:", filteredData)   
      
      } catch (error) {
        console.error("Filter error:", error)
      }
  }

  return (
    <div className="flex space-x-4">
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
        </SelectContent>
      </Select>
      <Select value={dateRange} onValueChange={setDateRange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Date Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Time</SelectItem>
          <SelectItem value="thisWeek">This Week</SelectItem>
          <SelectItem value="thisMonth">This Month</SelectItem>
          <SelectItem value="lastMonth">Last Month</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleFilter}>Apply Filters</Button>
    </div>
  )
}

