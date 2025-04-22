/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import AppointmentCard from "./AppointmentCard"

type TabType = "Upcoming" | "Pending" | "Recurring" | "Past" | "Cancelled" | "Requests"

type Appointment = {
  id: number
  title: string
  date: string
  day: string
  dayNumber: string
  timeSlot: string
  platform: string
  participants: string[]
}

const dummyAppointments: Appointment[] = [
  {
    id: 1,
    title: "Product design meeting",
    date: "June 2025",
    day: "Wed",
    dayNumber: "28",
    timeSlot: "14:00-15:00",
    platform: "Zoom",
    participants: ["a@gmail.com", "b@gmail.com"],
  },
  {
    id: 2,
    title: "Product design meeting",
    date: "June 2025",
    day: "Wed",
    dayNumber: "28",
    timeSlot: "14:00-15:00",
    platform: "Zoom",
    participants: ["a@gmail.com", "b@gmail.com"],
  },
  {
    id: 3,
    title: "Product design meeting",
    date: "June 2025",
    day: "Wed",
    dayNumber: "28",
    timeSlot: "14:00-15:00",
    platform: "Zoom",
    participants: ["a@gmail.com", "b@gmail.com"],
  },
  {
    id: 4,
    title: "Product design meeting",
    date: "June 2025",
    day: "Wed",
    dayNumber: "28",
    timeSlot: "14:00-15:00",
    platform: "Zoom",
    participants: ["a@gmail.com", "b@gmail.com"],
  },
  {
    id: 5,
    title: "Product design meeting",
    date: "June 2025",
    day: "Wed",
    dayNumber: "28",
    timeSlot: "14:00-15:00",
    platform: "Zoom",
    participants: ["a@gmail.com", "b@gmail.com"],
  },
]

export default function AppointmentManager() {
  const [activeTab, setActiveTab] = useState<TabType>("Upcoming")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMonth, setSelectedMonth] = useState("June 2025")
  const [appointments, setAppointments] = useState(dummyAppointments)
  const [selectedAppointment, setSelectedAppointment] = useState<number | null>(null)
  const [showDropdown, setShowDropdown] = useState<number | null>(null)

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
  }

  const handleEdit = (id: number) => {
    setSelectedAppointment(id)
    setShowDropdown(showDropdown === id ? null : id)
  }

  const handleAction = (action: string, id: number) => {
    console.log(`${action} appointment ${id}`)
    setShowDropdown(null)
  }

  const handleAccept = (id: number) => {
    console.log(`Accepted appointment ${id}`)
  }

  const handleReject = (id: number) => {
    console.log(`Rejected appointment ${id}`)
  }

  return (
    <div className="px-12 flex flex-col gap-4">
    <div className="w-full flex justify-end">
        <img src="/logoT.png" className="w-64 hidden md:flex md:mt-3" alt="logo" />
    </div>
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-white text-3xl font-bold">Appointment</h2>
          <p className="text-[#979797] text-xl">Manage your schedules</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-wrap gap-1">
          {(["Upcoming", "Pending", "Recurring", "Past", "Cancelled", "Requests"] as TabType[]).map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 rounded-sm text-sm ${
                activeTab === tab ? "bg-[#676666] text-white" : "text-[#BDCAE5] hover:bg-[#676666]"
              } ${tab === "Requests" ? "flex items-center" : ""}`}
              onClick={() => handleTabChange(tab as TabType)}
            >
              {tab}
              {tab === "Requests" && (
                <span className="ml-1 bg-gray-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#676666] text-white rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-500 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" size={16} />
          </div>
          <input
            type="text"
            placeholder="Enter month"
            className="bg-transparent text-white border border-white rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-500 w-full sm:w-auto"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </div>
      </div>

      <div className="text-white mb-4">{selectedMonth}</div>

      <div className="space-y-4">
        {activeTab === "Upcoming" &&
          appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onEdit={() => handleEdit(appointment.id)}
              showDropdown={showDropdown === appointment.id}
              onAction={handleAction}
              onAccept={() => handleAccept(appointment.id)}
              onReject={() => handleReject(appointment.id)}
              view={activeTab === ("Requests" as TabType) ? "request" : ("default" as const)}
            />
          ))}

        {activeTab === "Requests" &&
          appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onEdit={() => handleEdit(appointment.id)}
              showDropdown={showDropdown === appointment.id}
              onAction={handleAction}
              onAccept={() => handleAccept(appointment.id)}
              onReject={() => handleReject(appointment.id)}
              view="request"
            />
          ))}
      </div>
      </div>
    </div>
  )
}