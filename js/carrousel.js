(function(){
    console.log('début du carrousel')
    let carrousel = document.querySelector('.carrousel')
    let bouton = document.querySelector('.bouton__ouvrir')
    let carrousel__x = document.querySelector('.carrousel__x')

    let galerie = document.querySelector('.galerie')
    let galerie__img = galerie.querySelectorAll('img')
    let carrousel__figure = document.querySelector('.carrousel__figure')

    for (const [index, elm] of Array.from(galerie__img).entries()) {
        let carrousel__img = document.createElement('img')
        carrousel__img.classList.add('carrousel__img')
        carrousel__img.id = 'img-' + index;
        carrousel__img.src = elm.src
        carrousel__figure.appendChild(carrousel__img)

        let carrousel__form = document.querySelector('.carrousel__form')
        let carrousel__input = document.createElement('input')
        carrousel__input.classList.add('carrousel__input')
        carrousel__input.type = 'radio'
        carrousel__input.name = 'carrousel'
        carrousel__input.id = 'radio-' + index
        carrousel__input.value = index
        carrousel__form.appendChild(carrousel__input)
        carrousel__input.checked = index === 0

        if(index === 0){
            carrousel__img.classList.add('carrousel__img--visible')
        }

        carrousel__input.addEventListener('change', function(){
            let id = this.value
            let img = carrousel__figure.querySelector(`#img-${id}`)
            let carrousel__img = carrousel__figure.querySelectorAll('.carrousel__img')
            for (const elm of carrousel__img) {
                elm.classList.remove('carrousel__img--visible')
            }
            img.classList.add('carrousel__img--visible')
        })
    }

    let carrousel__precedent = document.querySelector('.carrousel__precedent')
    carrousel__precedent.addEventListener('click', function(){
        let carrousel__form = document.querySelector('.carrousel__form');
        let carrousel__input = carrousel__form.querySelectorAll('.carrousel__input');
        let id = 0
        for (const [index, elm] of Array.from(carrousel__input).entries()) {
            if(elm.checked){
                id = index - 1
                if(id < 0){
                    id = carrousel__input.length - 1
                }
                break
            }
        }
        carrousel__input[id].checked = true
        carrousel__input[id].dispatchEvent(new Event('change'))
    })

    let carrousel__suivant = document.querySelector('.carrousel__suivant')
    carrousel__suivant.addEventListener('click', function(){
        let carrousel__form = document.querySelector('.carrousel__form');
        let carrousel__input = carrousel__form.querySelectorAll('.carrousel__input');
        let id = 0
        for (const [index, elm] of Array.from(carrousel__input).entries()) {
            if(elm.checked){
                id = index + 1
                if(id >= carrousel__input.length){
                    id = 0
                }
                break
            }
        }
        carrousel__input[id].checked = true
        carrousel__input[id].dispatchEvent(new Event('change'))
    })

    galerie__img.forEach(function(elm){
        elm.addEventListener('click', function(){
            let id = 0
            let carrousel__img = carrousel__figure.querySelectorAll('.carrousel__img')
            for (const [index, elm] of Array.from(carrousel__img).entries()) {
                if(elm.src === this.src){
                    id = index
                    break
                }
            }
            let carrousel__form = document.querySelector('.carrousel__form');
            let carrousel__input = carrousel__form.querySelectorAll('.carrousel__input');
            carrousel__input[id].checked = true
            carrousel__input[id].dispatchEvent(new Event('change'))
            carrousel.classList.add('carrousel--ouvrir')
        })
    })

    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })
})()