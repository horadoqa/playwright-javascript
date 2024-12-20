// Importando as funções necessárias do Playwright
const { test, expect, webkit } = require('@playwright/test');

// Definindo a variável para o tempo de espera
const TIMEOUT = 2000;

test('1 - Campo Vazio', async () => {
    const browser = await webkit.launch();  // Lançar WebKit
    const page = await browser.newPage();   // Criar uma nova página

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

    await browser.close();  // Fecha o navegador após o teste
});

test('2 - E-mail Válido e Senha Inválida', async () => {
    const browser = await webkit.launch();  // Lançar WebKit
    const page = await browser.newPage();   // Criar uma nova página

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

    await browser.close();  // Fecha o navegador após o teste
});

test('3 - E-mail Inválido e Senha Válida', async () => {
    const browser = await webkit.launch();  // Lançar WebKit
    const page = await browser.newPage();   // Criar uma nova página

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

    await browser.close();  // Fecha o navegador após o teste
});

test('4 - Ambos Inválidos', async () => {
    const browser = await webkit.launch();  // Lançar WebKit
    const page = await browser.newPage();   // Criar uma nova página

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

    await browser.close();  // Fecha o navegador após o teste
});

test('5 - Ambos Válidos', async () => {
    const browser = await webkit.launch();  // Lançar WebKit
    const page = await browser.newPage();   // Criar uma nova página

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
    await expect(page).toHaveURL('https://www.youtube.com/@horadoqa');

    await page.waitForTimeout(TIMEOUT);

    await browser.close();  // Fecha o navegador após o teste
});
