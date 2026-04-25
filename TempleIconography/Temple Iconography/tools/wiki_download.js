const https = require('https');
const fs = require('fs');

const titles = [
  "File:Nandi in Pridhan Mantap of Brihadisvara Temple, Thanjavur.jpg",
  "File:Garuda kneeling with winged ornamentation at the Chennakesava Temple in Belur.jpg",
  "File:Stupika of Vimana of Brihadisvara Temple.jpg",
  "File:Balipitham at Brihadisvara Temple.jpg",
  "File:Vastu-Purusha-Mandala.jpg",
  "File:Dhvajastambham at Nanjangud Temple.jpg",
  "File:Lingaraj Temple Bhubaneswar Odisha.jpg",
  "File:Jagamohana of Konark Sun Temple.jpg",
  "File:Vaital Deula side view.jpg",
  "File:Chennakeshava Temple Somnathpur Platform.jpg"
];

const filenames = [
  "nandi_real.jpg",
  "garuda_real.jpg",
  "stupika_real.jpg",
  "balipitha_real.jpg",
  "ayadi_real.jpg",
  "stambha_axis_real.jpg",
  "rekha_deula_real.jpg",
  "pidha_deula_real.jpg",
  "khakhara_deula_real.jpg",
  "stellated_plan_real.jpg"
];

async function fetchWikiUrl(title) {
  return new Promise((resolve) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
    https.get(url, { headers: { 'User-Agent': 'MandirVastuBot/1.0' } }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          const imgUrl = pages[pageId].imageinfo[0].url;
          resolve(imgUrl);
        } catch (e) {
          resolve(null);
        }
      });
    });
  });
}

async function download(url, filename) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(`assets/icons/${filename}`);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve(true);
      });
    });
  });
}

async function run() {
  for (let i = 0; i < titles.length; i++) {
    console.log(`Fetching ${titles[i]}...`);
    const url = await fetchWikiUrl(titles[i]);
    if (url) {
      console.log(`Found URL: ${url}`);
      await download(url, filenames[i]);
    } else {
      console.error(`FAILED to find URL for ${titles[i]}`);
    }
  }
}

run();
