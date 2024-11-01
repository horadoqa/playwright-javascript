// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

test('globo.com', async ({ page }) => {
  // Navega para a URL especificada
  await page.goto('https://globo.com');

  // Espera 2 segundos para garantir que a página carregue completamente
  await page.waitForTimeout(2000);

  // Verifica se o título contém a substring especificada
  await expect(page).toHaveTitle(/globo.com - Absolutamente tudo sobre notícias, esportes e entretenimento/);
});

