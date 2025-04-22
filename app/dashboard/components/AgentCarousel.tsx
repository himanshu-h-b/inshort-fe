/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const agentCards = [
  {
    id: 1,
    title: "Marketing Agent",
    description:
      "Automates campaigns, analyzes customer data, and personalizes ads to target the right audience effectively.",
    icon: "/chart.svg",
    color: `bg-[#C45A65]`,
    border: `border-[#C45A65]`,
  },
  {
    id: 2,
    title: "Sales Agent",
    description: "Engages leads, qualifies prospects, and helps close deals by providing data-driven insights.",
    icon: "/success.svg",
    color: `bg-[#FF7958]`,
    border: `border-[#FF7958]`,
  },
  {
    id: 3,
    title: "Customer Support Agent",
    description:
      "Handles inquiries, resolves issues, and provides 24/7 assistance through chat, voice, or email support.",
    icon: "/support.svg",
    color: `bg-[#42B17E]`,
    border: `border-[#42B17E]`,
  },
]

export default function AgentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? agentCards.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === agentCards.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNextSlide()
    }

    if (touchStart - touchEnd < -50) {
      handlePrevSlide()
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: currentSlide * width,
        behavior: "smooth",
      })
    }
  }, [currentSlide])

  return (
    <div className="relative flex items-center justify-between gap-2">
      <div className="">
        <button onClick={handlePrevSlide} className="border-2 border-[#225F43] rounded-full p-1">
          <ChevronLeftIcon className="h-6 w-6 text-[#225F43]" />
        </button>
      </div>

    <div className="flex flex-col">
      <div
        ref={carouselRef}
        className="flex overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${agentCards.length * 100}%`,
          }}
        >
          {agentCards.map((card) => (
            <div key={card.id} className="w-full flex-shrink-0 px-2">
              <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-4">
                {agentCards.map((innerCard) => (
                  <div key={innerCard.id} className={`border ${innerCard.border} flex flex-col justify-between gap-4 p-4 rounded-lg overflow-hidden`}>
                    <div className="flex gap-2">
                      <div className={`${innerCard.color} rounded-lg py-8 min-w-24 px-8 flex items-center justify-center`}>
                        <img src={innerCard.icon} alt="" className="h-6 object-cover" />
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-white">{innerCard.title}</h3>
                        <p className="text-xs text-[#E1D7F0] mt-1">{innerCard.description}</p>
                      </div>
                    </div>
                    <button
                        className={`w-full rounded-full py-1.5 text-center ${innerCard.color}`}
                      >
                        Continue
                      </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      
    <div className="flex justify-center mt-4 space-x-2">
        {agentCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-4 w-4 rounded-full ${currentSlide === index ? "bg-[#3E8C66]" : "bg-[#8A8C91]"}`}
          />
        ))}
      </div>
    </div>



      <div className="">
        <button onClick={handleNextSlide} className="border-2 border-[#225F43] rounded-full p-1">
          <ChevronRightIcon className="h-6 w-6 text-[#225F43]" />
        </button>
      </div>
    </div>
  )
}