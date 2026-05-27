import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * GalleryAnimation - Premium responsive gallery with hover expansion
 * Optimized for Marsal Technologies brand
 */
const GalleryAnimation = ({ images = [], className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!images.length) return null;

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const getFlexValue = (index) => {
    if (hoveredIndex === null) return 1;
    return hoveredIndex === index ? 2 : 0.5;
  };

  return (
    <div className={className}>
      {/* Gallery Container */}
      <div className="flex gap-3 h-96 w-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            style={{ flex: 1 }}
            animate={{ flex: getFlexValue(index) }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.src}
              alt={image.alt || `Gallery item ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay on non-hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 0 : 0.25 }}
              transition={{ duration: 0.3 }}
            />
            {/* Title/Label */}
            {image.title && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0, 
                  y: hoveredIndex === index ? 0 : 10 
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold text-lg">{image.title}</h3>
                {image.description && (
                  <p className="text-sm text-gray-200 mt-1">{image.description}</p>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-10 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                className="absolute left-6 z-10 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
                onClick={goToPrev}
                aria-label="Previous"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Image Container */}
            <motion.div
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]?.src || ''}
                alt={images[selectedIndex]?.alt || `Gallery item ${selectedIndex + 1}`}
                className="w-full h-full object-contain rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                className="absolute right-6 z-10 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
                onClick={goToNext}
                aria-label="Next"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full font-medium">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryAnimation;
