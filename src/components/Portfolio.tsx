"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, PortfolioItem } from "@/data/data";
import { MapPin, Eye } from "lucide-react";

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // SVG Blueprints for the portfolios (acts as high-quality visual placeholders)
  const renderBlueprint = (placeholderType: string) => {
    return (
      <div className="w-full h-full bg-slate-900 flex flex-col justify-between p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        
        {/* Engineering blueprint grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
        
        {/* Radial highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]" />

        {/* Blueprint header */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-blue-400 font-bold uppercase tracking-wider font-mono">
          <span>Сборочный Чертеж</span>
          <span>Лист {placeholderType.slice(-1) || "1"}</span>
        </div>

        {/* Blueprint Visual representation */}
        <div className="relative z-10 flex-1 flex items-center justify-center py-4">
          {placeholderType.includes("carport") ? (
            // Carport SVG Graphic
            <svg viewBox="0 0 200 120" className="w-full max-w-[160px] opacity-80" fill="none">
              <line x1="10" y1="110" x2="190" y2="110" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
              <rect x="35" y="60" width="8" height="50" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
              <rect x="155" y="60" width="8" height="50" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
              <path d="M 20 60 C 50 20, 150 20, 180 60" stroke="#3b82f6" strokeWidth="3" />
              <path d="M 20 60 C 50 35, 150 35, 180 60" stroke="#1d4ed8" strokeWidth="1.5" />
              {/* Web columns */}
              <line x1="60" y1="42" x2="60" y2="58" stroke="#3b82f6" strokeWidth="1" />
              <line x1="100" y1="35" x2="100" y2="59" stroke="#3b82f6" strokeWidth="1" />
              <line x1="140" y1="42" x2="140" y2="58" stroke="#3b82f6" strokeWidth="1" />
            </svg>
          ) : placeholderType.includes("visor") ? (
            // Visor SVG Graphic
            <svg viewBox="0 0 200 120" className="w-full max-w-[160px] opacity-80" fill="none">
              <rect x="10" y="20" width="10" height="90" fill="#3b82f6" opacity="0.3" />
              <line x1="10" y1="30" x2="150" y2="60" stroke="#3b82f6" strokeWidth="3" />
              <line x1="10" y1="90" x2="150" y2="60" stroke="#3b82f6" strokeWidth="2" />
              <line x1="10" y1="30" x2="80" y2="20" stroke="#60a5fa" strokeWidth="1.5" />
              <line x1="80" y1="20" x2="150" y2="60" stroke="#60a5fa" strokeWidth="1.5" />
            </svg>
          ) : placeholderType.includes("gate") ? (
            // Gate SVG Graphic
            <svg viewBox="0 0 200 120" className="w-full max-w-[160px] opacity-80" fill="none">
              <rect x="10" y="30" width="8" height="70" fill="#3b82f6" />
              <rect x="182" y="30" width="8" height="70" fill="#3b82f6" />
              <rect x="25" y="35" width="150" height="60" stroke="#3b82f6" strokeWidth="2" />
              <line x1="25" y1="35" x2="175" y2="95" stroke="#3b82f6" strokeWidth="1.5" />
              <line x1="25" y1="95" x2="175" y2="35" stroke="#3b82f6" strokeWidth="1.5" />
              <line x1="100" y1="35" x2="100" y2="95" stroke="#3b82f6" strokeWidth="1.5" />
            </svg>
          ) : placeholderType.includes("stairs") ? (
            // Stairs SVG Graphic
            <svg viewBox="0 0 200 120" className="w-full max-w-[160px] opacity-80" fill="none">
              <path d="M 20 100 L 50 100 L 50 80 L 80 80 L 80 60 L 110 60 L 110 40 L 140 40 L 140 20 L 170 20" stroke="#3b82f6" strokeWidth="3" />
              <path d="M 20 108 L 170 28" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="3 2" />
            </svg>
          ) : (
            // Custom Structure SVG Graphic
            <svg viewBox="0 0 200 120" className="w-full max-w-[160px] opacity-80" fill="none">
              <rect x="30" y="20" width="140" height="80" stroke="#3b82f6" strokeWidth="2" />
              <line x1="30" y1="20" x2="170" y2="100" stroke="#3b82f6" strokeWidth="1" />
              <line x1="30" y1="100" x2="170" y2="20" stroke="#3b82f6" strokeWidth="1" />
              <circle cx="100" cy="60" r="25" stroke="#3b82f6" strokeWidth="1.5" />
            </svg>
          )}
        </div>

        {/* Blueprint Footer */}
        <div className="relative z-10 flex items-end justify-between font-mono">
          <div className="flex flex-col text-[8px] text-slate-500">
            <span>Масштаб: 1:50</span>
            <span>Стройсервис Инжиниринг</span>
          </div>
          <div className="px-2.5 py-1 bg-blue-950/80 border border-blue-800 text-[10px] text-blue-400 font-bold uppercase rounded-md flex items-center space-x-1 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Фото скоро</span>
          </div>
        </div>

      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Наши работы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            Примеры реализованных объектов
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Мы гордимся качеством каждой конструкции. Ниже представлены наши недавние проекты с указанием параметров и сроков реализации.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((project: PortfolioItem) => (
            <div
              key={project.id}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image / Placeholder Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                {/* Visual rendering: can either render real img if starts with http/images or render styled blueprint */}
                {project.imagePlaceholder.startsWith("/") || project.imagePlaceholder.startsWith("http") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.imagePlaceholder}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  renderBlueprint(project.imagePlaceholder)
                )}

                {/* Glassmorphic hover overlay */}
                <div className={`absolute inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}>
                  <button
                    onClick={() => {
                      const target = document.querySelector("#order-form");
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center space-x-2 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Хочу такой же навес</span>
                  </button>
                </div>

                {/* Label Category */}
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 rounded-lg shadow-sm">
                  {project.type}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* City Location */}
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>{project.city}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Bullet parameters */}
                <div className="grid grid-cols-3 gap-2 border-t border-slate-200/60 pt-4 text-[11px] text-slate-600 font-bold">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex flex-col space-y-0.5 bg-white p-2 rounded-xl border border-slate-200/50 text-center">
                      <span className="text-[9px] text-slate-400 font-bold uppercase">
                        {detail.split(":")[0]}
                      </span>
                      <span className="text-slate-800 truncate">
                        {detail.split(":")[1] || ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
