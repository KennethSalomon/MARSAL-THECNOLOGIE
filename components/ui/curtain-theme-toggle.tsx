"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

type CurtainPhase = "idle" | "falling" | "rising";
const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

export function CurtainThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<CurtainPhase>("idle");
  const [hovered, setHovered] = useState(false);
  
  const duration = 650;
  const buttonSize = 36;

  // Éviter les erreurs d'hydratation
  useEffect(() => setMounted(true), []);

  const toggle = useCallback(() => {
    if (phase !== "idle") return;
    
    setPhase("falling");

    setTimeout(() => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
      setPhase("rising");
      setTimeout(() => setPhase("idle"), duration + 50);
    }, duration);
  }, [phase, resolvedTheme, setTheme]);

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = resolvedTheme === "dark";

  // Styles Marsal Tech
  const btnStyle: React.CSSProperties = {
    position: "relative",
    width: buttonSize,
    height: buttonSize,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // Dark: Cyan / Light: Magenta
    background: isDark ? "#00e5ff" : "#d400ff",
    color: isDark ? "#0a0a0a" : "#ffffff",
    boxShadow: hovered 
      ? `0 0 20px ${isDark ? "rgba(0,229,255,0.4)" : "rgba(212,0,255,0.4)"}` 
      : "none",
    zIndex: 9999,
    outline: "none",
    transition: "all 0.3s ease",
    transform: hovered ? "scale(1.1)" : "scale(1)",
  };

  const curtainStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    // Dégradé Cyan vers Noir profond (Obsidian) pendant la transition
    background: "linear-gradient(to bottom, #00e5ff, #0a0a0a)",
    transformOrigin: "top",
    transform: phase === "falling" ? "scaleY(1)" : "scaleY(0)",
    transition: phase !== "idle" ? `transform ${duration}ms ${EASING}` : "none",
    zIndex: 9997,
    pointerEvents: "none",
  };

  return (
    <>
      <div aria-hidden="true" style={curtainStyle} />
      <button
        style={btnStyle}
        onClick={toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Changer de thème"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </>
  );
}