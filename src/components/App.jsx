import React from "react";
import { AboutSection } from "./AboutSection";
import { ServicesSection } from "./ServicesSection";
// 1. Ajoute cet import ici :
import { Gallery4 } from "./ui/gallery4"; 
import "../index.css";

export default function App() {
  return (
    <div className="flex flex-col">
      {/* Tes autres sections (Navbar, Hero...) */}
      <ServicesSection />
      <AboutSection />
      
      {/* 2. Ajoute le composant ici : */}
      <Gallery4 />
      
      {/* Ton Footer... */}
    </div>
  );
}