// Script to render PDF pages to PNG images using pdfjs-dist + canvas
import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';

async function run() {
    try {
        // Find pdfjs-dist
        const { createRequire } = await import('module');
        const require = createRequire(import.meta.url);
        
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
        
        if (!pdfjsPath) {
            console.log("pdfjs-dist not found. Let me check node_modules...");
            // Try to find it
            const result = require.resolve('pdf-parse');
            const pdfParsePath = path.dirname(result);
            pdfjsPath = path.join(pdfParsePath, '..', 'pdfjs-dist', 'legacy', 'build', 'pdf.mjs');
            console.log("Trying:", pdfjsPath);
        }
        
        console.log("Using pdfjs from:", pdfjsPath);
        const pdfjsLib = await import('file:///' + pdfjsPath.replace(/\\/g, '/'));
        
        const pdfBytes = fs.readFileSync('./private/Computer-Practice-Set-All-Exams-Final.pdf');
        const pdfData = new Uint8Array(pdfBytes);
        
        const doc = await pdfjsLib.getDocument({ data: pdfData }).promise;
        console.log("Total pages:", doc.numPages);
        
        // Output directory
        const outDir = './public/previews';
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
        
        // Pages to render: 1, 2, 10, 50, 100 (a spread of content)
        const pagesToRender = [1, 2, 10, 50, 100];
        
        for (const pageNum of pagesToRender) {
            console.log(`Rendering page ${pageNum}...`);
            const page = await doc.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.5 });
            
            const canvas = createCanvas(viewport.width, viewport.height);
            const ctx = canvas.getContext('2d');
            
            await page.render({
                canvasContext: ctx,
                viewport,
            }).promise;
            
            const outPath = path.join(outDir, `page_${pageNum}.png`);
            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(outPath, buffer);
            console.log(`  Saved: ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
            
            page.cleanup();
        }
        
        console.log("\nDone! All preview images saved to ./public/previews/");
        await doc.destroy();
        
    } catch (err) {
        console.error("Error:", err.message);
        console.error(err.stack);
    }
}

run();
