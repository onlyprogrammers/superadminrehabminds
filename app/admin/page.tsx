import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, CreditCard, MessageSquare } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      description: "Active patients and doctors",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Pending Appointments",
      value: "23",
      description: "Awaiting approval",
      icon: Calendar,
      color: "text-yellow-600",
    },
    {
      title: "Payments Today",
      value: "$12,450",
      description: "Consultation fees received",
      icon: CreditCard,
      color: "text-green-600",
    },
    {
      title: "Contact Forms",
      value: "8",
      description: "New inquiries",
      icon: MessageSquare,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to the Super Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest system activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">New appointment request from John Doe</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Payment received for consultation #1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">New doctor application submitted</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Contact form received from patient</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Database</span>
                <span className="text-sm text-green-600 font-medium">Online</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Payment Gateway</span>
                <span className="text-sm text-green-600 font-medium">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Email Service</span>
                <span className="text-sm text-green-600 font-medium">Running</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Backup System</span>
                <span className="text-sm text-green-600 font-medium">Scheduled</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
