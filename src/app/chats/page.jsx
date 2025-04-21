"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const mockUsers = [
  {
    id: "1",
    name: "Mimi",
    profile: "https://art.pixilart.com/sr247f1eb4e98aws3.png",
  },
  {
    id: "2",
    name: "Leo",
    profile: "https://art.pixilart.com/sr26ceeb6ed62aws3.png",
  },
  {
    id: "3",
    name: "Nana",
    profile: "https://art.pixilart.com/original/sr2c6481195as004.gif",
  },
];

const mockMessages = {
  1: [
    { from: "Mimi", message: "Hey there! How's it going?" },
    { from: "You", message: "I'm doing great, thanks!" },
  ],
  2: [
    { from: "Leo", message: "What's up?" },
    { from: "You", message: "Not much, just relaxing!" },
  ],
  3: [
    { from: "Nana", message: "Hi! How have you been?" },
    { from: "You", message: "Good, just been busy with work." },
  ],
};

export default function ChatPage() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("user");

  const user = mockUsers.find((user) => user.id === userId);
  const messages = mockMessages[userId];

  if (!user || !messages) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        User not found 🫣
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 shadow sticky top-0 z-10 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-500">
          Chat with {user.name}
        </h1>
        <img
          src={user.profile}
          className="w-10 h-10 rounded-full ring-2 ring-pink-300 cursor-pointer"
        />
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col space-y-4 p-4 flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.from === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.from === "You"
                  ? "bg-pink-200 text-right"
                  : "bg-white text-left"
              }`}
            >
              <span className="font-semibold">{message.from}</span>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="bg-white p-4 shadow-md flex items-center">
        <input
          type="text"
          className="w-full p-2 border rounded-md focus:outline-none"
          placeholder="Type a message..."
        />
        <button className="ml-2 p-2 text-pink-500">Send</button>
      </div>
    </div>
  );
}
