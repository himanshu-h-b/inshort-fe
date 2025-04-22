/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { EllipsisVertical, FileText } from "lucide-react";
import { useState } from "react";

export default function FileCard() {
  const [showMenu, setShowMenu] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const data = [
    {
      fileName: "60279-64337-1-PB.pdf",
      size: "557KB",
      date: "29-02-2025",
      description: "This document is for knowledge base, Documents that are already added to the knowledge base"
    },
    {
      fileName: "60279-64337-1-PB.pdf",
      size: "557KB",
      date: "29-02-2025",
      description: "This document is for knowledge base, Documents that are already added to the knowledge base"
    },
    {
      fileName: "60279-64337-1-PB.pdf",
      size: "557KB",
      date: "29-02-2025",
      description: "This document is for knowledge base, Documents that are already added to the knowledge base"
    }
  ];

  if (isDeleted) return null;

  return (
    <div className="min-h-screen overflow-y-auto px-7 py-18 flex flex-col gap-5">
        <h1 className="text-white text-xl">Documents</h1>
        <div className="flex gap-6 flex-wrap">
        {data.map((item, i) => (
          <div key={i} className="p-4 max-w-[300px] bg-[#2E2E2E] w-fit border border-[#716E74] rounded-xl">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-between">
                  <div className="p-3 h-fit bg-[#42B17E] shrink-0 rounded-full">
                    <FileText className="text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white">{item.fileName}</h2>
                    <div className="flex text-[#DFDFDF] justify-between w-full">
                        <span>{item.size}</span>
                        <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="">
                    <EllipsisVertical className="text-[#8A8C91]" />
                  </div>
                </div>
                <div className="text-[#ACC6FE]">
                  <span className="leading-tight">{item.description}</span>
                </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}
