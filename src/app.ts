const compteur = document.querySelector('#btnIncrement')
let i = 0

const increments = (e: Event) : void => {
    e.preventDefault()
    i++
    /**
     * Narrowing System
     *
     * for exemple span can be Element or null
     * in the condition of span ts get the  good type
     */
    const span = document?.querySelector('#incrementValue')
    if (span) {
        span.innerHTML = i.toString()
    }
}

compteur?.addEventListener('click', increments)