import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='w-full bg-gray-900 text-gray-300 py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Autora informācija */}
          <div className='text-sm'>
            <span>Created by </span>
            <a 
              href="https://your-website.com" 
              className='font-bold text-white hover:text-blue-400 transition-colors'
              target="_blank"
              rel="noopener noreferrer"
            >
              Krists Zarāns
            </a>
            <span> © {new Date().getFullYear()}</span>
          </div>

          {/* Kontaktu informācija */}
          <div className='flex flex-col sm:flex-row items-center gap-6 text-sm'>
            {/* Telefons un epasts ar ikonām */}
            <div className='flex gap-6'>
              <a 
                href="tel:+37129671595" 
                className='hover:text-white transition-colors flex items-center gap-2'
              >
                <FaPhone /> <span className="hidden sm:inline">+371 29671595</span>
              </a>
              <a 
                href="mailto:krists.zarans@gmail.com" 
                className='hover:text-white transition-colors flex items-center gap-2'
              >
                <FaEnvelope /> <span className="hidden sm:inline">krists.zarans@gmail.com</span>
              </a>
            </div>

            {/* Sociālie mediji */}
            <div className='flex gap-6 text-xl'>
              <a
                href="https://www.facebook.com/krists.zarans"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-blue-400 transition-colors'
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/k.zarans/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-pink-400 hover:text-pink-300 transition-colors'
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://github.com/KristsZ" 
                className='text-gray-300 hover:text-gray-100 transition-colors'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                className='text-gray-300 hover:text-blue-400 transition-colors'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
