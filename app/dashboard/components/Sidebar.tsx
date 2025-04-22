/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client"
import { BarChart2, BookOpen, Calendar, ChartNoAxesColumnIncreasing, FileText, HelpCircle, LogOut, Menu, Settings, User, Users, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-[#42B17E] text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    <div className={`fixed top-0 left-0 h-full w-[20rem] bg-[#2E2E2E] px-4 text-white flex flex-col justify-between transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 md:relative md:justify-between md:flex-col md:h-screen md:flex md:w-[20rem]`}>
      {/* Logo */}
      <div>
      <div className="p-6 border-b border-[#FBFCFF]">
        <img src="/logobge.png" alt="logo" />
      </div>

      {/* User Profile */}
      <div className="py-4 border-b-2 border-white">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-rose-200">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="User avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-xs text-white/50 font-bold">RESELLER</div>
            <div className="font-medium">Andrew Smith</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-4">
        <div className="text-xs text-white/50 mb-2 px-2">MENU</div>
        <nav className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#42B17E] text-white">
            <User className="h-4 w-4" />
            <span>Agent</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-white"
          >
            <FileText className="h-4 w-4" />
            <span>Knowledge base</span>
          </Link>

          <Link
            href="/dashboard/appointment"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-white"
          >
            <Calendar className="h-4 w-4" />
            <span>Appointment</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-white"
          >
            <ChartNoAxesColumnIncreasing className="h-4 w-4" />
            <span>Billing</span>
          </Link>

          <Link
            href="/dashboard/account"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-white"
          >
            <Settings className="h-4 w-4" />
            <span>Account</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-white"
          >
            <Users className="h-4 w-4" />
            <span>Customers</span>
          </Link>
        </nav>
      </div>
      </div>  

      {/* Footer */}
      <div className="py-4 border-t-2 border-white">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-white"
        >
          <HelpCircle className="h-4 w-4" />
          <span>Help</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-rose-500 hover:bg-zinc-800 hover:text-rose-400 mt-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout Account</span>
        </Link>
      </div>
    </div>
    </>
  )
}