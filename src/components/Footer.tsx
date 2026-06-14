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
              className="flex items-center group animate-fade-in"
            >
              <img
                src="/logo-transparent.png"
                alt="СТРОЙСЕРВИС"
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
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
