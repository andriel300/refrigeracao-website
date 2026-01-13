"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-100 dark:text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre a Empresa */}
          <div className="space-y-4">
            <h3 className="text-white dark:text-gray-900 text-lg font-bold">
              Ar Comfort
            </h3>
            <p className="text-sm">
              Serviços profissionais de climatização com excelência e
              compromisso. Mais de 10 anos levando conforto para você.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 dark:hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-white dark:text-gray-900 text-lg font-bold">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white dark:hover:text-gray-900 transition-colors"
                >
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-white dark:hover:text-gray-900 transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-white dark:hover:text-gray-900 transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="hover:text-white dark:hover:text-gray-900 transition-colors"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white dark:hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="text-white dark:text-gray-900 text-lg font-bold">
              Nossos Serviços
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Instalação de Ar-Condicionado</li>
              <li>Manutenção Preventiva</li>
              <li>Higienização e Limpeza</li>
              <li>Conserto e Reparos</li>
              <li>Serviços Emergenciais</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-white dark:text-gray-900 text-lg font-bold">
              Entre em Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+5511987654321"
                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                  >
                    (11) 98765-4321
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contato@arcomfort.com.br"
                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                  >
                    contato@arcomfort.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  Av. Exemplo, 1234
                  <br />
                  São Paulo, SP
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-300 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Ar Comfort. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
