import { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Меняем состояние после 50px прокрутки
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`p-2 bg-slate-950 shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled && "opacity-90 backdrop-blur-md"
      }`}>
      {isMobile && <div className="container px-4 py-2 mx-auto flex justify-between items-center ">
        <a href="/" className=" text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" /></a>
        <ul className="flex space-x-4">
          <li><a href="/about" className="text-white hover:text-gray-400">{t("menu.about")}</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-400">{t("menu.contact")}</a></li>
        </ul>
        <LanguageSelector />
      </div>}

      {!isMobile && <div className="container px-4  mx-auto flex justify-between items-center ">
        <a href="/" className="text-white text-2xl font-bold"><img src="/logo.png" alt="Logo" className="h-16 w-auto" /></a>
        <ul className="flex space-x-4">
          <li><a href="/about" className="text-white text-xl hover:text-gray-400">{t("menu.about")}</a></li>
          <li><a href="/contact" className="text-white text-xl hover:text-gray-400">{t("menu.contact")}</a></li>
        </ul>
        <LanguageSelector />
      </div>}
    </nav>


  );
};

export default Navbar;