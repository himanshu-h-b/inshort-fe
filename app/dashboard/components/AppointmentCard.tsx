/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { ChevronDown, Clock, MapPin } from "lucide-react"

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

interface AppointmentCardProps {
  appointment: Appointment
  onEdit: () => void
  showDropdown: boolean
  onAction: (action: string, id: number) => void
  onAccept: () => void
  onReject: () => void
  view: "default" | "request"
}

export default function AppointmentCard({
  appointment,
  onEdit,
  showDropdown,
  onAction,
  onAccept,
  onReject,
  view = "default",
}: AppointmentCardProps) {
  return (
    <div className=" bg-opacity-30 rounded-lg p-4 border border-[#2E2E2E]">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-row sm:flex-col items-center justify-start border-r-3 pr-6 sm:justify-center mb-3 sm:mb-0 sm:mr-6 text-[#42B17E]">
          <div className="text-xl mr-2 sm:mr-0">{appointment.day}</div>
          <div className="text-2xl font-bold">{appointment.dayNumber}</div>
        </div>

        <div className="flex-1 mb-3 sm:mb-0">
          <div className="flex flex-col sm:flex-row sm:items-center mb-2">
            <div className="flex items-center mb-1 sm:mb-0 sm:mr-2">
              <Clock size={16} className="text-[#BABEC7] mr-2" />
              <span className="text-[#BABEC7] text-sm">{appointment.timeSlot}</span>
            </div>
            <span className="text-white">{appointment.title}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 sm:items-center">
            <div className="flex items-center mb-1 sm:mb-0 sm:mr-2">
              <span className="text-[#BABEC7] text-sm">{appointment.platform}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {appointment.participants.map((email, index) => (
                <div key={index} className="bg-[#8A8C91] rounded-full px-3 py-1 text-xs text-[#3A3A3A]">
                  {email}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          {view === "default" ? (
            <div className="relative">
              <button
                onClick={onEdit}
                className="bg-[#42B17E] hover:bg-[#42B17E]/80 text-[#434343] rounded-md px-4 py-3 text-sm flex gap-3.5 items-center"
              >
                Edit
                <ChevronDown size={16} className="ml-1" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-1 w-48 bg-[#434343] border border-[#676666] rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#676666]"
                      onClick={() => onAction("reschedule", appointment.id)}
                    >
                      Reschedule booking
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#676666]"
                      onClick={() => onAction("request", appointment.id)}
                    >
                      Request reschedule
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#676666]"
                      onClick={() => onAction("invite", appointment.id)}
                    >
                      Invite people
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-[#676666]"
                      onClick={() => onAction("cancel", appointment.id)}
                    >
                      Cancel appointment
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex">
              <button
                onClick={onAccept}
                className="text-white py-2 px-3.5 rounded-l-full bg-[#2E2E2E] text-sm"
              >
                Accept
              </button>
              <button
                onClick={onReject}
                className="text-black py-2 px-3.5 rounded-r-full bg-white text-sm"
              >
                Reject
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}