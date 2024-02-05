const fs = require('fs').promises;
const path = require('path');
async function readMultipleFiles(filePaths) {
    try {
        const fileContents = await Promise.all(
            filePaths.map(async (filePath) => {
                const content = await fs.readFile(filePath, 'utf8');
                const modifiedContent = addTimestamp(content);
                return { filePath, content: modifiedContent  };
            })
        );
        return fileContents;
    } catch (error) {
        throw new Error(`Error reading files: ${error.message}`);
    }
}

function addTimestamp(content) {
    const timestamp = new Date().toLocaleString();
    return `Timestamp: ${timestamp}\n${content}`;
}

const filesToRead = ['example.txt', 'output.txt'];

readMultipleFiles(filesToRead)
    .then((fileContents) => {
        fileContents.forEach((file) => {
            console.log(`Content of ${file.filePath}:`);
            console.log(file.content);
            console.log('----------------------');
        });
    })
    .catch((error) => {
        console.error(error);
    });

    async function createModifiedFiles(filePaths) {
        try {
            const modifiedFiles = await Promise.all(
                filePaths.map(async (filePath) => {
                    const content = await fs.readFile(filePath, 'utf8');
                    const modifiedContent = addTimestamp(content);
    
                    // Get the base name of the file and create a new file name
                    const newFileName = `modified_${path.basename(filePath)}`;
                    const newFilePath = path.join(path.dirname(filePath), newFileName);
    
                    // Write the modified content to a new file
                    await fs.writeFile(newFilePath, modifiedContent, 'utf8');
    
                    return { originalFilePath: filePath, newFilePath };
                })
            );
            return modifiedFiles;
        } catch (error) {
            throw new Error(`Error creating modified files: ${error.message}`);
        }
    }
const filesToProcess = ['example.txt', 'output.txt'];
    createModifiedFiles(filesToProcess)
    .then((modifiedFiles) => {
        modifiedFiles.forEach((file) => {
            console.log(`New file successfully created: ${file.newFilePath}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });
    module.exports = readMultipleFiles;
    module.exports = createModifiedFiles;
