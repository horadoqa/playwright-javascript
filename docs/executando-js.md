# Executando o Teste no 🎭

Por padrão os testes são executados em `modo headless` até para facilitar o uso com CI/CD. 
Mas para efeito de validação, podemos usar o `modo headful`

Dentro do diretório do teste, você pode rodar os seguintes comandos:

## Executa os testes em `modo headless`

```bash
npx playwright test

Running 1 test using 1 worker

  ✓  1 globo.spec.ts:3:5 › has title (5.3s)

  1 passed (6.0s)
```

## Executa os testes em `modo headful`

```bash
npx playwright test --headed     

Running 1 test using 1 worker

  ✓  1 globo.spec.ts:3:5 › has title (9.0s)

  1 passed (10.0s)
```

## Especificando o script que será executado dentro de uma pasta `modo headful`

```bash
npx playwright test --headed --grep "Nome do test"
```

## Executando o teste com o UI mode

```bash
npx playwright test --ui
```

## Executando o teste com o UI mode e `modo headful`

```bash
npx playwright test --ui --headed
```

## Executa todos os testes que estão na pasta tests com o Chrome para desktop.

```bash
npx playwright test --project=chromium
```

Executa os testes em um arquivo específico.

```bash
npx playwright test example
```

## Executa o teste em modo DEBUG

```bash
npx playwright test --debug
npx playwright test --debug --grep "test"
```

Gere testes automaticamente com o Codegen.

```bash
npx playwright codegen
```

E confira os seguintes arquivos:
  - ./tests/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro para mais informações. ✨

Happy hacking! 🎭