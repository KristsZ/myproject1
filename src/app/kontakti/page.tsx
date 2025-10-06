"use client";

import ContactForm from "@/components/ContactForm";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative px-4 py-30 min-h-[480px] text-white overflow-hidden">
      {/* Fona tekstūra */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/webpicture2.jpg"
          alt="Fona tekstūra"
          fill
          className="object-cover object-center"
          quality={80}
          priority
        />
      </div>

      {/* Gradienta pārklājums */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#decba4]/80 via-[#ddb67a]/60 to-[#ba8c4e]/80 mix-blend-multiply" />

      {/* Tumšs pārklājums, lai teksts kontrastētu */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Saturs */}
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-12">
        {/* Kontaktinformācija */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-md">Sazinieties ar mani</h2>
          
          <div className="grid grid-cols-1 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 transition-colors">
              <div className="flex flex-col items-center md:items-start">
                <FaEnvelope className="text-4xl text-blue-400 mb-4 drop-shadow" />
                <h3 className="text-2xl font-semibold mb-3">Epasts</h3>
                <a 
                  href="mailto:krists.zarans@gmail.com" 
                  className="text-blue-300 hover:text-blue-200 text-xl transition-colors"
                >
                  krists.zarans@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 transition-colors">
              <div className="flex flex-col items-center md:items-start">
                <FaPhone className="text-4xl text-blue-400 mb-4 drop-shadow" />
                <h3 className="text-2xl font-semibold mb-3">Telefons</h3>
                <a 
                  href="tel:+3711111111" 
                  className="text-blue-300 hover:text-blue-200 text-xl transition-colors"
                >
                  +371 1111111
                </a>
              </div>
            </div>
          </div>

          {/* Sociālie mediji */}
          <div className="flex justify-center md:justify-start space-x-8">
            <a
              href="https://www.facebook.com/krists.zarans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-4xl drop-shadow" />
            </a>
            <a
              href="https://www.instagram.com/k.zarans/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-4xl drop-shadow" />
            </a>
            <a
              href="https://github.com/KristsZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-4xl drop-shadow" />
            </a>
          </div>
        </div>

        {/* Kontaktforma */}
        <div className="md:w-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md  p-10 rounded-xl shadow-2xl max-w-lg mx-auto overflow-hidden">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
