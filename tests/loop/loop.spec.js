// sudo npm install csv-parser 

// Importando as funções necessárias do Playwright
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

test('CONSOLE LOG', async ({ page }) => {
    const data = await readCSV('dados.csv');
    
    for (const row of data) {
        console.log(row); 
    }
});

// Definindo a variável para o tempo de espera
const TIMEOUT = 2000;

test('LOOP', async ({ page }) => {
    const data = await readCSV('dados.csv'); // Ler os dados do CSV

    for (const row of data) { // Loop através de cada linha do CSV
        // Navega para a URL especificada
        await page.goto('https://horadoqa.github.io/site/testes/');

        // Espera 2 segundos para garantir que a página carregue completamente
        await page.waitForTimeout(TIMEOUT);

        // Verifica se o título contém a substring especificada
        await expect(page).toHaveTitle(/Hora do QA/);

        // Seleciona a opção "Selenium" no elemento select
        await page.selectOption('#select-itens', 'item-3');

        // Opinião sobre a ferramenta
        await page.fill('#area', 'Playwright enables reliable end-to-end testing for modern web apps.');

        // Preenche os campos do formulário
        await page.fill('#name', row.name);
        await page.fill('#email', row.email);
        await page.fill('#phone', row.phone);
        
        // Seleciona o país
        await page.selectOption('#country', 'brasil');
              
        // (Opcional) Verifica se os campos foram preenchidos corretamente
        const nameValue = await page.inputValue('#name');
        const emailValue = await page.inputValue('#email');
        const phoneValue = await page.inputValue('#phone');
        const countryValue = await page.$eval('#country', el => el.value);

        expect(nameValue).toBe(row.name);
        expect(emailValue).toBe(row.email);
        expect(phoneValue).toBe(row.phone);
        expect(countryValue).toBe('brasil');

        await page.waitForTimeout(TIMEOUT);

        // Clica no botão de envio
        await page.click('#submit-button');
        
        // Verifica se estamos na página correta
        await expect(page).toHaveURL('https://horadoqa.github.io/site/testes/thank/index.html?firstname=' + encodeURIComponent(row.name) + '&email=' + encodeURIComponent(row.email) + '&phonenumber=' + encodeURIComponent(row.phone) + '&country=brasil');

              // Clica no link do YouTube
        await page.click('a.youtube-button');

                // Verifica se a URL agora é do YouTube (opcional)
        await expect(page).toHaveURL('https://www.youtube.com/@horadoqa2/videos');

    }
});
