import fs from 'fs';
import path from 'path';

try {
    // Copy dist/index.html to root
    fs.copyFileSync('dist/index.html', 'index.html');

    // Copy dist/assets/* to assets/
    const fromDir = 'dist/assets';
    const toDir = 'assets';

    if (!fs.existsSync(toDir)) {
        fs.mkdirSync(toDir, { recursive: true });
    }

    // Remove existing assets to avoid build accrual
    fs.readdirSync(toDir).forEach(file => {
        const filePath = path.join(toDir, file);
        if (fs.statSync(filePath).isFile()) {
            fs.unlinkSync(filePath);
        }
    });

    fs.readdirSync(fromDir).forEach(file => {
        fs.copyFileSync(path.join(fromDir, file), path.join(toDir, file));
    });

    console.log('Successfully ran postbuild distribution helper.');
} catch (err) {
    console.error('Postbuild script failed:', err);
    process.exit(1);
}
