"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MessageSquare,
  Bell,
  Search,
  Settings,
  LogOut,
  User,
} from "lucide-react";

const mockUsers = [
  {
    id: 1,
    name: "Mimi",
    profile: "https://art.pixilart.com/sr247f1eb4e98aws3.png",
  },
  {
    id: 2,
    name: "Leo",
    profile: "https://art.pixilart.com/sr26ceeb6ed62aws3.png",
  },
  {
    id: 3,
    name: "Nana",
    profile: "https://art.pixilart.com/original/sr2c6481195as004.gif",
  },
];

const Navbar = () => {
  const [isChatDropdownOpen, setChatDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setChatDropdownOpen(false);
        setProfileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectUser = (userId) => {
    setChatDropdownOpen(false);
    router.push(`/chats?user=${userId}`);
  };

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md px-4 py-3 flex justify-between items-center">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-4">
        <img
          className="w-20"
          src="/images/Logo-removebg-preview.png"
          alt="Logo"
        />

        {/* Search bar - show on sm and up */}
        <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-40"
          />
        </div>
      </div>

      <div className="relative flex items-center gap-3 sm:gap-5">
        <button className="block sm:hidden text-pink-400 hover:text-pink-600">
          <Search size={22} />
        </button>

        <button className="text-pink-400 hover:text-pink-600">
          <Bell size={20} />
        </button>

        {/* Chat Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => {
              setChatDropdownOpen(!isChatDropdownOpen);
              setProfileDropdownOpen(false);
            }}
            className="text-pink-400 hover:text-pink-600"
          >
            <MessageSquare size={20} />
          </button>

          {isChatDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg p-2 z-20">
              <p className="text-pink-500 font-semibold text-sm px-2 pb-2">
                Select a chat 🐾
              </p>
              {mockUsers.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleSelectUser(user.id)}
                  className="flex items-center gap-3 px-2 py-2 hover:bg-pink-50 cursor-pointer rounded-md"
                >
                  <img
                    src={user.profile}
                    className="w-8 h-8 rounded-full"
                    alt={user.name}
                  />
                  <span className="text-sm text-gray-700">{user.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => {
              setProfileDropdownOpen(!isProfileDropdownOpen);
              setChatDropdownOpen(false);
            }}
          >
            <img
              src="/images/sr2acfaf5d57caws3.gif"
              className="w-10 h-10 rounded-full ring-2 ring-pink-200"
              alt="User Profile"
            />
          </button>

          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20 text-sm">
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 text-gray-700"
              >
                <img
                  src="/images/sr2acfaf5d57caws3.gif"
                  className="w-6 h-6 rounded-full "
                  alt="User Profile"
                />{" "}
                Pipix Funny :3🍀
              </Link>
              <Link
                href="/profile/edit"
                className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 text-gray-700"
              >
                <User size={16} /> Edit Profile
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 text-gray-700"
              >
                <Settings size={16} /> Settings
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-pink-50 text-gray-700"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
