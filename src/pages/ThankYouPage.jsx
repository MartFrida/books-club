import { useTranslation } from "react-i18next";

const ThankYouPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  return (
    <section className="bg-slate-950 text-white py-20 px-6 md:px-12 min-h-[90vh] flex flex-col justify-center">
      <div className=" max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-500 animate-fadeIn">
          🔥 Books Palace Barcelona
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          We are waiting for you at the club.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Don&apos;t forget to bring your ID.
        </p>
      </div>
    </section>
  )
}

export default ThankYouPage