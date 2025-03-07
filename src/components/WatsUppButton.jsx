import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me//"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-full shadow-lg 
                 hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
