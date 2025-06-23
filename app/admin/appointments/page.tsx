"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Check, X } from "lucide-react"

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Smith",
      patientEmail: "john.smith@email.com",
      requestedDate: "2024-01-20",
      requestedTime: "10:00 AM",
      reason: "Regular checkup",
      status: "Pending",
      assignedDoctor: null,
    },
    {
      id: 2,
      patientName: "Maria Garcia",
      patientEmail: "maria.garcia@email.com",
      requestedDate: "2024-01-21",
      requestedTime: "2:00 PM",
      reason: "Follow-up consultation",
      status: "Pending",
      assignedDoctor: null,
    },
    {
      id: 3,
      patientName: "David Brown",
      patientEmail: "david.brown@email.com",
      requestedDate: "2024-01-19",
      requestedTime: "11:30 AM",
      reason: "Chest pain",
      status: "Approved",
      assignedDoctor: "Dr. Sarah Johnson",
    },
  ])

  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology" },
    { id: 2, name: "Dr. Michael Chen", specialty: "Neurology" },
    { id: 3, name: "Dr. Emily Davis", specialty: "Pediatrics" },
    { id: 4, name: "Dr. Robert Wilson", specialty: "Orthopedics" },
  ]

  const handleApproveAppointment = (appointmentId: number, doctorName: string) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === appointmentId ? { ...apt, status: "Approved", assignedDoctor: doctorName } : apt)),
    )
  }

  const handleRejectAppointment = (appointmentId: number) => {
    setAppointments((prev) => prev.map((apt) => (apt.id === appointmentId ? { ...apt, status: "Rejected" } : apt)))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
        <p className="mt-2 text-gray-600">Review and approve patient appointment requests</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
            <Calendar className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appointments.filter((apt) => apt.status === "Pending").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved Today</CardTitle>
            <Check className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appointments.filter((apt) => apt.status === "Approved").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <User className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appointments.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Appointment Requests</CardTitle>
          <CardDescription>Review and assign doctors to patient appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="border rounded-lg p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{appointment.patientName}</h3>
                    <p className="text-gray-600">{appointment.patientEmail}</p>
                    <p className="text-sm text-gray-500">{appointment.reason}</p>
                  </div>
                  <Badge
                    variant={
                      appointment.status === "Pending"
                        ? "secondary"
                        : appointment.status === "Approved"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {appointment.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{appointment.requestedDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{appointment.requestedTime}</span>
                  </div>
                  {appointment.assignedDoctor && (
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{appointment.assignedDoctor}</span>
                    </div>
                  )}
                </div>

                {appointment.status === "Pending" && (
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <Select onValueChange={(doctorName) => handleApproveAppointment(appointment.id, doctorName)}>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Select a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.name}>
                            {doctor.name} - {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Button variant="destructive" size="sm" onClick={() => handleRejectAppointment(appointment.id)}>
                      <X className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
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
