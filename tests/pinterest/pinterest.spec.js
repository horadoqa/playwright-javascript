// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

// Definindo a variável para o tempo de espera
const TIMEOUT = 5000;

test('Pinterest - Animals', async ({ page }) => {

    // Navega para a URL especificada
    await page.goto('https://pinterest.com/ideas/');
  
    // Espera para garantir que a página carregue completamente
    await page.waitForTimeout(TIMEOUT);
  
    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(/Explore the best of Pinterest/);

    await page.click('h3:has-text("Animals")');

    // Espera a mensagem de erro aparecer
    const errorMessage = await page.waitForSelector('h1:has-text("Animals")');
    
    await page.waitForTimeout(TIMEOUT);

    // Verifica se a mensagem de erro está correta
    const errorText = await errorMessage.textContent();
    expect(errorText).toBe("Animals");
});
