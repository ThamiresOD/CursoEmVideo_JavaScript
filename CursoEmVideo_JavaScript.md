# CursoEmVideo_JavaScript

Resumo

## Módulo A: Conhecendo o JavaScript

### Aula 01 - O que o JavaScript é capaz de fazer?

O JavaScript é responsável pela interatividade dos elementos na página.

### Aula 02 - Como chegamos até aqui?

### Evolução do JavaScript:

- 1960
    - Internet
    - Arpanet
    
- 1993
    - Html
    - Http
    - www
    
- 1995
    - Java
    - JavaScript
    
- 1997
    - Ecma (padronização das linguagens)
        
        Versões:
        
        1.0 - 1997
        
        2.0 - 1998
        
        3.0 - 1999 (try/catch)
        
        ES5 - 2009 (Json/Arrays)
        
        ES6 - 2015 (Let/Const)
        
        ES2016 - (op exponenciação)
        
        ES2017 - (Async)
        
        ES2018 - (promises)
        
    
- 2002
    - Firefox
    
- 2008
    - Google Chrome
- 2009
    - V8 - JavaScript engine
- 2010
    - NodeJs (modificação do código para rodar o JS fora do navegador)

### Ferramentas:

- JQuery
    
    Conjunto de bibliotecas (não é framework)
    
- Angular
- React
- Vue
- Electon
- Ionic
- Cordova

- Gaming
    - Phaser
    - PixiJS
    - Impact
    - melon.js
    - CraftyJs

### Aula 03 - Dando os primeiros passos

### Livros:

- JavaScript - O guia definitivo
- JavaScript - Guia do programador

### Ferramentas:

- Google Chrome - Navegador
- Visual Studio Code - Editor de texto
- Node.js - Engine V8 JS

### Aula 04 - Criando o seu primeiro script

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula04</title>
    <style>
        body {
            background-color: #242424;
            color: antiquewhite;
            font: normal 20pt Arial;
        }

        h1 {
            color: aquamarine;
        }
    </style>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
    <script>
        window.alert('My first message!')
        window.confirm('Did you like JavaScript?')
        window.prompt("What's your name?")
    </script>
</body>
</html>
```

## Módulo B: Variáveis e tipos primitivos

### Aula05 - Variáveis e Tipos Primitivos

- Number
    - Infinity
    - NaN
- String
- Boolen
    
    
- Null
- Undefined
- object
    - Array
- function
    
    

- typeof
    
    Comando para descobrir o tipo de uma variável ou valor.
    

### Aula06 - Tratamento de dados

### Concatenação:

```jsx
<script>
        let name = window.prompt("What's your name?")
        window.alert('Hello, ' + name)
</script>
```

### Operação:

```jsx
<script>
        let n1 = Number.parseFloat(window.prompt("Insert a number: "))
        let n2 = Number.parseInt(window.prompt("Insert other number: "))
        let n3 = Number(window.prompt("Insert other number: "))
        let s = n1 + n2 + n3
        window.alert('The add is: ' + s)
</script>
```

### Template String:

- Exemplos:
    - toUpperCase()
    - toLowerCase()
    - toFixed(2)
    - replace(’ . ’, ‘ , ’)
    - toLocaleString(’pt-BR’, {style: ‘currency’, currency: ‘BRL’})

```html
<script>
        let nome = window.prompt('Qual é o seu nome?')
        document.write(`Olá ${nome}, seu nome tem ${nome.length} letras. <br/>`)
        document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}
        <br> e em minúsculas é ${nome.toLowerCase()}`)
</script>
```

### Aula07 - Operadores 1/2

- Aritméticos
    - +
    - -
    - *
    - /
    - % → Resto da divisão inteira
    - ** → Potência (5**2 = 5²)
- Atribuição
    - n += 4
    - n -= 4
    - n++ (pro-incremento)
    - n - - (pro-decremento)
    - ++ n (pre-incremento)
    - - - n (pre-incremento)

### Aula08 - Operadores 2/2

- Relacionais
- Lógicos
- Ternário