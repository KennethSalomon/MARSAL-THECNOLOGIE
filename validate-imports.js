// ✅ IMPORT VALIDATION TEST
// Run this with: node validate-imports.js

const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;

function validateFile(filePath, expectedImports) {
  try {
    const content = fs.readFileSync(path.join(projectRoot, filePath), 'utf8');
    console.log(`\n📄 ${filePath}`);
    
    let allValid = true;
    expectedImports.forEach(imp => {
      if (content.includes(imp.check)) {
        console.log(`   ✅ ${imp.label}`);
      } else {
        console.log(`   ❌ ${imp.label} - MISSING`);
        allValid = false;
      }
    });
    
    return allValid;
  } catch (e) {
    console.log(`   ❌ FILE NOT FOUND`);
    return false;
  }
}

console.log('🔍 VALIDATION DES IMPORTS MARSAL TECH\n' + '='.repeat(50));

let allPassed = true;

// Test 1: app/page.tsx
allPassed &= validateFile('app/page.tsx', [
  { check: '"use client"', label: 'use client directive' },
  { check: "import WhyUsShader from '../components/ui/why-us-shader'", label: 'WhyUsShader relative import' },
  { check: "import { useTheme } from 'next-themes'", label: 'Theme hook import' },
  { check: 'export default function Page()', label: 'export default Page()' },
]);

// Test 2: app/layout.tsx
allPassed &= validateFile('app/layout.tsx', [
  { check: 'import "./globals.css"', label: 'globals.css import' },
  { check: 'import { ThemeProvider } from "../components/ui/theme-provider"', label: 'ThemeProvider relative import' },
  { check: 'Marsal Tech', label: 'Marsal Tech metadata' }
]);

// Test 3: app/globals.css
allPassed &= validateFile('app/globals.css', [
  { check: '@import url(\'https://fonts.googleapis.com/css2?family=Exo+2', label: 'Exo 2 font import' },
  { check: '@import url(\'https://fonts.googleapis.com/css2?family=JetBrains+Mono', label: 'JetBrains Mono import' },
  { check: '@tailwind base', label: '@tailwind base' },
  { check: '@tailwind components', label: '@tailwind components' },
  { check: '@tailwind utilities', label: '@tailwind utilities' },
  { check: '--font-exo', label: 'CSS variable: --font-exo' },
  { check: '--font-mono-tech', label: 'CSS variable: --font-mono-tech' }
]);

// Test 4: gallery-animation.tsx
allPassed &= validateFile('components/ui/gallery-animation.tsx', [
  { check: '"use client"', label: 'use client directive' },
  { check: 'Serrure Biométrique NEXUS', label: 'Product 1: Serrure' },
  { check: 'Caméra IA SENTINEL', label: 'Product 2: Caméra' },
  { check: 'Thermostat Smart KRYPTON', label: 'Product 3: Thermostat' },
  { check: 'Éclairage Ambiant LUMIÈRE', label: 'Product 4: Éclairage' },
  { check: 'text-cyan-marsal', label: 'Cyan color' },
  { check: 'text-magenta-marsal', label: 'Magenta color' }
]);

// Test 5: package.json
allPassed &= validateFile('package.json', [
  { check: '"next": "14.2.0"', label: 'Next.js 14.2.0' },
  { check: '"next-themes"', label: 'next-themes dependency' },
  { check: '"tailwindcss"', label: 'Tailwind CSS' },
  { check: '"lucide-react"', label: 'Lucide React icons' }
]);

// Test 6: Check for bad imports
console.log('\n🚫 Checking for BAD imports (should NOT exist):\n');
const badImportFiles = [
  'app/page.tsx',
  'app/layout.tsx'
];

let foundBadImports = false;
badImportFiles.forEach(file => {
  const content = fs.readFileSync(path.join(projectRoot, file), 'utf8');
  if (content.includes('from "@/components')) {
    console.log(`   ⚠️  ${file}: Found @/ alias imports (BAD)`);
    foundBadImports = true;
  } else {
    console.log(`   ✅ ${file}: No @/ alias imports (GOOD)`);
  }
});

allPassed &= !foundBadImports;

// Final result
console.log('\n' + '='.repeat(50));
if (allPassed) {
  console.log('✅ ALL VALIDATIONS PASSED - Ready for npm install!');
  process.exit(0);
} else {
  console.log('❌ SOME VALIDATIONS FAILED - Review errors above');
  process.exit(1);
}
