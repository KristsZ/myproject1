"use client";

import Image from "next/image";
import Link from "next/link";

export default function ParMani() {
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
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-12 drop-shadow-lg">
          Par mani
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-zinc-100 bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl ring-1 ring-white/20">
          <p>
            Esmu iesācējs tīmekļa izstrādātājs ar aizrautību pret front-end tehnoloģijām un mūsdienīgu dizainu. Man patīk veidot tīmekļa risinājumus, kas apvieno estētiku un lietojamību, nodrošinot patīkamu pieredzi galalietotājam.
          </p>
          <p>
            Nesen esmu apguvis JavaScript, HTML un CSS pamatus, kā arī aktīvi darbojos ar Next.js, lai veidotu ātras un efektīvas vietnes. Mani fascinē, kā tīmekļa tehnoloģijas attīstās un kā tās var palīdzēt uzņēmumiem un cilvēkiem sasniegt savus mērķus.
          </p>
          <p>
            Mani virza vēlme pastāvīgi mācīties un pilnveidot savas prasmes, tāpēc esmu atvērts sadarboties pie dažādiem projektiem, pat ja tie ir brīvprātīgi vai par simbolisku atlīdzību. Man svarīgākais šobrīd ir iegūt praktisku pieredzi un kļūt par profesionālu izstrādātāju.
          </p>
          <p>
            Brīvajā laikā es aktīvi sekoju līdzi jaunākajām tendencēm web izstrādē, eksperimentēju ar modernām tehnoloģijām un meklēju radošus risinājumus ikdienas izaicinājumiem. Esmu pārliecināts, ka pastāvīga attīstība un atklātība jaunām zināšanām ir ceļš uz veiksmīgu karjeru.
          </p>
          <p>
            Ja Tev ir ideja vai projekts, kuram nepieciešams entuziasts ar vēlmi mācīties un augt, droši sazinies ar mani — esmu gatavs sadarboties un kopā radīt kaut ko īpašu!
          </p>

          <Link
            href="/kontakti"
            className="inline-block mt-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            Sazināties
          </Link>
        </div>
      </div>
    </section>
  );
}
