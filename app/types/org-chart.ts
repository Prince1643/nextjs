export interface Employee {
    id: string
    name: string
    role: string
    avatar?: string
    children?: Employee[]
  }
  
  export interface TreeNode {
    name: string
    attributes?: {
      role: string
      avatar?: string
    }
    children?: TreeNode[]
  }
  
  export interface DragItem {
    id: string
    type: string
    index: number
    path: number[]
  }
  
  