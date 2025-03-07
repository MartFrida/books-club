import { useState, useEffect, useRef } from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../i18n"; // конфігурація локалізації

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef(null);

  // Закрытие меню при клике вне него
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const languages = ["english", "español", "français", "italiano"];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    i18n.changeLanguage(language);
  };

  return (
    <div className="relative my-2" ref={menuRef}>
      {/* Кнопка выбора языка */}
      <a
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2  bg-gray-800 text-white rounded-lg 
                   hover:bg-gray-700 transition duration-300 cursor-pointer"
      >
        <FaGlobe className="text-xl" />
        {!isMobile && <span>{selectedLanguage}</span>}
      </a>

      {/* Выпадающий список */}
      {isOpen && (
        <ul
          className="absolute right-0 mt-2 w-auto lg:w-30 bg-gray-800 text-white rounded-lg shadow-lg 
                     overflow-hidden animate-fadeIn z-50"
        >
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-200"
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
