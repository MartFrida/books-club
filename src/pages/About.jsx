import { useTranslation } from "react-i18next";
import { useState } from "react";
import RegisterModal from "../components/RegisterModal";

const About = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-[#0d0b26] text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-500 animate-fadeIn">
          🔥 {t("about.title")}
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          {t("about.introduse")}
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          {t("about.description")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 bg-[#0d0b26] p-6 rounded-xl shadow-lg ">
        <h3 className="text-2xl font-semibold text-orange-400">{t("about.why")}</h3>
        <ul className="mt-4 space-y-3 text-gray-300">
          <li>✅ {t("about.list.first")}</li>
          <li>✅ {t("about.list.second")}</li>
          <li>✅ {t("about.list.third")}</li>
          <li>✅ {t("about.list.forth")}</li>
        </ul>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-gray-300 mb-4">
          {t("about.join")} 🚬✨
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          href="#membership"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
        >
          {t("hero.become")}
        </button>
        <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </section>
  )
}

export default About