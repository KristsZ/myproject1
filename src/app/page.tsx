"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* ContactModal komponenta pievienošana */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Hero section with original background */}
      <section className="relative h-[80vh] min-h-[665px]">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src="/webpicture.jpg"
            alt="Fons"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          {/* Tumšs slānis virs attēla */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero content */}
        <div className="flex flex-col items-center justify-center h-full relative z-10 text-center px-4">
          {/* Galvenais virsraksts ar animāciju */}
          <div className="mb-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              <span className="block">Vizītkartes mājaslapas</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-blue-200 animate-pulse">
                Jūsu biznesam
              </span>
            </h1>

            {/* Apakšvirsraksts */}
            <p className="text-lg md:text-xl text-white/90 mt-6 drop-shadow-md">
              Ātri, vienkārši un efektīvi risinājumi!
            </p>
          </div>

          {/* Pogu grupa */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/pakalpojumi"
              className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-all 
                 duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
            >
              Uzzināt vairāk
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 
                       rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
            >
              Bezmaksas konsultācija
            </button>
          </div>

          {/* Scroll indikators */}
          <div className="absolute bottom-8 animate-bounce">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Pakalpojumu sadaļa ar jaunu fonu */}
      <section className="relative py-16 w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-30">
          <Image
            src="/webpicture2.jpg"
            alt="Fona attēls"
            fill
            className="object-cover object-center"
            quality={80}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#decba4]/80 via-[#ddb67a]/60 to-[#ba8c4e]/80 mix-blend-multiply" />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 -z-10 bg-black/30" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Varu palīdzēt izveidot
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Modernas mājaslapas",
                description: "Ātras un pārskatāmas vizītkartes mājaslapas",
                icon: "💻"
              },
              {
                title: "Mobilā versija",
                description: "Pielāgots dizains visām ierīcēm",
                icon: "📱"
              },
              {
                title: "SEO optimizācija",
                description: "Labāka redzamība meklētājprogrammās",
                icon: "🔍"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Par mani sadaļa ar jaunu fonu */}
      <section className="relative py-16 w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-30">
          <Image
            src="/webpicture2.jpg"
            alt="Fona attēls"
            fill
            className="object-cover object-center"
            quality={80}
          />
        </div>

        {/* Gradient overlay */}
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#decba4]/80 via-[#ddb67a]/60 to-[#ba8c4e]/80 mix-blend-multiply" />

        {/* Dark overlay for text readability */}
       <div className="absolute inset-0 -z-10 bg-black/30" />

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative h-96 w-full rounded-lg overflow-hidden flex items-center justify-center ">
              <Image
                src="/kzarans.jpg"
                alt='Krists Zārāns'
                width={400}
                height={400}
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="md:w-1/2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Par mani</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Esmu iesācējs tīmekļa izstrādātājs ar lielu interesi par front-end izstrādi. Nesen esmu apguvis JavaScript, HTML un CSS pamatus, un esmu jau izveidojis dažas vietnes, izmantojot Next.js.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Esmu aizrautīgs ar tīmekļa izstrādi un vēlos turpināt mācīties, strādājot pie reāliem projektiem. Esmu atvērts sadarbībai pie dažādām vietnēm — pat bez maksas vai par simbolisku atlīdzību — jo man šobrīd vissvarīgākā ir pieredzes iegūšana un augšana kā izstrādātājam.
            </p>
            <Link
              href="/kontakti"
              className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-6 rounded-full transition"
            >
              Sazināties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}