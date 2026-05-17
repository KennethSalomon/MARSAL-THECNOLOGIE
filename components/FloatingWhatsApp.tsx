"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2290154036641?text=Bonjour%20Marsal%20Tech,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20solutions%20domotiques."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Ring Animation */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/10 animate-ping pointer-events-none dark:bg-cyan-500/20" />
      
      {/* Main Button */}
      <div className="relative w-14 h-14 rounded-full bg-black dark:bg-neutral-900 border border-neutral-800/80 hover:border-cyan-500/50 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 group">
        <MessageCircle size={24} className="text-white group-hover:text-cyan-500 transition-colors" />
      </div>
    </a>
  );
}
