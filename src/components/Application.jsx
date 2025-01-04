import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import api from "../api/api";

const Application = () => {
  const location = useLocation();
  const { petId } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/email/", {
        ...formData,
        petId,
      });
      setStatusMessage(response.data.message);
    } catch (error) {
      console.error("Error submitting application:", error);
      setStatusMessage(
        error.response?.data?.message || "Failed to submit application."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFEBEE]">
      <div className="w-full max-w-lg p-8 bg-white border border-[#B71C1C] rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-[#B71C1C] text-center mb-4">
          Application Form
        </h1>

        {petId && (
          <p className="text-center text-gray-600 mb-6">
            <span className="font-semibold">Pet ID:</span> {petId}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#B71C1C]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="block w-full px-4 py-2 mt-1 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#B71C1C]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="block w-full px-4 py-2 mt-1 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
              required
            />
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-[#B71C1C]"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="block w-full px-4 py-2 mt-1 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#B71C1C]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className="block w-full px-4 py-2 mt-1 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="appointment"
              className="block text-sm font-medium text-[#B71C1C]"
            >
              Preferred Appointment Date & Time:
            </label>
            <input
              type="datetime-local"
              name="appointment"
              value={formData.appointment}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#B71C1C] rounded-md hover:bg-[#D32F2F] focus:outline-none focus:ring focus:ring-[#D32F2F]"
            >
              Submit Application
            </button>
          </div>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-center font-medium text-[#388E3C]">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Application;
