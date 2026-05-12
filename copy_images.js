const fs = require('fs');
const path = require('path');

const dir = 'd:/منصة/spedia-clone';

const imagesToCopy = [
    'media__1778533849854.jpg',
    'media__1778533849789.jpg',
    'media__1778533849822.jpg',
    'school_whiteboard_1778535241093.png',
    'media__1778533849766.jpg'
];

const sourceDir = 'C:/Users/Support/.gemini/antigravity/brain/d8619793-64e7-4de8-9678-f291de3bf923';

imagesToCopy.forEach(img => {
    try {
        fs.copyFileSync(path.join(sourceDir, img), path.join(dir, img));
        console.log('Copied ' + img);
    } catch (err) {
        console.log('Failed to copy ' + img, err);
    }
});
