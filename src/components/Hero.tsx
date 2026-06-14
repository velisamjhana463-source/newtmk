"use client";

import React from "react";
import { CheckCircle2, ChevronRight, PenTool, ClipboardCheck, Hammer } from "lucide-react";

export default function Hero() {
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

  const briefAdvantages = [
    { label: "Бесплатный замер", desc: "выезд инженера за 0 ₽", icon: PenTool },
    { label: "Официальный договор", desc: "фиксированная цена", icon: ClipboardCheck },
    { label: "Гарантия до 5 лет", desc: "на металл и швы", icon: CheckCircle2 },
    { label: "Чистый монтаж", desc: "уборка после работ", icon: Hammer },
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-50">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-slate-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Собственное производство в Уфе</span>
            </div>

            {/* Main Title (H1) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 tracking-tight leading-[1.05]">
              Навесы и <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
                металлоконструкции
              </span>{" "}
              <br />
              в Уфе под ключ
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
              Изготавливаем и монтируем навесы, козырьки, ворота, лестницы и металлоконструкции любой сложности для частных домов и коммерческих объектов.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={(e) => handleScrollTo(e, "#order-form")}
                className="px-8 py-4.5 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-500 hover:to-slate-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={(e) => handleScrollTo(e, "#portfolio")}
                className="px-8 py-4.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-base rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Посмотреть работы</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-200 w-full pt-2" />

            {/* Advantages badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {briefAdvantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div key={idx} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 text-slate-800">
                      <div className="p-1 bg-slate-100 rounded text-blue-600">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm tracking-tight leading-tight">
                        {adv.label}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {adv.desc}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Visual Component (SVG Diagram of Canopy Structure) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-white rounded-3xl shadow-xl border border-slate-100 p-6 flex flex-col justify-between overflow-hidden">
              
              {/* Decorative background grids */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

              {/* Tag for the graphic */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                  Чертеж & 3D Модель
                </span>
                <span className="px-2 py-0.5 bg-green-50 text-green-700 border border-green-100 rounded-md text-[10px] font-bold">
                  ГОСТ Совместимо
                </span>
              </div>

              {/* SVG Graphic */}
              <div className="relative z-10 flex-1 my-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-auto max-h-[220px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Ground line */}
                  <line x1="20" y1="260" x2="380" y2="260" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 4" />
                  
                  {/* Foundation posts */}
                  <rect x="70" y="160" width="16" height="100" rx="2" fill="#475569" />
                  <rect x="210" y="160" width="16" height="100" rx="2" fill="#475569" />
                  <rect x="310" y="160" width="16" height="100" rx="2" fill="#475569" />
                  
                  {/* Foundation markings */}
                  <circle cx="78" cy="260" r="10" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="218" cy="260" r="10" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="318" cy="260" r="10" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" />
                  
                  {/* Main beam (horizontal) */}
                  <rect x="60" y="150" width="280" height="12" rx="2" fill="#334155" />
                  
                  {/* Vertical wall support */}
                  <rect x="60" y="70" width="12" height="90" fill="#475569" />

                  {/* Arched truss top chord */}
                  <path
                    d="M 60 150 C 130 90, 270 90, 340 150"
                    stroke="#1e293b"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  
                  {/* Arched truss bottom chord */}
                  <path
                    d="M 60 150 C 130 110, 270 110, 340 150"
                    stroke="#475569"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Internal truss web members */}
                  <line x1="100" y1="124" x2="100" y2="148" stroke="#64748b" strokeWidth="3" />
                  <line x1="140" y1="112" x2="140" y2="149" stroke="#64748b" strokeWidth="3" />
                  <line x1="180" y1="106" x2="180" y2="150" stroke="#64748b" strokeWidth="3" />
                  <line x1="220" y1="106" x2="220" y2="150" stroke="#64748b" strokeWidth="3" />
                  <line x1="260" y1="112" x2="260" y2="149" stroke="#64748b" strokeWidth="3" />
                  <line x1="300" y1="124" x2="300" y2="148" stroke="#64748b" strokeWidth="3" />

                  {/* Diagonal webs */}
                  <line x1="60" y1="150" x2="100" y2="124" stroke="#64748b" strokeWidth="2" />
                  <line x1="100" y1="148" x2="140" y2="112" stroke="#64748b" strokeWidth="2" />
                  <line x1="140" y1="149" x2="180" y2="106" stroke="#64748b" strokeWidth="2" />
                  <line x1="220" y1="106" x2="260" y2="149" stroke="#64748b" strokeWidth="2" />
                  <line x1="260" y1="112" x2="300" y2="124" stroke="#64748b" strokeWidth="2" />
                  <line x1="300" y1="148" x2="340" y2="150" stroke="#64748b" strokeWidth="2" />

                  {/* Translucent polycarbonate roofing */}
                  <path
                    d="M 55 142 C 128 80, 272 80, 345 142"
                    stroke="#3b82f6"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeOpacity="0.45"
                  />

                  {/* Snow load vectors */}
                  <path d="M 120 70 L 120 85 M 120 85 L 116 81 M 120 85 L 124 81" stroke="#3b82f6" strokeWidth="1.5" />
                  <path d="M 200 60 L 200 75 M 200 75 L 196 71 M 200 75 L 204 71" stroke="#3b82f6" strokeWidth="1.5" />
                  <path d="M 280 70 L 280 85 M 280 85 L 276 81 M 280 85 L 284 81" stroke="#3b82f6" strokeWidth="1.5" />
                  <text x="180" y="50" fill="#3b82f6" fontSize="10" fontWeight="bold">Снеговая нагрузка</text>

                  {/* Measuring lines */}
                  <path d="M 60 170 L 60 190 M 340 170 L 340 190" stroke="#94a3b8" strokeWidth="1" />
                  <path d="M 60 185 L 340 185" stroke="#94a3b8" strokeWidth="1" />
                  <polygon points="60,185 66,182 66,188" fill="#94a3b8" />
                  <polygon points="340,185 334,182 334,188" fill="#94a3b8" />
                  <rect x="185" y="176" width="30" height="16" fill="white" />
                  <text x="190" y="188" fill="#64748b" fontSize="10" fontWeight="bold">6.0 м</text>
                </svg>
              </div>

              {/* Visual Stats */}
              <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 text-xs font-bold text-slate-500">
                <div className="flex flex-col">
                  <span>Сталь</span>
                  <span className="text-slate-800 text-sm">Профиль ГОСТ</span>
                </div>
                <div className="flex flex-col text-right">
                  <span>Покрытие</span>
                  <span className="text-slate-800 text-sm">Полимерное 3-в-1</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
