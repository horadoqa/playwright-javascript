// Importando as funções necessárias do Playwright
const { test, expect } = require('@playwright/test');

// Definindo a variável para o tempo de espera
const TIMEOUT = 2000;

test('1 - Campo Vazio', async ({ page }) => {

    // Navega para a URL especificada
    await page.goto('https://horadoqa.github.io/login/');
  
    // Espera para garantir que a página carregue completamente
    await page.waitForTimeout(TIMEOUT);
  
    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(/Hora do QA/);
  
    // Preenche os campos do formulário (deixando vazios)
    // await page.fill('#username', '');
    // await page.fill('#password', '');
    
    await page.click('button:has-text("Entrar")');
    
    // Clica no botão "Entrar"
    await page.waitForTimeout(TIMEOUT);

    // Espera a mensagem de erro aparecer
    const errorMessage = await page.waitForSelector('#error-message');

    // Verifica se a mensagem de erro está correta
    const errorText = await errorMessage.textContent();
    expect(errorText).toBe("E-mail e senha são obrigatórios!");
});

// O expect não pode ser usado diretamente com a variável errorMessage, pois ele precisa de um objeto Locator. 
// Para corrigir isso, você deve usar o método textContent() do Locator para obter o texto antes de compará-lo.

test('2 - E-mail Válido e Senha Inválida', async ({ page }) => {

    // Navega para a URL especificada
    await page.goto('https://horadoqa.github.io/login/');

    // Espera 2 segundos para garantir que a página carregue completamente
    await page.waitForTimeout(TIMEOUT);

    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(/Hora do QA/);

    // Preenche os campos do formulário
    await page.fill('#username', 'usuario@example.com');
    await page.fill('#password', 'abcd1234');
    
    // Clica no botão "Entrar"
    await page.click('button:has-text("Entrar")');
    
    await page.waitForTimeout(TIMEOUT);

    // Espera a mensagem de erro aparecer
    const errorMessage = await page.waitForSelector('#error-message');

    // Verifica se a mensagem de erro está correta
    const errorText = await errorMessage.textContent();
    expect(errorText).toBe("E-mail ou senha inválidos!");

});

test('3 - E-mail Inválido e Senha Válida', async ({ page }) => {

    // Navega para a URL especificada
    await page.goto('https://horadoqa.github.io/login/');

    // Espera 2 segundos para garantir que a página carregue completamente
    await page.waitForTimeout(TIMEOUT);

    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(/Hora do QA/);

    // Preenche os campos do formulário
    await page.fill('#username', 'usuarioexample.com');
    await page.fill('#password', '1q2w3e4r');
    
    // Clica no botão "Entrar"
    await page.click('button:has-text("Entrar")');
    
    await page.waitForTimeout(TIMEOUT);

    // Espera a mensagem de erro aparecer
    const errorMessage = await page.waitForSelector('#error-message');

    // Verifica se a mensagem de erro está correta
    const errorText = await errorMessage.textContent();
    expect(errorText).toBe("E-mail ou senha inválidos!");

});

test('4 - Ambos Inválidos', async ({ page }) => {

    // Navega para a URL especificada
    await page.goto('https://horadoqa.github.io/login/');

    // Espera 2 segundos para garantir que a página carregue completamente
    await page.waitForTimeout(TIMEOUT);

    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(/Hora do QA/);

    // Preenche os campos do formulário
    await page.fill('#username', 'usuarioexample.com');
    await page.fill('#password', 'abcd1234');
    
    // Clica no botão "Entrar"
    await page.click('button:has-text("Entrar")');
    
    await page.waitForTimeout(TIMEOUT);

    // Espera a mensagem de erro aparecer
    const errorMessage = await page.waitForSelector('#error-message');

    // Verifica se a mensagem de erro está correta
    const errorText = await errorMessage.textContent();
    expect(errorText).toBe("E-mail ou senha inválidos!");

});

test('5 - Ambos Válidos', async ({ page }) => {

    // Navega para a URL especificada
    await page.goto('https://horadoqa.github.io/login/');

    // Espera 2 segundos para garantir que a página carregue completamente
    await page.waitForTimeout(TIMEOUT);

    // Verifica se o título contém a substring especificada
    await expect(page).toHaveTitle(/Hora do QA/);

    // Preenche os campos do formulário
    await page.fill('#username', 'usuario@example.com');
    await page.fill('#password', '1q2w3e4r');
        
    // Clica no botão "Entrar"
    await page.click('button:has-text("Entrar")');
    
    await page.waitForTimeout(TIMEOUT);

    // Clica no link do YouTube
    await page.click('a.youtube-button');

    await page.waitForTimeout(TIMEOUT);

    // Verifica se a URL agora é do YouTube (opcional)
    await expect(page).toHaveURL('https://www.youtube.com/@horadoqa2/videos');

    await page.waitForTimeout(TIMEOUT);

});