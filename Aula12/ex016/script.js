function verificar() {
    let date = new Date()
    let ano = date.getFullYear()
    let fano = document.getElementById('nano')
    let res = document.querySelector('div#res')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        let idade = ano - fano.value
        res.innerHTML = `A idade é: ${idade}`
        if (idade < 12) {
            img.setAttribute('src', 'image/crianca.jpeg')
        } else if (idade < 50) {
            img.setAttribute('src', 'image/jovem.jpeg')
        } else {
            img.setAttribute('src', 'image/idosa.jpeg')
        }
        res.appendChild(img)
    }
}