import React from 'react';
import { motion } from 'framer-motion';
import GalleryAnimation from "./GalleryAnimation";

/**
 * SECTION 3: Services - Premium Expandable Gallery Integration
 */
const ServicesSection = () => {
  const luxuryServices = [
    'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop', // Smart Lock Macro
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop', // Villa Lighting
    'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=2070&auto=format&fit=crop', // Premium Touch Panel
    'https://images.unsplash.com/photo-1521206698660-573b5bb72be0?q=80&w=2070&auto=format&fit=crop'  // Home Security System
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="pill mb-4">Ce que nous faisons</div>
          <h2 className="display-lg text-[#444A52] mb-6">
            Des solutions pensées<br />pour votre confort
          </h2>
          <p className="text-[#7A8290] max-w-2xl">
            Chaque système est conçu sur mesure, installé par nos experts certifiés, et piloté via une application intuitive.
          </p>
        </motion.div>

        {/* Interactive Gallery Component */}
        <div className="mb-16 w-full overflow-hidden">
          <ExpandableGallery
            images={luxuryServices}
            className="w-full"
          />
        </div>

        {/* Call to Action */}
        <div className="flex justify-center md:justify-start mt-12">
          <a href="/solutions.html" className="btn btn-outline border-[#386FA8] text-[#386FA8] hover:bg-[#E8F0F9]">
            Toutes nos solutions
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;