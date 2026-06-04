const fs = require('fs');
const files = ['index.html','contact.html','solutions.html','catalogue.html','temoignages.html'];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const matches = [...text.matchAll(/>([^<>]+)</g)];
  const cleaned = [];
  for (const m of matches) {
    const s = m[1].replace(/\s+/g, ' ').trim();
    if (s && !s.startsWith('!--') && !(s.startsWith('[') && s.endsWith(']'))) {
      cleaned.push(s);
    }
  }
  const uniq = [...new Set(cleaned)].sort((a,b)=>a.length-b.length);
  console.log('---', file, '---');
  console.log(uniq.join('\n'));
}
