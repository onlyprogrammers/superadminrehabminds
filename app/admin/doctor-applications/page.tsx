"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { UserPlus, FileText, GraduationCap, Award, Check, X, Eye } from "lucide-react"

export default function DoctorApplicationsPage() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Dr. Jennifer Martinez",
      email: "jennifer.martinez@email.com",
      phone: "+1-555-0131",
      specialty: "Dermatology",
      experience: "8 years",
      education: "MD from Harvard Medical School",
      license: "MD12345",
      cv: "dr_martinez_cv.pdf",
      certificates: ["Board Certified Dermatologist", "Advanced Dermatology Fellowship"],
      applicationDate: "2024-01-18",
      status: "Pending Review",
      notes: "",
    },
    {
      id: 2,
      name: "Dr. Ahmed Hassan",
      email: "ahmed.hassan@email.com",
      phone: "+1-555-0132",
      specialty: "Radiology",
      experience: "12 years",
      education: "MD from Johns Hopkins University",
      license: "MD67890",
      cv: "dr_hassan_cv.pdf",
      certificates: ["Board Certified Radiologist", "Interventional Radiology Certification"],
      applicationDate: "2024-01-17",
      status: "Under Review",
      notes: "Excellent credentials, scheduling interview",
    },
    {
      id: 3,
      name: "Dr. Lisa Thompson",
      email: "lisa.thompson@email.com",
      phone: "+1-555-0133",
      specialty: "Psychiatry",
      experience: "6 years",
      education: "MD from Stanford University",
      license: "MD11111",
      cv: "dr_thompson_cv.pdf",
      certificates: ["Board Certified Psychiatrist", "Child Psychiatry Fellowship"],
      applicationDate: "2024-01-16",
      status: "Approved",
      notes: "Approved for hire, excellent references",
    },
  ])

  const [selectedApplication, setSelectedApplication] = useState<number | null>(null)
  const [reviewNotes, setReviewNotes] = useState("")

  const handleStatusChange = (applicationId: number, newStatus: string, notes?: string) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === applicationId ? { ...app, status: newStatus, notes: notes || app.notes } : app)),
    )
    setSelectedApplication(null)
    setReviewNotes("")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending Review":
        return "secondary"
      case "Under Review":
        return "default"
      case "Approved":
        return "outline"
      case "Rejected":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Doctor Applications</h1>
        <p className="mt-2 text-gray-600">Review and process new doctor applications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <FileText className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter((app) => app.status === "Pending Review").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Under Review</CardTitle>
            <Eye className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter((app) => app.status === "Under Review").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <Check className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.filter((app) => app.status === "Approved").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <UserPlus className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>Doctor Applications</CardTitle>
          <CardDescription>Review applications from doctors wanting to join the hospital</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {applications.map((application) => (
              <div key={application.id} className="border rounded-lg p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{application.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{application.email}</span>
                      <span>{application.phone}</span>
                      <span>Applied: {application.applicationDate}</span>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(application.status)}>{application.status}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <UserPlus className="h-4 w-4 text-gray-400" />
                      <span className="text-sm font-medium">Specialty</span>
                    </div>
                    <p className="text-sm text-gray-700">{application.specialty}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-gray-400" />
                      <span className="text-sm font-medium">Experience</span>
                    </div>
                    <p className="text-sm text-gray-700">{application.experience}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-gray-400" />
                      <span className="text-sm font-medium">Education</span>
                    </div>
                    <p className="text-sm text-gray-700">{application.education}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Medical License: {application.license}</h4>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Certificates:</p>
                    <div className="flex flex-wrap gap-2">
                      {application.certificates.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {application.notes && (
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Notes:</strong> {application.notes}
                    </p>
                  </div>
                )}

                <div className="flex items-center space-x-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSelectedApplication(selectedApplication === application.id ? null : application.id)
                    }
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Review
                  </Button>

                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View CV
                  </Button>

                  {application.status !== "Approved" && application.status !== "Rejected" && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => handleStatusChange(application.id, "Approved", "Application approved")}
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Approve
                      </Button>

                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleStatusChange(application.id, "Rejected", "Application rejected")}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </>
                  )}
                </div>

                {selectedApplication === application.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
                    <h5 className="font-medium">Review Notes for {application.name}</h5>
                    <Textarea
                      placeholder="Add your review notes here..."
                      value={reviewNotes}
                      onChange={(e) => setReviewNotes(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex space-x-2">
                      <Button onClick={() => handleStatusChange(application.id, "Under Review", reviewNotes)}>
                        Save Notes & Mark Under Review
                      </Button>
                      <Button variant="outline" onClick={() => setSelectedApplication(null)}>
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
