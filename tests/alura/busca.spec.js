// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

test('Busca por Inteligência Artificial', async ({ page }) => {
  
  // Acessa a página inicial da Alura
  await page.goto('https://alura.com.br');

  // Espera 2 segundos para garantir que a página carregue completamente
  await page.waitForTimeout(2000);

  // Aguarda o campo de busca aparecer
  await page.waitForSelector('#header-barraBusca-form-campoBusca');

  // Preenche o campo de busca
  await page.fill('#header-barraBusca-form-campoBusca', 'Inteligência Artificial');
  await page.press('#header-barraBusca-form-campoBusca', 'Enter'); // Pressiona Enter para buscar

  // Aguarda um elemento específico na página de resultados
  await page.waitForSelector('text=Inteligência Artificial');

  // Verifica se o título da página de resultados é o esperado
  await expect(page).toHaveTitle(/Inteligência Artificial/);

  // Espera 2 segundos para garantir que a página carregue completamente
  await page.waitForTimeout(2000);
});
