'use client';

import { Phone, MapPin } from 'lucide-react';

const PHONE_NUMBER = '+35797464614';
const PHONE_DISPLAY = '97 464614';

const socialLinks = [
  {
    name: 'Call',
    href: `tel:${PHONE_NUMBER}`,
    icon: Phone,
    color: 'hover:text-green-600',
  },
  {
    name: 'Viber',
    href: `viber://chat?number=${PHONE_NUMBER.replace('+', '%2B')}`,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M11.4 0C9.5.1 5.4.5 3.3 2.5 1.5 4.3.8 7 .7 10.4c-.1 3.4-.2 9.7 6 11.5v2.6s0 1.1.7 1.3c.8.3 1.3-.5 2.1-1.4.4-.5.9-1.1 1.4-1.6 3.8.3 6.7-.4 7-.5.8-.2 5.3-.8 6-6.7.8-6.1-.4-9.9-2.4-11.6-1-1-3.4-2.5-8.4-2.8-.5-.1-1-.1-1.7-.1zM12 2c.5 0 1 0 1.5.1 4.2.3 6.1 1.5 6.9 2.2 1.5 1.3 2.5 4.3 1.9 9.4-.6 4.7-3.8 5.2-4.5 5.4-.3.1-2.8.7-6 .5 0 0-2.4 2.9-3.1 3.6-.1.2-.3.2-.3-.1v-4c-5.1-1.4-4.8-6.5-4.7-9.3.1-3 .7-5.2 2.1-6.6 1.7-1.6 5.2-2 6.2-2.1.3-.1.7-.1 1 0zm.3 3.2c-.2 0-.3.2-.3.4s.1.4.3.4c1.3.1 2.4.5 3.2 1.3.8.8 1.3 1.9 1.4 3.3 0 .2.2.4.4.4h.1c.2 0 .4-.2.4-.4-.2-1.6-.8-2.9-1.8-3.9-.9-.9-2.2-1.4-3.7-1.5zm-4.6 1c-.5 0-1 .1-1.4.3-.4.2-.7.5-.8.8-.2.4-.2.8-.1 1.2l.1.4c.4 1.4 1.1 2.8 2 4.1.7.9 1.5 1.8 2.4 2.6l.1.1.1.1.1.1.1.1c.8.8 1.7 1.6 2.6 2.3 1.3.9 2.7 1.6 4.1 2 .4.1.8.2 1.2.1.3-.1.6-.3.8-.6.2-.3.4-.7.4-1.1v-.2c.1-.5-.1-1-.5-1.3l-1.7-1.2c-.4-.3-.8-.3-1.2-.1l-.9.5c-.2.1-.4.1-.6 0-.7-.4-1.4-.9-1.9-1.4-.6-.5-1.1-1.2-1.5-1.9-.1-.2-.1-.4 0-.6l.5-.9c.2-.4.2-.8-.1-1.2l-1.3-1.7c-.2-.3-.6-.5-1-.5h-.5zm4.6.9c-.2 0-.4.2-.4.4s.2.4.4.4c.7 0 1.3.3 1.7.7.5.5.7 1.1.7 1.8 0 .2.2.4.4.4s.4-.2.4-.4c0-.9-.4-1.8-1-2.4-.6-.6-1.4-.9-2.2-.9zm0 1.8c-.2 0-.4.2-.4.4s.2.4.4.4c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .2.2.4.4.4s.4-.2.4-.4c0-.5-.2-1-.6-1.4-.4-.3-.8-.4-1.2-.4z"/>
      </svg>
    ),
    color: 'hover:text-[#7360f2]',
  },
  {
    name: 'Telegram',
    href: `https://t.me/${PHONE_NUMBER}`,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    color: 'hover:text-[#0088cc]',
  },
  {
    name: 'Location',
    href: 'https://maps.google.com/?q=Urban+Catering+Nicosia+Cyprus',
    icon: MapPin,
    color: 'hover:text-red-600',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/urbancateringcy/',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: 'hover:text-[#E1306C]',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/p/Urban-Catering-Cy-61566961025784/',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: 'hover:text-[#1877F2]',
  },
];

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-cream-100 border-b border-navy-950/10">
      <div className="w-full px-4 md:px-8 lg:px-16 py-1.5">
        <div className="flex items-center justify-between w-full">
          {/* Social Links spread across */}
          <div className="flex items-center justify-between w-full gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex items-center gap-1.5 text-navy-950/60 transition-all duration-300 ${link.color}`}
              >
                <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
                  <link.icon className="w-3 h-3" />
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide hidden sm:inline text-navy-950">
                  {link.name}
                </span>
              </a>
            ))}

            {/* Phone Display */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 text-navy-950/60 hover:text-green-600 transition-colors"
            >
              <span className="text-[9px] sm:text-[10px] font-semibold text-navy-950">
                {PHONE_DISPLAY}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
