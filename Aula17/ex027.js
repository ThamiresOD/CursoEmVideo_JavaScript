// Objeto

let amigo = {
    nome: 'José', 
    sexo: 'm', 
    peso: 85.4,
    engordar(p = 0) {
        this.peso += p
    }
}
console.log(typeof amigo)

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
