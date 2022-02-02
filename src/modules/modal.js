import { animate } from './helpers';

export function modal () {

    const modal = document.querySelector('.popup')
    const modalInst = document.querySelector('.popup-inst')
    const modalOverlay = document.querySelector('.popup-overlay')
    const body = document.querySelector('body')
    const priceTitles = document.querySelectorAll('.top-part__title')
    const par = document.querySelector('.par')
    const form = document.querySelector('.form-popup')
    const popupTitle = document.querySelector('.popup__title')


    function animation (x, y) {
        form.style.display = 'block'
        popupTitle.textContent = 'Мы перезвоним вам в ближайшее время!'
        popupTitle.style.cssText = `
            text-align: center;
            color: #000;
            font-weight: normal;
            `
        animate({
            duration: 300,
            timing(timeFraction) {
            return timeFraction
            },
            draw(progress) {
                    x.style.display = 'block'
                    x.style.opacity = progress; 
                    y.style.display = 'block'
                    y.style.opacity = progress 
            }
        })
    }
     function openModal () { 
        animation(modal, modalOverlay)
    } 
    function openInstModal () {
        animation(modalInst, modalOverlay)
    } 
    function closeModal () {
            animate({
                duration: 400,
                timing(timeFraction) {
                return timeFraction
                },
                draw(progress) {
                    modal.style.opacity = 1 - progress; 
                    modalOverlay.style.opacity = 1 - progress; 
                    modalInst.style.opacity = 1 - progress; 
                        setTimeout(() => {
                            modal.style.display = 'none'
                            modalOverlay.style.display = 'none' 
                            modalInst.style.display = 'none'
                            par.innerHTML = par.textContent
                        }, 400)
                } 
            })
    }
    body.addEventListener('click', (e) => {
        if(e.target.closest('.popup-btn') && e.target.parentNode.parentNode.closest('.swiper-slide-active')) {
            const activePopup = ((e.target.closest('.popup-btn') && e.target.parentNode.parentNode.closest('.swiper-slide-active')))
            .childNodes[1].innerText.slice(0, 9)
            priceTitles.forEach((title, index) => {
                if(title.textContent === activePopup) { 
                    par.insertAdjacentHTML('afterbegin', `<input class="insert-input" name="price_num" tabindex="-1" readonly value="Выбрана ${priceTitles[index].textContent}"> <br>`)
                } 
            }) 
            e.target.style.cursor = 'pointer'
            openModal()
        }
        if(e.target.id === 'inst') {
            e.preventDefault()
            openInstModal()
        }
        if(e.target.closest('.popup-overlay') || e.target.closest('.popup__close') || e.target.closest('.popup-inst__btn')) {
            closeModal()
        }
    })
}
