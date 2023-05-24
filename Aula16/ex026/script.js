let num = document.querySelector('input#num')
let list = document.querySelector('select#selnum')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function result() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let max = valores[0]
        let min = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
                soma += valores[pos]
            if(valores[pos] > max) {
                max = valores[pos]
            }
            if(valores[pos] < min) {
                min = valores[pos]
            }
        }
        media = soma/tot


        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados;</p>`
        res.innerHTML += `<p>O maior valor informado foi ${max};</p>`
        res.innerHTML += `<p>O menor valor informado foi ${min};</p>`
        res.innerHTML += `<p>Somando todos os valores temos: ${soma}.</p>`
        res.innerHTML += `<p>A média é ${media}.</p>`
    }
}