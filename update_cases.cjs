const fs = require('fs');
let content = fs.readFileSync('src/pages/Cases.tsx', 'utf8');

content = content.replace(/}\s*\{/g, '},\n    {');

fs.writeFileSync('src/pages/Cases.tsx', content);
console.log('Fix complete');
