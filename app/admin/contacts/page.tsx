"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Mail, Phone, Calendar, Eye, Reply } from "lucide-react"

export default function ContactsPage() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@email.com",
      phone: "+1-555-0127",
      subject: "Appointment Inquiry",
      message: "I would like to schedule an appointment with a cardiologist. What are the available time slots?",
      date: "2024-01-20",
      status: "New",
      priority: "Medium",
    },
    {
      id: 2,
      name: "Robert Chen",
      email: "robert.chen@email.com",
      phone: "+1-555-0128",
      subject: "Insurance Coverage Question",
      message: "Can you please clarify which insurance plans are accepted at your facility?",
      date: "2024-01-19",
      status: "Replied",
      priority: "Low",
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.davis@email.com",
      phone: "+1-555-0129",
      subject: "Emergency Contact",
      message: "I need urgent medical attention. Please contact me as soon as possible.",
      date: "2024-01-20",
      status: "New",
      priority: "High",
    },
    {
      id: 4,
      name: "Michael Wilson",
      email: "michael.wilson@email.com",
      phone: "+1-555-0130",
      subject: "Prescription Refill",
      message: "I need to refill my prescription for blood pressure medication. How can I do this?",
      date: "2024-01-18",
      status: "In Progress",
      priority: "Medium",
    },
  ])

  const [selectedContact, setSelectedContact] = useState<number | null>(null)
  const [replyMessage, setReplyMessage] = useState("")

  const handleStatusChange = (contactId: number, newStatus: string) => {
    setContacts((prev) =>
      prev.map((contact) => (contact.id === contactId ? { ...contact, status: newStatus } : contact)),
    )
  }

  const handleReply = (contactId: number) => {
    if (replyMessage.trim()) {
      handleStatusChange(contactId, "Replied")
      setReplyMessage("")
      setSelectedContact(null)
      // Here you would typically send the reply via email
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-50"
      case "Medium":
        return "text-yellow-600 bg-yellow-50"
      case "Low":
        return "text-green-600 bg-green-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "default"
      case "In Progress":
        return "secondary"
      case "Replied":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contact Forms</h1>
        <p className="mt-2 text-gray-600">Manage patient inquiries and contact requests</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.filter((c) => c.status === "New").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Calendar className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.filter((c) => c.status === "In Progress").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Replied</CardTitle>
            <Reply className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.filter((c) => c.status === "Replied").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
            <Mail className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.filter((c) => c.priority === "High").length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Messages */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Messages</CardTitle>
          <CardDescription>Review and respond to patient inquiries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {contacts.map((contact) => (
              <div key={contact.id} className="border rounded-lg p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold">{contact.name}</h3>
                      <Badge className={getPriorityColor(contact.priority)}>{contact.priority} Priority</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="h-4 w-4" />
                        <span>{contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{contact.date}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(contact.status)}>{contact.status}</Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">{contact.subject}</h4>
                  <p className="text-gray-700">{contact.message}</p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedContact(selectedContact === contact.id ? null : contact.id)}
                  >
                    <Reply className="h-4 w-4 mr-2" />
                    Reply
                  </Button>

                  {contact.status === "New" && (
                    <Button variant="outline" size="sm" onClick={() => handleStatusChange(contact.id, "In Progress")}>
                      Mark In Progress
                    </Button>
                  )}

                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>

                {selectedContact === contact.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
                    <h5 className="font-medium">Reply to {contact.name}</h5>
                    <Textarea
                      placeholder="Type your reply here..."
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex space-x-2">
                      <Button onClick={() => handleReply(contact.id)}>Send Reply</Button>
                      <Button variant="outline" onClick={() => setSelectedContact(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
