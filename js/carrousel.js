(function(){
    console.log('début du carrousel')
    let carrousel = document.querySelector('.carrousel')
    let bouton = document.querySelector('.bouton__ouvrir')
    let carrousel__x = document.querySelector('.carrousel__x')

    let galerie = document.querySelector('.galerie')
    let galerie__img = galerie.querySelectorAll('img')
    let carrousel__figure = document.querySelector('.carrousel__figure')

    for (const elm of galerie__img) {
        let carrousel__img = document.createElement('img')
        carrousel__img.classList.add('carrousel__img')
        console.log(elm.src)
        carrousel__img.src = elm.src
        console.log(carrousel__img.src)
        carrousel__figure.appendChild(carrousel__img)

        let carrousel__form = document.querySelector('.carrousel__form')
        let carrousel__input = document.createElement('input')
        carrousel__input.classList.add('carrousel__input')
        carrousel__input.type = 'radio'
        carrousel__input.name = 'carrousel'
        carrousel__input.id = elm.id
        carrousel__input.value = elm.id
        carrousel__form.appendChild(carrousel__input)

        carrousel__input.addEventListener('change', function(){
            let id = this.value
            console.log(id)
            let img = carrousel__figure.querySelector(`${id}`)
            let carrousel__img = carrousel__figure.querySelectorAll('.carrousel__img')
            for (const elm of carrousel__img) {
                elm.classList.remove('carrousel__img--visible')
            }
            img.classList.add('carrousel__img--visible')
        })
    }



    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })
})()