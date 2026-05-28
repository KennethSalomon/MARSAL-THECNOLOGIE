export interface Product {
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

export const CATALOGUE_PRODUCTS: Product[] = [
  {
    id: "smartlock-pro",
    title: "SmartLock Pro",
    category: "Serrures Intelligentes",
    description: "Serrure biométrique (empreinte + code + badge) avec journal d'accès en temps réel et contrôle à distance.",
    imageSrc: "/images/serrure.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20SmartLock%20Pro",
    dataCategory: "serrures-intelligentes",
    dataName: "smartlock pro biométrique empreinte code"
  },
  {
    id: "rfid-elite",
    title: "RFID Elite Hotel Lock",
    category: "Serrures Intelligentes",
    description: "Système de verrouillage par carte magnétique haute fréquence. Finition acier brossé et gestion centralisée.",
    imageSrc: "/images/ser1.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20RFID%20Elite%20Lock",
    dataCategory: "serrures-intelligentes",
    dataName: "rfid elite lock hôtel"
  },
  {
    id: "nexus-hub",
    title: "Nexus Hub Central v2",
    category: "Domotique",
    description: "Passerelle domotique universelle pilotant jusqu'à 128 équipements Zigbee et WiFi.",
    imageSrc: "/images/domotique.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20Nexus%20Hub",
    dataCategory: "domotique",
    dataName: "hub central nexus 128 appareils zigbee z-wave"
  },
  {
    id: "hotel-eco",
    title: "Integrated Hotel Ecosystem",
    category: "Solutions Hôtel",
    description: "Suite logicielle et matérielle pour gestion d'accès, économie d'énergie et confort client.",
    imageSrc: "/images/ser2.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20Pack%20Gestion%20H%C3%B4tel",
    dataCategory: "solutions-hotel",
    dataName: "pack gestion hôtel complet serrures caméras",
    badge: { text: "Premium", type: "premium" }
  },
  {
    id: "krypton-4k",
    title: "Krypton 4K CCTV Pro",
    category: "Caméras",
    description: "Surveillance Ultra-HD avec détection intelligente de forme humaine et vision nocturne couleur.",
    imageSrc: "/images/camera.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20Krypton%204K",
    dataCategory: "cameras",
    dataName: "caméra 4k extérieure krypton vision nocturne",
    badge: { text: "Populaire", type: "populaire" }
  },
  {
    id: "smart-curtain",
    title: "Smart Curtain Track",
    category: "Rideaux Intelligents",
    description: "Système de rail motorisé silencieux avec contrôle par application et scènes automatiques.",
    imageSrc: "/images/ridau.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20Rideau%20Smart",
    dataCategory: "domotique",
    dataName: "rideau motorisé smart control programmable"
  },
  {
    id: "hybrid-inverter",
    title: "Pure Sine Hybrid Inverter",
    category: "Systèmes Énergie",
    description: "Onduleur hybride 3kVA/5kVA haute performance pour autonomie énergétique totale.",
    imageSrc: "/images/panneau.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20Onduleur",
    dataCategory: "energie-solaire",
    dataName: "onduleur pure sine hybrid inverter 3kva",
    badge: { text: "Nouveau", type: "nouveau" }
  },
  {
    id: "solar-street",
    title: "Premium Solar Street Light",
    category: "Éclairage Solaire",
    description: "Projecteur LED industriel autonome avec batterie lithium haute capacité et capteur crépusculaire.",
    imageSrc: "/images/panneau.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20Eclairage%20Solaire",
    dataCategory: "energie-solaire",
    dataName: "éclairage solaire led premium autonome"
  },
  {
    id: "zkteco-attendance",
    title: "ZKTeco iClock Attendance",
    category: "Contrôle de Présence",
    description: "Terminal de pointage biométrique (visage + empreinte) avec logiciel de gestion RH intégré.",
    imageSrc: "/images/commande.jfif",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20ZKTeco",
    dataCategory: "securite-presence",
    dataName: "système pointage zkteco biométrique présence"
  },
  {
    id: "ip-intercom",
    title: "Video IP Door Intercom",
    category: "Interphonie",
    description: "Visiophone connecté avec écran tactile intérieur et redirection d'appels sur smartphone.",
    imageSrc: "/images/cam1.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20Interphone",
    dataCategory: "securite-presence",
    dataName: "interphone vidéo ip visiophone sécurité"
  },
  {
    id: "white-board",
    title: "Interactive White Board 55\"",
    category: "Bureautique Pro",
    description: "Écran tactile collaboratif 4K avec logiciel de présentation intégré pour salles de conférence.",
    imageSrc: "/images/cam2.png",
    whatsappLink: "https://wa.me/22954036641?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20Tableau%20Blanc",
    dataCategory: "autres",
    dataName: "tableau blanc interactif tactile 55 pouces"
  }
];