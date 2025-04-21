"use client";
import { useState } from "react";
import { Heart, Share, MessageCircle, Image } from "lucide-react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { Music } from "lucide-react";
import { Smile } from "lucide-react";
export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const goToChatPage = (userId) => {
    router.push(`/chat?user=${userId}`);
  };
  const mockupPosts = [
    {
      id: 1,
      name: "Pipix Funny :3🍀",
      time: "5 min ago",
      image: "https://art.pixilart.com/sr2f5d198785eaws3.png",
      captions:
        "A universe of green, where nature and stars collide in perfect harmony. 🌍💚 #GreenCosmos",
    },
    {
      id: 2,
      name: "Pipix Funny :3🍀",
      time: "15 min ago",
      image: "https://i.redd.it/9tyvauxnn6k21.png",
      captions:
        "In the pixelated world, the future is a canvas of endless possibilities. 🌟",
    },
    {
      id: 3,
      name: "Pipix Funny :3🍀",
      time: "25 min ago",
      image: "https://art.pixilart.com/sr2362e013c2c79.png",
      captions:
        "Like a white bird in the sky, I’m soaring free and unchained. 🕊️",
    },
  ];
  return (
    <div className="min-h-screen bg-cover bg-center text-white flex justify-center">
      {/* Main Content Centered */}
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

        {/* Image Zoom Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/images/sr2acfaf5d57caws3.gif"
              className="max-w-full max-h-full rounded-lg"
              alt="Full Image"
            />
          </div>
        )}

        {/* Profile Info */}
        <div className="mt-16 px-4 space-y-2">
          <h2 className="text-xl font-bold text-pink-400">Pipix Funny :3🍀</h2>
          <p className="text-black">Foodie • Pet Lover • Daily Paw Posts 🐾</p>
          <div className="flex gap-4 text-sm text-black">
            <span> 26 Posts</span>
            <span>3025 Follows </span>
          </div>
        </div>

        {/* Post Tabs */}
        <div className="mt-4 px-4 border-b border-gray-300 flex gap-6 text-gray-400 text-sm">
          <button className="text-black border-b-2 border-pink-400 pb-2">
            Posts
          </button>
        </div>
        {/* post */}
        {/* Create Post */}
        <div className="w-[95%] sm:w-[90%] md:max-w-2xl mx-auto bg-white mt-6 p-4 rounded-2xl shadow space-y-2">
          <div className="flex items-start gap-4">
            {/* Profile Image */}
            <img
              src="/images/sr2acfaf5d57caws3.gif"
              className="w-12 h-12 rounded-full"
              alt="Profile"
            />

            <textarea
              className="w-full p-2 resize-none text-sm sm:text-base focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-400"
              placeholder="What's meow-ing today? 🐱"
              rows={3}
            />
          </div>

          {/* เส้นใต้ */}
          <div className="border-b border-gray-200 mt-2 mb-1"></div>

          <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
            {/* ไอคอนฝั่งซ้าย */}
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-gray-500 hover:text-pink-400 transition-colors duration-200 cursor-pointer" />
              <Image className="w-5 h-5 text-gray-500 hover:text-pink-400 transition-colors duration-200 cursor-pointer" />
              <Music className="w-5 h-5 text-gray-500 hover:text-pink-400 transition-colors duration-200 cursor-pointer" />
              <Smile className="w-5 h-5 text-gray-500 hover:text-pink-400 transition-colors duration-200 cursor-pointer" />
            </div>

            {/* ปุ่มโพสต์ฝั่งขวา */}
            <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-4 py-2 rounded-xl text-sm sm:text-base">
              Post
            </button>
          </div>
        </div>

        {/* User Posts */}
        <div className="w-[95%] sm:w-[90%] md:max-w-2xl mx-auto mt-6 space-y-6 px-4 pb-24">
          {mockupPosts.map((myuser) => (
            <div
              key={myuser.id}
              className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out space-y-4"
            >
              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/sr2acfaf5d57caws3.gif"
                  className="w-12 h-12 rounded-full ring-4 ring-pink-300 transition-all duration-200 hover:ring-pink-500"
                  alt="User"
                />
                <div>
                  <p className="font-semibold text-pink-600">{myuser.name}</p>
                  <p className="text-xs text-gray-500">{myuser.time}</p>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-lg font-medium text-black">
                {myuser.captions}
              </p>
              <img
                src={myuser.image}
                className="rounded-xl max-h-80 object-cover w-full mt-4 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                alt="Post"
              />

              {/* Interaction Icons */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex space-x-6 text-pink-500 text-base">
                  <Heart className="w-6 h-6 cursor-pointer transition-all duration-300 hover:text-pink-700" />
                  <MessageCircle className="w-6 h-6 cursor-pointer transition-all duration-300 hover:text-pink-700" />
                  <Share className="w-6 h-6 cursor-pointer transition-all duration-300 hover:text-pink-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
