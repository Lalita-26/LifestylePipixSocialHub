"use client";
import Navbar from "./components/Navbar";
import {
  Heart,
  Share,
  MessageCircle,
  Image,
  MapPin,
  Music,
  Smile,
  Home,
  Users,
  Image as ImageIcon,
  Store,
} from "lucide-react";

const mockUsersFeed = [
  {
    id: 1,
    name: "Mimi",
    profile: "https://art.pixilart.com/sr247f1eb4e98aws3.png",
    image: "https://art.pixilart.com/sr21a81a4f688aws3.png",
    captions: "As the sun sets, let go of what no longer serves you",
    comments: [
      {
        id: 1,
        user: "MeowMeow87",
        text: "That’s so cute! 😻",
        time: "1 min ago",
      },
      {
        id: 2,
        user: "PurrfectMom",
        text: "Mine does that too! 😂",
        time: "5 min ago",
      },
    ],
  },
  {
    id: 2,
    name: "Leo",
    profile: "https://art.pixilart.com/sr26ceeb6ed62aws3.png",
    image: "https://art.pixilart.com/original/sr5z6fd653edf9aws3.gif",
    comments: [
      {
        id: 1,
        user: "MeowMeoweiei",
        text: "That’s so cute! 😻",
        time: "1 min ago",
      },
    ],
    captions: "Good vibes only. 😎🌿",
  },
  {
    id: 3,
    name: "Nana",
    profile: "https://art.pixilart.com/original/sr2c6481195as004.gif",
    image: "https://art.pixilart.com/original/sr2a8115866c5aws3.gif",
    comments: [
      {
        id: 1,
        user: "MeowMeow87",
        text: "That’s so cool!",
        time: "1 min ago",
      },
      {
        id: 2,
        user: "PurrfectMom",
        text: "Mine does that too!",
        time: "5 min ago",
      },
    ],
    captions: "Every time I move, my cat is like: 'Where are YOU going?!' 😼🚶‍♀️",
  },
];

export default function Page() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/0b/6d/83/0b6d83022b5326ca71c715e7c1743dfb.jpg')",
      }}
    >
      <Navbar />

      {/* Layout Grid: Left - Center - Right */}
      <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="hidden md:block md:col-span-3">
          <div className="bg-white p-4 rounded-2xl shadow text-sm space-y-5">
            <p className="font-bold text-pink-500 text-lg">Meow Menu</p>
            <ul className="space-y-6">
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <Home className="w-6 h-6" />
                Feed
              </li>
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <Users className="w-6 h-6" />
                Friend
              </li>
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <ImageIcon className="w-6 h-6" />
                <p className="text-sm-lg">Photos</p>
              </li>
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <Store className="w-6 h-6" />
                Marketplace
              </li>
            </ul>
          </div>
        </div>

        {/* Center Content */}
        <div className="md:col-span-6 space-y-4">
          {/* Post Box */}
          <div className="bg-white p-4 rounded-2xl shadow space-y-2">
            <div className="flex items-start gap-4">
              <img
                src="/images/sr2acfaf5d57caws3.gif"
                className="w-12 h-12 rounded-full"
                alt="Profile"
              />
              <textarea
                className="w-full p-2 resize-none text-sm sm:text-base focus:outline-none focus:ring-0"
                placeholder="What's meow-ing today? 🐱"
                rows={3}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between mt-2 gap-2 border-t pt-2">
              {/* Left icons */}
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-500 hover:text-pink-400 cursor-pointer" />
                <Image className="w-5 h-5 text-gray-500 hover:text-pink-400 cursor-pointer" />
                <Music className="w-5 h-5 text-gray-500 hover:text-pink-400 cursor-pointer" />
                <Smile className="w-5 h-5 text-gray-500 hover:text-pink-400 cursor-pointer" />
              </div>
              {/* Post Button */}
              <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-4 py-2 rounded-xl text-sm sm:text-base">
                Post
              </button>
            </div>
          </div>

          {/* Feed */}
          {mockUsersFeed.map((users) => (
            <div
              key={users.id}
              className="bg-white p-4 rounded-2xl shadow space-y-2 text-sm sm:text-base"
            >
              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={users.profile}
                  className="w-10 h-10 rounded-full ring-2 ring-yellow-200"
                  alt="profile"
                />
                <div>
                  <p className="font-bold text-pink-600">{users.name}</p>
                  <p className="text-sm text-gray-400">2 min ago</p>
                </div>
              </div>

              {/* Caption */}
              <p>{users.captions}</p>

              {/* Image */}
              <img
                src={users.image}
                className="rounded-xl max-h-80 object-cover w-full"
                alt="post"
              />

              {/* Icons */}
              <div className="flex text-pink-400 text-sm mt-2 space-x-4">
                <Heart className="hover:text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
                <MessageCircle className="hover:text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
                <Share className="hover:text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Comments */}
              <div className="mt-3 space-y-2">
                {users.comments?.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex items-start gap-2 text-sm text-gray-800"
                  >
                    <div className="bg-pink-50 p-2 rounded-xl w-full">
                      <p className="font-semibold text-pink-500">
                        {comment.user}
                      </p>
                      <p>{comment.text}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {comment.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block md:col-span-3">
          <div className="bg-white p-4 rounded-2xl shadow text-sm space-y-3">
            <p className="font-bold text-pink-500 text-lg">Suggestions</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src="https://art.pixilart.com/sr26ceeb6ed62aws3.png"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">Leo</p>
                  <button className="text-pink-400 hover:underline text-xs">
                    Follow
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://art.pixilart.com/sr247f1eb4e98aws3.png"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">Mimi</p>
                  <button className="text-pink-400 hover:underline text-xs">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
