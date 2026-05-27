import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [ambiance, setAmbiance] = useState('jour');

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Day/Night Background Switcher */}
      <div className="absolute inset-0">
        {ambiance === 'jour' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-100"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"
          />
        )}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 pt-32">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-left"
          >
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight mb-8 ${
              ambiance === 'jour' ? 'text-brand-text' : 'text-white'
            }`}>
              <span className="block">Avec Marsal Technologies :</span>
              <span className="block text-brand-primary">Sécurisez votre habitat.</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-dark transition-all duration-300 hover:shadow-lg">
                Découvrir nos solutions
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className={`inline-flex items-center justify-center gap-2 px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 ${
                ambiance === 'jour' 
                  ? 'border-brand-text text-brand-text hover:bg-brand-text/5' 
                  : 'border-white text-white hover:bg-white/5'
              }`}>
                Voir le catalogue
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambiance Toggle Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
        <button
          onClick={() => setAmbiance('jour')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
            ambiance === 'jour'
              ? 'bg-white text-brand-primary shadow-lg font-semibold'
              : 'text-white hover:bg-white/10'
          }`}
          aria-pressed={ambiance === 'jour'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          Ambiance Jour
        </button>
        <button
          onClick={() => setAmbiance('nuit')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
            ambiance === 'nuit'
              ? 'bg-white text-brand-primary shadow-lg font-semibold'
              : 'text-white hover:bg-white/10'
          }`}
          aria-pressed={ambiance === 'nuit'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
          Mode Nuit
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
