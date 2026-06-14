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
            className="flex items-center space-x-2 group"
            onClick={(e) => handleLinkClick(e, "#")}
          >
            <div className="p-2.5 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              <Hammer className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none transition-colors duration-300 ${
                scrolled ? "text-slate-800" : "text-white"
              }`}>
                СТРОЙСЕРВИС
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 transition-colors duration-300 ${
                scrolled ? "text-slate-500" : "text-slate-400"
              }`}>
                Навесы и металлоконструкции
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
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-slate-800 text-white rounded-lg">
              <Hammer className="w-5 h-5" />
            </div>
            <span className="text-lg font-black text-slate-800 tracking-tight">
              СТРОЙСЕРВИС
            </span>
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
