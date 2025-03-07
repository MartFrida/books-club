import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#0d0b26] text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">📍 {t("contacts.title")}</h2>
        <p className="text-lg text-gray-300 mb-8">{t("contacts.reach")}
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-orange-400 text-2xl" />
            <a href="https://maps.app.goo.gl/d6zBjtrdfc2rs3AH7" className="text-gray-300"
              target="_blank"
              rel="noopener noreferrer">Eixample, 08010 Barcelona</a>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-orange-400 text-2xl" />
            <a href="tel:" className="text-gray-300">+34 123 456 789</a>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange-400 text-2xl" />
            <a href="mailto:club@gmail.com" className="text-gray-300">books.club@gmail.comi
            </a>
          </div>
          <div className="flex gap-6 mt-4">
            <a href="#" target="_blank" className="text-gray-400 hover:text-orange-500 transition">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-orange-500 transition">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
            <FaClock className="text-orange-400" /> {t("contacts.hours-title")}
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex justify-between">
              <span>{t("contacts.week.monday")}</span> <span>10:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>{t("contacts.week.tuesday")}</span> <span>10:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>{t("contacts.week.wednesday")}</span> <span>10:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>{t("contacts.week.thursday")}</span> <span>10:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>{t("contacts.week.friday")}</span> <span>10:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>{t("contacts.week.saturday")}</span> <span>10:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>{t("contacts.week.sunday")}</span> <span>10:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact