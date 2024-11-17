"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const Home = ({ children }: { children: React.ReactNode }) => {
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  // Hydration check
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  if (!hydrated) {
    return null; // Prevent rendering during hydration
  }

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"
        } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      {/* BARRA LATERAL DA ESQUERDA */}
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSideBarCollapsed ? "md:pl-24" : "md:pl-72"
          }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Home>{children}</Home>
    </StoreProvider>
  );
};

export default LayoutWrapper;
