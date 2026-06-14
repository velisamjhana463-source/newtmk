"use client";

import React from "react";
import { ADVANTAGES_DATA, AdvantageItem } from "@/data/data";
import { 
  Briefcase, 
  PenTool, 
  ShieldCheck, 
  CalendarRange, 
  MapPin, 
  Award,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "Briefcase": Briefcase,
  "PenTool": PenTool,
  "ShieldCheck": ShieldCheck,
  "CalendarRange": CalendarRange,
  "MapPin": MapPin,
  "Award": Award,
};

export default function WhyUs() {
  return (
    <section id="advantages" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Преимущества</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            Почему выбирают “Стройсервис”
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Мы делаем процесс заказа прозрачным и комфортным. От звонка до готовой конструкции на вашем участке — высокое качество на каждом этапе.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES_DATA.map((adv: AdvantageItem) => {
            const Icon = iconMap[adv.icon] || Award;
            return (
              <div 
                key={adv.id} 
                className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon Wrapper */}
                <div className="p-3.5 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white rounded-xl shadow-xs shrink-0 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callout Bar */}
        <div className="mt-16 p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-700">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold">Нужна индивидуальная консультация?</h4>
            <p className="text-slate-300 text-sm max-w-xl">
              Наш инженер ответит на все технические вопросы, сделает предварительный расчет нагрузок и подберет сечение труб под ваш бюджет.
            </p>
          </div>
          <button
            onClick={() => {
              const target = document.querySelector("#order-form");
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 shrink-0 cursor-pointer"
          >
            Получить консультацию
          </button>
        </div>

      </div>
    </section>
  );
}
