const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const transformed = html
    .replace(/src="(?:\.\/|\/portfolio\/|\/)?assets\/index-.*?\.js"/, 'src="/src/main.jsx"')
    .replace(/<link rel="stylesheet" crossorigin href="(?:\.\/|\/portfolio\/|\/)?assets\/index-.*?\.css">/, '')
    .replace(/href="(?:\.\/|\/portfolio\/|\/)?assets\/favicon-.*?\.svg"/, 'href="favicon.svg"');
console.log("Original includes index JS?", html.includes('assets/index-'));
console.log("Transformed includes main.jsx?", transformed.includes('/src/main.jsx'));
console.log("Transformed includes index JS still?", transformed.includes('assets/index-'));
