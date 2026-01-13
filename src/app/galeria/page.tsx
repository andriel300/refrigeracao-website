"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/assets/instalacao.png",
    alt: "Instalação de ar-condicionado residencial",
    category: "Instalação",
    title: "Instalação Residencial Completa",
    description: "Sistema split instalado com excelência técnica",
  },
  {
    id: 2,
    src: "/assets/higienizacao-limpeza.png",
    alt: "Higienização profunda de ar-condicionado",
    category: "Higienização",
    title: "Higienização Profunda",
    description: "Limpeza completa com produtos especializados",
  },
  {
    id: 3,
    src: "/assets/manutencao-preventiva.png",
    alt: "Manutenção preventiva de sistema de climatização",
    category: "Manutenção",
    title: "Manutenção Preventiva",
    description: "Revisão completa do sistema",
  },
  {
    id: 4,
    src: "/assets/servico-especializado.png",
    alt: "Serviço especializado em climatização",
    category: "Especializado",
    title: "Serviço Especializado",
    description: "Soluções customizadas para cada necessidade",
  },
  {
    id: 5,
    src: "/assets/atendimento.png",
    alt: "Equipe técnica em atendimento",
    category: "Equipe",
    title: "Nossa Equipe",
    description: "Profissionais certificados e experientes",
  },
  {
    id: 6,
    src: "/assets/header3.png",
    alt: "Instalação de ar-condicionado comercial",
    category: "Instalação",
    title: "Projeto Comercial",
    description: "Climatização para ambientes corporativos",
  },
];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = [
    "Todos",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ];

  const filteredImages =
    filter === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const prevIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const currentImage = galleryImages.find((img) => img.id === selectedImage);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 text-white rounded-lg p-8 md:p-12 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Galeria de Trabalhos
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          Confira nossos projetos e a qualidade dos nossos serviços
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => openLightbox(image.id)}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-xl mb-2">
                {image.title}
              </h3>
              <p className="text-gray-200 text-sm">{image.description}</p>
            </div>
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {image.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && currentImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] mb-4">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
              <p className="text-gray-300">{currentImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Quer um trabalho como esses?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Solicite um orçamento sem compromisso e tenha o mesmo padrão de
          qualidade em sua casa ou empresa.
        </p>
        <a
          href="/reserva"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  );
}
