"use client";

import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Cliente Residencial",
    rating: 5,
    comment:
      "Excelente serviço! A equipe foi pontual, profissional e deixou tudo impecável. Meu ar-condicionado está funcionando perfeitamente. Super recomendo!",
    date: "Dezembro 2025",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Proprietário de Empresa",
    rating: 5,
    comment:
      "Contratei para instalação de ar-condicionado no escritório e fiquei impressionado com a qualidade. Técnicos muito competentes e preço justo.",
    date: "Novembro 2025",
  },
  {
    id: 3,
    name: "Ana Paula Oliveira",
    role: "Cliente Residencial",
    rating: 5,
    comment:
      "A higienização foi impecável. A diferença no ar que respiramos em casa foi notável. Voltarei a contratar com certeza!",
    date: "Outubro 2025",
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    role: "Gerente de Loja",
    rating: 5,
    comment:
      "Atendimento rápido e eficiente. Resolveram um problema urgente no ar-condicionado da loja em poucas horas. Salvaram meu dia!",
    date: "Setembro 2025",
  },
  {
    id: 5,
    name: "Fernanda Costa",
    role: "Cliente Residencial",
    rating: 5,
    comment:
      "Profissionais muito educados e cuidadosos. Explicaram todo o processo e deram dicas de manutenção. Estou muito satisfeita!",
    date: "Agosto 2025",
  },
  {
    id: 6,
    name: "Roberto Alves",
    role: "Síndico de Condomínio",
    rating: 5,
    comment:
      "Realizaram manutenção em todos os aparelhos do condomínio com muita organização. Preço competitivo e serviço de primeira.",
    date: "Julho 2025",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-16 px-4 rounded-lg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Confira a experiência de quem confia em nossos serviços
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                &quot;{testimonial.comment}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Junte-se a mais de 5.000 clientes satisfeitos
          </p>
          <a
            href="/reserva"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Solicite Seu Orçamento
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
