"use client";

import { useAppDispatch, useAppSelector } from "@/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Wrench,
  Handshake,
  Info,
  House,
  LucideIcon,
  Menu,
  CalendarClock,
  ReceiptText,
  AirVent,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          }
          hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white" : ""
          }
          }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${isCollapsed ? "hidden" : "block"
            } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${isSideBarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSideBarCollapsed ? "ps-5" : "ps-8"
          }`}
      >
        <div><AirVent /></div>
        <h1
          className={`${isSideBarCollapsed ? "hidden" : "block"
            } font-extrabold text-sm md:text-2xl`}
        >
          CONSULTORIA
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}

      <div className="flex-grow mt-8">
        <SidebarLink
          href="/"
          icon={House}
          label="Página Inicial"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/servicos"
          icon={Wrench}
          label="Serviços"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/sobre"
          icon={Info}
          label="Sobre nós"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/contato"
          icon={ReceiptText}
          label="Contato"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/reserva"
          icon={CalendarClock}
          label="Agendar Serviços"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/carreira"
          icon={Handshake}
          label="Trabalha conosco"
          isCollapsed={isSideBarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isSideBarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Andriel José
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
