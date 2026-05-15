"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WhyUsShader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_cyan: { value: new THREE.Color('#00e5ff') },
      u_magenta: { value: new THREE.Color('#d400ff') },
      u_resolution: { value: new THREE.Vector2() }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv; 
        void main() { 
          vUv = uv; 
          gl_Position = vec4(position, 1.0); 
        }
      `,
      fragmentShader: `
        uniform float u_time; 
        uniform vec2 u_mouse; 
        uniform vec3 u_cyan; 
        uniform vec3 u_magenta; 
        uniform vec2 u_resolution;
        varying vec2 vUv;
        
        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          vec2 m = u_mouse * 2.0 - 1.0;
          
          // Algorithme de déformation fluide (Noise-like)
          for(float n = 1.0; n < 6.0; n++) {
            p.x += 0.3 / n * sin(n * p.y + u_time * 0.3 + m.x * 2.0);
            p.y += 0.3 / n * cos(n * p.x + u_time * 0.3 + m.y * 2.0);
          }
          
          float colorFactor = 0.5 + 0.5 * sin(p.x + p.y + u_time);
          vec3 baseColor = mix(u_cyan, u_magenta, colorFactor);
          float luminosity = 0.15 / length(p * 0.8);
          gl_FragColor = vec4(baseColor * luminosity, 0.9);
        }
      `,
      transparent: true
    });

    scene.add(new THREE.Mesh(geometry, material));
    
    let curX = 0.5, curY = 0.5, tarX = 0.5, tarY = 0.5, autoProgress = 0, isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      tarX = (e.clientX - r.left) / r.width;
      tarY = 1.0 - (e.clientY - r.top) / r.height;
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      uniforms.u_resolution.value.set(w, h);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;
    const animate = (t: number) => {
      autoProgress += 0.005;
      
      if (!isHovered) {
        tarX = 0.5 + Math.sin(autoProgress * 0.5) * 0.2;
        tarY = 0.5 + Math.cos(autoProgress * 0.3) * 0.2;
      }
      
      curX += (tarX - curX) * 0.04;
      curY += (tarY - curY) * 0.04;
      
      uniforms.u_time.value = t * 0.001; 
      uniforms.u_mouse.value.set(curX, curY);
      renderer.render(scene, camera); 
      animationFrameId = requestAnimationFrame(animate);
    };
    animate(0);

    return () => {
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full cursor-none transition-opacity duration-1000"
    />
  );
};

export default WhyUsShader;
