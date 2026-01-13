"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Qual é o prazo médio para instalação de um ar-condicionado?",
    answer:
      "O prazo médio para instalação de um ar-condicionado split convencional é de 3 a 5 horas. Para sistemas maiores ou centrais, o prazo pode variar de 1 a 3 dias, dependendo da complexidade do projeto.",
  },
  {
    id: 2,
    question: "Com que frequência devo fazer a manutenção preventiva?",
    answer:
      "Recomendamos fazer a manutenção preventiva a cada 6 meses para uso residencial e a cada 3 meses para uso comercial intensivo. A manutenção regular aumenta a vida útil do equipamento e garante eficiência energética.",
  },
  {
    id: 3,
    question: "Vocês oferecem garantia nos serviços?",
    answer:
      "Sim! Oferecemos garantia de 90 dias para todos os serviços de instalação e manutenção. Para peças substituídas, a garantia segue o prazo do fabricante (geralmente 12 meses).",
  },
  {
    id: 4,
    question: "Quanto custa uma limpeza completa do ar-condicionado?",
    answer:
      "O valor varia conforme o tipo e tamanho do aparelho. Em média, a higienização de um split residencial custa entre R$ 120 e R$ 250. Entre em contato para um orçamento personalizado.",
  },
  {
    id: 5,
    question: "Vocês atendem em finais de semana e feriados?",
    answer:
      "Sim, oferecemos atendimento aos sábados das 8h às 13h. Para emergências em domingos e feriados, temos um serviço especial mediante agendamento prévio e taxa adicional.",
  },
  {
    id: 6,
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos dinheiro, PIX, cartão de crédito (até 12x sem juros para valores acima de R$ 500) e cartão de débito. Para empresas, também trabalhamos com boleto bancário.",
  },
  {
    id: 7,
    question: "É necessário estar presente durante o serviço?",
    answer:
      "Sim, é necessário que um responsável maior de 18 anos esteja presente durante todo o serviço para autorizar o trabalho e receber as orientações finais do técnico.",
  },
  {
    id: 8,
    question: "Vocês vendem aparelhos de ar-condicionado?",
    answer:
      "No momento, focamos em serviços de instalação, manutenção e higienização. Porém, podemos indicar fornecedores confiáveis e auxiliar na escolha do modelo ideal para sua necessidade.",
  },
  {
    id: 9,
    question: "Como sei se meu ar-condicionado precisa de recarga de gás?",
    answer:
      "Sinais comuns incluem: ar não gelando adequadamente, gelo na serpentina, ruídos estranhos e aumento no consumo de energia. Se notar esses sintomas, agende uma avaliação técnica.",
  },
  {
    id: 10,
    question: "Qual a área de cobertura dos serviços?",
    answer:
      "Atendemos toda a região metropolitana de São Paulo, incluindo Guarulhos, ABC Paulista, Osasco e cidades vizinhas. Para outras regiões, consulte disponibilidade através do WhatsApp ou formulário de contato.",
  },
  {
    id: 11,
    question: "O que está incluído na higienização do ar-condicionado?",
    answer:
      "A higienização inclui: limpeza do filtro de ar, limpeza das serpentinas, higienização do gabinete interno e externo, drenagem do sistema e aplicação de produto bactericida e fungicida.",
  },
  {
    id: 12,
    question: "Posso cancelar ou reagendar um serviço?",
    answer:
      "Sim, você pode cancelar ou reagendar com até 24 horas de antecedência sem nenhum custo. Cancelamentos com menos de 24 horas podem estar sujeitos a taxa de reagendamento.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full py-6 px-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-6 text-gray-700 dark:text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 text-white rounded-lg p-8 md:p-12 mb-8 text-center">
        <div className="flex justify-center mb-4">
          <HelpCircle className="w-16 h-16" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Perguntas Frequentes
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          Tire suas dúvidas sobre nossos serviços
        </p>
      </div>

      {/* FAQ List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onClick={() => toggleFAQ(faq.id)}
          />
        ))}
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Não encontrou sua resposta?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Entre em contato conosco! Nossa equipe está pronta para ajudar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contato"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Fale Conosco
          </a>
          <a
            href="https://wa.me/5511987654321"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
