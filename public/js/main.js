/* ============================================================
   MARSAL TECHNOLOGIES — main.js
   Composants partagés : Header, Footer, WhatsApp, ScrollReveal
   ============================================================ */

/* ── 1. HTML DES COMPOSANTS COMMUNS ────────────────────────── */

const HEADER_HTML = `
<div class="container">
  <div class="header-inner">
    <!-- Logo -->
    <a href="index.html" class="logo-wrap" aria-label="Marsal Technologies — Accueil">
      <img src="/images/logo.png" alt="Marsal Technologies Logo" class="logo-img">
    </a>

    <!-- Navigation desktop (Hidden if React Header is active) -->
    <nav aria-label="Navigation principale">
      <ul class="nav-links">
        <li><a href="index.html" data-page="index">Accueil</a></li>
        <li><a href="solutions.html" data-page="solutions">Solutions</a></li>
        <li><a href="catalogue.html" data-page="catalogue">Catalogue</a></li>
        <li><a href="temoignages.html" data-page="temoignages">Témoignages</a></li>
        <li><a href="contact.html" data-page="contact">Contact</a></li>
      </ul>
    </nav>

    <!-- CTA + Burger -->
    <div class="header-cta">
      <a href="contact.html" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        Devis gratuit
      </a>
      <button class="burger" id="burger-btn" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div>
</div>

<div class="mobile-overlay" id="mobile-overlay"></div>
<nav class="mobile-nav" id="mobile-nav" aria-label="Menu mobile">
  <div class="mobile-nav-content">
    <a href="index.html" data-page="index">Accueil</a>
    <a href="solutions.html" data-page="solutions">Solutions</a>
    <a href="catalogue.html" data-page="catalogue">Catalogue</a>
    <a href="temoignages.html" data-page="temoignages">Témoignages</a>
    <a href="contact.html" data-page="contact">Contact</a>
    <a href="contact.html" class="btn btn-primary btn-devis">Obtenir un devis</a>
  </div>
</nav>
`;

// Fonction qui génère la grille des partenaires (prend toute la largeur)
function generatePartnersGrid() {
  const partners = [
    { name: "Delta Motors", logo: "https://logo.clearbit.com/delta-motors.com?size=120&format=png", fallback: "Delta Motors" },
    { name: "Serlog Logistics", logo: "https://instagram.fcoo2-1.fna.fbcdn.net/v/t51.2885-19/349232429_1508891256305921_1660746035022741137_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=instagram.fcoo2-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2gFse26SK2V1jCb2TD4lNzFwNi-EVqHQNz8-WiQrvqP3p9dezKGAENMdBqW4wrSiQwI&_nc_ohc=qpM4mk3nYoAQ7kNvwHpMzUi&_nc_gid=r7CzMyCJNobSVOM89oxb9A&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af-ui57X8huBIgnfUNlvZBhrmcGceQflqIZQ9FkSDS5yPw&oe=6A2216A0", fallback: "Serlog" },
    { name: "3TI SARL", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEVHcEwzUp4zUp0zUp0zUp0sTZseRZhfdK7N0uPCyd5DXqP///8KO5Tb3uuwudSeqcvv8faQncR7i7pe9uZqAAAABXRSTlMAEq//slwUrCoAAAC/SURBVHgBvZPBDoQgDEQRnCLACvr/H7ulJxDAy2bfoYmZR2MmoNSmzRS9cW6WbGpfC1qZF34ugAgrAfZwHnMBNjALIX6KcNJMkAXMVKAjCIkmgufQZR5xLJDjzCYeF8YbOMoRMkcCnXJW9twYCYGJRF5W9AKlEjimiBadEEPNJz4FXKHB4iHEXM4dQincUSvgll8jAYHxrUCuqlgqT+g2ZKo7t61g4C1V98oadEVBZvfxj2uv1/n+/njVti+f/xeR5xITAMlHqwAAAABJRU5ErkJggg==", fallback: "3TI SARL" },
    { name: "7ELITE Groupe", logo: "https://7elite-group.com/elite.png", fallback: "7ELITE" },
    { name: "Benin Textile Corp.", logo: "https://gdiz-benin.com/wp-content/uploads/2022/07/GDIZ-LOGO.png", fallback: "GDIZ" },
    { name: "SOBECO", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAALVBMVEVHcEyUwR6UwR+UwR+UwR+UwR+UwR+UwR6UwR+UwR+UwR+UwR+UwR+UwR+wVRibAAAADnRSTlMAD2WUsYNDJsp2TDj44VcH9cIAAACUSURBVHgBpcctrEFhAADQ4z7P+1G+2Uw1gSbpTTO7osD0JCo2onaDKGiamV70pMebbHw9arYbzWnHx2q9/gyAxeZwHmQAf2uYBMAY/FyASkp1zxIow5UkAx3YYgVSOI5ogwy6N+pQ2sMw5wtKJ4h3vl/9jTFIwBzT+AgaAGIeAFCJTQBIHgDgP1dQrJ2CcqqgFbztCUF3Hj0RFPTDAAAAAElFTkSuQmCC", fallback: "SOBECO" },
    { name: "SBEE Godomey", logo: "https://sbee.bj/wp-content/uploads/2024/03/Logo-SBEE-couleur-transparent-1.svg", fallback: "SBEE" },
    { name: "PMI Foods", logo: "https://www.pmifoods.com/wp-content/uploads/2024/07/logo.svg", fallback: "PMI Foods" },
    { name: "IAC-BENIN", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEVHcEwzUp4zUp0zUp0zUp0sTZseRZhfdK7N0uPCyd5DXqP///8KO5Tb3uuwudSeqcvv8faQncR7i7pe9uZqAAAABXRSTlMAEq//slwUrCoAAAC/SURBVHgBvZPBDoQgDEQRnCLACvr/H7ulJxDAy2bfoYmZR2MmoNSmzRS9cW6WbGpfC1qZF34ugAgrAfZwHnMBNjALIX6KcNJMkAXMVKAjCIkmgufQZR5xLJDjzCYeF8YbOMoRMkcCnXJW9twYCYGJRF5W9AKlEjimiBadEEPNJz4FXKHB4iHEXM4dQincUSvgll8jAYHxrUCuqlgqT+g2ZKo7t61g4C1V98oadEVBZvfxj2uv1/n+/njVti+f/xeR5xITAMlHqwAAAABJRU5ErkJggg==", fallback: "IAC Bénin" },
    { name: "SONI Bank Bénin", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAICAMAAACvWw2dAAAAYFBMVEXm9fze9PwnuetGwO1pye9bxu5cxu5ZxO5Qwu2T1vP////k8fnq+P36/f6s3vWH0vJuyvB5zvHu9vzM6/ma2PR/z/Gc0O0AtOoArei24/fZ8PvG6fm93/Oz2vHT7vq+5vhJkOV3AAAArElEQVR4AUWNBWIEIQwAs4prOCwt/P+XZWs3EDeA7QH247wW9/Pu60ezY+cCQEol9bYb67wP6y0etYgM0wvAqBw1FHNUIfZWmBeiuCOwUDu16kCrD/mpoRbjQ01JeGdtEc4JV8Hp6v5OnBR365hLp7NJvKwoWE2xFEBvC9D85ozd7M3Nn8ctjEHY7ZxyIiKNhoRNd+p9w0mdJsAq9AloJtJc3lhNetDWJy0afgEkOA5vaxhH/AAAAABJRU5ErkJggg==", fallback: "SONI Bank" },
    { name: "Chapelle des Vainqueurs", logo: "", fallback: "Chapelle VDM" },
    { name: "OWO Financial Services", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEx2RkqqChe1CBaqEx6sCha0CRexCRe0CBe2CBexCReqChe+BxirChe1CBezCRexCRe4CBfKBRjBBhjCBRjOBBlyZPaEAAAAFnRSTlMACEs3D5XKgy4fr/x32v9tXumW2//ukQq9dwAAARFJREFUeAG0kAWCBCEMBBsNGjKQ/f9X79g5d60RpLAG/46x7j3lbYiUnMuvVS41ttArc60lPXejViFmPgoNKkfxT1zgI8dbJT5La5Lsk8mDOd26aWTplYPkYT/WvWbzUVUva122tjgpujzzzAevlgzgEx3KcsZTHcSH79weI0+u19BWNXWWUJ8lsNx3MVR95VwdniFVAJBeTI2DYEOGeCtGkINF2VPbliFAInXfXYwu+k5RTD339DUIYsaUMVubY0zkhX0TXtXFArPl8HHO5U857DXntB0YsS2PslaBP1occFs61tw9ICEDydoE5CCA8ee9F0t4j8Jt5HdtqOTxLrZ3i/dJFBx+jDGAuRkQwGi8igGoWQ3JgH9pVwAAAABJRU5ErkJggg==", fallback: "OWO Financial" },
    { name: "Benue State Judiciary", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAMAAADQQiM0AAAAulBMVEVHcEwAOCwBTigDVy8ANhYAFy8ATygDcCUMeSZCk1RanW02iUpQmWMoiD4QYTZnpnmQt6WkwboHhx8AViZ5rYmEs5Z2p4oAMxsPXzZFdlglQzcCMx0ZNyswU0QCLxoAHw0AKhhPiFyduLRge3Y8YFEgTjICOSGInJ4BPiNJbmEBRiaWrK2wxsRxj4graEsmkjkcXDQvaT5do19XkXHM2eBgh3q9ztNumorI1dyHqaPF09pzOCMqY0oAOQG7vIwUAAAAPnRSTlMAJ1h3Rw+V9v///////77/////0////ziq//////////////7///////X////90f////////3////////2bUkKjQ4AAAIMSURBVHgBXNBXdoUgFAVQ37MBgoCxU+w1DTP/wQVNz/3d67bjfNft7rqu5zv/yg9CAFGECYi9P+CGhDLIMIdJQh5+9cUgzdIcI0ghZCkKiy8oozRKYVULKVSFUJqCT3IB4rTSTat1q1vZZTQL/Wt5SBJYNW0rhKqF0G2V9jg+JcAMVY0WrdDDOFlsOpqCm5UQciRtwzzPy6ImqbVEKSztg4BR22JhrZdlGvQmm4ploePcI5aPrZjXdVePyy7WedYjQnacSxCsW21b9tHKfoqkPSkcFz5da6zsnyIayoh3ibrETnu2ss5C0qfo5ngA0bGdP3qGs0e0I6V2jw/4U/TRsw7b1dJWjNvbnJdXStVkVjMZdRgzTabG+K20UgDO8XFMx3GY46qOcnJm4BoMk/emyCohohAKoEx3d8+ATag06Nv/tuSCdX7gdqnjE9MM74h5uN5e5xMIQcKq7nzeI5o9OjfTJhnmZddt7C12g+5USSmHYT13wZlyoJ2P0WurJvLjtlTU6gRvguU5Jjwerqa7NZZOg6gDmNqzYnGBk+nQ+ew4ayRL/dPDV8l3cneToVgoVGo6ELy59ZVybywJicdk2fKYsa4/mahZNuQOGlSDAFEs4Kjzz26hiuEc6qTGeVsY6wGoAght6TPGZgw1GX30HtezocXtokJVlYVm1WySaFol5pnU0H82ookQ+gJRyVR8zsQIwQAAAABJRU5ErkJggg==", fallback: "Benue Judiciary" },
    { name: "FV Partners Group", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEVHcEwzUp4zUp0zUp0zUp0sTZseRZhfdK7N0uPCyd5DXqP///8KO5Tb3uuwudSeqcvv8faQncR7i7pe9uZqAAAABXRSTlMAEq//slwUrCoAAAC/SURBVHgBvZPBDoQgDEQRnCLACvr/H7ulJxDAy2bfoYmZR2MmoNSmzRS9cW6WbGpfC1qZF34ugAgrAfZwHnMBNjALIX6KcNJMkAXMVKAjCIkmgufQZR5xLJDjzCYeF8YbOMoRMkcCnXJW9twYCYGJRF5W9AKlEjimiBadEEPNJz4FXKHB4iHEXM4dQincUSvgll8jAYHxrUCuqlgqT+g2ZKo7t61g4C1V98oadEVBZvfxj2uv1/n+/njVti+f/xeR5xITAMlHqwAAAABJRU5ErkJggg==", fallback: "FV Partners" }
  ];

  let cardsHtml = '';
  for (let i = 0; i < partners.length; i++) {
    const p = partners[i];
    cardsHtml += `
      <div class="partner-card">
        <div class="partner-logo">
          <img src="${p.logo || ''}" 
               alt="${p.name}"
               onerror="this.onerror=null; this.src='https://placehold.co/200x100/1a1a2e/ffffff?text=${encodeURIComponent(p.fallback)}';">
        </div>
        <p class="partner-name">${p.name}</p>
      </div>
    `;
  }

  return `
    <div class="partners-grid-wrapper">
      <div class="partners-header">
        <span class="partners-subtitle">Ils nous font confiance</span>
        <h3 class="partners-title">Nos Partenaires</h3>
        <div class="partners-separator"></div>
      </div>
      <div class="partners-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}

const FOOTER_HTML = `
<div class="container">
  <div class="footer-grid">

    <!-- Colonne 1 : Description + Réseaux -->
    <div class="footer-col">
      <a href="index.html" class="logo-wrap" style="margin-bottom:1.25rem;display:inline-flex;">
        <img src="/images/logo.png" alt="Marsal Technologies Logo" class="logo-img">
      </a>
      <p style="font-size:.875rem;color:var(--text-muted);line-height:1.7;max-width:280px;">
        Solutions domotiques et de sécurité intelligente pour un habitat connecté, sûr et luxueux à Cotonou et dans tout le Bénin.
      </p>
      <div class="social-links">
        <a href="https://www.facebook.com/Marsaltechnologies" class="social-btn" aria-label="Facebook" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/marsal_technologies?igsh=MW41c2V5OTVjd2Jvcg==" class="social-btn" aria-label="Instagram" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@marsaltechnologies?_r=1&_t=ZS-96UGg353BMy" class="social-btn" aria-label="TikTok" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
          </svg>
        </a>
        <a href="https://bj.linkedin.com/in/marsal-smarttech-b9119b274?trk=public_post_comment_actor-image" class="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2a2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
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
        <li><a href="index.html">Accueil</a></li>
        <li><a href="solutions.html">Nos Solutions</a></li>
        <li><a href="catalogue.html">Catalogue</a></li>
        <li><a href="temoignages.html">Témoignages</a></li>
        <li><a href="contact.html">Contact & Devis</a></li>
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
        <div style="position:relative; width:100%; height:180px; border-radius:18px; overflow:hidden; border:1px solid var(--border);">
          <img src="/images/map.jpg" alt="Carte de localisation Marsal Technologies" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy">
          <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.04);">
            <div style="background:var(--bg-white); padding:12px 24px; border-radius:100px; box-shadow:0 8px 24px rgba(0,0,0,0.12); border:1px solid var(--border); display:flex; flex-direction:column; align-items:center; gap:2px;">
              <span style="font-size:10px; font-weight:800; text-transform:uppercase; color:var(--accent); letter-spacing:0.05em;">Nous trouver</span>
              <span style="font-size:13px; font-weight:600; color:var(--text-main);">Ouvrir dans Google Maps</span>
            </div>
          </div>
        </div>
      </a>
      <p style="font-size:.8rem;color:var(--text-muted);margin-top:1rem;">
        <a href="tel:+22954036641" style="color:var(--accent);">+229 54 03 66 41</a>
      </p>
    </div>

  </div>

  <!-- SECTION PARTENAIRES - PLEINE LARGEUR -->
  <div class="footer-partners-section">
    <div class="partners-fullwidth">
      ${generatePartnersGrid()}
    </div>
  </div>

  <!-- Bottom bar -->
  <div class="footer-bottom">
    <span>© 2025 Marsal Technologies. Tous droits réservés.</span>
    <span>Domotique · Sécurité · Luxe · Cotonou, Bénin</span>
  </div>

</div>
`;

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
  const header = document.getElementById('site-header');
  if (header && !header.firstChild) header.innerHTML = HEADER_HTML;

  const footer = document.getElementById('site-footer');
  if (footer && !footer.firstChild) footer.innerHTML = FOOTER_HTML;

  const waContainer = document.getElementById('whatsapp-widget');
  if (waContainer) waContainer.innerHTML = WHATSAPP_HTML;
}

/* ── 3. NAV ACTIVE PAGE ─────────────────────────────────────── */

function setActivePage() {
  const path = window.location.pathname;
  const fileName = path.split('/').pop() || "index.html";
  
  let current = 'index';
  if (fileName === "" || fileName === "index.html") current = 'index';
  
  if (fileName.includes('solutions')) current = 'solutions';
  if (fileName.includes('catalogue')) current = 'catalogue';
  if (fileName.includes('temoignages')) current = 'temoignages';
  if (fileName.includes('contact')) current = 'contact';

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
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── 5. BURGER MENU ─────────────────────────────────────────── */

function initBurger() {
  const btnBurger = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-overlay');
  
  if (!btnBurger || !mobileNav) return;

  const toggleMenu = () => {
    const isOpen = btnBurger.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
    if (overlay) overlay.classList.toggle('is-active');
    
    document.body.style.overflow = isOpen ? 'hidden' : '';
    btnBurger.setAttribute('aria-expanded', isOpen);
    btnBurger.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  };

  btnBurger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  [overlay, mobileNav].forEach(el => {
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target === overlay) {
          if (btnBurger.classList.contains('is-active')) toggleMenu();
        }
      });
    }
  });
}

/* ── 6. SCROLL REVEAL (IntersectionObserver) ─────────────────── */

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .animate-blur-fade-up');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => {
    observer.observe(el);
  });
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

  btnJour.addEventListener('click', () => {
    dayLayer.style.opacity = '1';
    dayLayer.style.zIndex = '10';
    nightLayer.style.opacity = '0';
    nightLayer.style.zIndex = '0';
    nightLayer.style.filter = '';
    btnJour.classList.add('active');
    btnNuit.classList.remove('active');
    btnJour.setAttribute('aria-pressed', 'true');
    btnNuit.setAttribute('aria-pressed', 'false');
  });

  btnNuit.addEventListener('click', () => {
    dayLayer.style.opacity = '0';
    dayLayer.style.zIndex = '0';
    nightLayer.style.opacity = '1';
    nightLayer.style.zIndex = '10';
    nightLayer.style.filter = 'brightness(0.75) contrast(1.25) saturate(0.75)';
    btnNuit.classList.add('active');
    btnJour.classList.remove('active');
    btnNuit.setAttribute('aria-pressed', 'true');
    btnJour.setAttribute('aria-pressed', 'false');
  });

  dayLayer.style.opacity = '1';
  dayLayer.style.zIndex = '10';
  nightLayer.style.opacity = '0';
  nightLayer.style.zIndex = '0';
  btnJour.classList.add('active');
}

/* ── 9. INJECTION STYLES PARTENAIRES (PLEINE LARGEUR) ───────── */

function injectPartnersStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* --- CORRECTION BOUTON DEVIS MOBILE --- */
    .mobile-nav-content {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      padding: 2rem 1.5rem;
      gap: 0.75rem;
    }

    .mobile-nav .btn-devis {
      display: block !important;
      width: 100% !important;
      text-align: center !important;
      padding: 14px 16px !important;
      margin: 12px 0 !important;
      box-sizing: border-box !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      border-radius: 100px !important;
      font-size: 1rem !important;
      min-height: 48px; /* Optimisation zone de toucher */
    }

    @media (max-width: 480px) {
      .mobile-nav .btn-devis {
        padding: 12px 12px !important;
        font-size: 0.9rem !important;
        white-space: normal !important; /* Retour à la ligne si très petit écran */
        line-height: 1.2 !important;
      }
    }

    /* SECTION PARTENAIRES - PLEINE LARGEUR */
    .footer-partners-section {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      background: linear-gradient(180deg, #0a0a0a 0%, #000000 100%);
      padding: 3rem 0 2rem;
      border-top: 1px solid rgba(30, 107, 158, 0.25);
      border-bottom: 1px solid rgba(30, 107, 158, 0.25);
    }
    
    .partners-fullwidth {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    .partners-grid-wrapper {
      text-align: center;
    }
    
    .partners-header {
      margin-bottom: 2.5rem;
    }
    
    .partners-subtitle {
      color: #1E6B9E;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 0.7rem;
      font-weight: 600;
      display: block;
      margin-bottom: 0.5rem;
    }
    
    .partners-title {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.75rem;
    }
    
    .partners-separator {
      width: 70px;
      height: 3px;
      background: linear-gradient(90deg, #1E6B9E, #4A9FD8, #1E6B9E);
      margin: 0 auto;
      border-radius: 3px;
    }
    
    .partners-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem 1.5rem;
      align-items: center;
      justify-items: center;
    }
    
    .partner-card {
      text-align: center;
      transition: transform 0.3s ease;
      width: 100%;
      max-width: 180px;
    }
    
    .partner-card:hover {
      transform: translateY(-5px);
    }
    
    .partner-logo {
      background: rgba(255, 255, 255, 0.03);
      border-radius: 16px;
      padding: 1rem;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;
    }
    
    .partner-card:hover .partner-logo {
      border-color: rgba(30, 107, 158, 0.6);
      box-shadow: 0 0 20px rgba(30, 107, 158, 0.2);
    }
    
    .partner-logo img {
      max-width: 100%;
      max-height: 65px;
      width: auto;
      height: auto;
      object-fit: contain;
      filter: brightness(0.9) contrast(1.1);
      transition: filter 0.3s ease;
    }
    
    .partner-card:hover .partner-logo img {
      filter: brightness(1) contrast(1.2);
    }
    
    .partner-name {
      margin-top: 0.8rem;
      font-size: 0.7rem;
      font-weight: 500;
      color: #9CA3AF;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: color 0.3s ease;
    }
    
    .partner-card:hover .partner-name {
      color: #1E6B9E;
    }
    
    /* RESPONSIVE */
    @media (max-width: 1024px) {
      .partners-grid {
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 1.5rem;
      }
      .partner-logo {
        height: 85px;
        padding: 0.8rem;
      }
      .partner-logo img {
        max-height: 55px;
      }
    }
    
    @media (max-width: 768px) {
      .footer-partners-section {
        padding: 2rem 0 1.5rem;
      }
      .partners-grid {
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 1rem;
      }
      .partner-logo {
        height: 75px;
        padding: 0.6rem;
      }
      .partner-logo img {
        max-height: 48px;
      }
      .partner-name {
        font-size: 0.6rem;
      }
      .partners-title {
        font-size: 1.5rem;
      }
    }
    
    @media (max-width: 480px) {
      .partners-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
      .partner-card {
        max-width: 100%;
      }
      .partner-logo {
        height: 70px;
      }
      .partner-logo img {
        max-height: 45px;
      }
    }
  `;
  document.head.appendChild(style);
}

/* ── 10. INIT ALL ───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  setActivePage();
  initHeaderScroll();
  initBurger();
  initScrollReveal();
  initCounters();
  initAdvancedAtmosphereSwitcher();
  injectPartnersStyles();
});