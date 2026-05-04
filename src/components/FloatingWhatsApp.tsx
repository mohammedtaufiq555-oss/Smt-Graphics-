import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/1234567890" // Replace with real number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_30px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer hover:bg-[#20bd5a] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      {/* Ping ring animation */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></div>
    </motion.a>
  );
}
