const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'elements.html',
    'styles.html',
    'detail.html',
    'about.html',
    'data.js',
    'style.css'
];

let output = '# MandirVastu Site Code Dump\n\n';

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        output += `## FILE: ${file}\n\n`;
        output += '```' + (file.endsWith('.js') ? 'javascript' : file.endsWith('.css') ? 'css' : 'html') + '\n';
        output += content;
        output += '\n```\n\n---\n\n';
    }
});

fs.writeFileSync('MandirVastu_Markdown_Dump.md', output);
console.log('Dump created successfully.');
