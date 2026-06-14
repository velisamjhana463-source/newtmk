"use client";

import React, { useState } from "react";
import { GEOGRAPHY_DATA } from "@/data/data";
import { MapPin, Navigation, Info } from "lucide-react";

export default function Geography() {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  // Cities coordinate data for the custom SVG Bashkortostan Map
  const mapCities = [
    { name: "Уфа", x: 195, y: 135, desc: "Основное производство, бесплатный замер в радиусе 30 км", isMain: true },
    { name: "Бирск", x: 175, y: 80, desc: "Выезд замерщика и доставка, монтаж за 1-2 дня", isMain: false },
    { name: "Нефтекамск", x: 115, y: 55, desc: "Регулярные выезды бригад, доставка спецтранспортом", isMain: false },
    { name: "Стерлитамак", x: 185, y: 215, desc: "Крупный региональный центр, выезды 2-3 раза в неделю", isMain: false },
    { name: "Салават", x: 180, y: 245, desc: "Монтаж металлоконструкций любой сложности, доставка", isMain: false }
  ];

  return (
    <section id="geography" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-slate-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Где мы работаем</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-none">
                География нашей <br className="hidden sm:inline"/>
                <span className="bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
                  доставки и монтажа
                </span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg">
                Наш производственный цех находится в Уфе, но мобильные монтажные бригады ежедневно выезжают по всей Республике Башкортостан.
              </p>
            </div>

            {/* List of Cities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mapCities.map((city) => (
                <div 
                  key={city.name}
                  onMouseEnter={() => setActiveCity(city.name)}
                  onMouseLeave={() => setActiveCity(null)}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex items-start space-x-3 cursor-pointer ${
                    activeCity === city.name 
                      ? "border-blue-500 bg-blue-50/30 shadow-md scale-[1.02]" 
                      : "border-slate-100 bg-slate-50 hover:bg-slate-100/50"
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${
                    city.isMain ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-extrabold text-sm text-slate-800">{city.name}</span>
                    <p className="text-xs text-slate-500 leading-normal">{city.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Republic note info box */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start space-x-3">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {GEOGRAPHY_DATA.note}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Map Graphic (SVG) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-slate-50 rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-6 flex flex-col justify-between">
              
              {/* Map grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:30px_30px] opacity-35" />

              <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">
                <span>Интерактивная карта</span>
                <span>Регион: {GEOGRAPHY_DATA.region}</span>
              </div>

              {/* Map SVG */}
              <div className="relative z-10 flex-1 my-6 flex items-center justify-center">
                <svg 
                  viewBox="0 0 320 340" 
                  className="w-full h-auto max-h-[260px]" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Styled simplified outline map of Bashkortostan */}
                  <path
                    d="M 120 20 
                       C 140 10, 180 15, 200 30 
                       C 220 40, 240 35, 260 50 
                       C 280 65, 290 90, 295 110 
                       C 300 130, 280 160, 285 180 
                       C 290 200, 275 220, 270 240 
                       C 265 260, 250 280, 240 300 
                       C 230 320, 200 330, 180 325 
                       C 160 320, 150 290, 140 280 
                       C 130 270, 110 265, 100 250 
                       C 90 235, 75 220, 70 200 
                       C 65 180, 80 165, 75 145 
                       C 70 125, 50 110, 55 90 
                       C 60 70, 90 65, 100 50 
                       C 110 35, 110 25, 120 20 Z"
                    fill="#3b82f6"
                    fillOpacity="0.04"
                    stroke="#cbd5e1"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                  />

                  {/* Highlighted region glow for active city */}
                  {activeCity && (
                    <circle
                      cx={mapCities.find(c => c.name === activeCity)?.x}
                      cy={mapCities.find(c => c.name === activeCity)?.y}
                      r="25"
                      fill="#3b82f6"
                      fillOpacity="0.1"
                      className="animate-ping"
                    />
                  )}

                  {/* Route lines from Ufa (Main) to other cities */}
                  {mapCities.filter(c => !c.isMain).map((city) => (
                    <line
                      key={`line-${city.name}`}
                      x1="195"
                      y1="135"
                      x2={city.x}
                      y2={city.y}
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      strokeOpacity="0.6"
                    />
                  ))}

                  {/* City Markers */}
                  {mapCities.map((city) => (
                    <g 
                      key={`marker-${city.name}`}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveCity(city.name)}
                      onMouseLeave={() => setActiveCity(null)}
                    >
                      {/* Pulse Circle for main city */}
                      {city.isMain && (
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r="10"
                          fill="#3b82f6"
                          fillOpacity="0.25"
                          className="animate-pulse"
                        />
                      )}
                      
                      {/* Marker pin point */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={city.isMain ? "6" : "5"}
                        fill={activeCity === city.name ? "#2563eb" : city.isMain ? "#3b82f6" : "#64748b"}
                        stroke="white"
                        strokeWidth="1.5"
                        className="transition-colors duration-200"
                      />

                      {/* City Text Label */}
                      <text
                        x={city.x + 8}
                        y={city.y + 4}
                        fill={activeCity === city.name ? "#2563eb" : "#334155"}
                        fontSize={city.isMain ? "11" : "10"}
                        fontWeight={city.isMain || activeCity === city.name ? "bold" : "600"}
                        className="transition-colors duration-200 font-sans"
                      >
                        {city.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Display card for hovered/active city */}
              <div className="relative z-10 p-3 bg-white border border-slate-100 rounded-xl flex items-center space-x-2.5 shadow-sm min-h-[50px]">
                <Navigation className="w-4 h-4 text-blue-600 animate-pulse shrink-0" />
                <span className="text-[11px] font-bold text-slate-600 leading-normal">
                  {activeCity 
                    ? `${activeCity}: ${mapCities.find(c => c.name === activeCity)?.desc}` 
                    : "Наведите на город на карте для просмотра информации по выезду"
                  }
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
