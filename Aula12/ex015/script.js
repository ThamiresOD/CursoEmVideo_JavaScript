function load() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('image')
    let date = new Date()
    let hora = date.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 5 && hora < 12) {
        img.src = 'image/manha.jpeg'
        document.body.style.backgroundColor = 'rgb(253, 252, 219)'
    } else if (hora < 18) {
        img.src = 'image/tarde.jpeg'
        document.body.style.backgroundColor = 'rgb(154, 205, 160)'
    } else {
        img.src = 'image/noite.jpeg'
        document.body.style.backgroundColor = 'rgb(18, 17, 36)'
    }
}