"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Pakalpojumi() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/webpicture2.jpg"
          alt="Fona attēls"
          fill
          className="object-cover object-center"
          quality={80}
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#decba4]/80 via-[#ddb67a]/60 to-[#ba8c4e]/80 mix-blend-multiply" />

      {/* Optional dark overlay for text readability */}
      <div className="absolute inset-0 -z-10 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-16">
          Par mani
        </h1>

        <div className="grid gap-16 md:grid-cols-2 text-zinc-200">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Esmu iesācējs tīmekļa izstrādātājs ar lielu interesi par front-end izstrādi...
            </p>
            <p>
              Mani fascinē, kā tīmeklis spēj savienot cilvēkus...
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-white">Manas prasmes</h2>
            <ul className="space-y-4 text-lg">
              {[
                "JavaScript (ES6+), TypeScript pamati",
                "React, Next.js framework",
                "HTML5 un CSS3, Tailwind CSS",
                "Responsīvs dizains un pieejamība",
                "Git un versiju kontrole",
                "SEO pamati un optimizācija",
                "Komunikācija un komandas darbs"
              ].map((skill, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 mt-1" size={20} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 space-y-6 max-w-3xl text-lg leading-relaxed text-zinc-200">
          <h2 className="text-3xl font-semibold text-white">Pieredze un projekti</h2>
          <p>
            Esmu veiksmīgi izstrādājis vairākas personīgas un studiju mājaslapas...
          </p>
          <p>
            Projekti ietver vizītkartes, prezentācijas lapas, blogus u.c.
          </p>
        </div>

        <div className="mt-24 space-y-6 max-w-3xl text-lg leading-relaxed text-zinc-200">
          <h2 className="text-3xl font-semibold text-white">Vēlos sadarboties</h2>
          <p>
            Esmu atvērts projektiem — pat brīvprātīgiem — lai iegūtu pieredzi.
          </p>
          <p>
            Ja Tev ir ideja — droši sazinies!
          </p>

          <Link
            href="/kontakti"
            className="inline-block mt-8 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            Sazināties
          </Link>
        </div>
      </div>
    </section>
  );
}
