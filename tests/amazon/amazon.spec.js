// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

// Definindo a variável para o tempo de espera
const TIMEOUT = 5000;
const TITLE = 'Amazon.com.br | Tudo pra você, de A a Z.';
const TEXT = 'Apple 2024 MacBook Air (de 13 polegadas, Chip M3 da Apple com CPU de oito núcleos e GPU de oito núcleos, 8GB Memória unificada, de 256 GB) - Cinza-espacial';

test('Amazon', async ({ page }) => {
    // Navega para a URL especificada
    await page.goto('https://www.amazon.com.br/');
  
    // Espera para garantir que a página carregue completamente
    await page.waitForTimeout(TIMEOUT);
  
    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(TITLE);

    // Aguarda o campo de busca estar visível
    await page.waitForSelector('input[name="field-keywords"]');

    // Preenche o campo de busca
    await page.fill('input[name="field-keywords"]', TEXT);

});
