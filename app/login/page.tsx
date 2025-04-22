/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle authentication here
    console.log({ email, password, rememberMe })
    // For demo purposes, just redirect to a success page
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen ">
      <header className="p-6">
        {/* <Logo /> */}
      </header>
      <main className="flex items-center justify-center px-4 md:py-8 py-3">
        <div className="w-[32rem] rounded-lg bg-[#666666] py-8 px-16 text-white">
        <div className="mb-8 flex justify-center">
            <img src="/logoT.png" alt="logo img" className="w-44" />
          </div>

          <h1 className="mb-8 text-center text-3xl font-semibold">Welcome back!</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="joe@gmail.com"
                required
                className="w-full bg-white text-black"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm text-blue-400 hover:underline">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white text-black"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <Button type="submit" className="w-full bg-[#42B17E] hover:bg-[#42B17E]/80">
              Sign in
            </Button>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border" />
              </div>
              <span className="relative bg-[#666666] px-2 text-sm text-gray-300">or</span>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-gray-400 bg-white text-black hover:bg-gray-100"
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

          <div className="mt-6 text-center text-[#BECCDF] text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}