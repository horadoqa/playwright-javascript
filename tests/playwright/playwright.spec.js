// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await page.waitForTimeout(5000);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await page.waitForTimeout(5000);
});

// Executa todos os testes em modo headless
// npx playwright test

// Executa todos os testes em modo headful
// npx playwright test --headed

// Executa o primeiro teste
// npx playwright test --headed --grep "has title"

// Executa o segundo teste
// npx playwright test --headed --grep "get started link"
