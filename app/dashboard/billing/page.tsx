/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Search, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AddCustomerDialog } from "../components/add-customer-dialog"

// Temporary invoice data
const initialInvoices = [
  { id: "18933", agent: "Sales agent", date: "22/05/2022", amount: "$8.95", status: "Delivered", bank: "Tranfer Bank" },
  {
    id: "45169",
    agent: "Trixie Byrd",
    date: "15/06/2022",
    amount: "$1,149.95",
    status: "Process",
    bank: "Tranfer Bank",
  },
  { id: "34304", agent: "Brad Mason", date: "06/09/2022", amount: "$899.95", status: "Process", bank: "Tranfer Bank" },
  { id: "17188", agent: "Sanderson", date: "25/09/2022", amount: "$22.95", status: "Cancelled", bank: "Tranfer Bank" },
  {
    id: "73003",
    agent: "Jun Redfern",
    date: "04/10/2022",
    amount: "$54.95",
    status: "Delivered",
    bank: "Tranfer Bank",
  },
  {
    id: "58825",
    agent: "Miriam Kidd",
    date: "17/10/2022",
    amount: "$174.95",
    status: "Delivered",
    bank: "Tranfer Bank",
  },
  { id: "44122", agent: "Dominic", date: "24/10/2022", amount: "$249.95", status: "Delivered", bank: "Tranfer Bank" },
]

export default function BillingPage() {
  const [entriesPerPage, setEntriesPerPage] = useState("10")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [invoices, setInvoices] = useState(initialInvoices)
  const [showAddCustomer, setShowAddCustomer] = useState(false)

  const handleDeleteInvoice = (id: string) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== id))
  }

  const handleAddCustomer = (customerData: any) => {
    const newInvoice = {
      id: Math.floor(Math.random() * 100000).toString(),
      agent: customerData.name,
      date: new Date().toLocaleDateString(),
      amount: "$0.00",
      status: "Process",
      bank: "Tranfer Bank",
    }
    setInvoices([newInvoice, ...invoices])
  }

  return (
    <div className="min-h-screen px-12 bg-[#434343] text-white">
      {/* Header with logo */}
      <header className="px-4 hidden md:flex w-full justify-end items-center">
        <img src="/logoT.png" className="w-64 hidden md:flex md:mt-3" alt="logo" />
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto md:px-4 pb-8 py-12 md:py-0">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Billing and invoices</h1>
          <p className="text-[#979797]">Here is a record for your invoices</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Show</span>
            <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
              <SelectTrigger className="w-16 bg-[#8A8C91] border-none text-white">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm">entries</span>
          </div>

          <div className="flex w-full sm:w-auto gap-2">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#444444] border border-[#9E9E9E] text-white placeholder-gray-400 w-full sm:w-64"
              />
            </div>
            <Button className="bg-[#42B17E] hover:bg-[#42B17E]/80 text-[#434343]" onClick={() => setShowAddCustomer(true)}>
              <Plus className="h-4 w-4 mr-2 text-[#434343]" />
              Add Customer
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="py-3 px-4 text-sm font-medium">Tracking id</th>
                <th className="py-3 px-4 text-sm font-medium">Agent</th>
                <th className="py-3 px-4 text-sm font-medium">Date</th>
                <th className="py-3 px-4 text-sm font-medium">Amount</th>
                <th className="py-3 px-4 text-sm font-medium">Status</th>
                <th className="py-3 px-4 text-sm font-medium"></th>
                <th className="py-3 px-4 text-sm font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={invoice.id} className={index % 2 === 1 ? "bg-[#444444]" : ""}>
                  <td className="py-3 px-4 text-sm">#{invoice.id}</td>
                  <td className="py-3 px-4 text-sm">{invoice.agent}</td>
                  <td className="py-3 px-4 text-sm">{invoice.date}</td>
                  <td className="py-3 px-4 text-sm">{invoice.amount}</td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center">
                      <span>{invoice.bank}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center">
                      <span
                        className={`ml-2 px-3 py-1 rounded-full text-xs ${
                          invoice.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : invoice.status === "Process"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleDeleteInvoice(invoice.id)}
                        className="inline-flex items-center text-red-500 hover:text-red-400"
                      >
                        <Trash2 className="h-5 w-5 mr-1 cursor-pointer" />
                      </button>
                      <Link
                        href={`/dashboard/invoice/${invoice.id}`}
                        className="inline-flex items-center text-green-500 hover:text-green-400"
                      >
                        view invoice
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm text-gray-400 hover:text-white">Previous</button>
            <button className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center">2</button>
            <button className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center">3</button>
            <button className="px-3 py-1 text-sm text-gray-400 hover:text-white">Next</button>
          </div>
        </div>
      </main>

      <AddCustomerDialog open={showAddCustomer} onOpenChange={setShowAddCustomer} onAddCustomer={handleAddCustomer} />
    </div>
  )
}