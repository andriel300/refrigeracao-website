"use client";

import { Award, CheckCircle2, MapPin, Target, Users } from "lucide-react";

export default function Sobre() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 text-white rounded-lg p-8 md:p-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-xl md:text-2xl opacity-90">
          Mais de 10 anos levando conforto térmico para você
        </p>
      </div>

      {/* Missão, Visão e Valores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Missão
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Proporcionar conforto térmico com excelência, oferecendo soluções
            completas em climatização através de serviços de qualidade,
            atendimento personalizado e compromisso com a satisfação dos nossos
            clientes.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Visão
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Ser referência em serviços de climatização na região, reconhecida
            pela qualidade, inovação e compromisso com o meio ambiente,
            expandindo nossos serviços e mantendo a excelência no atendimento.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Valores
            </h2>
          </div>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              Compromisso com a qualidade
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              Transparência e honestidade
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              Respeito ao cliente e ao meio ambiente
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              Inovação constante
            </li>
          </ul>
        </div>
      </div>

      {/* Nossa História */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Nossa História
        </h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            A <strong>Ar Comfort</strong> nasceu em 2014 com o objetivo de
            oferecer serviços de climatização de alta qualidade na região de São
            Paulo. Desde o início, nossa equipe se dedicou a proporcionar
            conforto térmico para residências e empresas, sempre com foco na
            excelência e satisfação dos clientes.
          </p>
          <p>
            Com mais de <strong>10 anos de experiência</strong> no mercado, já
            atendemos mais de 5.000 clientes e realizamos mais de 12.000
            serviços, incluindo instalações, manutenções preventivas,
            higienizações e reparos de sistemas de ar-condicionado.
          </p>
          <p>
            Nossa equipe é formada por <strong>25 técnicos certificados</strong>{" "}
            e altamente qualificados, que passam por treinamentos regulares para
            garantir que estejam sempre atualizados com as melhores práticas e
            tecnologias do mercado.
          </p>
        </div>
      </div>

      {/* Por Que Escolher a Ar Comfort */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Por Que Escolher a Ar Comfort?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Técnicos Certificados
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Todos os nossos profissionais são certificados e treinados para
                oferecer o melhor serviço.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Garantia de Qualidade
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Todos os serviços incluem garantia e suporte pós-atendimento.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Atendimento Rápido
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Priorizamos a agilidade sem comprometer a qualidade do serviço.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Preços Justos e Transparentes
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Orçamentos claros e sem taxas ocultas. Você sabe exatamente o
                que está pagando.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Equipamentos de Última Geração
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Utilizamos ferramentas e equipamentos modernos para garantir
                eficiência.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Cada cliente recebe atenção especial e soluções customizadas
                para suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Área de Cobertura */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
        <div className="flex items-center mb-6">
          <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Área de Cobertura
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Atendemos toda a região metropolitana de São Paulo e cidades vizinhas:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 dark:text-gray-300">
          <div>• São Paulo (Capital)</div>
          <div>• Guarulhos</div>
          <div>• São Bernardo do Campo</div>
          <div>• Santo André</div>
          <div>• Osasco</div>
          <div>• Diadema</div>
          <div>• Mauá</div>
          <div>• Carapicuíba</div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm italic">
          Não encontrou sua cidade? Entre em contato conosco e consulte a
          disponibilidade!
        </p>
      </div>

      {/* Certificações */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
        <div className="flex items-center mb-6">
          <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Certificações e Qualificações
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Nossos técnicos possuem certificações reconhecidas pelo mercado:
        </p>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-center">
            <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
            Certificação em Refrigeração e Climatização
          </li>
          <li className="flex items-center">
            <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
            Treinamento em Sistemas Split e Centrais
          </li>
          <li className="flex items-center">
            <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
            Capacitação em Eficiência Energética
          </li>
          <li className="flex items-center">
            <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
            Certificação em Segurança do Trabalho (NR-10 e NR-35)
          </li>
        </ul>
      </div>
    </div>
  );
}
