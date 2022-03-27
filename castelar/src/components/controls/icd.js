
const fs = require('fs');

fs.readFile('vademecum.json', (err, data) => {
    if (err) throw err;
    let vademecum = JSON.parse(data);
    console.log(vademecum);
});



