// This image compression script auto converts all png/jpg to webp within the public folder.
// Written using Gemini AI.

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// --- CONFIGURATION ---
// Replace this with the path to your target folder
const TARGET_FOLDER = './public'; 
// Adjust quality between 1 and 100 (80 is typically the sweet spot for WebP)
const WEBP_QUALITY = 80; 
// ---------------------

const targetExtensions = ['.png', '.jpg', '.jpeg'];

async function processFolder(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        // Recursively walk into child folders
        await processFolder(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        
        if (targetExtensions.includes(ext)) {
          await convertToWebP(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
}

async function convertToWebP(filePath) {
  // 1. Generate the temporary path for the new WebP file
  // We change the extension to .webp first so we don't conflict with the original filename right away
  const parsedPath = path.parse(filePath);
  const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

  try {
    console.log(`Processing: ${filePath}...`);

    // 2. Read the image into a buffer to prevent a file-lock while writing
    const imageBuffer = await fs.readFile(filePath);

    // 3. Convert the buffer data to WebP and save it
    await sharp(imageBuffer)
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);

    // 4. Delete the original file (jpg/png)
    await fs.unlink(filePath);
    
    console.log(`✓ Successfully converted and replaced with: ${webpPath}`);
  } catch (error) {
    console.error(`✗ Failed to convert ${filePath}:`, error.message);
    
    // Cleanup the temp webp file if the process failed halfway through
    try {
      await fs.unlink(webpPath);
    } catch {}
  }
}

// Run the script
(async () => {
  console.log(`Starting conversion in: ${path.resolve(TARGET_FOLDER)}`);
  await processFolder(TARGET_FOLDER);
  console.log('Conversion process finished!');
})();