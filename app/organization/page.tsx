"use client"

import { useState, useCallback } from "react"
import { DndProvider, useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cloneDeep } from "lodash"

const ITEM_TYPE = "EMPLOYEE"

interface Employee {
  id: string
  name: string
  role: string
  avatar?: string
  children?: Employee[]
}

const initialEmployees: Employee = {
  id: "1",
  name: "Guncha Pental",
  role: "CEO",
  children: [
    {
      id: "2",
      name: "Gaurav Shukla",
      role: "Team Lead",
      children: [
        {
          id: "3",
          name: "Rupan Kohli",
          role: "Project Manager",
          children: [
            { id: "4", name: "Eshaan Bakshi", role: "BA" },
          ],
        },
        {
          id: "5",
          name: "Gorab Raturi",
          role: "Team Lead",
          children: [{ id: "6", name: "Ankur Joshi", role: "BA" }],
        },
        { id: "7", name: "Vivek", role: "Team Lead" },
        { id: "8", name: "Arjun", role: "Team Lead" },
        { id: "9", name: "Pankaj Meena", role: "Team Lead" },
        { id: "10", name: "Muzamil Hussain", role: "Team Lead" },
      ],
    },
  ],
}

const DraggableNode = ({ employee, moveNode }: { employee: Employee; moveNode: (dragId: string, dropId: string) => void }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { id: employee.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (draggedItem: { id: string }) => {
      if (draggedItem.id !== employee.id) {
        moveNode(draggedItem.id, employee.id)
      }
    },
  })

  return (
    <div ref={(node) => drag(drop(node))} className={`relative cursor-pointer ${isDragging ? "opacity-50" : "opacity-100"}`}>
      <Card className="h-full bg-white border shadow-sm">
        <div className="flex items-center gap-2 p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
            <AvatarFallback>{employee.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{employee.name}</span>
            <span className="text-xs text-muted-foreground">{employee.role}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default function OrganizationPage() {
  const [activeTab, setActiveTab] = useState("employee")
  const [employees, setEmployees] = useState(initialEmployees)

  const findNode = (node: Employee, id: string): Employee | null => {
    if (node.id === id) return node
    if (!node.children) return null
    for (let child of node.children) {
      const found = findNode(child, id)
      if (found) return found
    }
    return null
  }

  const moveNode = useCallback((dragId: string, dropId: string) => {
    setEmployees((prevEmployees) => {
      const clonedEmployees = cloneDeep(prevEmployees)
      const draggedNode = findNode(clonedEmployees, dragId)
      const dropTarget = findNode(clonedEmployees, dropId)

      if (draggedNode && dropTarget) {
        // Remove dragged node from its current position
        const removeNode = (node: Employee, id: string): Employee | null => {
          if (!node.children) return node
          node.children = node.children.filter((child) => child.id !== id)
          node.children.forEach((child) => removeNode(child, id))
          return node
        }
        removeNode(clonedEmployees, dragId)

        // Add dragged node to new parent
        dropTarget.children = dropTarget.children ? [...dropTarget.children, draggedNode] : [draggedNode]
      }

      return clonedEmployees
    })
  }, [])

  const renderTree = useCallback((node: Employee) => {
    return (
      <div key={node.id} className="relative">
        <DraggableNode employee={node} moveNode={moveNode} />
        {node.children && (
          <div className="ml-8 mt-4 border-l-2 border-gray-200 pl-4">
            {node.children.map((child) => renderTree(child))}
          </div>
        )}
      </div>
    )
  }, [moveNode])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto py-6">
        <Tabs defaultValue="employee" className="w-full " onValueChange={setActiveTab}>
          <TabsList className="mb-4 active-tab">
            <TabsTrigger value="employee">Employee Tree</TabsTrigger>
            <TabsTrigger value="department">Department Tree</TabsTrigger>
          </TabsList>
          <TabsContent value="employee" className="min-h-[800px] border rounded-lg bg-slate-50 p-6">
            {renderTree(employees)}
          </TabsContent>
          <TabsContent value="department" className="min-h-[800px] border rounded-lg bg-slate-50 p-6">
            {/* Department tree can be added similarly */}
          </TabsContent>
        </Tabs>
      </div>
    </DndProvider>
  )
}
