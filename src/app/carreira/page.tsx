"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Briefcase, CheckCircle2, Heart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

const careerSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  position: z.string().min(1, "Selecione um cargo"),
  experience: z.string().min(1, "Selecione seu nível de experiência"),
  message: z.string().min(20, "Mensagem deve ter pelo menos 20 caracteres"),
});

type CareerFormData = z.infer<typeof careerSchema>;

const positions = [
  "Técnico em Refrigeração e Climatização",
  "Instalador de Ar-Condicionado",
  "Auxiliar Técnico",
  "Atendente / Recepcionista",
  "Coordenador de Equipe",
  "Vendedor(a) Técnico(a)",
];

const experienceLevels = [
  "Sem experiência (Trainee/Aprendiz)",
  "1 a 2 anos",
  "3 a 5 anos",
  "Mais de 5 anos",
];

export default function Carreira() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
  });

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.error || "Erro ao enviar candidatura");
      }
    } catch {
      toast.error("Erro ao enviar candidatura. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 text-white rounded-lg p-8 md:p-12 mb-8 text-center">
        <div className="flex justify-center mb-4">
          <Briefcase className="w-16 h-16" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Trabalhe Conosco
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          Faça parte de uma equipe vencedora
        </p>
      </div>

      {/* Why Work With Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <TrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
            Crescimento Profissional
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Plano de carreira estruturado e oportunidades de crescimento
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <Users className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
            Equipe Unida
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Ambiente colaborativo e respeitoso
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <CheckCircle2 className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
            Benefícios
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Vale transporte, alimentação e plano de saúde
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <Heart className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
            Valorização
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Reconhecimento pelo seu trabalho e dedicação
          </p>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Vagas Disponíveis
        </h2>
        <div className="space-y-4">
          {positions.map((position) => (
            <div
              key={position}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {position}
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                  Tempo Integral
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                  CLT
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                  São Paulo, SP
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Candidate-se
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Preencha o formulário abaixo e junte-se à nossa equipe. Valorizamos
          profissionais dedicados e com vontade de crescer!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nome Completo *
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Telefone/WhatsApp *
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="(11) 98765-4321"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Cargo Pretendido *
              </label>
              <select
                id="position"
                {...register("position")}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Selecione um cargo</option>
                {positions.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
              {errors.position && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.position.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nível de Experiência *
              </label>
              <select
                id="experience"
                {...register("experience")}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Selecione...</option>
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              {errors.experience && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.experience.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Conte-nos sobre você *
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Descreva sua experiência, qualificações e por que gostaria de trabalhar conosco..."
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-lg"
          >
            {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
          </button>

          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Após análise do seu currículo, entraremos em contato para
            prosseguir com o processo seletivo.
          </p>
        </form>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Nossos Benefícios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Salário competitivo
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Vale transporte
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Vale alimentação
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Plano de saúde
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Treinamentos
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Ambiente agradável
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
