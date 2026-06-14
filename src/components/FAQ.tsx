"use client";

import React, { useState } from "react";
import { FAQ_DATA, FAQItem } from "@/data/data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Вопросы и ответы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Собрали подробные ответы на популярные вопросы наших клиентов по стоимости, замеру, материалам и гарантийным срокам.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "border-blue-200 shadow-md" 
                    : "border-slate-100 shadow-xs hover:border-slate-200"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-blue-600" : "text-slate-400"}`} />
                    <span className="text-base sm:text-lg tracking-tight leading-tight">{faq.question}</span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-slate-50 text-slate-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
                  }`}>
                    <ChevronDown className="w-5 h-5 shrink-0" />
                  </div>
                </button>

                {/* Accordion Content Panels */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-slate-600 text-sm leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
