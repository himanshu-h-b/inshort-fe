/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, FileText, Phone, Send, Settings, User, X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function AgentEdit() {
  const [agentPrompt, setAgentPrompt] = useState("This is good Assistant.")
  const [usersStartFirst, setUsersStartFirst] = useState(true)
  const [responseDelay, setResponseDelay] = useState(false)

  // Modal states
  const [languageModalOpen, setLanguageModalOpen] = useState(false)
  const [callAgentModalOpen, setCallAgentModalOpen] = useState(false)
  const [callAgentTab, setCallAgentTab] = useState("web")
  const [callStarted, setCallStarted] = useState(false)
  const [chatStarted, setChatStarted] = useState(false)
  const [knowledgeModalOpen, setKnowledgeModalOpen] = useState(false)
  const [knowledgeConfigModalOpen, setKnowledgeConfigModalOpen] = useState(false)
  const [createToolModalOpen, setCreateToolModalOpen] = useState(false)

  // Chat messages
  const [messages, setMessages] = useState([
    { role: "user", content: "Hello! Can you help me?" },
    { role: "agent", content: "Hello! I can help you with various things related to our product. Ask me!" },
    { role: "user", content: "What services do you offer?" },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    setMessages([...messages, { role: "user", content: newMessage }])
    setNewMessage("")

    // Simulate agent response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content:
            "We offer a range of AI-powered services including virtual assistants, data analysis, and automated customer support solutions. Would you like to know more about any specific service?",
        },
      ])
    }, 1000)
  }

  return (
    <>
      <main className="flex-1 px-8 text-white">
        <div className="flex flex-col p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex flex-col items-center gap-2">
              <Link href="#" className="flex items-center text-zinc-300 hover:text-white">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Maya</span>
              </Link>
              <div className="flex items-center gap-1">
                <div className="w-[6px] h-[6px] bg-green-500 rounded-full" />
                <span className="text-sm">Active</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs bg-transparent border-zinc-300 text-zinc-300 hover:bg-zinc-700"
            >
              Edit
            </Button>
          </div>

          {/* Configuration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-[#2E2E2E] border-[#716E74] p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-500">
                  <Settings className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-[#E7DBF9] font-medium">Model</div>
                  <div className="text-sm text-[#E7DBF9]">Maya LLM</div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#2E2E2E] border-[#716E74] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-500">
                    <Settings className="h-4 w-4" />
                  </div>
                  <div onClick={() => setLanguageModalOpen(true)} className="cursor-pointer">
                    <div className="text-sm text-[#E7DBF9] font-medium">Call Agent</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-300"
                  onClick={() => {
                    setCallAgentModalOpen(true)
                    setCallAgentTab("web")
                    setCallStarted(false)
                    setChatStarted(false)
                  }}
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </Card>

            <Card
              className="bg-[#2E2E2E] border-[#716E74] p-4 rounded-lg cursor-pointer"
              onClick={() => setLanguageModalOpen(true)}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-500">
                  <Settings className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-[#E7DBF9] font-medium">Language</div>
                  <div className="text-sm text-[#E7DBF9]">English</div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#2E2E2E] border-[#716E74] p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-500">
                  <Settings className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-[#E7DBF9] font-medium">Voice</div>
                  <div className="text-sm text-[#E7DBF9]">Indira (Indian Female)</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Agent Prompt */}
          <Card className="bg-[#2E2E2E] border-[#716E74] text-[#E7DBF9] p-4 rounded-lg">
            <div className="font-medium">Agent Prompt</div>
            <Textarea
              value={agentPrompt}
              onChange={(e) => setAgentPrompt(e.target.value)}
              className="border-[#716E74] bg-[#252525] text-zinc-300 min-h-[200px] resize-none"
            />
          </Card>

          {/* Knowledge */}
          <Card className="bg-[#2E2E2E] border-[#716E74] p-4 rounded-lg">
            <div className="flex items-center border-b pb-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-500">
                  <Settings className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                <div className="font-medium text-[#E7DBF9]">Knowledge</div>
                <div className="text-sm text-[#E7DBF9]">This is the information your agent will have</div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-7 px-2 text-xs bg-transparent border-zinc-300 text-zinc-300 hover:bg-zinc-700"
                onClick={() => setKnowledgeModalOpen(true)}
              >
                Edit
              </Button>
            </div>
                
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-zinc-800 rounded-md">
                <div className="flex items-center text-white gap-2">
                  <FileText className="h-4 w-4 text-zinc-400" />
                  <span className="text-sm">00278-64337-1718.pdf</span>
                </div>
                <span className="text-xs text-zinc-500">537 KB</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-zinc-800 rounded-md">
                <div className="flex items-center text-white gap-2">
                  <FileText className="h-4 w-4 text-zinc-400" />
                  <span className="text-sm">00279-64337-1718.pdf</span>
                </div>
                <span className="text-xs text-zinc-500">547 KB</span>
              </div>
            </div>
          </Card>

          {/* Tools */}
          <Card className="bg-[#2E2E2E] border-[#716E74] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-500">
                  <Settings className="h-4 w-4" />
                </div>
              <div>
                <div className="font-medium text-[#E7DBF9]">Tools</div>
                <div className="text-sm text-[#E7DBF9]">Add tools to use more features</div>
              </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-7 px-2 text-xs bg-transparent border-zinc-300 text-zinc-300 hover:bg-zinc-700"
              >
                Edit
              </Button>
            </div>

            <div className="text-center text-sm text-white mb-3">
              Connect tools to let agent take action with external systems.
            </div>

            <div className="flex justify-center mb-3">
              <Button
                className="bg-[#42B17E] hover:bg-[#42B17E]/80 text-white"
                onClick={() => setCreateToolModalOpen(true)}
              >
                Add Tool
              </Button>
            </div>

            <div
              className="flex items-center justify-center p-2 bg-zinc-800 rounded-md cursor-pointer"
              onClick={() => setCreateToolModalOpen(true)}
            >
              <span className="text-sm text-zinc-400">+ Add Tool</span>
            </div>
          </Card>

          {/* Conversation Flow */}
          <Card className="bg-[#2E2E2E] border-[#716E74] text-[#E7DBF9] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-500">
                  <Settings className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-medium">Conversation Flow</div>
                  <div className="text-sm text-[#B9B9B9]">Setup the conversation flow of how your agent will talk</div>
                </div>
              </div>
              <Button className="bg-[#42B17E] hover:bg-[#42B17E]/80 text-white">Save</Button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1">Users start first:</div>
                  <div className="text-xs text-[#B9B9B9]">Agent will wait for the user to start the conversation</div>
                </div>
                <Switch
                  checked={usersStartFirst}
                  onCheckedChange={setUsersStartFirst}
                  className="data-[state=checked]:bg-emerald-600"
                />
              </div>

              <div>
                <div className="font-medium mb-2">Greeting Line:</div>
                <div className="p-3 bg-[#222222] rounded-md text-sm text-[#8A8C91]">Welcome! How can I help you?</div>
                <div className="text-xs text-[#B9B9B9] mt-1">
                  Agent will say this if the conversation starts with the agent
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1">Response Delay:</div>
                  <div className="text-xs text-[#B9B9B9]">
                    The agent will simulate typing and thinking before it sends a message
                  </div>
                </div>
                <Switch
                  checked={responseDelay}
                  onCheckedChange={setResponseDelay}
                  className="data-[state=checked]:bg-emerald-600"
                />
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Language Selection Modal */}
      <Dialog open={languageModalOpen} onOpenChange={setLanguageModalOpen}>
        <DialogContent className="bg-[#2E2E2E] border-[#716E74] text-white p-0 max-w-md">
          <div className="p-4">
            <h3 className="text-lg font-medium mb-4">Select Language</h3>
            <Select defaultValue="english">
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-2 p-4 border-t border-zinc-700">
            <Button
              variant="outline"
              className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-700"
              onClick={() => setLanguageModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => setLanguageModalOpen(false)}
            >
              Change
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Call Agent Modal */}
      <Dialog open={callAgentModalOpen} onOpenChange={setCallAgentModalOpen}>
        <DialogContent className="bg-[#2E2E2E] border-[#716E74] text-white p-0 max-w-md">
          <div className="flex justify-between items-center p-4 border-b border-zinc-700">
            <h3 className="text-lg font-medium">Call Agent</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#B9B9B9] hover:text-white"
              onClick={() => setCallAgentModalOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <Tabs value={callAgentTab} onValueChange={setCallAgentTab} className="w-full">
            <TabsList className="w-full bg-zinc-900 border-b border-zinc-700">
              <TabsTrigger
                value="web"
                className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500 data-[state=active]:text-white rounded-none"
              >
                Web
              </TabsTrigger>
              <TabsTrigger
                value="chat"
                className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500 data-[state=active]:text-white rounded-none"
              >
                Chat
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web" className="p-6 min-h-[300px] flex flex-col items-center justify-center">
              {!callStarted ? (
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 rounded-full bg-zinc-800 border-2 border-emerald-500 flex items-center justify-center mb-4 cursor-pointer hover:bg-zinc-700"
                    onClick={() => setCallStarted(true)}
                  >
                    <Phone className="h-10 w-10 text-emerald-500" />
                  </div>
                  <span className="text-sm text-emerald-500">Start Call</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="flex space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-4 h-16 bg-white rounded-full animate-pulse"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          height: `${Math.random() * 40 + 20}px`,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#B9B9B9]">You: What services do you offer?</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="chat" className="p-0 min-h-[400px] flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    {message.role === "agent" && (
                      <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center mr-2">
                        <User className="h-3 w-3 text-zinc-300" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === "user" ? "bg-emerald-600 text-white" : "bg-zinc-700 text-white"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && <div className="text-xs text-zinc-500 self-end ml-2">You</div>}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-zinc-700 flex gap-2">
                <Input
                  placeholder="Type your message here"
                  className="bg-zinc-800 border-zinc-700 text-white"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-300 hover:text-white"
                  onClick={handleSendMessage}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Knowledge Modal */}
      <Dialog open={knowledgeModalOpen} onOpenChange={setKnowledgeModalOpen}>
        <DialogContent className="bg-[#2E2E2E] border-[#716E74] text-white p-0 max-w-md">
          <div className="flex justify-between items-center p-4 border-b border-zinc-700">
            <h3 className="text-lg font-medium">Knowledge Base</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#B9B9B9] hover:text-white"
              onClick={() => setKnowledgeModalOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-4">
            <div className="flex justify-between mb-4">
              <h4 className="font-medium">Added Documents</h4>
              <Button
                variant="outline"
                size="sm"
                className="h-7 px-2 text-xs bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                onClick={() => {
                  setKnowledgeModalOpen(false)
                  setKnowledgeConfigModalOpen(true)
                }}
              >
                Configure
              </Button>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-md">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-zinc-400" />
                  <div>
                    <div className="text-sm">00278-64337-1718.pdf</div>
                    <div className="text-xs text-zinc-500">
                      This document is referenced when your agent is answering questions about knowledge base.
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-rose-500 hover:text-rose-400 hover:bg-transparent">
                  Delete
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-md">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-zinc-400" />
                  <div>
                    <div className="text-sm">00279-64337-1718.pdf</div>
                    <div className="text-xs text-zinc-500">
                      This document is referenced when your agent is answering questions about knowledge base.
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-rose-500 hover:text-rose-400 hover:bg-transparent">
                  Delete
                </Button>
              </div>
            </div>

            <Button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => setKnowledgeModalOpen(false)}
            >
              Upload
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Knowledge Config Modal */}
      <Dialog open={knowledgeConfigModalOpen} onOpenChange={setKnowledgeConfigModalOpen}>
        <DialogContent className="bg-[#2E2E2E] border-[#716E74] text-white p-0 max-w-md">
          <div className="flex justify-between items-center p-4 border-b border-zinc-700">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-white"
                onClick={() => {
                  setKnowledgeConfigModalOpen(false)
                  setKnowledgeModalOpen(true)
                }}
              >
                Knowledge Base
              </Button>
              <span className="text-zinc-500">/</span>
              <Button variant="ghost" size="sm" className="text-white hover:text-white">
                Configuration
              </Button>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <h4 className="font-medium mb-2">Pre-Action Prompt</h4>
              <div className="text-xs text-zinc-400 mb-2">
                This prompt will be added to the beginning of your agent&apos;s knowledge base prompt. You can use this to
                give your agent specific instructions on how to use the knowledge base.
              </div>
              <Textarea
                className="bg-zinc-800 border-zinc-700 text-zinc-300 min-h-[100px] resize-none"
                placeholder="Enter your pre-action prompt here..."
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 p-4 border-t border-zinc-700">
            <Button
              variant="outline"
              className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-700"
              onClick={() => {
                setKnowledgeConfigModalOpen(false)
                setKnowledgeModalOpen(true)
              }}
            >
              Cancel
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => {
                setKnowledgeConfigModalOpen(false)
                setKnowledgeModalOpen(false)
              }}
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Create Tool Modal */}
      <Dialog open={createToolModalOpen} onOpenChange={setCreateToolModalOpen}>
        <DialogContent className="bg-[#2E2E2E] border-[#716E74] text-white p-0 max-w-md">
          <div className="flex justify-between items-center p-4 border-b border-zinc-700">
            <h3 className="text-lg font-medium">Create Function</h3>
            {/* <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white"
              onClick={() => setCreateToolModalOpen(false)}
            > */}
              {/* <X className="h-4 w-4" /> */}
            {/* </Button> */}
          </div>

          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Function Name</label>
              <Input placeholder="Enter function name" className="bg-zinc-800 border-zinc-700 text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <Textarea
                placeholder="Enter function description"
                className="bg-zinc-800 border-zinc-700 text-white min-h-[80px] resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Select Function Type</label>
              <Select defaultValue="http">
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                  <SelectValue placeholder="Select function type" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                  <SelectItem value="http">HTTP</SelectItem>
                  <SelectItem value="webhook">Webhook</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input placeholder="Name" className="bg-zinc-800 border-zinc-700 text-white" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Tags</label>
                <Input placeholder="Tags" className="bg-zinc-800 border-zinc-700 text-white" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-sm">File Access Required</div>
                <div className="text-xs text-zinc-500">
                  Allow this function to access files uploaded to your knowledge base
                </div>
              </div>
              <Switch className="data-[state=checked]:bg-emerald-600" />
            </div>
          </div>

          <div className="flex justify-end gap-2 p-4 border-t border-zinc-700">
            <Button
              variant="outline"
              className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-700"
              onClick={() => setCreateToolModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => setCreateToolModalOpen(false)}
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      </>
  )
}

