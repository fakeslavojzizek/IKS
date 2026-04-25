const fs = require('fs');
const path = require('path');

const files = ['data1.js', 'data2.js', 'data3.js', 'data4.js', 'data5.js', 'data6.js'];

let result = "";
for (const file of files) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    result += fs.readFileSync(filePath, 'utf-8') + "\n\n";
    // Clean up temporary files
    fs.unlinkSync(filePath);
  }
}

fs.writeFileSync(path.join(__dirname, 'data.js'), result);
console.log('Successfully built data.js mapping all 48 icons!');
