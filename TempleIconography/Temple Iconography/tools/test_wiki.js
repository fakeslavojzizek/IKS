const https = require('https');
const fs = require('fs');

const url = 'https://commons.wikimedia.org/wiki/Special:FilePath/Konarka_Temple.jpg';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  // If it redirects, follow it securely
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
      console.log('Redirect status:', res2.statusCode);
      if (res2.statusCode === 200) {
        const file = fs.createWriteStream('assets/temples/real_konark_1.jpg');
        res2.pipe(file);
        file.on('finish', () => console.log('Success!'));
      }
    });
  } else {
    console.log('Status:', res.statusCode);
  }
});
