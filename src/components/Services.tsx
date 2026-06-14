"use client";

import React from "react";
import { SERVICES_DATA, ServiceItem } from "@/data/data";
import { 
  Car, 
  Layers, 
  Shield, 
  PanelTop, 
  Lock, 
  Flame, 
  Construction, 
  ChevronsUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

// Map placeholder string to Lucide icon component
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "carport-cars": Car,
  "polycarbonate-canopy": Layers,
  "metal-canopy": Shield,
  "visor": PanelTop,
  "gate": Lock,
  "stairs": ChevronsUp,
  "welding": Flame,
  "custom-structure": Construction,
};

export default function Services() {
  const handleServiceSelect = (serviceId: string) => {
    // Dispatch a custom event to change select state in OrderForm
    const event = new CustomEvent("select-service", { detail: { serviceId } });
    window.dispatchEvent(event);

    // Smooth scroll to order form
    const targetElement = document.querySelector("#order-form");
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
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Что мы делаем</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            Наши услуги и виды конструкций
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Изготавливаем металлоконструкции любого размера и конфигурации. Ниже представлены основные направления нашей работы в Уфе и Башкирии.
          </p>
        </div>

        {/* Grid of 8 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.imagePlaceholder] || Construction;
            return (
              <div 
                key={service.id} 
                className="group flex flex-col justify-between p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle top decoration gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="space-y-4">
                  {/* Icon Wrapper */}
                  <div className="p-3 bg-white group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-xl shadow-xs inline-block transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-slate-200/60 pt-1" />

                  {/* Bullet features */}
                  <ul className="space-y-2 pt-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-xs font-semibold text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-6">
                  <button
                    onClick={() => handleServiceSelect(service.id)}
                    className="w-full py-3 bg-white group-hover:bg-slate-800 text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-slate-800 font-bold text-xs rounded-xl shadow-xs group-hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Рассчитать стоимость</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
