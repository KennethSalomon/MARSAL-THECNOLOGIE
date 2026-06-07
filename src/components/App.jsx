import React from "react";
import { AboutSection } from "./AboutSection";
import "../index.css";

export default function App() {
  return (
    <div className="flex flex-col">
      {/* Tes autres sections (Navbar, Hero...) */}
      <AboutSection />
      
      {/* Ton Footer... */}
    </div>
  );
}