const https = require('https');
const fs = require('fs');

const elements = [
  { id: 32, tags: 'nandi,bull,sculpture,temple', name: 'nandi_real.jpg' },
  { id: 33, tags: 'garuda,sculpture,temple', name: 'garuda_real.jpg' },
  { id: 34, tags: 'vimana,stupika,finial', name: 'stupika_real.jpg' },
  { id: 35, tags: 'bali,pitha,altar,temple', name: 'balipitha_real.jpg' },
  { id: 36, tags: 'shulba,sutras,geometry,hindu', name: 'shulba_sutra_real.jpg' },
  { id: 37, tags: 'vastu,purusha,mandala,diagram', name: 'ayadi_real.jpg' },
  { id: 38, tags: 'dhvaja,stambha,pillar,temple', name: 'stambha_axis_real.jpg' },
  { id: 39, tags: 'lingaraja,temple,spire', name: 'rekha_deula_real.jpg' },
  { id: 40, tags: 'konark,temple,roof', name: 'pidha_deula_real.jpg' },
  { id: 41, tags: 'vaital,deula,khakhara', name: 'khakhara_deula_real.jpg' },
  { id: 42, tags: 'hoysala,temple,platform', name: 'stellated_plan_real.jpg' }
];

async function download(el) {
  return new Promise((resolve) => {
    const url = `https://loremflickr.com/1200/800/${el.tags}/all`;
    const file = fs.createWriteStream(`assets/icons/${el.name}`);
    https.get(url, (res) => {
      // Loremflickr redirects to the actual image
      if (res.statusCode === 302 || res.statusCode === 301) {
        https.get(res.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${el.id}: ${el.name}`);
            resolve(true);
          });
        });
      } else {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${el.id}: ${el.name}`);
          resolve(true);
        });
      }
    });
  });
}

async function run() {
  for (const el of elements) {
    await download(el);
  }
}

run();
