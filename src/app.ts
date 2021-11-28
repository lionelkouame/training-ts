const compteur = document.querySelector('#btnIncrement')
let i = 0

const increments = (e: Event) : void => {
    e.preventDefault()
    i++
    const span = document?.querySelector('#incrementValue')
    if (span) {
        span.innerHTML = i.toString()
    }
}

compteur?.addEventListener('click', increments)