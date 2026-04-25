const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Nandi_in_Pridhan_Mantap_of_Brihadisvara_Temple%2C_Thanjavur.jpg', name: 'nandi_real.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Garuda_kneeling_with_winged_ornamentation_at_the_Chennakesava_Temple_in_Belur.jpg', name: 'garuda_real.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Stupika_or_Kalasam_of_Shore_Temple.jpg', name: 'stupika_real.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Balipitham_at_Brihadisvara_Temple.jpg', name: 'balipitha_real.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Shulba-sutra-fire-altar-plan.png', name: 'shulba_sutra_real.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Vastu-Purusha-Mandala.jpg', name: 'ayadi_real.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Dhvajasthambam_at_Nanjangud_Temple.jpg', name: 'stambha_axis_real.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Lingaraj_Temple_Bhubaneswar_Odisha.jpg', name: 'rekha_deula_real.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Jagamohana_of_Konark_Sun_Temple.jpg', name: 'pidha_deula_real.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Vaital_Deula_side_view.jpg', name: 'khakhara_deula_real.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Chennakeshava_Temple_Somnathpur_Platform.jpg', name: 'stellated_plan_real.jpg' }
];

async function download(img, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const file = fs.createWriteStream(`assets/icons/${img.name}`);
      const options = {
        headers: {
          'User-Agent': 'MandirVastuBot/1.0 (contact: ujwal@example.com) Educational Research'
        }
      };
      https.get(img.url, options, (res) => {
        if (res.statusCode === 200) {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${img.name}`);
            resolve(true);
          });
        } else {
          console.error(`Failed ${img.name}: Status ${res.statusCode}`);
          resolve(false);
        }
      }).on('error', (err) => {
        console.error(`Error ${img.name}: ${err.message}`);
        resolve(false);
      });
    }, delay);
  });
}

async function run() {
  for (let i = 0; i < images.length; i++) {
    await download(images[i], 5000 * i);
  }
}

run();
