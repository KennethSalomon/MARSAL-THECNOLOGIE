/* ============================================================
   MARSAL TECHNOLOGIES — main.js
   Composants partagés : Header, Footer, WhatsApp, ScrollReveal
   ============================================================ */

/* ── 1. HTML DES COMPOSANTS COMMUNS ────────────────────────── */

const HEADER_HTML = `
<div class="container">
  <div class="header-inner">

    <!-- Logo -->
    <a href="/index.html" class="logo-wrap" aria-label="Marsal Technologies — Accueil">
      <img src="/images/logo.jpeg" alt="Marsal Technologies Logo" class="logo-img">
    </a>

    <!-- Navigation desktop -->
    <nav aria-label="Navigation principale">
      <ul class="nav-links">
        <li><a href="/index.html" data-page="index">Accueil</a></li>
        <li><a href="/solutions.html" data-page="solutions">Solutions</a></li>
        <li><a href="/catalogue.html" data-page="catalogue">Catalogue</a></li>
        <li><a href="/temoignages.html" data-page="temoignages">Témoignages</a></li>
        <li><a href="/contact.html" data-page="contact">Contact</a></li>
      </ul>
    </nav>

    <!-- CTA + Burger -->
    <div class="header-cta">
      <a href="/contact.html" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        Devis gratuit
      </a>
      <button class="burger" id="burger-btn" aria-label="Menu mobile" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div>
</div>

<!-- Mobile nav overlay -->
<nav class="mobile-nav" id="mobile-nav" aria-label="Navigation mobile">
  <a href="/index.html" data-page="index">Accueil</a>
  <a href="/solutions.html" data-page="solutions">Solutions</a>
  <a href="/catalogue.html" data-page="catalogue">Catalogue</a>
  <a href="/temoignages.html" data-page="temoignages">Témoignages</a>
  <a href="/contact.html" data-page="contact">Contact</a>
  <a href="/contact.html" class="btn btn-primary" style="margin-top:1rem;justify-content:center;">Devis gratuit</a>
</nav>
`;

const FOOTER_HTML = `
<div class="container">
  <div class="footer-grid">

    <!-- Colonne 1 : Description + Réseaux -->
    <div class="footer-col">
      <a href="/index.html" class="logo-wrap" style="margin-bottom:1.25rem;display:inline-flex;">
        <img src="/images/logo.jpeg" alt="Marsal Technologies Logo" class="logo-img">
      </a>
      <p style="font-size:.875rem;color:var(--text-muted);line-height:1.7;max-width:280px;">
        Solutions domotiques et de sécurité intelligente pour un habitat connecté, sûr et luxueux à Cotonou et dans tout le Bénin.
      </p>
      <div class="social-links">
        <!-- Facebook -->
        <a href="https://www.facebook.com/Marsaltechnologies" class="social-btn" aria-label="Facebook" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </a>
        <!-- Instagram -->
        <a href="https://www.instagram.com/marsal_technologies?igsh=MW41c2V5OTVjd2Jvcg==" class="social-btn" aria-label="Instagram" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <!-- TikTok -->
        <a href="https://www.tiktok.com/@marsaltechnologies?_r=1&_t=ZS-96UGg353BMy" class="social-btn" aria-label="TikTok" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
          </svg>
        </a>
        <!-- LinkedIn -->
        <a href="https://bj.linkedin.com/in/marsal-smarttech-b9119b274?trk=public_post_comment_actor-image" class="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <!-- WhatsApp -->
        <a href="https://wa.me/22954036641" class="social-btn" aria-label="WhatsApp" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Colonne 2 : Liens rapides -->
    <div class="footer-col">
      <h4>Navigation</h4>
      <ul>
        <li><a href="/index.html">Accueil</a></li>
        <li><a href="/solutions.html">Nos Solutions</a></li>
        <li><a href="/catalogue.html">Catalogue</a></li>
        <li><a href="/temoignages.html">Témoignages</a></li>
        <li><a href="/contact.html">Contact & Devis</a></li>
      </ul>
    </div>

    <!-- Colonne 3 : Localisation -->
    <div class="footer-col">
      <h4>Localisation</h4>
      <a href="https://www.google.com/maps/dir//Marsal+Technologies,+Derriere+la+SOBEBRA,+4006+Quatier+Jak,+Cotonou/@6.3488468,2.430755,15z/" target="_blank" rel="noopener" style="display:block; transition: opacity var(--transition);" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
        <p style="font-size:.875rem;color:var(--text-main);font-weight:600;margin-bottom:.25rem;">
          Marsal Technologies
        </p>
        <p style="font-size:.8rem;color:var(--text-muted);margin-bottom:.75rem;line-height:1.4;">
          Derrière la SOBEBRA, 4006 Quartier Jak, Cotonou
        </p>
        <!-- Refined Map Mockup -->
        <div class="map-mockup" role="img" aria-label="Carte de localisation de Marsal Technologies">
          <div class="map-pin">
            <div class="map-pin-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <span class="map-pin-label">Nous trouver</span>
          </div>
          <div class="map-overlay-badge">Ouvrir dans Google Maps</div>
        </div>
      </a>
      <p style="font-size:.8rem;color:var(--text-muted);margin-top:1rem;">
        <a href="tel:+22954036641" style="color:var(--accent);">+229 54 03 66 41</a>
      </p>
    </div>

  </div>

  <!-- Partners Marquee -->
  <div class="partners-marquee-wrapper">
    <div class="partners-marquee">
      ${generateMarqueeItems()}
      ${generateMarqueeItems()}
    </div>
  </div>

  <!-- Bottom bar -->
  <div class="footer-bottom">
    <span>© 2025 Marsal Technologies. Tous droits réservés.</span>
    <span>Domotique · Sécurité · Luxe · Cotonou, Bénin</span>
  </div>

</div>
`;

function generateMarqueeItems() {
  const partners = [
    { name: "Delta Motors", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=DELTA" },
    { name: "Serlog Logistics", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=SERLOG" },
    { name: "3TI SARL", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=3TI" },
    { name: "7Elite Groupe", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=7ELITE" },
    { name: "Benin Textile Corp", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=GDIZ" },
    { name: "Sobeco", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=SOBECO" },
    { name: "SBEE-Godomey", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=SBEE" },
    { name: "PMI Foods", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=PMI" },
    { name: "Hôtel Mosaly", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=MOSALY" },
    { name: "IAC-Benin", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=IAC" },
    { name: "Soni Bank Bénin", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=SONI" },
    { name: "Vainqueurs Cotonou", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=WINNERS" },
    { name: "Owo Financial", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=OWO" },
    { name: "Judiciary Nigeria", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=BENUE" },
    { name: "FV Partners Group", logo: "https://placehold.co/100x60/FFFFFF/386FA8?text=FVP" }
  ];

  return partners.map(p => `
    <div class="partner-item">
      <div class="partner-logo-box">
        <img src="${p.logo}" alt="Logo ${p.name}" loading="lazy">
      </div>
      <span class="partner-name">${p.name}</span>
    </div>
  `).join('');
}

const WHATSAPP_HTML = `
<a href="https://wa.me/22954036641?text=Merci%20d'avoir%20contact%C3%A9%20Marsal%20Technologies.%20Veuillez%20nous%20envoyer%20vos%20demandes%20et%20nous%20vous%20r%C3%A9pondrons%20dans%20les%20plus%20brefs%20d%C3%A9lais."
   class="whatsapp-float"
   target="_blank"
   rel="noopener"
   aria-label="Contacter Marsal Technologies sur WhatsApp">
  <span class="whatsapp-tooltip">Discutons sur WhatsApp</span>
  <div class="whatsapp-btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </div>
</a>
`;

/* ── 2. INJECTION DES COMPOSANTS ────────────────────────────── */

function injectComponents() {
  // Header
  const header = document.getElementById('site-header');
  if (header) header.innerHTML = HEADER_HTML || "";

  // Footer
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = FOOTER_HTML || "";

  // WhatsApp
  const waContainer = document.getElementById('whatsapp-widget');
  if (waContainer) waContainer.innerHTML = WHATSAPP_HTML;
}

/* ── 3. NAV ACTIVE PAGE ─────────────────────────────────────── */

function setActivePage() {
  const path = window.location.pathname || "/index.html";
  // Detect current page key
  let current = 'index';
  if (path.includes('solutions'))   current = 'solutions';
  if (path.includes('catalogue'))   current = 'catalogue';
  if (path.includes('temoignages')) current = 'temoignages';
  if (path.includes('contact'))     current = 'contact';
 
  document.querySelectorAll('[data-page]').forEach(link => {
    if (link instanceof HTMLElement && link.dataset.page) {
      link.classList.toggle('active', link.dataset.page === current);
    }
  });
}

/* ── 4. HEADER SCROLL SHADOW ────────────────────────────────── */

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── 5. BURGER MENU ─────────────────────────────────────────── */

function initBurger() {
  const btn    = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (!btn || !mobileNav) return;

  btn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ── 6. SCROLL REVEAL (IntersectionObserver) ─────────────────── */

function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry?.isIntersecting && entry.target) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── 7. COUNTER ANIMATION ───────────────────────────────────── */

function animateCounter(el) {
  if (!el?.dataset?.target) return;
  
  const target = parseFloat(el.dataset.target);
  if (isNaN(target)) return;

  const suffix = el.dataset.suffix || ''; 
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
}

/* ── 8. ADVANCED ATMOSPHERE SWITCHER (Cinematic Dual-Layer) ── */

function initAdvancedAtmosphereSwitcher() {
  const dayLayer = document.getElementById('hero-layer-day');
  const nightLayer = document.getElementById('hero-layer-night');
  const btnJour = document.getElementById('btn-jour');
  const btnNuit = document.getElementById('btn-nuit');

  if (!dayLayer || !nightLayer || !btnJour || !btnNuit) return;

  // ── JOUR (DAY MODE) BUTTON ──
  btnJour.addEventListener('click', () => {
    // Smoothly cross-fade: Day visible, Night hidden
    dayLayer.style.opacity = '1';
    dayLayer.style.zIndex = '10';
    nightLayer.style.opacity = '0';
    nightLayer.style.zIndex = '0';

    // Clear filters from night layer
    nightLayer.style.filter = '';

    // Toggle button states
    btnJour.classList.add('active');
    btnNuit.classList.remove('active');
    btnJour.setAttribute('aria-pressed', 'true');
    btnNuit.setAttribute('aria-pressed', 'false');
  });

  // ── NUIT (NIGHT MODE) BUTTON ──
  btnNuit.addEventListener('click', () => {
    // Smoothly cross-fade: Night visible, Day hidden
    dayLayer.style.opacity = '0';
    dayLayer.style.zIndex = '0';
    nightLayer.style.opacity = '1';
    nightLayer.style.zIndex = '10';

    // Apply hardware-accelerated CSS filters for luxury vibe
    nightLayer.style.filter = 'brightness(0.75) contrast(1.25) saturate(0.75)';

    // Toggle button states
    btnNuit.classList.add('active');
    btnJour.classList.remove('active');
    btnNuit.setAttribute('aria-pressed', 'true');
    btnJour.setAttribute('aria-pressed', 'false');
  });

  // Set initial state: Day mode active by default
  dayLayer.style.opacity = '1';
  dayLayer.style.zIndex = '10';
  nightLayer.style.opacity = '0';
  nightLayer.style.zIndex = '0';
  btnJour.classList.add('active');
}

/* ── 9. INIT ALL ────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  setActivePage();
  initHeaderScroll();
  initBurger();
  initScrollReveal();
  initCounters();
  initAdvancedAtmosphereSwitcher();
});