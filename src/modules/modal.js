import { animate } from './helpers';

export function modal () {

    const modal = document.querySelector('.popup')
    const modalInst = document.querySelector('.popup-inst')
    const modalOverlay = document.querySelector('.popup-overlay')
    const body = document.querySelector('body')

    const qwe = document.querySelectorAll('.top-part__title')
    const par = document.querySelector('.par')

    function animation (x, y) {
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
        qwe.forEach((item, index) => {
            console.log([0]);
            par.insertAdjacentHTML('beforeend', `<div>${item.textContent}</div>`)
        })
    }
    function openInstModal () {
        animation(modalInst, modalOverlay)
    } 
    function closeModal () {
            animate({
                duration: 300,
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
                        }, 300)
                } 
            })
    }
    body.addEventListener('click', (e) => {
        if(e.target.closest('.popup-btn') && e.target.parentNode.parentNode.closest('.swiper-slide-active')) {
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
