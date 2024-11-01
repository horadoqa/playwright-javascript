// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

// Definindo a variável para o tempo de espera
const TIMEOUT = 4000;

test('Hora do QA', async ({ page }) => {
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
  await page.fill('#name', 'Hora do QA');
  await page.fill('#email', 'horadoqa@gmail.com');
  await page.fill('#phone', '219876543210');
  
  // Seleciona o país
  await page.selectOption('#country', 'brasil');
  
  await page.waitForTimeout(TIMEOUT);
  
  // (Opcional) Verifica se os campos foram preenchidos corretamente
  const nameValue = await page.inputValue('#name');
  const emailValue = await page.inputValue('#email');
  const phoneValue = await page.inputValue('#phone');
  const countryValue = await page.$eval('#country', el => el.value);

  expect(nameValue).toBe('Hora do QA');
  expect(emailValue).toBe('horadoqa@gmail.com');
  expect(phoneValue).toBe('219876543210');
  expect(countryValue).toBe('brasil');

  // Clica no botão de envio
  await page.click('#submit-button');

  await page.waitForTimeout(TIMEOUT);

  // Verifica se estamos na página correta
  await expect(page).toHaveURL('https://horadoqa.github.io/site/testes/thank/index.html?firstname=Hora+do+QA&email=horadoqa%40gmail.com&phonenumber=219876543210&country=brasil');

  await page.waitForTimeout(TIMEOUT);

  // Clica no link do YouTube
  await page.click('a.youtube-button');

  await page.waitForTimeout(TIMEOUT);

  // Verifica se a URL agora é do YouTube (opcional)
  await expect(page).toHaveURL('https://www.youtube.com/@horadoqa2/videos');

});

