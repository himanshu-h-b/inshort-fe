"use client"

import type React from "react"

import { useState } from "react"

interface CreateAgentModalProps {
  onClose: () => void
  onSave: (name: string, type: string) => void
}

export default function CreateAgentModal({ onClose, onSave }: CreateAgentModalProps) {
  const [name, setName] = useState("")
  const [type, setType] = useState("Support agent")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onSave(name, type)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#414040] text-white border border-[#D2D2D2] rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Agent</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-2">
            <label className="block text-sm mb-1">Agent Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#333333] border border-black/20 rounded-md p-2 text-white"
              placeholder=""
              required
            />
          </div>
          <div className="mb-6 flex flex-col gap-2">
            <label className="block text-sm mb-1">Agent Type</label>
            <div className="relative">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-[#333333] border border-black/20 rounded-md p-2 text-white appearance-none pr-8"
              >
                <option value="Support agent">Support agent</option>
                <option value="Sales agent">Sales agent</option>
                <option value="Marketing agent">Marketing agent</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#42B17E] hover:bg-[#42B17E]/80 rounded-md">
              Create Agent
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

