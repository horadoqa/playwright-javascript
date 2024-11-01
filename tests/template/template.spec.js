// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

// Definindo a variável para o tempo de espera
const TIMEOUT = 5000;

test('Pinterest - Animals', async ({ page }) => {

    // Navega para a URL especificada
    await page.goto('');
  
    // Espera para garantir que a página carregue completamente
    await page.waitForTimeout(TIMEOUT);
  
    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(/xxx/);

});
