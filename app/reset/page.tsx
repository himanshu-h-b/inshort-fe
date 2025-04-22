/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { KeyIcon, KeyRound } from "lucide-react"
import { CheckCircle } from "lucide-react"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    // In a real app, you would handle the password reset here
    console.log({ password })
    // For demo purposes, just show success
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <header className="p-6">
          {/* <Logo /> */}
        </header>
        <main className="flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md rounded-lg bg-[#666666] p-8 text-white">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f7e6]">
                <CheckCircle className="h-8 w-8 text-[#4CAF50]" />
              </div>
            </div>

            <h1 className="mb-2 text-center text-3xl font-semibold text-[#6796FB]">Password reset</h1>
            <p className="mb-6 text-center text-[#A2C0EA]">
              Your password has been successfully reset.
              <br />
              Click below to log in magically.
            </p>

            <Button className="mb-6 w-full bg-[#42B17E] hover:bg-[#42B17E]/80" onClick={() => router.push("/login")}>
              Continue
            </Button>

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
    <div className="min-h-screen">
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

          <h1 className="mb-2 text-center text-3xl font-semibold text-[#6796FB]">Set new password</h1>
          <p className="mb-6 text-center text-[#A2C0EA]">
            Your new password must be different to
            <br />
            previously used passwords.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="block">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent text-[#A2C0EA]"
              />
              <p className="text-xs text-[#A2C0EA]">Must be at least 8 characters.</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block">
                Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-transparent text-[#A2C0EA]"
              />
              {error && <p className="text-sm text-red-400">{error}</p>}
            </div>

            <Button type="submit" className="w-full bg-[#42B17E] hover:bg-[#42B17E]/80">
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

