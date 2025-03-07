import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();
  const path = import.meta.env.VITE_URL
  const email = import.meta.env.VITE_EMAIL
  const inputPath = `${path}thanks`
  const actionEmail = `https://formsubmit.co/${email}`

  return (
    <div className="flex items-center justify-center  p-4">
      <div className="backdrop-blur-sm bg-slate-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all scale-100 ">
        {/* Registration Form */}
        <form action={actionEmail} method="POST" className="space-y-4 ">
          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder={t("form.placeholder")}
            />
            <input type="hidden" name="_next" value={inputPath}></input>
            <input type="hidden" name="_subject" value="New submission!"></input>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
          >
            {t("hero.become")}
          </button>
        </form>
      </div >
    </div >
  )
}

export default RegisterForm