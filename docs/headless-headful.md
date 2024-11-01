## Qual a diferença entre headless e headful no 🎭 playright ?

A diferença entre headless e headful no Playwright (e em outras ferramentas de automação de navegadores) refere-se à maneira como o navegador é executado durante os testes:

## Headless

- Definição: No modo headless, o navegador é executado sem uma interface gráfica visível. Isso significa que as janelas do navegador não aparecem na tela.

- Vantagens:
    
    - Desempenho: Como não há interface gráfica a ser renderizada, o modo headless geralmente oferece melhor desempenho e tempos de execução mais rápidos.

    - Uso de Recursos: Consome menos recursos do sistema (CPU e memória), o que é útil em ambientes de CI/CD onde os testes são executados em servidores sem uma interface gráfica.

    - Automação: Permite que os testes sejam executados em ambientes onde não há acesso a uma interface de usuário, como servidores remotos.

## Headful

- Definição: No modo headful, o navegador é executado com uma interface gráfica visível. As janelas do navegador aparecem na tela, permitindo que você veja o que está acontecendo durante a execução do teste.

- Vantagens:
    
    - Depuração: Facilita a depuração e o desenvolvimento de testes, pois você pode ver o que o navegador está fazendo em tempo real.
    
    - Interação Visual: Permite que você observe visualmente o comportamento da aplicação e verifique a interface do usuário.
    
    - Teste de UI: Útil para testes de interface do usuário, onde é importante validar a aparência e o comportamento visual da aplicação.

Próximo passo... [Instalação do Playwright](install.md)