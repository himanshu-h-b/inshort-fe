/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // In a real app, you would handle registration here
    console.log({ name, email, password })
    // For demo purposes, just redirect to login
    router.push("/login")
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* <header className="p-6"> */}
        {/* <Logo /> */}
      {/* </header> */}
      <main className="flex items-center justify-center px-12 md:py-8 py-3">
        <div className="w-[32rem] rounded-lg bg-[#5C5C5C] py-8 px-16 text-white">
          <div className="mb-8 flex justify-center">
            <img src="/logoT.png" alt="logo" className="w-44" />
          </div>

          <h1 className="mb-8 text-center text-3xl font-bold">Create account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block">
                Name*
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full text-black placeholder:text-[#9FB3DB]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block">
                Email*
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full placeholder:text-[#9FB3DB] text-black"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block">
                Password*
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                className="w-full placeholder:text-[#9FB3DB] text-black"
              />
              <p className="text-xs text-[#9FB3DB]">Must be at least 8 characters.</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block">
                Confirm password*
              </label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter"
                required
                className="w-full placeholder:text-[#9FB3DB] text-black"
              />
              {error && <p className="text-sm text-red-400">{error}</p>}
            </div>

            <Button type="submit" className="mt-4 w-full bg-[#42B17E] hover:bg-[#42B17E]/80 duration-200 ease-in-out">
              Get started
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full border text-white py-2 bg-transparent"
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign up with Google
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

