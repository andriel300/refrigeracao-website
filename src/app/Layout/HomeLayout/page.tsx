"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Stats from "@/components/Stats";
import FramerWrapper from "@/components/FramerWrapper";

// Images for the slider
const images = [
  "/assets/headercta.png",
  "/assets/cta-header.png",
  "/assets/header3.png",
];

const HomeLayout = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <FramerWrapper>
      <section className="h-full">
        <div className="container mx-auto h-full px-4">
          <div className="flex flex-col items-center justify-between xl:flex-row xl:py-16">
            {/* Left Section: Text and Button */}
            <div className="flex flex-col items-start text-center xl:text-left xl:w-1/2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase">
                Climatização
              </h1>
              <p className="text-lg sm:text-xl mb-8 max-w-3xl">
                Conte conosco para instalação, higienização e manutenção de ar condicionado. Serviços rápidos, confiáveis e com garantia de satisfação.
              </p>
              <p className="text-md sm:text-lg mb-8 text-gray-600 dark:text-gray-400">
                🌟 Escolha conforto e qualidade com nossa equipe especializada.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="px-6 py-3 font-semibold text-white bg-blue-500 border border-transparent rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500 dark:focus:ring-blue-200"
                //className="hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-400 dark:hover:text-white"
                >
                  <Link href="/reserva">Agendar Agora</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="px-6 py-3 font-semibold text-blue-500 border border-blue-500 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none dark:hover:bg-blue-700 dark:hover:text-white"
                >
                  <Link href="/sobre">Saiba Mais</Link>
                </Button>
              </div>
            </div>

            {/* Right Section: Image and auto slider */}
            <div className="relative xl:h-[500px] xl:w-[500px] h-[300px] w-[300px] flex-shrink-0 mb-8 xl:mb-0 xl:ml-8 overflow-hidden rounded-lg shadow-lg">
              <AnimatePresence>
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage]}
                    alt={`Slider Image ${currentImage + 1}`}
                    fill
                    priority
                    sizes="(max-width: 600px) 300px, (max-width: 1200px) 500px, 500px"
                    className="object-contain rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </FramerWrapper>

  );
};

export default HomeLayout;

