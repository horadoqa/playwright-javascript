# Testes de Login com Playwright

Este projeto utiliza o Playwright para executar testes automatizados de uma página de login.

## Instalação

Este projeto requer o Playwright para rodar os testes. Caso ainda não tenha o Playwright instalado, execute o seguinte comando:

```bash
npm install playwright
```

## Comandos para Executar os Testes

### Abrir a interface gráfica (UI) do Playwright

- **Permite visualizar e interagir com os testes de maneira mais visual e prática.**
  ```bash
  npx playwright test --ui
  ```

### Executar todos os testes

- **Modo headless (sem interface gráfica)**: 
  ```bash
  npx playwright test
  ```

- **Modo headful (com interface gráfica)**: 
  ```bash
  npx playwright test --headed
  ```

### Executar testes específicos

- **Executar o primeiro teste (verifica título da página)**: 
  ```bash
  npx playwright test --headed --grep "has title"
  ```

- **Executar o segundo teste (verifica o link de "get started")**: 
  ```bash
  npx playwright test --headed --grep "get started link"
  ```

### Executar testes do fluxo de login

- **Teste 1 - Campo vazio**:
  ```bash
  npx playwright test --headed --grep "1 - Campo Vazio"
  ```

- **Teste 2 - E-mail válido e senha inválida**:
  ```bash
  npx playwright test --headed --grep "2 - E-mail Válido e Senha Inválida"
  ```

- **Teste 3 - E-mail inválido e senha válida**:
  ```bash
  npx playwright test --headed --grep "3 - E-mail Inválido e Senha Válida"
  ```

- **Teste 4 - Ambos inválidos**:
  ```bash
  npx playwright test --headed --grep "4 - Ambos Inválidos"
  ```

- **Teste 5 - Ambos válidos**:
  ```bash
  npx playwright test --headed --grep "5 - Ambos Válidos"
  ```

## Observações

- Utilize `--headed` para rodar os testes com interface gráfica, útil para depuração.
- O comando `--grep` permite filtrar os testes que você deseja rodar com base no nome ou descrição do teste.

## Contribuições

Sinta-se à vontade para contribuir com melhorias nos testes ou sugestões de novos cenários de login!


