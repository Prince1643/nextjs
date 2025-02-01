"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Upload, Download, Trash2 } from "lucide-react"

const initialDocuments = [
  { id: 1, name: "Employee Handbook.pdf", uploadDate: "2023-01-15", size: "2.5 MB" },
  { id: 2, name: "Vacation Policy.docx", uploadDate: "2023-02-28", size: "1.8 MB" },
  { id: 3, name: "Expense Report Template.xlsx", uploadDate: "2023-03-10", size: "500 KB" },
  { id: 4, name: "Code of Conduct.pdf", uploadDate: "2023-04-05", size: "3.2 MB" },
]

export default function DocumentsPage() {
  const [documents, setDocuments] = useState(initialDocuments)
  const [newDocument, setNewDocument] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewDocument(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (newDocument) {
      const newDoc = {
        id: documents.length + 1,
        name: newDocument.name,
        uploadDate: new Date().toISOString().split("T")[0],
        size: `${(newDocument.size / 1024 / 1024).toFixed(2)} MB`,
      }
      setDocuments([...documents, newDoc])
      setNewDocument(null)
    }
  }

  const handleDelete = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Documents</h2>
          <p className="text-muted-foreground">Manage and access important company documents.</p>
        </div>
        <div className="flex items-center gap-4">
          <Input type="file" onChange={handleFileChange} className="w-full max-w-xs" />
          <Button onClick={handleUpload} disabled={!newDocument}>
            <Upload className="mr-2 h-4 w-4" /> Upload
          </Button>
        </div>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document Name</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    {doc.name}
                  </div>
                </TableCell>
                <TableCell>{doc.uploadDate}</TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(doc.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

