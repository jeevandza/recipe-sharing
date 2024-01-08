"use client"
import React, { useState } from "react";
import LayoutWrapper from "../_components/layoutWrapper";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <LayoutWrapper>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 w-screen">
        <div className="max-w-md rounded-md bg-white p-8 shadow-md w-9/12">
          <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>
          <form  onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </LayoutWrapper>
  );
}
