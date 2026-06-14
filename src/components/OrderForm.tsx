"use client";

import React, { useState, useEffect } from "react";
import { SERVICES_DATA, CONTACTS_DATA } from "@/data/data";
import { 
  Phone, 
  User, 
  ChevronDown, 
  MessageSquareCode, 
  CheckSquare, 
  Square,
  Send,
  Loader2,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  PartyPopper
} from "lucide-react";

interface OrderFormProps {
  onShowPrivacy: () => void;
}

export default function OrderForm({ onShowPrivacy }: OrderFormProps) {
  // Form fields state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [constructionType, setConstructionType] = useState("");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(true);

  // UI state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Listen to quick service selection event
  useEffect(() => {
    const handleServiceSelect = (event: Event) => {
      const customEvent = event as CustomEvent<{ serviceId: string }>;
      if (customEvent.detail && customEvent.detail.serviceId) {
        const found = SERVICES_DATA.find((s) => s.id === customEvent.detail.serviceId);
        if (found) {
          setConstructionType(found.title);
        }
      }
    };
    window.addEventListener("select-service", handleServiceSelect);
    return () => window.removeEventListener("select-service", handleServiceSelect);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = "Пожалуйста, введите ваше имя";
    }
    if (!phone.trim()) {
      newErrors.phone = "Пожалуйста, введите номер телефона";
    } else if (phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Введите корректный номер (минимум 10 цифр)";
    }
    if (!constructionType) {
      newErrors.constructionType = "Пожалуйста, выберите интересующую конструкцию";
    }
    if (!agree) {
      newErrors.agree = "Необходимо согласие с политикой конфиденциальности";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Form data payload
    const formData = {
      name,
      phone,
      constructionType,
      comment,
      createdAt: new Date().toISOString()
    };

    try {
      // Mock API call to simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Mock lead successfully captured:", formData);

      // =========================================================================
      // MOCK WEBHOOKS INTEGRATION PLACEHOLDERS
      // Connect your real backend or serverless endpoints here:
      //
      // 1. TELEGRAM BOT API:
      //    const tgBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';
      //    const tgChatId = 'YOUR_TELEGRAM_CHAT_ID';
      //    const message = `🔔 Новый лид!\n👤 Имя: ${formData.name}\n📞 Тел: ${formData.phone}\n🏗️ Конструкция: ${formData.constructionType}\n💬 Коммент: ${formData.comment}`;
      //    await fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({ chat_id: tgChatId, text: message })
      //    });
      //
      // 2. CRM API (e.g. Bitrix24 / AmoCRM):
      //    await fetch('https://your-crm-webhook-url', {
      //       method: 'POST',
      //       body: JSON.stringify(formData)
      //    });
      //
      // 3. EMAIL DISPATCH (e.g. SendGrid / Nodemailer API):
      //    await fetch('/api/send-email', {
      //       method: 'POST',
      //       body: JSON.stringify(formData)
      //    });
      // =========================================================================

      setSuccess(true);
      
      // Reset form
      setName("");
      setPhone("");
      setConstructionType("");
      setComment("");
      
    } catch (err) {
      console.error("Failed to send order request:", err);
      setErrors({ form: "Ошибка соединения с сервером. Пожалуйста, попробуйте еще раз." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order-form" className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Контакты</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-none">
                Рассчитайте стоимость и <br />
                <span className="bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
                  получите скидку 5%
                </span>
              </h2>
              
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                Заполните форму справа. Мы свяжемся с вами в течение 15 минут для уточнения размеров, согласуем бесплатный выезд замерщика и зафиксируем за вами скидку на монтаж.
              </p>
            </div>

            {/* Direct Contact Blocks */}
            <div className="space-y-4">
              
              {/* Phone */}
              <a 
                href={CONTACTS_DATA.phoneValue}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Позвонить на номер</span>
                  <span className="text-base font-extrabold text-slate-800">{CONTACTS_DATA.phoneDisplay}</span>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${CONTACTS_DATA.email}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors"
              >
                <div className="p-3 bg-slate-200/60 text-slate-600 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Отправить E-mail</span>
                  <span className="text-base font-extrabold text-slate-800">{CONTACTS_DATA.email}</span>
                </div>
              </a>

              {/* Office Address */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-3 bg-slate-200/60 text-slate-600 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Наше производство</span>
                  <span className="text-sm font-extrabold text-slate-800">{CONTACTS_DATA.address}</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-3 bg-slate-200/60 text-slate-600 rounded-xl">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Режим работы</span>
                  <span className="text-sm font-extrabold text-slate-800">{CONTACTS_DATA.workHours}</span>
                </div>
              </div>

            </div>

            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              ООО «Стройсервис» © {new Date().getFullYear()}
            </div>
          </div>

          {/* Right Side: The Order Form Container */}
          <div className="lg:col-span-7 flex items-center">
            
            <div className="w-full bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
              
              {/* Form header */}
              <div className="mb-8 flex items-center justify-between border-b border-slate-200/60 pb-4">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="font-extrabold text-slate-800 text-lg">Заявка на расчет</span>
                </div>
                <span className="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase tracking-wider">
                  Скидка 5%
                </span>
              </div>

              {success ? (
                // Success State View
                <div className="py-12 flex flex-col items-center text-center space-y-6 animate-scale-up">
                  <div className="p-4 bg-green-50 text-green-600 rounded-full border border-green-200">
                    <PartyPopper className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">Заявка успешно отправлена!</h3>
                    <p className="text-slate-600 font-medium text-sm max-w-sm">
                      Спасибо, <span className="font-bold text-slate-800">{name || "мы"}</span>! Наш технический специалист свяжется с вами в течение 15 минут для консультации.
                    </p>
                  </div>

                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl shadow transition-all cursor-pointer"
                  >
                    Отправить еще одну заявку
                  </button>
                </div>
              ) : (
                // Main Form View
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="user-name" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                      Ваше имя <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4.5 h-4.5" />
                      </div>
                      <input
                        id="user-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="Например, Иван"
                        className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all ${
                          errors.name ? "border-red-500 focus:ring-red-500/20" : "border-slate-200"
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-[11px] font-bold text-red-500">{errors.name}</p>}
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="user-phone" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <input
                        id="user-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        placeholder="Например, +7 (987) 123-45-67"
                        className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all ${
                          errors.phone ? "border-red-500 focus:ring-red-500/20" : "border-slate-200"
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] font-bold text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Construction Type Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="construction-type" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                      Тип конструкции <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="construction-type"
                        value={constructionType}
                        onChange={(e) => {
                          setConstructionType(e.target.value);
                          if (errors.constructionType) setErrors({ ...errors, constructionType: "" });
                        }}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 appearance-none transition-all ${
                          errors.constructionType ? "border-red-500 focus:ring-red-500/20" : "border-slate-200"
                        }`}
                      >
                        <option value="" disabled>Выберите тип конструкции</option>
                        {SERVICES_DATA.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Другая металлоконструкция">Другая металлоконструкция</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.constructionType && (
                      <p className="text-[11px] font-bold text-red-500">{errors.constructionType}</p>
                    )}
                  </div>

                  {/* Comment Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="comment" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                      Комментарий к заказу (необязательно)
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 text-slate-400">
                        <MessageSquareCode className="w-4.5 h-4.5" />
                      </div>
                      <textarea
                        id="comment"
                        rows={3}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Напишите примерные размеры навеса, предпочтительную форму или другие пожелания..."
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Consent checkbox */}
                  <div className="space-y-2">
                    <div 
                      onClick={() => {
                        setAgree(!agree);
                        if (errors.agree) setErrors({ ...errors, agree: "" });
                      }}
                      className="flex items-start space-x-3 cursor-pointer select-none"
                    >
                      <div className="text-blue-600 mt-0.5 shrink-0">
                        {agree ? (
                          <CheckSquare className="w-5 h-5" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-300" />
                        )}
                      </div>
                      <span className="text-xs text-slate-500 font-medium leading-relaxed">
                        Я согласен на обработку персональных данных в соответствии с{" "}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onShowPrivacy();
                          }}
                          className="text-blue-600 hover:underline font-bold"
                        >
                          политикой конфиденциальности
                        </button>
                      </span>
                    </div>
                    {errors.agree && <p className="text-[11px] font-bold text-red-500">{errors.agree}</p>}
                  </div>

                  {/* Form connection error message */}
                  {errors.form && (
                    <p className="text-sm font-bold text-red-500 bg-red-50 border border-red-200 p-3 rounded-xl">
                      {errors.form}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4.5 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-500 hover:to-slate-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Расчет стоимости...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        <span>Рассчитать стоимость со скидкой</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
