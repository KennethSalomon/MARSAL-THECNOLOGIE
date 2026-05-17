#!/bin/bash
# Script de vérification avant build

echo "🔍 VÉRIFICATION PRÉ-BUILD MARSAL TECH"
echo "======================================"
echo ""

echo "1️⃣  Vérification des fichiers critiques..."
[ -f "app/layout.tsx" ] && echo "   ✅ app/layout.tsx" || echo "   ❌ app/layout.tsx MANQUANT"
[ -f "app/page.tsx" ] && echo "   ✅ app/page.tsx" || echo "   ❌ app/page.tsx MANQUANT"
[ -f "app/globals.css" ] && echo "   ✅ app/globals.css" || echo "   ❌ app/globals.css MANQUANT"
[ -f "components/ui/gallery-animation.tsx" ] && echo "   ✅ components/ui/gallery-animation.tsx" || echo "   ❌ gallery-animation.tsx MANQUANT"
[ -f "components/ui/flip-gallery.tsx" ] && echo "   ✅ components/ui/flip-gallery.tsx" || echo "   ❌ flip-gallery.tsx MANQUANT"
[ -f "components/ui/theme-provider.tsx" ] && echo "   ✅ components/ui/theme-provider.tsx" || echo "   ❌ theme-provider.tsx MANQUANT"

echo ""
echo "1️⃣b Vérification des assets critiques..."
[ -f "public/images/nexus-mx8.jpg" ] && echo "   ✅ public/images/nexus-mx8.jpg (Fallback OK)" || echo "   ❌ public/images/nexus-mx8.jpg MANQUANT"
[ -f "public/images/nexus-mx8.jpg" ] || echo "      👉 Action : Placez l'image de secours dans /public/images/ pour stabiliser le Store."

echo ""
echo "2️⃣  Vérification des imports relatifs..."
grep -q "from '../components/ui/" app/page.tsx && echo "   ✅ page.tsx utilise imports relatifs" || echo "   ❌ page.tsx a des imports alias @/"
grep -q "from \"../components/ui/" app/layout.tsx && echo "   ✅ layout.tsx utilise imports relatifs" || echo "   ❌ layout.tsx a des imports alias @/"

echo ""
echo "3️⃣  Vérification des directives client..."
grep -q "\"use client\"" app/page.tsx && echo "   ✅ page.tsx: use client" || echo "   ❌ page.tsx: use client MANQUANT"
grep -q "\"use client\"" components/ui/gallery-animation.tsx && echo "   ✅ gallery-animation.tsx: use client" || echo "   ❌ gallery-animation.tsx: use client MANQUANT"
grep -q "\"use client\"" components/ui/flip-gallery.tsx && echo "   ✅ flip-gallery.tsx: use client" || echo "   ❌ flip-gallery.tsx: use client MANQUANT"

echo ""
echo "4️⃣  Vérification des dépendances..."
grep -q "next-themes" package.json && echo "   ✅ next-themes dans package.json" || echo "   ❌ next-themes MANQUANT"
grep -q "tailwindcss" package.json && echo "   ✅ tailwindcss dans package.json" || echo "   ❌ tailwindcss MANQUANT"

echo ""
echo "5️⃣  Avertissement fichier racine..."
[ -f "page.tsx" ] && echo "   ⚠️  page.tsx à la racine DOIT ÊTRE SUPPRIMÉ !" || echo "   ✅ Pas de page.tsx à la racine"

echo ""
echo "======================================"
echo "📋 Résumé : Prêt pour npm install && npm run dev"
echo "👉 N'OUBLIE PAS : del page.tsx (fichier à la racine)"
