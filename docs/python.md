# Instalação do Playwright 🎭 com Python

O Playwright foi criado especificamente para acomodar as necessidades de testes de ponta a ponta. O Playwright oferece suporte a todos os mecanismos de renderização modernos, incluindo Chromium, WebKit e Firefox. Teste no Windows, Linux e macOS, localmente ou em CI, headless ou heads com emulação móvel nativa.

A biblioteca Playwright pode ser usada como uma ferramenta de automação de navegador de uso geral, fornecendo um poderoso conjunto de APIs para automatizar aplicativos da web, tanto para Python síncrono quanto assíncrono.

Esta introdução descreve o plugin Playwright Pytest, que é a maneira recomendada de escrever testes de ponta a ponta.

O Playwright recomenda usar o plugin oficial Playwright Pytest para escrever testes de ponta a ponta. Ele fornece isolamento de contexto, executando-o em várias configurações de navegador imediatamente.

## Comece instalando o Playwright e executando o teste de exemplo para vê-lo em ação.

Instale o python

https://python.org

Instale o plugin Pytest:

```bash
sudo pip install pytest-playwright
```

Instale os navegadores necessários:

```bash
playwright install
```

## Verificando a versão instalada

```bash
pip show playwright
Name: playwright
Version: 1.48.0
```

## Criando o teste

Crie um arquivo que siga a test_convenção de prefixo, como test_example.py, dentro do diretório de trabalho atual ou em um subdiretório com o código abaixo. Certifique-se de que o nome do seu teste também siga a test_convenção de prefixo.

teste_exemplo.py

```bash
import re
from playwright.sync_api import Page, expect

def test_has_title(page: Page):
    page.goto("https://playwright.dev/")

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile("Playwright"))

def test_get_started_link(page: Page):
    page.goto("https://playwright.dev/")

    # Click the get started link.
    page.get_by_role("link", name="Get started").click()

    # Expects page to have a heading with the name of Installation.
    expect(page.get_by_role("heading", name="Installation")).to_be_visible()
```

## Executando o teste

Por padrão, os testes serão executados no chromium. Isso pode ser configurado por meio das opções CLI . Os testes são executados no modo headless, o que significa que nenhuma IU do navegador será aberta ao executar os testes. Os resultados dos testes e logs de teste serão exibidos no terminal.

```bash
pytest main.py
```

## Atualizando 

Para atualizar o Playwright para a versão mais recente, execute o seguinte comando:

```bash
pip install pytest-playwright playwright -U
```