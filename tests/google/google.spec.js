// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

// Definindo a variável para o tempo de espera
const TIMEOUT = 5000;

test('Google - Playwright', async ({ page }) => {

    // Navega para a URL especificada
    await page.goto('https://www.google.com/');
  
    // Espera para garantir que a página carregue completamente
    await page.waitForTimeout(TIMEOUT);
  
    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(/Google/);

    // Aguarda o campo de busca estar visível
    await page.waitForSelector('textarea[name="q"]'); // Ajuste para textarea

    // Preenche o campo de busca
    await page.fill('textarea[name="q"]', 'playwright');

    // Pressiona Enter para enviar a pesquisa
    await page.press('textarea[name="q"]', 'Enter');

    // Clica no link
    await page.click('h3:has-text("Playwright: Fast and reliable end-to-end testing for modern web apps")');

    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(/Fast and reliable end-to-end testing for modern web apps | Playwright Python/);

    await page.waitForTimeout(TIMEOUT);

});
