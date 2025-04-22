/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { ArrowLeft, ChevronDown, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InvoiceDetailsPage({ invoiceId }: any) {
  const [showMoreOptions, setShowMoreOptions] = useState(false)

  return (
    <div className="min-h-screen bg-[#434343] md:px-10 text-white">
      {/* Header with logo */}
      <header className="p-4 flex justify-between items-center border-b border-white">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-gray-400 hover:text-white">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <span className="text-gray-400">Invoice Details</span>
        </div>
        <img src="/logoT.png" alt="logo" className="w-48" />
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto p-4">
        {/* Invoice header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Invoice #2020-05-0001</h1>
            <p className="text-[#D1D8E7]">Paid on June 27, 2023</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="bg-[#444444] border border-white text-white hover:bg-[#555555]"
              onClick={() => setShowMoreOptions(!showMoreOptions)}
            >
              More Options <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button className="border border-[#1EB386] hover:bg-[#1EB386] bg-transparent text-[#1EB386] hover:text-white">Record a Payment</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main invoice card */}
          <div className="lg:col-span-2">
            <div className="border border-white rounded-lg p-6">
              {/* Company header */}
              <div className="flex justify-between mb-8">
                <div className="flex gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="w-16 h-16 bg-orange-500 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white transform rotate-45 translate-x-1"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-medium">Sisyphus</h2>
                    <p className="text-sm text-gray-400">76A1 Sèvres St., 38000 Domitiopolis, France</p>
                    <p className="text-sm text-gray-400">contact@sisyphus.io</p>
                    <p className="text-sm text-gray-400">SIRET: 362 521 879 00034</p>
                    <p className="text-sm text-gray-400">VAT: 840-84021</p>
                  </div>
                </div>
                <div className="flex flex-col h-full gap-12 justify-between">
                <div className="bg-[#767575] h-fit px-3 py-2 rounded text-sm">#2020-05-0001</div>

                <div className="flex flex-col items-end gap-2">
                    <span className="text-xs text-[#D1D8E7]">Total Amount</span>
                    <span className="text-xl font-semibold">€3,030.00</span>
                </div>
                </div>
              </div>

            <div className="border border-[#E0E2E7] p-4 rounded-lg">
              {/* Invoice info grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-[#767575] p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-[#D1D8E7]">Bill Date</p>
                      <p className="text-sm">03/05/2020</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#D1D8E7]">Delivery Date</p>
                      <p className="text-sm">03/05/2020</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#D1D8E7]">Terms of Payment</p>
                      <p className="text-sm">Within 15 days</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#D1D8E7]">Payment Deadline</p>
                      <p className="text-sm">06/18/2020</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Billing Address</h3>
                  <p className="text-sm">Willy Wonka</p>
                  <p className="text-sm text-gray-400">4444 West Narwood Avenue, Iloca, Illinois, USA</p>
                  <p className="text-sm text-gray-400">(772)204-0461 | willy@wonka.com</p>
                  <p className="text-sm text-gray-400">VAT: 842-84021</p>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <p className="text-sm text-gray-400">
                  This is a custom message that might be relevant to the customer. It can span up to three or four rows.
                  If not used up to four rows.
                </p>
              </div>

              {/* Items table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                  <thead className="bg-[#767575] text-[#D1D8E7] text-xs">
                    <tr>
                      <th className="py-2 px-3 text-left">No.</th>
                      <th className="py-2 px-3 text-left">ARTICLE</th>
                      <th className="py-2 px-3 text-left">QUANTITY</th>
                      <th className="py-2 px-3 text-left">UNIT PRICE</th>
                      <th className="py-2 px-3 text-left">VAT</th>
                      <th className="py-2 px-3 text-left">AMOUNT</th>
                      <th className="py-2 px-3 text-left">FINAL AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[1, 2, 3].map((item) => (
                      <tr key={item} className="border-b">
                        <td className="py-3 px-3">{item}</td>
                        <td className="py-3 px-3">
                          <div>Product Name</div>
                          <div className="text-[#D1D8E7]">Product Description</div>
                        </td>
                        <td className="py-3 px-3">
                          <div>150</div>
                          <div className="text-[#D1D8E7]">Units</div>
                        </td>
                        <td className="py-3 px-3">€20</td>
                        <td className="py-3 px-3">0%</td>
                        <td className="py-3 px-3">€3,000</td>
                        <td className="py-3 px-3">€3,000</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="flex justify-end mb-8">
                <div className="w-48 space-y-1">
                  <div className="flex  justify-between text-sm">
                    <span className="text-[#D1D8E7]">Total HT</span>
                    <span>€3,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#D1D8E7]">Total Measurements</span>
                    <span>€30</span>
                  </div>
                  <div className="flex justify-between text-sm pb-6 border-b">
                    <span className="text-[#D1D8E7]">Total sale</span>
                    <span>€0</span>
                  </div>
                  <div className="flex justify-between font-semibold text-sm pt-1 border-t border-gray-700">
                    <span>Total Price</span>
                    <span>€3,030.00</span>
                  </div>
                </div>
              </div>
              </div>
              {/* Terms */}
              <div className="md:mt-6">
                <h3 className="text-sm font-medium mb-1">Terms & Conditions</h3>
                <p className="text-sm text-gray-400">Please pay within 14 days of receiving this invoice.</p>
              </div>
            </div>
          </div>
        
          {/* Right sidebar */}
          <div className="space-y-4">
            {/* Late notification */}
            <div className="bg-[#FFF8E6] text-[#B54708] p-4 rounded-lg flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Late
            </div>

            {/* Invoice status */}
            <div className="border p-4 rounded-lg">
              <p className="text-center mb-4">Invoice not yet sent</p>
              <Button className="w-full bg-[#1EB386] hover:bg-[#1EB386]/80 text-[#434343]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 rotate-50"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Send Invoice
              </Button>
            </div>

            {/* Summary */}
            <div className="border p-4 rounded-lg">
              <h3 className="font-medium mb-4">Summary</h3>

              <div className="mb-4 py-4 px-4 bg-[#767575]">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Total</span>
                  <span className="text-sm">€3,030 incl. VAT</span>
                </div>
              </div>

              {/* Payment history */}
              <div className="space-y-4 mb-4">
              <div className="flex flex-col gap-3">
           {/* Deposit Section */}
          <div className="relative flex gap-4">
            <div className="w-full flex flex-col gap-3">
              <div className="flex gap-4 items-center">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-sm font-medium">Deposit No. 2020-04-0006</p>
              </div>
              <div className="flex w-full items-center justify-between">
              <p className="text-xs text-[#D1D8E7]">Date</p>
              <p className="text-sm">Oct 24, 2019</p>
              </div>
              <div className="flex w-full items-center justify-between">
              <p className="text-xs text-[#D1D8E7]">Amount</p>
              <p className="text-sm">€300</p>
              </div>
            </div>
          </div>

           {/* Deposit Section */}
          <div className="relative flex gap-4">
            <div className="w-full flex flex-col gap-3">
              <div className="flex gap-4 items-center">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-sm font-medium">Partial Payment</p>
              </div>
              <div className="flex w-full items-center justify-between">
              <p className="text-xs text-[#D1D8E7]">Date</p>
              <p className="text-sm">Oct 24, 2019</p>
              </div>
              <div className="flex w-full items-center justify-between">
              <p className="text-xs text-[#D1D8E7]">Amount</p>
              <p className="text-sm">€300</p>
              </div>
            </div>
          </div>

           {/* Deposit Section */}
          <div className="relative flex gap-4">
            <div className="w-full flex flex-col gap-3">
              <div className="flex gap-4 items-center">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-sm font-medium">Partial Payment</p>
              </div>
              <div className="flex w-full items-center justify-between">
              <p className="text-xs text-[#D1D8E7]">Date</p>
              <p className="text-sm">Oct 24, 2019</p>
              </div>
              <div className="flex w-full items-center justify-between">
              <p className="text-xs text-[#D1D8E7]">Amount</p>
              <p className="text-sm">€300</p>
              </div>
            </div>
          </div>

         

          
       </div>
              
              {/* Remaining amount */}
              <div className="flex justify-between items-center bg-[#333333] p-2 rounded">
                <span className="text-sm">Remaining Amount</span>
                <span className="text-sm">€100 incl. VAT</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}