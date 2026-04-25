const https = require('https');

https.get('https://unsplash.com/s/photos/konark-sun-temple', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Unsplash page source has lots of 'images.unsplash.com/photo-...' links
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+(\?ixlib=[^"&]+)?/g;
    const matches = Array.from(new Set(data.match(regex)));
    console.log(JSON.stringify(matches.filter(m => !m.includes('profile')), null, 2));
  });
});
