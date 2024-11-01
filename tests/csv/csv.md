# Trabalando com csv

O Playwright permite trabalhar com arquivos CSV, mas você precisará usar bibliotecas adicionais do Node.js para ler e escrever arquivos CSV, já que o Playwright em si não fornece funcionalidades específicas para manipulação de CSV.

## Como usar um arquivo CSV com Playwright

1. Instalar uma biblioteca para CSV: Você pode usar bibliotecas como csv-parser, papaparse ou fast-csv. Por exemplo, para usar csv-parser, você pode instalá-lo com:

```bash
npm install csv-parser
```

2. Ler um arquivo CSV: Você pode ler um arquivo CSV e usar os dados em seus testes. Aqui está um exemplo básico usando csv-parser:

```bash
const fs = require('fs');
const csv = require('csv-parser');

async function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
}

```

3. Integrar com Playwright: Você pode usar a função acima em seus testes. Por exemplo:

```bash
const { test, expect } = require('@playwright/test');

test('Test from CSV', async ({ page }) => {
    const data = await readCSV('path/to/your/file.csv');
    
    for (const row of data) {
        # Use os dados de cada linha para realizar suas operações de teste
        console.log(row); # ou use os dados conforme necessário
        # Exemplo: await page.fill('selector', row.columnName);
    }
});

```
## Resumo

Embora o Playwright não tenha suporte embutido para arquivos CSV, você pode facilmente integrar uma biblioteca externa para lidar com CSV em seus testes. Isso permite que você leia dados de arquivos CSV e os utilize em seus testes de forma dinâmica e eficiente.