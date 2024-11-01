# Login

// Executa todos os testes em modo headless
// npx playwright test

// Executa todos os testes em modo headful
// npx playwright test --headed

// Executa o primeiro teste
// npx playwright test --headed --grep "has title"

// Executa o segundo teste
// npx playwright test --headed --grep "get started link"

npx playwright test --headed --grep "1 - Campo Vazio"
npx playwright test --headed --grep "2 - E-mail Válido e Senha Inválida"
npx playwright test --headed --grep "3 - E-mail Inválido e Senha Válida"
npx playwright test --headed --grep "4 - Ambos Inválidos"
npx playwright test --headed --grep "5 - Ambos Válidos"
