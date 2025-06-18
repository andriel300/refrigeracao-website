"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "@/redux";
import { motion, AnimatePresence } from 'framer-motion';

const rectangleVariants = {
  initial: { x: "0%" },
  animate: (i: number) => ({
    x: "100%",
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeIn",
    },
  }),
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Animation duration (1 second)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isAnimating && <Loading />}</AnimatePresence>
      <div className={`relative ${isAnimating ? "pointer-events-none" : "pointer-events-auto"}`}>
        {children}
      </div>
    </>
  );
};


const Loading = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 dark:bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-1/5 bg-blue-500 flex items-center justify-center"
          initial="initial"
          animate="animate"
          custom={i}
          variants={rectangleVariants}
          style={{ top: `${i * 20}%` }}
        >
        </motion.div>
      ))}
    </motion.div>
  );
};

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
      <PageTransition>
        <Home>
          {children}
        </Home>
      </PageTransition>
    </StoreProvider>
  );
};

export default LayoutWrapper;
