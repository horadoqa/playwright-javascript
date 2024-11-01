// sudo npm install csv-parser 

const fs = require('fs');
const csv = require('csv-parser');
const { test, expect } = require('@playwright/test');

// Função para ler um arquivo CSV
async function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
}

test('LOG', async ({ page }) => {
    const data = await readCSV('dados.csv');
    
    for (const row of data) {
 
        console.log(row); 
    }
});
