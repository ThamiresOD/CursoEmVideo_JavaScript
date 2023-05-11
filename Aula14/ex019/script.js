function count() {
    let ni = document.getElementById('ninicial')
    let nf = document.getElementById('nfinal')
    let np = document.getElementById('npasso')
    let res = document.getElementById('res')

    if (ni.value.length == 0 || nf.value.length == 0 || np.value.length == 0) {
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(ni.value)
        let f = Number(nf.value)
        let p = Number(np.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (n = i; n <= f; n += p) {
                res.innerHTML += `${n}➡️`
            }
        } else {
            //contagem decrescente
            for (n = i;n >= f; n -= p) {
                res.innerHTML += `${n}➡️`
            }
        }
        res.innerHTML += '🚩'
    }
}