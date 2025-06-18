"use client";

import React, { useState } from "react";
import Image from "next/image";
import FramerWrapper from "@/components/FramerWrapper";

const services = [
  {
    id: 1,
    name: "Higienização e Limpeza",
    icon: "🧹",
    description:
      "A higienização e limpeza do ar condicionado são essenciais para manter a qualidade do ar, removendo poeira, ácaros e bactérias, garantindo o funcionamento eficiente do equipamento.",
    image: "/assets/higienizacao-limpeza.png",
  },
  {
    id: 2,
    name: "Instalação",
    icon: "🛠️",
    description:
      "A instalação profissional de ar condicionado assegura o desempenho ideal do equipamento, com posicionamento correto e verificação das condições elétricas e estruturais.",
    image: "/assets/instalacao.png",
  },
  {
    id: 3,
    name: "Manutenção Preventiva",
    icon: "🔧",
    description:
      "A manutenção preventiva evita falhas inesperadas, prolonga a vida útil do ar condicionado e reduz o consumo de energia com verificações regulares e ajustes necessários.",
    image: "/assets/manutencao-preventiva.png",
  },
  {
    id: 4,
    name: "Serviços Especializados para sua casa",
    icon: "🏡",
    description:
      "Oferecemos serviços personalizados para atender às necessidades específicas da sua casa, garantindo conforto e eficiência na climatização dos ambientes.",
    image: "/assets/servico-especializado.png",
  },
  {
    id: 5,
    name: "Atendimento Rápido e Eficiente",
    icon: "⚡",
    description:
      "Nosso atendimento rápido e eficiente garante que qualquer problema no seu ar condicionado seja resolvido com agilidade e qualidade.",
    image: "/assets/atendimento.png",
  },
];

const Servicos = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <FramerWrapper>
      <section className="min-h-screen">
        <div className="container mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Nossos Serviços</h2>
          <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-12">
            {/* Left Panel: Service List */}
            <div className="flex-1 space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeService.id === service.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300"
                    }`}
                >
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                </div>
              ))}
            </div>

            {/* Right Panel: Image and Description */}
            <div className="flex-1">
              <FramerWrapper key={activeService.image}>
                <Image
                  src={activeService.image}
                  alt={activeService.name}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md object-cover mb-4"
                />
              </FramerWrapper>
              <p className="text-xl text-gray-700 dark:text-gray-400 mt-4">
                {activeService.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </FramerWrapper>
  );
};

export default Servicos;

