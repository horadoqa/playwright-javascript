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

// test('Test from CSV', async ({ page }) => {
//     const data = await readCSV('dados.csv');
    
//     for (const row of data) {
//         console.log(row); 
//     }
// });

// Definindo a variável para o tempo de espera
const TIMEOUT = 4000;

test('Hora do QA com CSV', async ({ page }) => {
    const data = await readCSV('dados.csv'); // Ler os dados do CSV
    const row = data[0]; // Use a primeira linha do CSV para o teste

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
    
    await page.waitForTimeout(TIMEOUT);
    
    // (Opcional) Verifica se os campos foram preenchidos corretamente
    const nameValue = await page.inputValue('#name');
    const emailValue = await page.inputValue('#email');
    const phoneValue = await page.inputValue('#phone');
    const countryValue = await page.$eval('#country', el => el.value);

    expect(nameValue).toBe(row.name); // Corrigido para usar o valor do CSV
    expect(emailValue).toBe(row.email); // Corrigido para usar o valor do CSV
    expect(phoneValue).toBe(row.phone); // Corrigido para usar o valor do CSV
    expect(countryValue).toBe('brasil');

    // Clica no botão de envio
    await page.click('#submit-button');

    await page.waitForTimeout(TIMEOUT);

    // Verifica se estamos na página correta
    await expect(page).toHaveURL('https://horadoqa.github.io/site/testes/thank/index.html?firstname=' + encodeURIComponent(row.name) + '&email=' + encodeURIComponent(row.email) + '&phonenumber=' + encodeURIComponent(row.phone) + '&country=brasil');

    await page.waitForTimeout(TIMEOUT);

    // Clica no link do YouTube
    await page.click('a.youtube-button');

    await page.waitForTimeout(TIMEOUT);

    // Verifica se a URL agora é do YouTube (opcional)
    await expect(page).toHaveURL('https://www.youtube.com/@horadoqa2/videos');
});
