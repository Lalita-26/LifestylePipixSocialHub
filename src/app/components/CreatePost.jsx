"use client";
import { useRef, useState, useEffect } from "react";
import {
  Image,
  MapPin,
  Music,
  Smile,
  Heart,
  MessageCircle,
  Share,
} from "lucide-react";

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
export default function CreatePost() {
  const inputRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const mockupUserPosts = [
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
      captions:
        "Every time I move, my cat is like: 'Where are YOU going?!' 😼🚶‍♀️",
    },
  ];
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const storedPosts = localStorage.getItem("user-posts");
    if (storedPosts) {
      const parsed = JSON.parse(storedPosts).map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt),
      }));
      setPosts(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user-posts", JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = () => {
    if (text.trim() !== "") {
      const newPost = {
        id: Date.now(),
        name: "Pipix Funny :3🍀",
        captions: text,
        image: image || null,
        createdAt: new Date(),
      };
      setPosts([newPost, ...posts]);
      setText("");
      setImage(null);
    }
  };
  const allPosts = [...posts, ...mockupUserPosts ].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <div className="w-[95%] sm:w-[90%] md:max-w-2xl mx-auto bg-white mt-6 p-4 rounded-2xl shadow space-y-2">
      <div className="flex items-start gap-4">
        <img
          src="/images/sr2acfaf5d57caws3.gif"
          className="w-12 h-12 rounded-full"
          alt="Profile"
        />
        <textarea
          className="w-full p-2 resize-none text-sm focus:outline-none text-gray-800 placeholder-gray-400"
          placeholder="What are you thinking?"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {image && (
        <div className="w-full flex justify-center">
          <a href={image} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt="Preview"
              className="rounded-xl max-h-60 max-w-[400px] object-cover mt-2 cursor-pointer hover:brightness-95"
            />
          </a>
        </div>
      )}

      <div className="border-b border-gray-200 mt-2 mb-1" />

      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-4 items-center text-gray-500">
          <MapPin className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
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
          <Music className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
          <Smile className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
        </div>
        <button
          className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-4 py-2 rounded-xl text-sm"
          onClick={handleAddPost}
        >
          Post
        </button>
        <div className="w-[95%] sm:w-[90%] md:max-w-2xl mx-auto mt-6 space-y-6 px-4 pb-24">
          {allPosts.map((post) => (
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
                  <p className="text-sm text-gray-400">
                    {getTimeAgo(new Date(post.createdAt))}
                  </p>
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
      </div>
    </div>
  );
}
