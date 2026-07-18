import fs from 'fs';
import path from 'path';

async function run() {
    try {
        let pdfjsPath;
        const possiblePaths = [
            './node_modules/pdfjs-dist/legacy/build/pdf.mjs',
            './node_modules/.pnpm/pdfjs-dist@5.4.296/node_modules/pdfjs-dist/legacy/build/pdf.mjs',
        ];
        
        for (const p of possiblePaths) {
            if (fs.existsSync(p)) {
                pdfjsPath = path.resolve(p);
                break;
            }
        }
        
        const pdfjsLib = await import('file:///' + pdfjsPath.replace(/\\/g, '/'));
        const pdfBytes = fs.readFileSync('./private/Computer-Practice-Set-All-Exams-Final.pdf');
        const pdfData = new Uint8Array(pdfBytes);
        const doc = await pdfjsLib.getDocument({ data: pdfData }).promise;
        
        for (let i = 1; i <= 5; i++) {
            const page = await doc.getPage(i);
            const textContent = await page.getTextContent();
            console.log(`Page ${i}:`, textContent.items.map(item => item.str).join(' ').substring(0, 500));
        }
        
        await doc.destroy();
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
