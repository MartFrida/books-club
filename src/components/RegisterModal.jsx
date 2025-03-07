/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import RegisterForm from './RegisterForm';

const RegisterModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Блокируем скролл
    } else {
      document.body.classList.remove("overflow-hidden"); // Разрешаем скролл
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Очистка при размонтировании
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target.id === "modal-overlay") {
      onClose(); // Закрываем модалку
    }
  };

  return (
    <div id="modal-overlay" onClick={handleOverlayClick} className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-slate-950 text-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all scale-100">
        {/* Modal Header */}
        {/* <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{t("register")}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200 text-xl">&times;</button>
        </div> */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterModal;
