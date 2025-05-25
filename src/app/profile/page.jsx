"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import {
  Heart,
  Share,
  MessageCircle,
} from "lucide-react";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const mockupPosts = useMemo(
    () => [
      {
        id: "mock-1",
        name: "Pipix Funny :3🍀",
        time: "2 min ago",
        image: "https://art.pixilart.com/sr2f5d198785eaws3.png",
        captions:
          "A universe of green, where nature and stars collide in perfect harmony. 🌍💚 #GreenCosmos",
      },
      {
        id: "mock-2",
        name: "Pipix Funny :3🍀",
        time: "5 min ago",
        image: "https://i.redd.it/9tyvauxnn6k21.png",
        captions:
          "In the pixelated world, the future is a canvas of endless possibilities. 🌟",
      },
      {
        id: "mock-3",
        name: "Pipix Funny :3🍀",
        image: "https://art.pixilart.com/sr2362e013c2c79.png",
        time: "25 min ago",
        captions:
          "Like a white bird in the sky, I’m soaring free and unchained. 🕊️",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-cover bg-center text-white flex justify-center">
      <main className="w-full max-w-3xl border-x border-gray-300 overflow-y-auto">
        {/* Banner */}
        <div className="relative">
          <img
            src="/images/ae62b9d87d729f6659809b4a16b17013.jpg"
            className="w-full h-40 object-cover"
            alt="Banner"
          />
          <img
            src="/images/sr2acfaf5d57caws3.gif"
            className="w-24 h-24 rounded-full absolute -bottom-12 left-4 cursor-pointer"
            alt="Profile"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Zoom Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/images/sr2acfaf5d57caws3.gif"
              className="max-w-full max-h-full rounded-lg"
              alt="Zoom"
            />
          </div>
        )}

        {/* Profile Info */}
        <div className="mt-16 px-4 space-y-2">
          <h2 className="text-xl font-bold text-pink-400">Pipix Funny :3🍀</h2>
          <p className="text-black">Foodie • Pet Lover • Daily Paw Posts 🐾</p>
          <div className="flex gap-4 text-sm text-black">
            <span>3 Posts</span>
            <span>3025 Follows</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4 px-4 border-b border-gray-300 flex gap-6 text-gray-400 text-sm"></div>

        {/* Post List */}
        <div className="w-[95%] sm:w-[90%] md:max-w-2xl mx-auto mt-6 space-y-6 px-4 pb-24">
          {mockupPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-3xl shadow-xl space-y-4 relative"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/images/sr2acfaf5d57caws3.gif"
                  className="w-12 h-12 rounded-full ring-4 ring-pink-300 hover:ring-pink-500"
                  alt="User"
                />
                <div>
                  <p className="font-semibold text-pink-600">{post.name}</p>
                  <p className="text-sm text-gray-400">{post.time}</p>
                </div>
              </div>
              <p className="text-lg font-medium text-black">{post.captions}</p>
              {post.image && (
                <img
                  src={post.image}
                  className="rounded-xl max-h-80 object-cover w-full mt-4 shadow-md transition hover:scale-105"
                  alt="Post"
                />
              )}
              <div className="flex items-center justify-between mt-3 text-pink-500">
                <div className="flex space-x-6">
                  <Heart className="w-6 h-6 cursor-pointer hover:text-pink-700" />
                  <MessageCircle className="w-6 h-6 cursor-pointer hover:text-pink-700" />
                  <Share className="w-6 h-6 cursor-pointer hover:text-pink-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
