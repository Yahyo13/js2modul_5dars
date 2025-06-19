let h1 = document.querySelector(`h1`)
let send = document.querySelector(`.send`)
let mode = document.querySelector(`.mode`)
let body = document.querySelector(`body`)
let inp = document.querySelector(`input`)
let box = document.querySelector(`hi_Gittler`)
let ul = document.querySelector(`ul`)

send.addEventListener(`click`, ()=>{
    let newLI = document.createElement(`li`)
    ul.appendChild(newLI)
    newLI.textContent = inp.value
    inp.value = ''
})

mode.addEventListener(`click`, ()=>{
    body.classList.toggle(`body1`)

    h1.classList.toggle(`h`)

    inp.classList.toggle(`inp`)

    ul.classList.toggle(`lin`)
})