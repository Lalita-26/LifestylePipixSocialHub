"use client";
import { useAtom } from "jotai";
import { useRef, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import { postsAtom, textAtom, imageAtom } from "./atoms/atoms"; // <-- นำเข้า atom

import {
  Heart,
  Share,
  MessageCircle,
  Image,
  MapPin,
  Music,
  Smile,
  Home,
  BookUser,
  Image as ImageIcon,
  Store,
  Briefcase,
  UsersRound
} from "lucide-react";

export default function Page() {
  const [posts, setPosts] = useAtom(postsAtom);
  const [text, setText] = useAtom(textAtom);
  const [image, setImage] = useAtom(imageAtom);
  const inputRef = useRef(null);

  const mockUsersFeed = useMemo(
    () => [
      {
        id: 1,
        name: "Mimi",
        profile: "https://art.pixilart.com/sr247f1eb4e98aws3.png",
        image: "https://art.pixilart.com/sr21a81a4f688aws3.png",
        createdAt: new Date(Date.now() - 5 * 60 * 1000),
        captions: "As the sun sets, let go of what no longer serves you",
        comments: [
          {
            id: 1,
            user: "MeowMeow87",
            text: "That’s so cute! 😻",
            createdAt: new Date(Date.now() - 25 * 60 * 1000),
          },
          {
            id: 2,
            user: "PurrfectMom",
            text: "Mine does that too! 😂",
            createdAt: new Date(Date.now() - 25 * 60 * 1000),
          },
        ],
      },
      {
        id: 2,
        name: "Leo",
        profile: "https://art.pixilart.com/sr26ceeb6ed62aws3.png",
        image: "https://art.pixilart.com/original/sr5z6fd653edf9aws3.gif",
        createdAt: new Date(Date.now() - 5 * 60 * 1000),
        comments: [
          {
            id: 1,
            user: "MeowMeoweiei",
            text: "That’s so cute! 😻",
          },
        ],
        captions: "Good vibes only. 😎🌿",
      },
      {
        id: 3,
        name: "Nana",
        profile: "https://art.pixilart.com/original/sr2c6481195as004.gif",
        image: "https://art.pixilart.com/original/sr2a8115866c5aws3.gif",
        createdAt: new Date(Date.now() - 25 * 60 * 1000),
        comments: [
          {
            id: 1,
            user: "MeowMeow87",
            text: "That’s so cool!",
            createdAt: new Date(Date.now() - 5 * 60 * 1000),
          },
          {
            id: 2,
            user: "PurrfectMom",
            text: "Mine does that too!",
            createdAt: new Date(Date.now() - 15 * 60 * 1000),
          },
        ],
        captions:
          "Every time I move, my cat is like: 'Where are YOU going?!' 😼🚶‍♀️",
      },
    ],
    []
  );

  const handleAddPost = () => {
    if (text.trim() !== "") {
      const newPost = {
        id: Date.now(),
        name: "Pipix Funny :3🍀",
        captions: text,
        image: image || null,
        createdAt: new Date(),
        profile: "/images/sr2acfaf5d57caws3.gif",
      };
      setPosts([newPost, ...posts]);
      setText("");
      setImage(null);
    }
  };

  useEffect(() => {
    localStorage.setItem("user-posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    const stored = localStorage.getItem("user-posts");
    if (stored) {
      const parsed = JSON.parse(stored).map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt),
      }));
      setPosts(parsed);
    }
  }, [setPosts]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const allPosts = [...posts, ...mockUsersFeed].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  function getTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(seconds / 3600);
    const days = Math.floor(seconds / 86400);

    if (seconds < 60) return "ไม่กี่วินาทีที่แล้ว";
    if (minutes < 60) return `${minutes} นาทีที่แล้ว`;
    if (hours < 24) return `${hours} ชั่วโมงที่แล้ว`;
    if (days < 7) return `${days} วันที่แล้ว`;

    return date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/0b/6d/83/0b6d83022b5326ca71c715e7c1743dfb.jpg')",
      }}
    >
      <Navbar />

      <div className="max-w-20xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="hidden md:block md:col-span-3">
          <div className=" bg-white p-4 rounded-2xl shadow text-sm space-y-5">
            <ul className="space-y-6">
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <Home className="w-6 h-6" />
                Feed
              </li>
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <BookUser className="w-6 h-6" />
                Friend
              </li>
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <ImageIcon className="w-6 h-6" />
                <p className="text-sm-lg">Photos</p>
              </li>
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <UsersRound className="w-6 h-6" />
                <p className="text-sm-lg">Community</p>
              </li>
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <Briefcase className="w-6 h-6" />
                <p className="text-sm-lg">Work</p>
              </li>
              
             
              <li className="hover:text-pink-400 cursor-pointer flex items-center gap-4">
                <Store className="w-6 h-6" />
                Marketplace
              </li>
            </ul>
          </div>
        </div>

        {/* Center Content */}
        <div className="sticky top-24 md:col-span-6 space-y-4">
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
                placeholder="What are you thinking?"
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {image && (
              <div className="text-center">
                <img
                  src={image}
                  alt="Preview"
                  className="rounded-xl max-h-60 object-cover mx-auto mt-2"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between mt-2 gap-2 border-t pt-2">
              {/* Left icons */}
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-500 hover:text-pink-400 cursor-pointer" />
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
                <Image
                  className="w-5 h-5 hover:text-pink-400 cursor-pointer"
                  onClick={() => inputRef.current.click()}
                />

                <Music className="w-5 h-5 text-gray-500 hover:text-pink-400 cursor-pointer" />
                <Smile className="w-5 h-5 text-gray-500 hover:text-pink-400 cursor-pointer" />
              </div>
              {/* Post Button */}

              <button
                className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-4 py-2 rounded-xl text-sm sm:text-base"
                onClick={handleAddPost}
              >
                Post
              </button>
            </div>
          </div>

          {/* Feed */}
          {allPosts.map((users) => (
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
                  <p className="text-sm text-gray-400">
                    {getTimeAgo(new Date(users.createdAt))}
                  </p>
                </div>
              </div>

              {/* Caption */}
              <p>{users.captions}</p>

              {/* Image */}
              {users.image && (
                <a href={users.image} rel="noopener noreferrer">
                  <img
                    src={users.image}
                    className="rounded-xl max-h-80 object-cover w-full cursor-pointer hover:brightness-95 transition"
                    alt="image-post"
                  />
                </a>
              )}

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
        <div className=" hidden md:block md:col-span-3">
          <div className=" bg-white p-4 rounded-2xl shadow text-sm space-y-5">
            <p className="font-bold text-pink-500 text-lg">Online Friends</p>
            <div className="space-y-2">
              {[
                {
                  id: 1,
                  name: "Leo",
                  profile: "https://art.pixilart.com/sr26ceeb6ed62aws3.png",
                  isOnline: true,
                },
                {
                  id: 2,
                  name: "Mimi",
                  profile: "https://art.pixilart.com/sr247f1eb4e98aws3.png",
                  isOnline: false,
                },
                {
                  id: 3,
                  name: "Minnie Park",
                  profile:
                    "https://i.pinimg.com/736x/f2/01/05/f20105b53bb69e61990ff9037daa8a9f.jpg",
                  isOnline: true,
                },
              ].map((user) => (
                <div key={user.id} className="flex items-center gap-3 relative">
                  <div className="relative">
                    <img
                      src={user.profile}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span
                      className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-white ${
                        user.isOnline ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{user.name}</p>
                    <button className="text-pink-400 hover:underline text-xs">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 bg-white p-4 rounded-2xl shadow text-sm space-y-5">
            <p className="font-bold text-pink-500 text-lg">Trending Hashtags</p>

            {/* Trending Hashtags */}
            <div className="space-y-2">
              <p className="text-xs text-gray-400 uppercase">Trending now</p>
              <div className="hover:bg-pink-50 p-2 rounded-md cursor-pointer">
                <p className="font-semibold text-gray-800">#SoftCafe</p>
                <p className="text-xs text-gray-400">
                  3.2K posts · Trending in Thailand
                </p>
              </div>
              <div className="hover:bg-pink-50 p-2 rounded-md cursor-pointer">
                <p className="font-semibold text-gray-800">#เมืองแมว</p>
                <p className="text-xs text-gray-400">
                  1.5K posts · Trending for pets
                </p>
              </div>
            </div>
          </div>
          <div className="mt-7 bg-white p-4 rounded-2xl shadow text-sm space-y-5">
            <p className="font-bold text-pink-500 text-lg">
              Suggestions for you
            </p>

            {/* Trending Hashtags */}

            {/* Suggested Users */}
            <div className="space-y-2 pt-2">
              <p className="text-xs text-gray-400 uppercase">Who to follow</p>
              {[
                {
                  name: "Leo",
                  username: "@leocat",
                  img: "https://art.pixilart.com/sr26ceeb6ed62aws3.png",
                },
                {
                  name: "Mimi",
                  username: "@mimi_latte",
                  img: "https://art.pixilart.com/sr247f1eb4e98aws3.png",
                },
              ].map((user, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between hover:bg-pink-50 p-2 rounded-md cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img src={user.img} className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-400">{user.username}</p>
                    </div>
                  </div>
                  <button className="text-pink-500 hover:underline text-xs font-medium">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
