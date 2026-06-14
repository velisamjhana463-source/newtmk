"use client";

import React from "react";
import { Hammer, Phone, Send, MessageCircle } from "lucide-react";
import { CONTACTS_DATA, GEOGRAPHY_DATA } from "@/data/data";

interface FooterProps {
  onShowPrivacy: () => void;
}

export default function Footer({ onShowPrivacy }: FooterProps) {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      
      {/* Upper Footer section */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo & Brief info */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#"
              onClick={(e) => handleScrollTo(e, "#")}
              className="flex items-center space-x-3 group"
            >
              {/* Logo Icon SVG */}
              <svg
                viewBox="0 0 100 100"
                className="w-10 h-10 group-hover:scale-105 transition-transform duration-300 shrink-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logo-steel-foot" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="50%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  <linearGradient id="logo-blue-foot" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="logo-light-blue-foot" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* 3D Bottom Blue Plate */}
                <path
                  d="M 20,48 L 20,58 L 50,75 L 85,55 L 85,45 L 75,40 L 75,48 L 50,62 L 32,52 L 32,42 Z"
                  fill="url(#logo-blue-foot)"
                />
                <path
                  d="M 20,58 L 20,62 L 50,79 L 85,59 L 85,55 L 50,75 Z"
                  fill="#1e3a8a"
                />

                {/* Top Steel Plate */}
                <path
                  d="M 20,38 L 50,20 L 85,40 L 75,45 L 50,29 L 32,38 Z"
                  fill="url(#logo-steel-foot)"
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
                <path d="M 20,38 L 50,20 L 85,40" stroke="url(#logo-light-blue-foot)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>

              {/* Vertical Separator Line */}
              <div className="h-8 w-px bg-slate-800" />

              {/* Text logo */}
              <div className="flex flex-col text-left">
                <span className="text-lg font-black text-white tracking-tight leading-none">
                  СТРОЙСЕРВИС
                </span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                  Металлоконструкции
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Изготовление, проектирование и монтаж навесов из поликарбоната, профнастила и металлочерепицы, козырьков, ворот, лестниц и ограждений в Уфе и Республике Башкортостан.
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Навигация</h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-white transition-colors">
                  Наши услуги
                </a>
              </li>
              <li>
                <a href="#advantages" onClick={(e) => handleScrollTo(e, "#advantages")} className="hover:text-white transition-colors">
                  Почему выбирают нас
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScrollTo(e, "#portfolio")} className="hover:text-white transition-colors">
                  Примеры наших работ
                </a>
              </li>
              <li>
                <a href="#steps" onClick={(e) => handleScrollTo(e, "#steps")} className="hover:text-white transition-colors">
                  Этапы сотрудничества
                </a>
              </li>
              <li>
                <a href="#geography" onClick={(e) => handleScrollTo(e, "#geography")} className="hover:text-white transition-colors">
                  География работы
                </a>
              </li>
            </ul>
          </div>

          {/* Cities coverage */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Города обслуживания</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li className="flex items-center text-slate-300 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                <span>{GEOGRAPHY_DATA.mainCity} (центр)</span>
              </li>
              {GEOGRAPHY_DATA.cities.map((city) => (
                <li key={city} className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2" />
                  <span>{city}</span>
                </li>
              ))}
              <li className="text-xs text-slate-500 pt-1 leading-normal">
                А также во всех пригородах Уфы и районах Башкортостана.
              </li>
            </ul>
          </div>

          {/* Contacts info & links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Связаться</h4>
            
            <a
              href={CONTACTS_DATA.phoneValue}
              className="flex items-center space-x-2 text-white hover:text-blue-400 font-extrabold transition-colors text-base"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>{CONTACTS_DATA.phoneDisplay}</span>
            </a>

            <div className="flex items-center space-x-3">
              {/* WhatsApp */}
              <a
                href={CONTACTS_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-green-600 hover:text-white rounded-xl transition-all duration-300 shadow-sm"
                title="Связаться в WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Telegram */}
              <a
                href={CONTACTS_DATA.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 shadow-sm"
                title="Связаться в Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>

            <div className="text-xs text-slate-500 leading-normal">
              Бывшее название: <br />
              <span className="text-slate-400 font-semibold">{CONTACTS_DATA.oldCompanyName}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-slate-800/80 bg-slate-950/60 py-6">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <div>
            © {new Date().getFullYear()} Стройсервис. Все права защищены.
          </div>
          <div>
            <button
              onClick={onShowPrivacy}
              className="text-slate-500 hover:text-white transition-colors underline font-semibold"
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
