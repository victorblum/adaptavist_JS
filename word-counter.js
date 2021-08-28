const fs = require('fs');
const fileText = process.argv[2];
fs.readFile(fileText, 'utf8', function(err, data) {
    if (err) throw err;
    const words = data.toLowerCase().replace(/[,.!;:")()’\n]/g, ' ').split(' ');
    const map = {};
        for(let i = 0; i < words.length; i++) {
            if (!words[i]) {
                continue
            } if (!map[words[i]]) {
            map[words[i]] = 0;
            } map[words[i]] += 1;
        }

    const wordsList = Object.keys(map).sort();
    for(let i = 0; i < wordsList.length; i++){
        console.log(`${wordsList[i]}: ${map[wordsList[i]]}`);
    }
});



