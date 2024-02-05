
const { processfile } = require('./processfile.js');

async function main() {
    const filesToProcess = ['example.txt', 'output.txt'];

    try {
        const modifiedFiles = await processfile(filesToProcess);

        modifiedFiles.forEach((file) => {
            console.log(`File successfully modified : ${file.content}`);
        });
    } catch (error) {
        console.error(error);
    }
}

main();

