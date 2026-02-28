# 7 Days of Code

O "7 Days of Code" é um desafio de programação criado pela Alura, onde durante sete dias, você recebe um desafio diário que deve ser resolvido utilizando uma linguagem e tecnologia de sua escolha. O objetivo é aprimorar habilidades e adquirir novos conhecimentos em desenvolvimento de software, explorando diferentes áreas de programação. Estou participando deste desafio para me desafiar, expandir meu aprendizado e melhorar minhas habilidades na área de tecnologia.

## Módulo do Desafio: Lógica com JavaScript

O módulo "Lógica com JavaScript", ministrado pela instrutora Rafa Ballerini. Neste módulo, o objetivo é praticar e reforçar conceitos de lógica de programação, utilizando a linguagem JavaScript para resolver problemas práticos.

---

## ⚡ Dia 1

### Desafio Proposto:
No primeiro dia do desafio, o objetivo foi comparar duas variáveis, verificando se elas têm o mesmo valor, mesmo que seus tipos sejam diferentes. Em seguida, também deveria ser verificado se elas possuem o mesmo tipo de dado.

### O que foi feito:
A solução foi implementar uma função que compara duas variáveis. O código verifica primeiro se as variáveis possuem o mesmo valor (considerando tipos diferentes, como números e strings que podem ser iguais, como `1` e `'1'`). Em seguida, é realizada uma segunda verificação para saber se as variáveis possuem o mesmo tipo.

A função principal (`compararVariaveis`) recebe dois objetos contendo o nome e o valor das variáveis e retorna uma mensagem descrevendo o resultado das comparações.

### 💻 Tecnologias Usadas:
- **JavaScript**: A linguagem escolhida para este desafio. Utilizei JavaScript para implementar a lógica de comparação de variáveis.

### Partes Importantes da Programação:

1. **Comparação de Valores**:
   A comparação de valores é feita utilizando o operador `==`, que permite comparar valores de tipos diferentes, como números e strings.

   ```js
   function compararValores(valor1, valor2) {
       return valor1 == valor2;
   }
   ```

2. **Comparação de Tipos**:
   Para comparar o tipo das variáveis, é utilizado o operador `===`, que verifica tanto o valor quanto o tipo, garantindo que as variáveis sejam do mesmo tipo.

   ```js
   function compararTipos(tipo1, tipo2) {
       return tipo1 === tipo2;
   }
   ```

3. **Uso de JSDoc para Melhor Legibilidade e Manutenção**:
   Para garantir que o código seja mais fácil de entender e de manter, utilizei o JSDoc para documentar a função `compararVariaveis`. O uso do JSDoc facilita a leitura e a manutenção, além de permitir uma melhor autocompletação e insights em editores de código.

   ```js
   /**
    * Compara duas variáveis, verificando se elas têm o mesmo valor e se possuem o mesmo tipo.
    * 
    * @param {Object} objeto1 O primeiro objeto contendo o nome e o valor da variável.
    * @param {string} objeto1.nome O nome da primeira variável.
    * @param {any} objeto1.valor O valor da primeira variável.
    * @param {Object} objeto2 O segundo objeto contendo o nome e o valor da variável.
    * @param {string} objeto2.nome O nome da segunda variável.
    * @param {any} objeto2.valor O valor da segunda variável.
    * 
    * @returns {string} A mensagem que descreve a comparação entre as variáveis.
    */
   function compararVariaveis(objeto1, objeto2) {
       let textoResultado = `Resultado da comparação das variáveis:\n[ ${objeto1.nome} ] e [ ${objeto2.nome} ]\n`;

       let temMesmoValor = compararValores(objeto1.valor, objeto2.valor);
       textoResultado += `\n${temMesmoValor ? "" : "não "}tem o mesmo valor`;

       if (temMesmoValor) {
           let temMesmoTipo = compararTipos(objeto1.valor, objeto2.valor);
           textoResultado += temMesmoTipo ? " e mesmo tipo" : ", mas tipos diferentes";
       }

       return textoResultado;
   }
   ```

---

## ⚡ Dia 2

### Desafio Proposto:
O desafio do segundo dia consistiu em criar uma interação simples com o usuário, recebendo entradas de dados através de prompts, e com base nas respostas, proporcionar uma interação dinâmica. O objetivo foi usar essas entradas para personalizar as respostas e tornar a experiência mais envolvente.

### O que foi feito:
No segundo dia do desafio, foi implementado um sistema de interação com o usuário, no qual é solicitado seu nome, idade e qual linguagem de programação está estudando. A partir dessas respostas, o programa gera uma mensagem personalizada para o usuário. Além disso, o usuário é questionado se gosta da linguagem de programação que está estudando, e uma resposta aleatória é gerada com base na escolha dele.

Para garantir que o código estivesse mais modular e organizado, utilizei o ES6 para importar e exportar os scripts dos dias 1 e 2, centralizando tudo em um único arquivo chamado `app.js`, que agora é o único arquivo linkado no HTML.

As funções de entrada de dados foram organizadas em um script separado chamado `prompt-manager.js`, que facilita o gerenciamento dos prompts e a coleta de dados de forma estruturada e reutilizável.

### 💻 Tecnologias Usadas:
- **JavaScript (ES6)**: Utilização de módulos ES6 para organizar o código e garantir a modularidade.
- **Prompt/Alert**: Para interagir com o usuário através de entradas e mensagens.

### Partes Importantes da Programação:

1. **Uso de Módulos ES6**:
   Para modularizar o código e facilitar a manutenção, usei a funcionalidade de módulos do JavaScript. O script `app.js` agora importa as funções dos desafios anteriores e executa os dois desafios de forma organizada.

   **Importação no script `app.js`**:
    ```js
    import { executarPrimeiroDesafio } from "./dia-1.js";  
    import { executarSegundoDesafio } from "./dia-2.js";  

    executarPrimeiroDesafio();  
    executarSegundoDesafio();
    ```

2. **Funções Personalizadas para Receber Dados**:
   Para facilitar a coleta de informações do usuário, criei funções personalizadas no script `functions.js`. Essas funções são responsáveis por garantir que os dados recebidos sejam válidos e que os prompts sejam apresentados de forma consistente.

   **Importação das funções personalizadas**:
    ```js
    import {  
        receberString,  
        receberValorPositivo,  
        receberNumeroEspecifico,  
    } from "../../src/js/prompt-manager.js";
    ```

3. **Respostas Aleatórias**:
   Para tornar a interação mais interessante, criei um sistema de respostas aleatórias para a pergunta sobre gostar ou não da linguagem de programação estudada. Dependendo da resposta do usuário, uma mensagem motivacional é gerada a partir de um conjunto de respostas predefinidas.

   **Código para respostas aleatórias**:
    ```js
    const RESPOSTAS_GOSTA_PROGRAMACAO = {  
        1: [  
        "Muito bom! Continue estudando e você terá muito sucesso.",  
        "Excelente! Persistindo no estudo, você alcançará grandes resultados.",  
        "Fico feliz em ouvir isso! O esforço no aprendizado traz grandes conquistas.",  
        "Ótimo! A dedicação ao estudo é o caminho para o sucesso.",  
        "Perfeito! O estudo constante leva você a lugares incríveis."  
        ],  
        2: [  
        "Ahh, que pena... Você poderia tentar aprender outras linguagens.",  
        "Entendo. Talvez uma abordagem diferente possa te interessar.",  
        "Não desanime, outras linguagens podem despertar seu interesse.",  
        "Tudo bem! Vale a pena explorar outras opções para encontrar o que você mais gosta.",  
        "Cada pessoa tem suas preferências. Buscar novos conhecimentos é sempre válido."  
        ]  
    };  

    function escolherNumeroAleatorio(max){  
        return Math.floor(Math.random() * max) + 1;  
    }
    ```
4. **Alertas Personalizados**:
   Após coletar as informações do usuário, o programa exibe uma mensagem personalizada com base nas respostas fornecidas, tornando a interação mais interessante e dinâmica.

   **Interação com o usuário**:
    ```js
    nomeUsuario = receberString("Qual é o seu nome?");  
    idadeUsuario = receberValorPositivo("Quantos anos você tem?");  
    linguagemProgramacao = receberString("Qual linguagem de programação você está estudando?");  

    alert(  
        `Ola ${nomeUsuario}, você tem ${idadeUsuario} ano${idadeUsuario > 1 ? "s" : ""} e já está aprendendo ${linguagemProgramacao}`  
    );  

    gostaLinguagem = receberNumeroEspecifico(  
        `Você gosta de estudar ${linguagemProgramacao}?\nResponda com o número correspondente:\n\n[ 1 ] Sim\n[ 2 ] Não`, [1,2]);  

    let respostas = RESPOSTAS_GOSTA_PROGRAMACAO[gostaLinguagem];  
    alert(respostas[escolherNumeroAleatorio(respostas.length)]);  
    ```

---

<!-- ## Próximo Módulo -->

<!-- **(Adicionar informações sobre o próximo módulo, conforme você avançar nos desafios)** -->

## 📁 Acesso ao projeto

Você pode [baixar o arquivo zip](https://github.com/christianwl/7-days-of-code/archive/refs/heads/main.zip).

## 🛠️ Abrir e rodar o projeto

Após baixar o projeto, você pode abrir com o Visual Studio Code para acessa-lo e modificar o código. Para isso, na tela inicial clique em:

- **Open Folder** (ou alguma opção similar)
- Procure o local onde o projeto está e o selecione (Caso o projeto seja baixado via zip, é necessário extraí-lo antes de procurá-lo)
- Por fim clique em OK

Para  abrir, basta clicar duas vezes no arquivo **index.html** que ele será aberto no seu navegador, e você poderá testar suas funcionalidades

## Autor

<div>
  <a href="https://github.com/christianwl">
    <img src="https://contrib.rocks/image?repo=christianwl/7-days-of-code" alt="Autor do Portfolio"/>
  </a>
</div>
