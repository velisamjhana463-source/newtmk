"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Hammer } from "lucide-react";
import { CONTACTS_DATA } from "@/data/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Услуги", href: "#services" },
    { name: "Преимущества", href: "#advantages" },
    { name: "Наши работы", href: "#portfolio" },
    { name: "Как мы работаем", href: "#steps" },
    { name: "География", href: "#geography" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = window.innerWidth >= 1024 ? 130 : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector("#order-form");
    if (targetElement) {
      const headerOffset = window.innerWidth >= 1024 ? 130 : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 group animate-fade-in"
            onClick={(e) => handleLinkClick(e, "#")}
          >
            {/* Logo Icon SVG - 3D structural "C" */}
            <svg
              viewBox="0 0 100 100"
              className="w-10 h-10 group-hover:scale-105 transition-transform duration-300 shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logo-steel" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="50%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="logo-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="logo-light-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* 3D Bottom Blue Plate */}
              <path
                d="M 20,48 L 20,58 L 50,75 L 85,55 L 85,45 L 75,40 L 75,48 L 50,62 L 32,52 L 32,42 Z"
                fill="url(#logo-blue)"
              />
              <path
                d="M 20,58 L 20,62 L 50,79 L 85,59 L 85,55 L 50,75 Z"
                fill="#1e3a8a"
              />

              {/* Top Steel Plate */}
              <path
                d="M 20,38 L 50,20 L 85,40 L 75,45 L 50,29 L 32,38 Z"
                fill="url(#logo-steel)"
              />
              <path
                d="M 20,38 L 32,38 L 32,48 L 20,48 Z"
                fill="#475569"
              />

              {/* Truss lattices */}
              <line x1="40" y1="28" x2="40" y2="42" stroke="#64748b" strokeWidth="2.5" />
              <line x1="50" y1="23" x2="50" y2="38" stroke="#64748b" strokeWidth="2.5" />
              <line x1="60" y1="27" x2="60" y2="42" stroke="#64748b" strokeWidth="2.5" />
              <line x1="70" y1="32" x2="70" y2="45" stroke="#64748b" strokeWidth="2.5" />

              <line x1="32" y1="38" x2="40" y2="42" stroke="#475569" strokeWidth="1.5" />
              <line x1="40" y1="28" x2="50" y2="38" stroke="#475569" strokeWidth="1.5" />
              <line x1="50" y1="23" x2="60" y2="42" stroke="#475569" strokeWidth="1.5" />
              <line x1="60" y1="27" x2="70" y2="45" stroke="#475569" strokeWidth="1.5" />

              {/* Bottom blue truss members */}
              <line x1="40" y1="56" x2="40" y2="70" stroke="#2563eb" strokeWidth="2.5" />
              <line x1="50" y1="60" x2="50" y2="74" stroke="#2563eb" strokeWidth="2.5" />
              <line x1="60" y1="56" x2="60" y2="70" stroke="#2563eb" strokeWidth="2.5" />

              <line x1="32" y1="52" x2="40" y2="70" stroke="#1d4ed8" strokeWidth="1.5" />
              <line x1="40" y1="56" x2="50" y2="74" stroke="#1d4ed8" strokeWidth="1.5" />
              <line x1="50" y1="60" x2="60" y2="70" stroke="#1d4ed8" strokeWidth="1.5" />

              {/* Framing lines */}
              <path d="M 32,38 L 50,28 L 75,43" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
              <path d="M 32,48 L 50,38 L 75,53" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />

              {/* Edge glow highlights */}
              <path d="M 20,38 L 50,20 L 85,40" stroke="url(#logo-light-blue)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            {/* Vertical Separator Line */}
            <div className={`h-8 w-px transition-colors duration-300 ${
              scrolled ? "bg-slate-300" : "bg-white/20"
            }`} />

            {/* Text logo */}
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none transition-colors duration-300 ${
                scrolled ? "text-slate-800" : "text-white"
              }`}>
                СТРОЙСЕРВИС
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-wider mt-1.5 transition-colors duration-300 ${
                scrolled ? "text-slate-500" : "text-slate-400"
              }`}>
                Металлоконструкции
              </span>
            </div>
          </a>

          {/* Contacts & CTA (Desktop/Tablet) */}
          <div className="hidden md:flex items-center space-x-6 shrink-0">
            <a
              href={CONTACTS_DATA.phoneValue}
              className={`flex items-center space-x-2 font-bold transition-colors duration-300 whitespace-nowrap ${
                scrolled ? "text-slate-800 hover:text-blue-600" : "text-white hover:text-blue-400"
              }`}
            >
              <div className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? "bg-slate-100 text-slate-600" : "bg-white/10 text-white"
              }`}>
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm tracking-tight">{CONTACTS_DATA.phoneDisplay}</span>
            </a>
            <button
              onClick={handleCtaClick}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-500 hover:to-slate-700 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              Рассчитать стоимость
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 lg:hidden rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label="Открыть меню"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Bottom Row: Desktop Navigation */}
        <nav className={`hidden lg:flex items-center justify-center space-x-8 mt-4 pt-3 border-t transition-colors duration-300 w-full ${
          scrolled ? "border-slate-100" : "border-white/10"
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-bold transition-colors duration-200 whitespace-nowrap hover:text-blue-500 ${
                scrolled ? "text-slate-600" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            {/* Logo Icon SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-9 h-9 shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logo-steel-mob" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="50%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="logo-blue-mob" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="logo-light-blue-mob" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* 3D Bottom Blue Plate */}
              <path
                d="M 20,48 L 20,58 L 50,75 L 85,55 L 85,45 L 75,40 L 75,48 L 50,62 L 32,52 L 32,42 Z"
                fill="url(#logo-blue-mob)"
              />
              <path
                d="M 20,58 L 20,62 L 50,79 L 85,59 L 85,55 L 50,75 Z"
                fill="#1e3a8a"
              />

              {/* Top Steel Plate */}
              <path
                d="M 20,38 L 50,20 L 85,40 L 75,45 L 50,29 L 32,38 Z"
                fill="url(#logo-steel-mob)"
              />
              <path
                d="M 20,38 L 32,38 L 32,48 L 20,48 Z"
                fill="#475569"
              />

              {/* Truss lattices */}
              <line x1="40" y1="28" x2="40" y2="42" stroke="#64748b" strokeWidth="2.5" />
              <line x1="50" y1="23" x2="50" y2="38" stroke="#64748b" strokeWidth="2.5" />
              <line x1="60" y1="27" x2="60" y2="42" stroke="#64748b" strokeWidth="2.5" />
              <line x1="70" y1="32" x2="70" y2="45" stroke="#64748b" strokeWidth="2.5" />

              <line x1="32" y1="38" x2="40" y2="42" stroke="#475569" strokeWidth="1.5" />
              <line x1="40" y1="28" x2="50" y2="38" stroke="#475569" strokeWidth="1.5" />
              <line x1="50" y1="23" x2="60" y2="42" stroke="#475569" strokeWidth="1.5" />
              <line x1="60" y1="27" x2="70" y2="45" stroke="#475569" strokeWidth="1.5" />

              {/* Bottom blue members */}
              <line x1="40" y1="56" x2="40" y2="70" stroke="#2563eb" strokeWidth="2.5" />
              <line x1="50" y1="60" x2="50" y2="74" stroke="#2563eb" strokeWidth="2.5" />
              <line x1="60" y1="56" x2="60" y2="70" stroke="#2563eb" strokeWidth="2.5" />

              <line x1="32" y1="52" x2="40" y2="70" stroke="#1d4ed8" strokeWidth="1.5" />
              <line x1="40" y1="56" x2="50" y2="74" stroke="#1d4ed8" strokeWidth="1.5" />
              <line x1="50" y1="60" x2="60" y2="70" stroke="#1d4ed8" strokeWidth="1.5" />

              {/* Framing lines */}
              <path d="M 32,38 L 50,28 L 75,43" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
              <path d="M 32,48 L 50,38 L 75,53" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />

              {/* Edge glow highlights */}
              <path d="M 20,38 L 50,20 L 85,40" stroke="url(#logo-light-blue-mob)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            {/* Vertical Separator Line */}
            <div className="h-6 w-px bg-slate-200" />

            <div className="flex flex-col text-left">
              <span className="text-base font-black text-slate-800 tracking-tight leading-none">
                СТРОЙСЕРВИС
              </span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                Металлоконструкции
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"
            aria-label="Закрыть меню"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden divide-y divide-slate-200/60 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-200/30 px-5 py-3.5 transition-all duration-200 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            </a>
          ))}
        </nav>

        <div className="border-t border-slate-100 pt-6 space-y-6">
          <a
            href={CONTACTS_DATA.phoneValue}
            className="flex items-center space-x-3 text-slate-800 hover:text-blue-600 font-bold transition-colors"
          >
            <div className="p-3 bg-slate-100 rounded-xl text-slate-600">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-semibold uppercase">Связаться с нами</span>
              <span className="text-base">{CONTACTS_DATA.phoneDisplay}</span>
            </div>
          </a>
          
          <button
            onClick={handleCtaClick}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-slate-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-center cursor-pointer"
          >
            Рассчитать стоимость
          </button>
        </div>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
        />
      )}
    </>
  );
}
