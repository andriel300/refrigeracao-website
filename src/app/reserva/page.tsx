"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarClock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const bookingSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  phone: z.string().min(10, "Telefone inválido"),
  address: z.string().min(10, "Endereço completo é obrigatório"),
  serviceType: z.string().min(1, "Selecione um tipo de serviço"),
  preferredDate: z.string().optional(),
  urgency: z.enum(["normal", "urgente"]),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const services = [
  "Instalação de Ar-Condicionado",
  "Manutenção Preventiva",
  "Higienização e Limpeza",
  "Conserto e Reparos",
  "Recarga de Gás",
  "Serviço Emergencial",
];

export default function Reserva() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      urgency: "normal",
    },
  });

  const selectedService = watch("serviceType");

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/booking", {
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

        // Opcional: redirecionar para WhatsApp com dados pré-preenchidos
        if (data.urgency === "urgente") {
          const whatsappMessage = encodeURIComponent(
            `Olá! Gostaria de agendar um serviço URGENTE:\n\nNome: ${data.name}\nServiço: ${data.serviceType}\nEndereço: ${data.address}\nTelefone: ${data.phone}`
          );
          window.open(
            `https://wa.me/5511987654321?text=${whatsappMessage}`,
            "_blank"
          );
        }
      } else {
        toast.error(result.error || "Erro ao enviar agendamento");
      }
    } catch {
      toast.error("Erro ao enviar agendamento. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 text-white rounded-lg p-8 md:p-12 mb-8 text-center">
        <div className="flex justify-center mb-4">
          <CalendarClock className="w-16 h-16" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Agendar Serviço
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          Solicite um orçamento sem compromisso
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
            Atendimento Rápido
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Resposta em até 2 horas úteis
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
            Orçamento Gratuito
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Sem compromisso ou taxas ocultas
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
            Profissionais Certificados
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Equipe qualificada e experiente
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Preencha o Formulário
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nome */}
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
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email e Telefone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email (opcional)
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
          </div>

          {/* Endereço */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Endereço Completo *
            </label>
            <input
              id="address"
              type="text"
              {...register("address")}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Rua, Número, Bairro, Cidade - CEP"
            />
            {errors.address && (
              <p className="text-red-600 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Tipo de Serviço */}
          <div>
            <label
              htmlFor="serviceType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Tipo de Serviço *
            </label>
            <select
              id="serviceType"
              {...register("serviceType")}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Selecione um serviço</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <p className="text-red-600 text-sm mt-1">
                {errors.serviceType.message}
              </p>
            )}
          </div>

          {/* Data Preferencial e Urgência */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Data Preferencial (opcional)
              </label>
              <input
                id="preferredDate"
                type="date"
                {...register("preferredDate")}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Urgência *
              </label>
              <div className="flex gap-4 mt-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="normal"
                    {...register("urgency")}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Normal
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="urgente"
                    {...register("urgency")}
                    className="w-4 h-4 text-red-600 focus:ring-red-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Urgente
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Observações */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Observações (opcional)
            </label>
            <textarea
              id="notes"
              {...register("notes")}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Detalhes adicionais sobre o serviço..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-lg"
          >
            {isSubmitting ? "Enviando..." : "Solicitar Agendamento"}
          </button>

          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Ao enviar, você concorda em receber contato via telefone ou email.
          </p>
        </form>
      </div>

      {/* WhatsApp Alternative */}
      <div className="mt-8 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Prefere agendar pelo WhatsApp?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Fale diretamente com nossa equipe e receba atendimento imediato
        </p>
        <a
          href={`https://wa.me/5511987654321?text=${encodeURIComponent(
            selectedService
              ? `Olá! Gostaria de solicitar: ${selectedService}`
              : "Olá! Gostaria de solicitar um orçamento para serviços de climatização."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
