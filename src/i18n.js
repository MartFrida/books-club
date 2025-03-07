import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Імпортуємо файли локалізації
import translationEN from "./locales/english.json";
import translationES from "./locales/español.json";
import translationFR from "./locales/français.json";
import translationIT from "./locales/italiano.json";

const resources = {
  english: { translation: translationEN },
  español: { translation: translationES },
  français: { translation: translationFR },
  italiano: { translation: translationIT },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "english",
    interpolation: { escapeValue: false },
  });

export default i18n;
