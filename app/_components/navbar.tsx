"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#our-process" },
  { label: "Payments", href: "#payments" },
  { label: "FAQs", href: "#faqs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 w-full max-w-310 mx-auto relative">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <Image src="/logo.png" alt="logo" width={140} height={24} />
        </a>

        {/* Menu Desktop (visível a partir de 1024px / lg) */}
        <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white text-base font-medium hover:text-[#2BB32A] transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão Contact Desktop */}
        <a
          href="#"
          className="hidden lg:flex border-2 border-[#2BB32A] px-8 py-3 justify-center items-center transition-colors hover:bg-[#259E24] hover:border-[#259E24] hover:text-white rounded-[64px] text-base font-bold leading-6 text-[#2BB32A]"
        >
          Contact
        </a>

        {/* Botão Hambúrguer Mobile/Tablet (visível abaixo de 1024px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden text-white p-2 focus:outline-none"
        >
          {isOpen ? (
            // Ícone X (Fechar)
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Ícone Hambúrguer (Abrir)
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu Dropdown Mobile/Tablet */}
      {isOpen && (
        <div className="lg:hidden mt-4 p-6 rounded-2xl bg-[#283430]/24 backdrop-blur-md border border-white/10 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white text-lg font-medium hover:text-[#2BB32A] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="w-full border-2 border-[#2BB32A] py-3 flex justify-center items-center transition-colors bg-[#2BB32A] text-white rounded-[64px] text-base font-bold"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
