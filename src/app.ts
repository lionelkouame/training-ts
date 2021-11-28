const compteur = document.querySelector('#btnIncrement')
let i = 0

const increments = (e) => {
    i++
    compteur.querySelector('#incrementValue').innerHTML = i.toString()
}

compteur.addEventListener('click', increments)