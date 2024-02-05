const fs = require('fs');
const contentToWrite = 'Hello, Node.js!';
fs.writeFile('./output.txt', contentToWrite, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }

    console.log('Write operation complete.');
});