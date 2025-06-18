"use client";

import { useAppDispatch, useAppSelector } from "@/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, AirVent, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* LADO ESQUERDO */}

      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
        <div className="relative">
          <input
            type="search"
            placeholder="Pesquise aqui"
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* LADO DIREITO */}

      <div className="flex items-center gap-5">
        {/* Dark Mode Button - Always Visible */}
        <button onClick={toggleDarkMode} className="flex items-center">
          {isDarkMode ? (
            <Sun
              className="cursor-pointer text-gray-500 hover:text-blue-500 transition-transform duration-300 hover:rotate-180"
              size={24}
            />
          ) : (
            <Moon
              className="cursor-pointer text-gray-500 hover:text-blue-500 transition-transform duration-300 hover:-rotate-90"
              size={24}
            />
          )}
        </button>

        {/* Divider and Branding - Hidden on Small Screens */}
        <div className="hidden md:flex items-center gap-5">
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="font-semibold">Ar Comfort</span>
            <Link href="/settings">
              <AirVent className="cursor-pointer text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

