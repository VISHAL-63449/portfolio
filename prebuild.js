import fs from 'fs';

try {
    let html = fs.readFileSync('index.html', 'utf8');
    // Revert index.html back to source entry point
    html = html
        .replace(/src="(?:\.\/|\/portfolio\/|\/)?assets\/index-.*?\.js"/g, 'src="/src/main.jsx"')
        .replace(/<link rel="stylesheet" crossorigin href="(?:\.\/|\/portfolio\/|\/)?assets\/index-.*?\.css">/g, '')
        .replace(/type="image\/svg\+xml"/g, 'type="image/png"')
        .replace(/href="(?:\.\/|\/portfolio\/|\/)?assets\/favicon-.*?\.(?:svg|png)"/g, 'href="favicon.png"');

    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Successfully ran prebuild clean script.');
} catch (err) {
    console.error('Prebuild script failed:', err);
    process.exit(1);
}
