import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const WhatsAppFloat = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;
