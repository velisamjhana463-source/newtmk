"use client";

import React, { useRef, useState } from "react";
import { CheckCircle2, ChevronRight, PenTool, ClipboardCheck, Hammer } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#090d16] border-b border-slate-900"
    >
      
      {/* Major Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Minor Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/10 blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-slate-900 to-indigo-950/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Interactive Spotlight */}
      {isInside && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 mix-blend-screen"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
          }}
        />
      )}

      {/* Draft Coordinate Markers */}
      <div className="absolute top-[15%] left-[8%] text-blue-500/25 font-mono text-xs pointer-events-none select-none">+ 01.09</div>
      <div className="absolute top-[80%] left-[4%] text-blue-500/25 font-mono text-xs pointer-events-none select-none">+ 02.44</div>
      <div className="absolute top-[25%] right-[10%] text-blue-500/25 font-mono text-xs pointer-events-none select-none">+ 54.73</div>
      <div className="absolute bottom-[15%] right-[5%] text-blue-500/25 font-mono text-xs pointer-events-none select-none">+ 55.97</div>
      
      {/* Subtle dotted circles */}
      <div className="absolute top-[45%] left-[5%] w-12 h-12 rounded-full border border-dashed border-blue-500/10 opacity-60 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[25%] right-[12%] w-16 h-16 rounded-full border border-dashed border-blue-500/10 opacity-60 pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Собственное производство в Уфе</span>
            </div>

            {/* Main Title (H1) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Навесы и <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(59,130,246,0.35)]">
                металлоконструкции
              </span>{" "}
              <br />
              в Уфе под ключ
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
              Изготавливаем и монтируем навесы, козырьки, ворота, лестницы и металлоконструкции любой сложности для частных домов и коммерческих объектов.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={(e) => handleScrollTo(e, "#order-form")}
                className="px-8 py-4.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={(e) => handleScrollTo(e, "#portfolio")}
                className="px-8 py-4.5 bg-white/5 hover:bg-white/10 text-white hover:text-slate-200 font-bold text-base rounded-xl border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Посмотреть работы</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-800/80 w-full pt-2" />

            {/* Advantages badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4.5 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/5">
              {briefAdvantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div key={idx} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 text-slate-200">
                      <div className="p-1 bg-white/5 rounded text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm tracking-tight leading-tight">
                        {adv.label}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium pl-7">
                      {adv.desc}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Visual Component (SVG Diagram of Canopy Structure) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-slate-900/40 backdrop-blur-md rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-white/10 p-6 flex flex-col justify-between overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
              
              {/* Decorative background grids */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />

              {/* Tag for the graphic */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                  Чертеж & 3D Модель
                </span>
                <span className="px-2 py-0.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-md text-[10px] font-bold">
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
                  {/* Custom gradients and highlights */}
                  <defs>
                    <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="50%" stopColor="#64748b" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <linearGradient id="blue-glow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
                    </linearGradient>
                    <radialGradient id="highlight-spot" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Ground line */}
                  <line x1="20" y1="260" x2="380" y2="260" stroke="#334155" strokeWidth="3" strokeDasharray="6 4" />
                  
                  {/* Foundation posts */}
                  <rect x="70" y="160" width="16" height="100" rx="1" fill="url(#metal-gradient)" />
                  <rect x="210" y="160" width="16" height="100" rx="1" fill="url(#metal-gradient)" />
                  <rect x="310" y="160" width="16" height="100" rx="1" fill="url(#metal-gradient)" />
                  
                  {/* Foundation markings */}
                  <circle cx="78" cy="260" r="10" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" fill="url(#highlight-spot)" />
                  <circle cx="218" cy="260" r="10" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" fill="url(#highlight-spot)" />
                  <circle cx="318" cy="260" r="10" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" fill="url(#highlight-spot)" />
                  
                  {/* Main beam (horizontal) */}
                  <rect x="60" y="150" width="280" height="12" rx="1" fill="url(#metal-gradient)" />
                  
                  {/* Vertical wall support */}
                  <rect x="60" y="70" width="12" height="90" fill="url(#metal-gradient)" />

                  {/* Arched truss top chord */}
                  <path
                    d="M 60 150 C 130 90, 270 90, 340 150"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
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
                    stroke="#60a5fa"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                    fill="url(#blue-glow-grad)"
                  />

                  {/* Snow load vectors */}
                  <path d="M 120 70 L 120 85 M 120 85 L 116 81 M 120 85 L 124 81" stroke="#38bdf8" strokeWidth="1.5" />
                  <path d="M 200 60 L 200 75 M 200 75 L 196 71 M 200 75 L 204 71" stroke="#38bdf8" strokeWidth="1.5" />
                  <path d="M 280 70 L 280 85 M 280 85 L 276 81 M 280 85 L 284 81" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="180" y="50" fill="#38bdf8" fontSize="10" fontWeight="bold">Снеговая нагрузка</text>

                  {/* Measuring lines */}
                  <path d="M 60 170 L 60 190 M 340 170 L 340 190" stroke="#475569" strokeWidth="1" />
                  <path d="M 60 185 L 340 185" stroke="#475569" strokeWidth="1" />
                  <polygon points="60,185 66,182 66,188" fill="#475569" />
                  <polygon points="340,185 334,182 334,188" fill="#475569" />
                  <rect x="185" y="176" width="30" height="16" fill="#0f172a" rx="4" />
                  <text x="190" y="188" fill="#94a3b8" fontSize="10" fontWeight="bold">6.0 м</text>
                </svg>
              </div>

              {/* Visual Stats */}
              <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs font-bold text-slate-400">
                <div className="flex flex-col">
                  <span>Сталь</span>
                  <span className="text-white text-sm">Профиль ГОСТ</span>
                </div>
                <div className="flex flex-col text-right">
                  <span>Покрытие</span>
                  <span className="text-white text-sm">Полимерное 3-в-1</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
