"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

export default function LimelightNav() {
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState('accueil');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems: NavItem[] = [
    { id: 'accueil', label: 'Accueil', href: '#accueil' },
    { id: 'solutions', label: 'Solutions', href: '#solutions' },
    { id: 'avantages', label: 'Avantages', href: '#avantages' },
    { id: 'catalogue', label: 'Catalogue', href: '#catalogue' },
    { id: 'avis', label: 'Avis', href: '#temoignages' },
    { id: 'contact', label: 'Contact', href: '#contact' },
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
      const sections = navItems.map(item => ({
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

  if (!mounted) return null;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg md:hidden">
      <div
        className={`relative rounded-full backdrop-blur-xl border transition-all duration-300 ${
          isDark
            ? 'bg-black/40 border-neutral-800/40'
            : 'bg-white/40 border-neutral-200/40'
        }`}
      >
        {/* Limelight Glow Effect */}
        <AnimatePresence>
          {(activeId || hoveredId) && (
            <motion.div
              layoutId="limelight"
              className={`absolute inset-0 rounded-full ${
                isDark
                  ? 'bg-[rgba(6,182,212,0.15)]'
                  : 'bg-[rgba(6,182,212,0.08)]'
              }`}
              initial={false}
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.6,
              }}
            />
          )}
        </AnimatePresence>

        {/* Navigation Items */}
        <div className="relative flex items-center justify-around px-2 py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id, item.href)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeId === item.id || hoveredId === item.id
                    ? isDark
                      ? 'text-cyan-400'
                      : 'text-cyan-600'
                    : isDark
                    ? 'text-neutral-400'
                    : 'text-neutral-600'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
