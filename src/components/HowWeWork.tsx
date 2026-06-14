"use client";

import React from "react";
import { WORK_STEPS_DATA, WorkStepItem } from "@/data/data";
import { ClipboardList, MessageSquare, Ruler, Calculator, Factory, Truck } from "lucide-react";

const iconMap: Record<number, React.ComponentType<{ className?: string }>> = {
  1: ClipboardList,
  2: MessageSquare,
  3: Ruler,
  4: Calculator,
  5: Factory,
  6: Truck,
};

export default function HowWeWork() {
  return (
    <section id="steps" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decorative Graphic */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Процесс работы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            Как мы работаем: 6 простых шагов
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Мы берем на себя все заботы по проектированию, согласованию и монтажу. Прозрачный процесс сотрудничества от первого контакта до сдачи объекта.
          </p>
        </div>

        {/* Timeline Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {/* Decorative Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0 pointer-events-none" />

          {WORK_STEPS_DATA.map((stepItem: WorkStepItem) => {
            const Icon = iconMap[stepItem.step] || ClipboardList;
            return (
              <div 
                key={stepItem.id} 
                className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 z-10 flex flex-col items-center text-center group"
              >
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 px-3.5 py-1 bg-blue-600 text-white text-xs font-extrabold rounded-full shadow-md font-mono">
                  Шаг 0{stepItem.step}
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 bg-slate-50 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-colors duration-300 mt-2">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                    {stepItem.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {stepItem.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
