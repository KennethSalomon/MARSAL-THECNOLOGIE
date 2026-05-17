"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart,
  Plus,
  Minus,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Cpu,
  Wifi,
  Layers,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

/** --- TYPES --- */
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'domotique' | 'bons-plans';
  badge?: string;
}

interface CartItem extends Product {
  quantity: number;
}

/** --- SPOTLIGHT CARD COMPONENT --- */
const SpotlightCard = ({ product, onAddToCart }: { product: Product, onAddToCart: (p: Product, q: number) => void }) => {
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/60 rounded-2xl overflow-hidden p-4 transition-all duration-500 hover:border-cyan-marsal/30"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 229, 255, 0.1), transparent 40%)`
        }}
      />

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full bg-magenta-marsal/20 border border-magenta-marsal/30 text-[8px] font-mono-tech text-magenta-marsal uppercase tracking-widest">
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-32 mb-4 rounded-xl overflow-hidden bg-black/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        <img
          src={product.image}
          alt={product.name}
          width={150}
          height={150}
          className="object-contain w-full h-full p-3 opacity-80 group-hover:opacity-100 transition-opacity"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5">{product.name}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-[10px] line-clamp-2 mb-3 leading-relaxed h-8">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-cyan-500 dark:text-cyan-400 font-mono-tech text-xs font-bold">
            {product.price.toLocaleString()} FCFA
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-100 dark:bg-neutral-900 p-0.5 text-neutral-900 dark:text-white">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-6 h-6 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <Minus size={12} />
            </button>
            <span className="w-6 text-center text-[10px] font-mono-tech">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-6 h-6 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <Plus size={12} />
            </button>
          </div>

          <Button
            onClick={() => onAddToCart(product, quantity)}
            className="flex-1 h-8 bg-cyan-marsal text-obsidian text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300"
          >
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
};

/** --- MAIN STORE SECTION COMPONENT --- */
const StoreSection = () => {
  const [activeTab, setActiveTab] = useState<'produits' | 'catalogue' | 'bons-plans'>('produits');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    { id: 'p1', name: 'NEXUS MX-8', price: 285000, description: 'Cerveau domotique centralisé ultra-rapide.', image: '/images/nexus-mx8.jpg', category: 'domotique' },
    { id: 'p2', name: 'KRYPTON SL-7', price: 189000, description: 'Serrure biométrique à reconnaissance faciale.', image: '/images/krypton-sl7.jpg', category: 'domotique' },
    { id: 'p3', name: 'SENTINEL AI', price: 145000, description: 'Caméra de surveillance avec IA prédictive.', image: '/images/sentinel-ai.jpg', category: 'domotique' },
    { id: 'p4', name: 'AURA LIGHTING', price: 165000, description: 'Système d\'ambiance lumineuse adaptatif.', image: '/images/aura-lighting.jpg', category: 'domotique' },
    { id: 'p5', name: 'CHRONOS PANEL', price: 220000, description: 'Écran tactile de contrôle mural en verre brossé.', image: '/images/chronos-panel.jpg', category: 'domotique' },
    { id: 'p6', name: 'VALKYRIE SOUND', price: 195000, description: 'Barre de son encastrée invisible.', image: '/images/valkyrie-sound.jpg', category: 'domotique' },
    { id: 'p7', name: 'HERMES GATE', price: 175000, description: 'Contrôleur d\'accès de portail automatisé.', image: '/images/hermes-gate.jpg', category: 'domotique' },
    { id: 'p8', name: 'ZEPHYR HVAC', price: 245000, description: 'Gestionnaire thermique éco-efficace.', image: '/images/zephyr-hvac.jpg', category: 'domotique' },
    { id: 'p9', name: 'HYDRA VALVE', price: 135000, description: 'Sécurité et coupure d\'eau intelligente.', image: '/images/hydra-valve.jpg', category: 'domotique' },
  ];

  const bonsPlans: Product[] = [
    { id: 'b1', name: 'AirPods Pro 2', price: 125000, description: "Excellent état, boîte complète. Réduction active.", image: '/images/airpods-pro2.jpg', category: 'bons-plans', badge: 'Premium Second Hand' },
    { id: 'b2', name: 'JBL Pulse 5', price: 95000, description: "Légères marques d'usure, son parfait.", image: '/images/jbl-pulse5.jpg', category: 'bons-plans', badge: 'Premium Second Hand' },
  ];

  const catalogue = [
    { title: 'Zigbee', items: ["Capteurs de mouvement", "Ampoules RGBW", "Prises connectées", "Détecteurs d'eau"], icon: Cpu },
    { title: 'WiFi', items: ["Caméras 4K", "Interrupteurs tactiles", "Moteurs de rideaux", "Sonnettes vidéo"], icon: Wifi },
    { title: 'Z-Wave', items: ["Thermostats pro", "Sirènes alarmes", "Vannes connectées", "Répéteurs signal"], icon: Layers },
    { title: 'Protocoles', items: ["Passerelles multi-mode", "Ponts Hue", "Hubs KNX", "Contrôleurs Matter"], icon: ChevronRight },
  ];

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Scroll manual function for carousel
  const scrollManual = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340; // Card width + gap
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (productName: string) => {
    setSearchQuery(productName);
    setShowSuggestions(false);
    // Scroll to the product in carousel
    const productIndex = products.findIndex(p => p.name === productName);
    if (productIndex !== -1 && scrollContainerRef.current) {
      const scrollAmount = productIndex * 340;
      scrollContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const list = cart.map(item => `- ${item.name} x${item.quantity}`).join('\n');
    const message = `Bonjour Marsal Technologie, je souhaite commander les articles suivants :\n${list}\n\nTotal estimé : ${cartTotal.toLocaleString()} FCFA.\nMerci de me confirmer la disponibilité.`;
    // encodeURIComponent ensures spaces become %20 and all chars are safely encoded on all mobile browsers
    window.open(`https://wa.me/22990000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-32 bg-white dark:bg-black relative overflow-hidden z-20 transition-colors duration-300" id="store">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono-tech text-cyan-marsal text-xs tracking-[4px] uppercase mb-4 block"
          >
            Digital Store
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light text-neutral-900 dark:text-white"
          >
            Catalogue & <span className="text-magenta-marsal font-bold">Solutions</span>
          </motion.h2>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(e.target.value.length > 0);
              }}
              onFocus={() => setShowSuggestions(searchQuery.length > 0)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white py-3 pl-12 pr-4 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Predictive Suggestions Dropdown */}
          {showSuggestions && filteredProducts.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl overflow-hidden z-50">
              {filteredProducts.slice(0, 5).map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSuggestionClick(product.name)}
                  className="w-full px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors flex items-center justify-between group"
                >
                  <span className="text-neutral-900 dark:text-white text-sm font-light">{product.name}</span>
                  <span className="text-cyan-500 dark:text-cyan-400 text-xs font-mono-tech opacity-0 group-hover:opacity-100 transition-opacity">
                    {product.price.toLocaleString()} FCFA
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl backdrop-blur-md">
            {[
              { id: 'produits', label: 'Produits Domotiques' },
              { id: 'catalogue', label: 'Catalogue' },
              { id: 'bons-plans', label: 'Bons Plans' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "relative px-6 py-3 text-xs font-mono-tech tracking-widest uppercase transition-colors duration-300 rounded-xl",
                  activeTab === tab.id ? "text-neutral-900" : "text-neutral-600 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-cyan-marsal rounded-xl z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'produits' && (
              <motion.div
                key="produits"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {/* Carousel Container */}
                <div
                  className="relative flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                  ref={scrollContainerRef}
                >
                  <div className="flex gap-6 py-4 flex-nowrap">
                    {(searchQuery ? filteredProducts : products).map(p => (
                      <div key={p.id} className="snap-center flex-shrink-0 w-[300px]">
                        <SpotlightCard product={p} onAddToCart={addToCart} />
                      </div>
                    ))}
                  </div>

                  {/* Fade Masks edges */}
                  <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
                </div>

                {/* Navigation Buttons */}
                <div className="w-full flex justify-end px-6 md:px-12 mt-8 relative z-20">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => scrollManual('left')}
                      className="border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-full p-4 hover:border-cyan-500 transition-colors group"
                      aria-label="Produit précédent"
                    >
                      <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => scrollManual('right')}
                      className="border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-full p-4 hover:border-cyan-500 transition-colors group"
                      aria-label="Produit suivant"
                    >
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'bons-plans' && (
              <motion.div
                key="bons-plans"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {bonsPlans.map(p => (
                  <SpotlightCard key={p.id} product={p} onAddToCart={addToCart} />
                ))}
              </motion.div>
            )}

            {activeTab === 'catalogue' && (
              <motion.div
                key="catalogue"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {catalogue.map((cat, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/60 hover:border-cyan-marsal/20 transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-cyan-marsal/10 flex items-center justify-center mb-6 text-cyan-marsal">
                      <cat.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-wider">{cat.title}</h3>
                    <ul className="space-y-4">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 text-sm hover:text-cyan-marsal transition-colors group cursor-default">
                          <div className="w-1 h-1 rounded-full bg-cyan-marsal/30 group-hover:bg-cyan-marsal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Cart */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-8 right-8 z-[100]"
          >
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="w-16 h-16 rounded-full bg-cyan-marsal text-obsidian shadow-[0_0_30px_rgba(0,229,255,0.5)] flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
              >
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-magenta-marsal text-white text-[10px] font-bold flex items-center justify-center border-2 border-obsidian">
                  {cartCount}
                </span>
              </button>

              {isCartOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute bottom-20 right-0 w-80 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                    <h4 className="text-sm font-mono-tech uppercase tracking-widest text-neutral-900 dark:text-white">Votre Panier</h4>
                    <button onClick={() => setIsCartOpen(false)} className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-lg">×</button>
                  </div>

                  <div className="max-h-60 overflow-y-auto p-4 space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900/50 pb-2 last:border-0 last:pb-0">
                        <div>
                          <div className="text-xs font-bold text-neutral-900 dark:text-white">{item.name}</div>
                          <div className="text-[10px] text-neutral-500 dark:text-neutral-400">{item.quantity} x {item.price.toLocaleString()} FCFA</div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-magenta-marsal hover:text-magenta-marsal/80 text-xs">Supprimer</button>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-neutral-50 dark:bg-neutral-900/40 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex justify-between mb-4">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">Total Estimé</span>
                      <span className="text-sm font-bold text-cyan-500 dark:text-cyan-400">{cartTotal.toLocaleString()} FCFA</span>
                    </div>
                    <Button
                      onClick={handleWhatsApp}
                      className="w-full h-12 bg-[#00a884] hover:bg-[#00c99e] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,168,132,0.3)]"
                    >
                      <MessageCircle size={18} />
                      Commander via WhatsApp
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-marsal/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-magenta-marsal/5 blur-[120px] pointer-events-none" />
    </section>
  );
};

export default StoreSection;
