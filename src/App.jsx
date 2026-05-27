import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Gallery Section */}
      <ServicesSection />

      {/* Footer Placeholder */}
      <footer className="bg-brand-text text-white py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Marsal Technologies</h2>
            <p className="text-gray-300">Solutions domotiques de luxe à Cotonou, Bénin</p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400">&copy; 2026 Marsal Technologies. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
