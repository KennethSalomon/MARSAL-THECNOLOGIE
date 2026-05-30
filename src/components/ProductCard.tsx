import React, { useState, useEffect, useRef, useMemo } from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  whatsappLink: string;
  dataCategory: string;
  dataName: string;
  badge?: {
    text: string;
    type?: 'premium' | 'populaire' | 'nouveau' | 'bon-plan';
  };
}

// Liste des images locales disponibles pour le tirage aléatoire
const FALLBACK_IMAGES = [
  '/images/camera.png',
  '/images/domotique.png',
  '/images/serrure.png',
  '/images/panneau.png',
  '/images/commande.jfif',
  '/images/1.png',
  '/images/2.png'
];

/**
 * Composant ProductCard pour le catalogue
 * Utilise des images locales situées dans /images/
 */
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  category,
  description,
  imageSrc,
  whatsappLink,
  dataCategory,
  dataName,
  badge
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  // Gestion interne du Reveal pour éviter que la carte ne disparaisse au re-render
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Sélectionne l'image fournie ou pioche aléatoirement si vide/indéfini
  const finalImageSrc = useMemo(() => {
    if (imageSrc && imageSrc.trim() !== "" && imageSrc !== "/images/") {
      return imageSrc;
    }
    // Fallback déterministe basé sur la longueur du titre pour la stabilité
    const randomIndex = title.length % FALLBACK_IMAGES.length;
    return FALLBACK_IMAGES[randomIndex];
  }, [imageSrc, title]);

  return (
    <article 
      ref={cardRef}
      className={`product-card reveal ${isVisible ? 'visible' : ''}`} 
      data-category={dataCategory} 
      data-name={dataName.toLowerCase()}
    >
      {badge && (
        <div className={`product-badge ${badge.type || ''}`}>{badge.text}</div>
      )}
      <div className="product-img bg-gray-100 flex items-center justify-center overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img 
          src={finalImageSrc} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-t-2xl" 
          onError={(e) => {
            // Sécurité anti-carré blanc : charge le logo si l'image locale est introuvable
            (e.target as HTMLImageElement).src = '/images/logo.png';
          }}
        />
      </div>
      <div className="product-body p-5">
        <div className="product-cat text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{category}</div>
        <div className="product-name text-lg font-bold text-slate-800 mb-2">{title}</div>
        <p className="product-desc text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
        <div className="product-footer flex items-center justify-between">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener" 
            className="btn-product bg-[#386FA8] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:bg-[#2a547e]"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;