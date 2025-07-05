"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");

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
    { id: "contact", label: t("contact") },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden lg:block">
        <ul className="flex gap-6 text-lg uppercase text-BrowP">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              <li>{item.label}</li>
            </a>
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
          <ul className="flex flex-col items-center gap-8 text-lg uppercase text-BrowP">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
              >
                <li>{item.label}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
