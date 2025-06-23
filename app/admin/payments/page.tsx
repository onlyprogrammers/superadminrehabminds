"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, CreditCard, CheckCircle, Clock, Search } from "lucide-react"

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [payments, setPayments] = useState([
    {
      id: 1,
      patientName: "John Smith",
      doctorName: "Dr. Sarah Johnson",
      amount: 150,
      date: "2024-01-20",
      status: "Pending",
      paymentMethod: "Credit Card",
      transactionId: "TXN001",
    },
    {
      id: 2,
      patientName: "Maria Garcia",
      doctorName: "Dr. Michael Chen",
      amount: 200,
      date: "2024-01-19",
      status: "Received",
      paymentMethod: "Bank Transfer",
      transactionId: "TXN002",
    },
    {
      id: 3,
      patientName: "David Brown",
      doctorName: "Dr. Emily Davis",
      amount: 120,
      date: "2024-01-18",
      status: "Processed",
      paymentMethod: "Credit Card",
      transactionId: "TXN003",
    },
    {
      id: 4,
      patientName: "Lisa Anderson",
      doctorName: "Dr. Robert Wilson",
      amount: 180,
      date: "2024-01-17",
      status: "Pending",
      paymentMethod: "PayPal",
      transactionId: "TXN004",
    },
  ])

  const handleProcessPayment = (paymentId: number) => {
    setPayments((prev) =>
      prev.map((payment) => (payment.id === paymentId ? { ...payment, status: "Processed" } : payment)),
    )
  }

  const totalPending = payments.filter((p) => p.status === "Pending").reduce((sum, p) => sum + p.amount, 0)
  const totalReceived = payments.filter((p) => p.status === "Received").reduce((sum, p) => sum + p.amount, 0)
  const totalProcessed = payments.filter((p) => p.status === "Processed").reduce((sum, p) => sum + p.amount, 0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Payment Management</h1>
        <p className="mt-2 text-gray-600">Process consultation fees and manage transactions</p>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPending}</div>
            <p className="text-xs text-gray-600">
              {payments.filter((p) => p.status === "Pending").length} transactions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Received</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalReceived}</div>
            <p className="text-xs text-gray-600">
              {payments.filter((p) => p.status === "Received").length} transactions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processed</CardTitle>
            <CheckCircle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalProcessed}</div>
            <p className="text-xs text-gray-600">
              {payments.filter((p) => p.status === "Processed").length} transactions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPending + totalReceived + totalProcessed}</div>
            <p className="text-xs text-gray-600">All time</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Management */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Transactions</CardTitle>
          <CardDescription>Process consultation fees from patients</CardDescription>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search payments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="received">Received</SelectItem>
                <SelectItem value="processed">Processed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Transaction ID</th>
                  <th className="text-left py-3 px-4">Patient</th>
                  <th className="text-left py-3 px-4">Doctor</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Method</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{payment.transactionId}</td>
                    <td className="py-3 px-4 font-medium">{payment.patientName}</td>
                    <td className="py-3 px-4">{payment.doctorName}</td>
                    <td className="py-3 px-4 font-semibold">${payment.amount}</td>
                    <td className="py-3 px-4">{payment.date}</td>
                    <td className="py-3 px-4">{payment.paymentMethod}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          payment.status === "Pending"
                            ? "secondary"
                            : payment.status === "Received"
                              ? "default"
                              : "outline"
                        }
                      >
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      {payment.status === "Received" && (
                        <Button size="sm" onClick={() => handleProcessPayment(payment.id)}>
                          Process
                        </Button>
                      )}
                      {payment.status === "Processed" && <span className="text-sm text-gray-500">Completed</span>}
                      {payment.status === "Pending" && (
                        <span className="text-sm text-yellow-600">Awaiting payment</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
