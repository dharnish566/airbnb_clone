const fs = require('fs');
const path = require('path');

const directory = 'src';

function walk(dir) {
    const results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = dir + '/' + file;
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results.push(...walk(filePath));
        } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = walk(directory);

const uiFiles = ['discount.svg', 'hero.png', 'laurel-left.png', 'laurel-right.png', 'searchbar-house.png'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // public/images UUID images
    content = content.replace(/\/images\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(?: \(\d+\))?\.jpeg)/gi, '/images/rooms/$1');

    // src/assets UUID images
    content = content.replace(/\.\.\/assets\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.jpeg)/gi, '../assets/rooms/$1');
    content = content.replace(/\.\/assets\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.jpeg)/gi, './assets/rooms/$1');

    // src/assets UI files
    uiFiles.forEach(uiFile => {
        const regex = new RegExp(`../assets/${uiFile}`, 'g');
        content = content.replace(regex, `../assets/ui/${uiFile}`);
        
        const regex2 = new RegExp(`\./assets/${uiFile}`, 'g');
        content = content.replace(regex2, `./assets/ui/${uiFile}`);
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
