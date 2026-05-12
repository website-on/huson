const fs = require('fs');
const path = require('path');

const dir = 'd:/منصة/spedia-clone';

const sourceDir = 'C:/Users/Support/.gemini/antigravity/brain/91e12b0c-f413-496c-97ac-aa0bab699621';

// All JPGs in the brain dir
const imagesToCopy = fs.readdirSync(sourceDir).filter(f => f.startsWith('media__') && f.endsWith('.jpg'));

imagesToCopy.forEach(img => {
    try {
        fs.copyFileSync(path.join(sourceDir, img), path.join(dir, img));
        console.log('Copied ' + img);
    } catch (err) {
        console.log('Failed to copy ' + img, err);
    }
});
