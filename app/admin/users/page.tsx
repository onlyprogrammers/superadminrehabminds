"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Eye, Edit, Trash2 } from "lucide-react"

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      email: "sarah.j@hospital.com",
      status: "Active",
      patients: 45,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      email: "michael.c@hospital.com",
      status: "Active",
      patients: 38,
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialty: "Pediatrics",
      email: "emily.d@hospital.com",
      status: "On Leave",
      patients: 52,
    },
    {
      id: 4,
      name: "Dr. Robert Wilson",
      specialty: "Orthopedics",
      email: "robert.w@hospital.com",
      status: "Active",
      patients: 41,
    },
  ]

  const patients = [
    {
      id: 1,
      name: "John Smith",
      age: 45,
      email: "john.smith@email.com",
      phone: "+1-555-0123",
      lastVisit: "2024-01-15",
    },
    {
      id: 2,
      name: "Maria Garcia",
      age: 32,
      email: "maria.garcia@email.com",
      phone: "+1-555-0124",
      lastVisit: "2024-01-14",
    },
    {
      id: 3,
      name: "David Brown",
      age: 58,
      email: "david.brown@email.com",
      phone: "+1-555-0125",
      lastVisit: "2024-01-13",
    },
    {
      id: 4,
      name: "Lisa Anderson",
      age: 29,
      email: "lisa.anderson@email.com",
      phone: "+1-555-0126",
      lastVisit: "2024-01-12",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Users & Doctors Management</h1>
        <p className="mt-2 text-gray-600">Manage all doctors and patients in the system</p>
      </div>

      <Tabs defaultValue="doctors" className="space-y-6">
        <TabsList>
          <TabsTrigger value="doctors">Doctors</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
        </TabsList>

        <TabsContent value="doctors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Doctors</CardTitle>
              <CardDescription>Manage doctor accounts and their information</CardDescription>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search doctors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>Add New Doctor</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Specialty</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Patients</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doctor) => (
                      <tr key={doctor.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{doctor.name}</td>
                        <td className="py-3 px-4">{doctor.specialty}</td>
                        <td className="py-3 px-4 text-gray-600">{doctor.email}</td>
                        <td className="py-3 px-4">
                          <Badge variant={doctor.status === "Active" ? "default" : "secondary"}>{doctor.status}</Badge>
                        </td>
                        <td className="py-3 px-4">{doctor.patients}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patients" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Patients</CardTitle>
              <CardDescription>Manage patient accounts and their information</CardDescription>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search patients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>Add New Patient</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Age</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Phone</th>
                      <th className="text-left py-3 px-4">Last Visit</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient) => (
                      <tr key={patient.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{patient.name}</td>
                        <td className="py-3 px-4">{patient.age}</td>
                        <td className="py-3 px-4 text-gray-600">{patient.email}</td>
                        <td className="py-3 px-4">{patient.phone}</td>
                        <td className="py-3 px-4">{patient.lastVisit}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
