const fs = require('fs');

const mockDataPath = 'c:/Users/admin/Desktop/earth healers/client/src/lib/mockData.js';
let content = fs.readFileSync(mockDataPath, 'utf8');

function generateSvg(name, cat) {
    // Generate colors based on category
    let color1 = '#1a1a1a', color2 = '#000000';
    if (name.includes('Amethyst')) { color1 = '#3b0764'; color2 = '#170329'; }
    else if (name.includes('Rose')) { color1 = '#831843'; color2 = '#3a091d'; }
    else if (name.includes('Clear')) { color1 = '#334155'; color2 = '#0f172a'; }
    else if (name.includes('Sage') || name.includes('Palo')) { color1 = '#14532d'; color2 = '#052e16'; }
    else if (name.includes('Tarot') || name.includes('Oracle')) { color1 = '#450a0a'; color2 = '#1e0505'; }
    else if (name.includes('Singing') || name.includes('Moonstone')) { color1 = '#1e3a8a'; color2 = '#0a1538'; }
    else if (name.includes('Citrine') || name.includes('Tiger')) { color1 = '#713f12'; color2 = '#2e1906'; }
    else if (cat === 'Events') { color1 = '#064e3b'; color2 = '#022c22'; }
    else { color1 = '#27272a'; color2 = '#09090b'; }

    // Custom icon shape
    const symbol = name.includes('Raw') || name.includes('Cluster') ? '✧' :
        name.includes('Tarot') ? '🃏' :
            name.includes('Sage') ? '🌿' :
                name.includes('Moon') ? '☽' : '✦';

    const escapedName1 = name.split(' ')[0].replace(/&/g, '&amp;');
    const escapedName2 = name.split(' ').slice(1).join(' ').replace(/&/g, '&amp;');

    const svg = `<svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color1}"/><stop offset="100%" stop-color="${color2}"/></linearGradient></defs><rect width="800" height="1000" fill="url(#g)"/><circle cx="400" cy="500" r="300" fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="10 15" opacity="0.3"/><circle cx="400" cy="500" r="280" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.1"/><text x="400" y="470" font-family="sans-serif" font-size="70" font-weight="bold" fill="#F8F3E6" text-anchor="middle">${escapedName1}</text><text x="400" y="550" font-family="sans-serif" font-size="40" font-weight="300" fill="#D4AF37" text-anchor="middle">${escapedName2}</text><text x="400" y="300" font-family="sans-serif" font-size="80" fill="#D4AF37" text-anchor="middle" opacity="0.5">${symbol}</text><text x="400" y="760" font-family="sans-serif" font-size="20" letter-spacing="4" fill="#F8F3E6" text-anchor="middle" opacity="0.4">EARTH HEALERS</text></svg>`;

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Extract and replace product images
const productsRegex = /export const MOCK_PRODUCTS = \[([\s\S]*?)\];/;
const productsMatch = content.match(productsRegex);

if (productsMatch) {
    let productsStr = productsMatch[1];

    // Replace product images
    productsStr = productsStr.replace(/name:\s*"([^"]+)",[\s\S]*?image:\s*"[^"]+",[\s\S]*?images:\s*\[[^\]]+\],/g, (match, name) => {
        const svgUri = generateSvg(name, 'Products');
        // We replace the image: "..." and images: ["...", "..."] fields
        return match
            .replace(/image:\s*"[^"]+"/, `image: "${svgUri}"`)
            .replace(/images:\s*\[[^\]]+\]/, `images: ["${svgUri}", "${svgUri}"]`);
    });

    content = content.replace(productsMatch[1], productsStr);
}

// Extract and replace event images
const eventsRegex = /export const MOCK_EVENTS = \[([\s\S]*?)\];/;
const eventsMatch = content.match(eventsRegex);

if (eventsMatch) {
    let eventsStr = eventsMatch[1];
    eventsStr = eventsStr.replace(/title:\s*"([^"]+)",[\s\S]*?image:\s*"[^"]+",/g, (match, title) => {
        const svgUri = generateSvg(title, 'Events');
        return match.replace(/image:\s*"[^"]+"/, `image: "${svgUri}"`);
    });
    content = content.replace(eventsMatch[1], eventsStr);
}

fs.writeFileSync(mockDataPath, content);
console.log('Successfully embedded gorgeous robust SVGs into mockData.js!');
