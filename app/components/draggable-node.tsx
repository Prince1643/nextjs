"use client"

import { useDrag, useDrop } from "react-dnd"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { DragItem } from "../types/org-chart"

interface DraggableNodeProps {
  id: string
  name: string
  role: string
  avatar?: string
  index: number
  path: number[]
  moveNode: (dragIndex: number, hoverIndex: number) => void
}

export function DraggableNode({ id, name, role, avatar, index, path, moveNode }: DraggableNodeProps) {
  const [{ isDragging }, drag] = useDrag({
    type: "node",
    item: { id, type: "node", index, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [{ isOver }, drop] = useDrop({
    accept: "node",
    hover: (item: DragItem, monitor) => {
      if (!monitor.isOver({ shallow: true })) return
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return
      moveNode(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  })

  return (
    <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Card className={`bg-white border shadow-sm ${isOver ? "border-primary" : ""}`}>
        <div className="flex items-center gap-2 p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{name}</span>
            <span className="text-xs text-muted-foreground">{role}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

