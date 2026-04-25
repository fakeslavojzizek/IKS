const https = require('https');
const fs = require('fs');

const elements = [
  { id: 32, query: 'nandi-statue', name: 'nandi_real.jpg' },
  { id: 33, query: 'garuda-statue', name: 'garuda_real.jpg' },
  { id: 34, query: 'temple-finial', name: 'stupika_real.jpg' },
  { id: 35, query: 'temple-altar', name: 'balipitha_real.jpg' },
  { id: 36, query: 'geometric-temple-plan', name: 'shulba_sutra_real.jpg' },
  { id: 37, query: 'mandala-diagram', name: 'ayadi_real.jpg' },
  { id: 38, query: 'temple-pillar', name: 'stambha_axis_real.jpg' },
  { id: 39, query: 'lingaraja-temple', name: 'rekha_deula_real.jpg' },
  { id: 40, query: 'konark-temple-roof', name: 'pidha_deula_real.jpg' },
  { id: 41, query: 'baital-deula-temple', name: 'khakhara_deula_real.jpg' },
  { id: 42, query: 'hoysala-temple-platform', name: 'stellated_plan_real.jpg' }
];

async function fetchUnsplashUrl(query) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'unsplash.com',
      path: `/s/photos/${query}`,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+(\?ixlib=[^"&]+)?/g;
        const matches = data.match(regex);
        if (matches && matches.length > 0) {
          // Filter out profile pics and get the first real photo
          const filtered = matches.filter(m => !m.includes('profile'));
          resolve(filtered[0] ? filtered[0].split('?')[0] + '?auto=format&fit=crop&w=1200&q=80' : null);
        } else {
          resolve(null);
        }
      });
    });
  });
}

async function download(url, name) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(`assets/icons/${name}`);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${name}`);
        resolve(true);
      });
    });
  });
}

async function run() {
  for (const el of elements) {
    console.log(`Searching for ${el.query}...`);
    const url = await fetchUnsplashUrl(el.query);
    if (url) {
      console.log(`Found URL: ${url}`);
      await download(url, el.name);
    } else {
      console.error(`No URL found for ${el.query}`);
    }
  }
}

run();
