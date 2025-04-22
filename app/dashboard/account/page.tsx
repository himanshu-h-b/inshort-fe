"use client";

import type React from "react";

import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    photo: "/placeholder.svg?height=64&width=64",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving user data:", userData);
  };

  const handleCancel = () => {
    setUserData({
      name: "",
      email: "",
      photo: "/placeholder.svg?height=64&width=64",
    });
  };

  const handleUpdatePhoto = () => {
    console.log("Update photo clicked");
  };

  const handleDeletePhoto = () => {
    setUserData((prev) => ({ ...prev, photo: "/placeholder.svg?height=64&width=64" }));
  };

  return (
    <div className="min-h-screen px-6 md:px-14 py-10 md:py-16 bg-[#434343] text-white flex flex-col gap-4">
      {/* Main content */}
      <main className="flex flex-col gap-4 w-full">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
          <p className="text-[#979797] text-sm md:text-base">Update your information</p>
        </div>

        <div className="flex flex-col px-4 md:px-10 gap-6">
          {/* Profile section */}
          <div className="border-b border-[#EAECF0] pb-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div>
                <h2 className="font-semibold text-lg">Profile</h2>
                <p className="text-[#CAD4E1] text-sm">Update your photo and personal details here.</p>
              </div>
              <EllipsisVertical />
            </div>
          </div>

          {/* Name field */}
          <div className="border-b border-[#EAECF0] py-4 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
            <label className="text-sm w-full md:w-1/3">Name</label>
            <Input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="First and Last Name"
              className="bg-[#676666] border py-2 text-white placeholder:text-white w-full md:max-w-md"
            />
          </div>

          {/* Photo field */}
          <div className="border-b border-[#EAECF0] py-4 flex flex-col md:flex-row items-start gap-4">
            <div className="w-full md:w-1/3">
              <label className="block text-sm">Your photo</label>
              <p className="text-[#CAD4E1] text-sm">This will be displayed on your profile.</p>
            </div>

            <div className="flex sm:flex-col items-center gap-3">
              <Image
                src={userData.photo}
                alt="Profile"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="flex space-x-3">
                <button onClick={handleDeletePhoto} className="text-sm text-[#CAD4E1] hover:text-[#CAD4E1]/80">
                  Delete
                </button>
                <button onClick={handleUpdatePhoto} className="text-sm text-[#42B17E] hover:text-[#42B17E]/80">
                  Update
                </button>
              </div>
            </div>
          </div>

          {/* Email field */}
          <div className="border-b border-[#EAECF0] py-4 flex flex-col md:flex-row items-start gap-2 md:gap-4">
            <div className="w-full md:w-1/3">
              <label className="text-sm">Your email</label>
              <p className="text-[#CAD4E1] text-sm max-w-lg">
                Enter an email if you&apos;d like to be contacted with new product updates.
              </p>
            </div>
            <Input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="bg-[#676666] border py-2 text-white placeholder:text-white w-full md:max-w-md"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-2 mt-6">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="bg-transparent border-gray-600 text-white hover:bg-gray-700 w-full md:w-auto"
            >
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-[#42B17E] hover:bg-[#42B17E]/80 text-white w-full md:w-auto">
              Save
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
