const https = require('https');

function fetchLexica(query) {
    return new Promise((resolve, reject) => {
        https.get(`https://lexica.art/api/v1/search?q=${encodeURIComponent(query)}`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json && json.images && json.images.length > 0) {
                        resolve(json.images[0].src);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

async function run() {
    console.log("Amethyst:", await fetchLexica('amethyst crystal cluster'));
    console.log("Tarot:", await fetchLexica('tarot cards deck'));
    console.log("Moonstone:", await fetchLexica('moonstone ring jewelry'));
    console.log("Sage:", await fetchLexica('burning sage smudge bundle'));
    console.log("Singing Bowl:", await fetchLexica('tibetan singing bowl'));
}

run();
