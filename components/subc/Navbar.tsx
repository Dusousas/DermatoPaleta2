"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const navItems = [
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "services", label: t("services") },
    { id: "questions", label: t("questions") },
    { id: "contact", label: t("contact") },
  ];

  // Verifica se está em uma página de serviço (slug)
  const isServicePage = router.pathname.includes('/services/[slug]');
  const currentLocale = router.locale || router.defaultLocale || '';

  // Função para lidar com cliques nos links
  const handleNavClick = async (itemId: string) => {
    setIsOpen(false); // Fecha o menu mobile

    if (isServicePage) {
      // Se estiver em uma página de serviço, navega para a home e depois rola
      const homeUrl = currentLocale === router.defaultLocale ? '/' : `/${currentLocale}`;
      
      await router.push(homeUrl);
      
      // Aguarda um pouco para a página carregar e depois rola
      setTimeout(() => {
        const element = document.getElementById(itemId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Se já estiver na home, apenas rola para a seção
      const element = document.getElementById(itemId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Função para gerar o href correto
  const getHref = (itemId: string) => {
    if (isServicePage) {
      // Se estiver em uma página de serviço, volta para a home
      const homeUrl = currentLocale === router.defaultLocale ? '/' : `/${currentLocale}`;
      return `${homeUrl}#${itemId}`;
    } else {
      // Se já estiver na home, apenas âncora
      return `#${itemId}`;
    }
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden lg:block">
        <ul className="flex gap-6 text-lg uppercase text-BrowP">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={getHref(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="text-P2BlueD hover:text-BrowP transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-BrowP focus:outline-none relative z-50"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav
          className={`fixed top-0 right-0 h-screen w-full bg-white shadow-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col text-cyan-100 items-center gap-8 text-lg uppercase text-BrowP">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={getHref(item.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="text-P2BlueD hover:text-BrowP transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}