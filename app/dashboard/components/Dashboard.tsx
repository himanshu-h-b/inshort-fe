"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PlusIcon } from "lucide-react"
import AgentCarousel from "./AgentCarousel"
import AgentTable from "./AgentTable"
import CreateAgentModal from "./CreateAgentModal"
import Pagination from "./Pagination"

// Dummy agent data
const initialAgents = [
  {
    id: 1,
    name: "Maya",
    type: "Sales agent",
    createdDate: "13/05/2022",
    status: "Live",
  },
  {
    id: 2,
    name: "Alexa",
    type: "Support agent",
    createdDate: "13/05/2022",
    status: "Paused",
  },
  {
    id: 3,
    name: "Chalsey",
    type: "Sales agent",
    createdDate: "13/05/2022",
    status: "Live",
  },
  {
    id: 4,
    name: "Elina",
    type: "Sales agent",
    createdDate: "13/05/2022",
    status: "Live",
  },
]

export default function Dashboard() {
  const router = useRouter()
  const [agents, setAgents] = useState(initialAgents)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleEditAgent = (name: string) => {
    router.push(`/dashboard/agent/edit/${name}`)
  }

  const handleDeleteAgent = (id: number) => {
    setAgents(agents.filter((agent) => agent.id !== id))
  }

  const handleAddAgent = (name: string, type: string) => {
    const newAgent = {
      id: agents.length + 1,
      name,
      type,
      createdDate: new Date().toLocaleDateString("en-GB"),
      status: "Live",
    }
    setAgents([...agents, newAgent])
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen overflow-y-auto p-7">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="p-4">
            <h1 className="text-3xl font-bold text-[#F2F2F2]">Hello Andrew!</h1>
            <p className="text-[#979797]">Welcome to your dashboard</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
        </div>

        <AgentCarousel />

        <div className="mt-8 bg-white/10 text-white rounded-lg py-4">
          <div className="flex items-center justify-between mb-4 px-4">
            <h2 className="text-xl font-semibold">Agents</h2>
            <div className="flex space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border text-white px-4 py-2 rounded-md pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button
                className="bg-[#225F43] hover:bg-[#225F43]/80 text-white px-3 py-2 rounded-md flex items-center"
                onClick={() => setIsModalOpen(true)}
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                Add agent
              </button>
            </div>
          </div>

          <AgentTable agents={agents} onEdit={handleEditAgent} onDelete={handleDeleteAgent} />

          <Pagination currentPage={1} totalPages={3} />
        </div>
      </div>

      {isModalOpen && <CreateAgentModal onClose={() => setIsModalOpen(false)} onSave={handleAddAgent} />}
    </div>
  )
}