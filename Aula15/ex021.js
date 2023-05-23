let num= [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)

// Add um valor a um novo indice
num[5] = 6
console.log(`Nosso vetor é o ${num}`)

// Add um valor ao próximo indice
num.push(7)
console.log(`Nosso vetor é o ${num}`)

// Quantidade de indices do vetor
console.log(`O vetor tem ${num.length} posições`)

// Colocar em ordem
console.log(`O vetor em ordem: ${num.sort()}`)

// Apresentar todos os indices
for(i = 0;i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// For In para arrays e objetos
for(let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// Buscar o valor dentro do array
console.log(`O valor 6 está na posição ${num.indexOf(6)}`)

// Resultado -1 para o valor que não existe
console.log(`O valor 6 está na posição ${num.indexOf(10)}`)

