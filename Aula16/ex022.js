// n -> parametro formal
// parimp -> funcao
// if -> acao
// return -> retorno
function parimp(n) {
    if(n%2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}
// 4 -> parametro real
// res = parimp -> chamada
let res = parimp(4)
console.log(res)
