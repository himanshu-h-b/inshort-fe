/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { KeyIcon, KeyRound, Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send a password reset email
    console.log({ email })
    // For demo purposes, just show the confirmation screen
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen ">
        <header className="p-6">
          {/* <Logo /> */}
        </header>
        <main className="flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md rounded-lg bg-[#666666] p-8 text-white">
            <div className="mb-6 flex justify-center">
            <div className="p-3 rounded-full bg-white text-[#067BFF]">
                <Mail className="" />  
              </div>
            </div>

            <h1 className="mb-2 text-center text-3xl font-semibold text-[#6796FB]">Check your email</h1>
            <p className="mb-6 text-center text-[#A2C0EA]">
              We sent a password reset link to
              <br />
              <span className="font-medium">{email}</span>
            </p>

            <Button className="mb-4 w-full bg-[#42B17E] hover:bg-[#42B17E]/80" onClick={() => window.open("mailto:")}>
              Open email app
            </Button>

            <p className="mb-6 text-center text-sm text-[#A2C0EA]">
              Didn&apos;t receive the email?{" "}
              <button className="text-[#0063F6] font-semibold hover:underline" onClick={() => setIsSubmitted(false)}>
                Click to resend
              </button>
            </p>

            <div className="flex items-center justify-center">
              <Link href="/login" className="flex items-center text-sm text-[#A2C0EA] hover:text-[#A2C0EA]/80">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to log in
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen ">
      <header className="p-6">
        {/* <Logo /> */}
      </header>
      <main className="flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md rounded-lg bg-[#666666] p-8 text-white">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <KeyRound className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <h1 className="mb-2 text-center text-3xl font-semibold text-[#6796FB]">Forgot password?</h1>
          <p className="mb-6 text-center text-[#A2C0EA]">No worries, we&apos;ll send you reset instructions.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full text-black bg-transparent placeholder:text-[#9FB3DB]"
              />
            </div>

            <Button type="submit" className="w-full bg-[#42B17E] hover:bg-[#42B17E]/80 duration-200 ease-in-out">
              Reset password
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center">
            <Link href="/login" className="flex items-center text-sm text-[#A2C0EA] hover:text-[#A2C0EA]/80">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to log in
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

