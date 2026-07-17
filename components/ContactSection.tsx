"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";

// WhatsApp SVG icon
function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// Telegram SVG icon
function TelegramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

// TikTok SVG icon
function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.26 6.26 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.27a8.2 8.2 0 004.79 1.53v-3.4a4.85 4.85 0 01-1.03-.71z" />
    </svg>
  );
}

import ContactForm from "./ContactForm";

const iconMap: Record<string, React.FC<{ size?: number }>> = {
  WhatsApp: WhatsAppIcon,
  Telegram: TelegramIcon,
  TikTok: TikTokIcon,
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact Daniel Clothings"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* ... (background glow) */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* ... (eyebrow and title) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-secondary text-base mb-14 leading-relaxed"
        >
          Reach us on your platform of choice, or send us a message directly. We respond swiftly and with care.
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex items-center justify-center gap-6 sm:gap-10"
        >
          {socialLinks.map((link, i) => {
            const Icon = iconMap[link.name];
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat on ${link.name}`}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: `0 0 32px ${link.color}44`,
                  transition: { duration: 0.25 },
                }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-gold/20 flex items-center justify-center transition-all duration-300 group-hover:border-gold/50"
                  style={{ background: `${link.color}12` }}
                >
                  <span style={{ color: link.color }}>
                    <Icon size={26} />
                  </span>
                </div>
                <span className="font-display text-[9px] tracking-[0.2em] uppercase text-secondary group-hover:text-gold/70 transition-colors duration-300">
                  {link.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
        
        {/* Or divider */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="my-12 flex items-center justify-center gap-4">
          <div className="h-[1px] w-16 bg-gold/20"></div>
          <span className="text-secondary text-sm">OR</span>
          <div className="h-[1px] w-16 bg-gold/20"></div>
        </motion.div>
        
        <ContactForm />

      </div>
    </section>
  );
}
