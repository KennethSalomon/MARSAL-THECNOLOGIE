"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Cpu,
  ShieldCheck,
  ShoppingBag,
  MessageSquare,
  Mail
} from 'lucide-react';
import { useTheme } from 'next-themes';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function FluidMenu() {
  const [activeId, setActiveId] = useState('accueil');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const menuItems: MenuItem[] = [
    { id: 'accueil', label: 'Accueil', href: '#accueil', icon: <Home size={20} /> },
    { id: 'solutions', label: 'Solutions', href: '#solutions', icon: <Cpu size={20} /> },
    { id: 'avantages', label: 'Avantages', href: '#avantages', icon: <ShieldCheck size={20} /> },
    { id: 'catalogue', label: 'Catalogue', href: '#catalogue', icon: <ShoppingBag size={20} /> },
    { id: 'temoignages', label: 'Témoignages', href: '#temoignages', icon: <MessageSquare size={20} /> },
    { id: 'contact', label: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  const handleClick = (itemId: string, href: string) => {
    setActiveId(itemId);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden lg:hidden">
      <div
        className={`relative px-2 py-3 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
          isDark
            ? 'bg-black/60 border-neutral-800/50 text-white'
            : 'bg-white/60 border-neutral-200/50 text-neutral-900'
        }`}
      >
        <div className="flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id, item.href)}
              className="relative p-2 rounded-xl transition-all duration-300 group"
            >
              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-xl ${
                      isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/10'
                    }`}
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeId === item.id
                    ? 'text-cyan-500'
                    : isDark
                    ? 'text-neutral-400 group-hover:text-white'
                    : 'text-neutral-600 group-hover:text-neutral-900'
                }`}
              >
                {item.icon}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
