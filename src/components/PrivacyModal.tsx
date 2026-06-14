"use client";

import React from "react";
import { X } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-xl font-bold text-slate-800">Политику конфиденциальности</h3>
          <button 
            onClick={onClose} 
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto text-slate-600 space-y-4 text-sm leading-relaxed scrollbar-thin">
          <p className="font-semibold text-slate-700">Дата последнего обновления: 3 июня 2026 года</p>
          
          <h4 className="text-base font-bold text-slate-800 pt-2">1. Общие положения</h4>
          <p>
            Настоящая Политика конфиденциальности персональных данных (далее – Политика) разработана в соответствии с Федеральным законом РФ № 152-ФЗ «О персональных данных» и действует в отношении всей информации, которую сайт компании «Стройсервис» (далее – Компания), расположенный на доменном имени проекта, может получить о Пользователе во время использования сайта и отправки веб-форм.
          </p>

          <h4 className="text-base font-bold text-slate-800 pt-2">2. Какую информацию мы собираем</h4>
          <p>Мы запрашиваем только те персональные данные, которые необходимы для связи с Пользователем и предоставления консультационных услуг, расчета стоимости или оформления договора:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Имя Пользователя;</li>
            <li>Контактный телефон;</li>
            <li>Тип запрашиваемой конструкции или услуги;</li>
            <li>Комментарии Пользователя, оставленные при заполнении формы.</li>
          </ul>

          <h4 className="text-base font-bold text-slate-800 pt-2">3. Цели сбора персональных данных</h4>
          <p>Персональные данные Пользователя собираются исключительно в следующих целях:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Обратная связь с Пользователем: телефонные звонки для уточнения деталей заказа;</li>
            <li>Предоставление расчета стоимости изготовления и монтажа навесов и металлоконструкций;</li>
            <li>Согласование времени выезда инженера-замерщика на объект;</li>
            <li>Отправка информационных предложений в мессенджеры (WhatsApp/Telegram) или по SMS (только по согласованию).</li>
          </ul>

          <h4 className="text-base font-bold text-slate-800 pt-2">4. Безопасность и хранение данных</h4>
          <p>
            Компания принимает все необходимые организационные и технические меры для защиты конфиденциальных данных Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования и распространения третьими лицами. Данные не передаются третьим лицам, за исключением случаев, предусмотренных действующим законодательством РФ.
          </p>

          <h4 className="text-base font-bold text-slate-800 pt-2">5. Согласие пользователя</h4>
          <p>
            Отправляя любую форму обратной связи на сайте, Пользователь выражает свое полное согласие с условиями настоящей Политики конфиденциальности и дает разрешение на обработку своих персональных данных в рамках указанных целей.
          </p>

          <h4 className="text-base font-bold text-slate-800 pt-2">6. Отзыв согласия и контакты</h4>
          <p>
            Пользователь имеет право в любой момент отозвать свое согласие на обработку персональных данных, направив соответствующее заявление на нашу электронную почту: <a href="mailto:info@stroiservice-ufa.ru" className="text-blue-600 hover:underline">info@stroiservice-ufa.ru</a> или обратившись по телефону компании: +7 (987) 246-12-34.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50/50">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-xl transition-all shadow-sm"
          >
            Понятно, закрыть
          </button>
        </div>
        
      </div>
    </div>
  );
}
