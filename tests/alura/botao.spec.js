// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

test('Clica no botão de Inteligência Artificial', async ({ page }) => {
  // Acessa a página desejada
  await page.goto('https://alura.com.br');

  // Clica no botão
  await page.click('.categories__wrapper--home.--inteligencia-artificial');

  await page.waitForTimeout(5000);
});
