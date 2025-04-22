"use client"

import { PencilIcon, TrashIcon } from "lucide-react"
import Link from "next/link"

interface Agent {
  id: number
  name: string
  type: string
  createdDate: string
  status: string
}

interface AgentTableProps {
  agents: Agent[]
  onEdit: (name: string) => void
  onDelete: (id: number) => void
}

export default function AgentTable({ agents, onEdit, onDelete }: AgentTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-white">
            <th className="py-3 px-4">Agent</th>
            <th className="py-3 px-4">Agent</th>
            <th className="py-3 px-4">Created Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => (
            <tr
            key={agent.id}
            className={` ${
              index % 2 === 0 ? "bg-white/10" : "bg-transparent"
            }`}
          >
            <td className="py-3 px-4">{agent.name}</td>
            <td className="py-3 px-4">{agent.type}</td>
            <td className="py-3 px-4">{agent.createdDate}</td>
            <td className="py-3 px-4">
              <div className="flex items-center">
                <span
                  className={`h-2 w-2 rounded-full mr-2 ${
                    agent.status === "Live" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                {agent.status}
              </div>
            </td>
            <td className="py-3 px-4">
              <div className="flex justify-end space-x-2">
                <Link href={`/dashboard/agent/edit/${agent.name}`} onClick={() => onEdit(agent.name)} className="text-gray-400 cursor-pointer hover:text-white">
                  <PencilIcon className="h-5 w-5" />
                </Link>
                <button onClick={() => onDelete(agent.id)} className="text-gray-400 cursor-pointer hover:text-red-500">
                  <TrashIcon className="h-5 w-5 text-red-400" />
                </button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}