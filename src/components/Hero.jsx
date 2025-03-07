/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import RegisterModal from "./RegisterModal";
import heroImg from '../assets/fire-549103_1920.jpg'
import heroPicture from '../assets/hero-dragon3.png'
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white mt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 overflow-hidden"
      >
        <img className='w-full h-full object-cover' src={heroImg} alt='/fire-smoke' loading="lazy" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-red-500 to-blue-500 text-5xl">
            {t("hero.welcome")}<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-red-500 to-blue-500 text-5xl">Books Palace</span>
          </h1>
          <p className="text-base lg:text-lg mb-6 text-gray-300">
            {t("hero.introduse")}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            href="#join"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
          >
            {t("hero.become")}
          </button>

          <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
        <div className='h-auto p-8'>
          <img className='' src={heroPicture} alt='/fire-smoke' loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
