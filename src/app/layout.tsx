import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Навесы и металлоконструкции в Уфе под ключ — Стройсервис",
  description: "Изготовление и монтаж навесов, козырьков, ворот, лестниц и металлоконструкций в Уфе, Стерлитамаке, Салавате, Нефтекамске и Бирске. Замер, расчет, договор, гарантия.",
  metadataBase: new URL("https://stroiservice-ufa.ru"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Навесы и металлоконструкции в Уфе под ключ — Стройсервис",
    description: "Изготовление и монтаж навесов, козырьков, ворот, лестниц и металлоконструкций в Уфе, Стерлитамаке, Салавате, Нефтекамске и Бирске. Бесплатный замер, официальный договор и гарантия до 5 лет.",
    url: "https://stroiservice-ufa.ru",
    siteName: "Стройсервис Уфа",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema Markup (LocalBusiness JSON-LD)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Стройсервис",
    "image": "https://stroiservice-ufa.ru/og-image.jpg",
    "@id": "https://stroiservice-ufa.ru/#localbusiness",
    "url": "https://stroiservice-ufa.ru",
    "telephone": "+79872461234",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Производственная, д. 12/2",
      "addressLocality": "Уфа",
      "addressRegion": "Республика Башкортостан",
      "postalCode": "450000",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 54.738762,
      "longitude": 55.972055
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://t.me/stroyservice_ufa"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Уфа" },
      { "@type": "AdministrativeArea", "name": "Стерлитамак" },
      { "@type": "AdministrativeArea", "name": "Салават" },
      { "@type": "AdministrativeArea", "name": "Нефтекамск" },
      { "@type": "AdministrativeArea", "name": "Бирск" },
      { "@type": "AdministrativeArea", "name": "Республика Башкортостан" }
    ]
  };

  return (
    <html lang="ru" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
