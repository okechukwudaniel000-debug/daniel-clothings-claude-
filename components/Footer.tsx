import { motion } from "framer-motion";
import { socialLinks, navItems } from "@/lib/data";
import Image from "next/image";

const iconMap: Record<string, React.FC<{ size?: number }>> = {
    WhatsApp: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
    Telegram: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
    TikTok: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.26 6.26 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.27a8.2 8.2 0 004.79 1.53v-3.4a4.85 4.85 0 01-1.03-.71z"/></svg>,
};

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 sm:py-24" aria-label="Site footer">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Column 1: Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/Daniel Clothings logo (without name).png"
            alt="Daniel Clothings Logo"
            width={50}
            height={50}
            className="h-10 w-auto mb-2"
          />
          <p className="font-body italic text-secondary text-sm mt-1">Dress Elegant, Be Elegant</p>
        </div>

        {/* Column 2: Sitemap */}
        <div>
          <h3 className="font-display text-lg text-primary tracking-wider">Sitemap</h3>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-body text-secondary hover:text-gold transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-display text-lg text-primary tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-2 font-body text-secondary">
            <li><a href="mailto:okechukwudaniel000@gmail.com" className="hover:text-gold transition-colors">okechukwudaniel000@gmail.com</a></li>
            <li><a href="tel:+2349132715125" className="hover:text-gold transition-colors">+234 913 271 5125</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center text-center">
        <p className="font-body text-xs text-secondary">&copy; 2026 Daniel Clothings. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.name];
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat on ${link.name}`}
                className="text-secondary hover:text-gold transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
