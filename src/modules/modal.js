import { animate } from './helpers';

export function modal () {

    const btns = Array.from(document.querySelectorAll('.popup-btn'))
    const btnInst = document.querySelector('#inst')
    const arrBtns = [...btns, btnInst]

    const modal = document.querySelector('.popup')
    const modalInst = document.querySelector('.popup-inst')
    const modalOverlay = document.querySelector('.popup-overlay')
    const arrModals = [modal, modalInst, modalOverlay]

    arrBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            animate({
                duration: 300,
                timing(timeFraction) {
                return timeFraction;
                },
                draw(progress) {
                    if(e.target.closest('.popup-btn')) {
                        modal.style.display = 'block'
                        modal.style.opacity = progress; 
                        modalOverlay.style.display = 'block'
                        modalOverlay.style.opacity = progress; 
                    } else {
                        modalInst.style.display = 'block'
                        modalInst.style.opacity = progress; 
                        modalOverlay.style.display = 'block'
                        modalOverlay.style.opacity = progress; 
                    }
                }
            });
        })
    })
    arrModals.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target);
            animate({
                duration: 300,
                timing(timeFraction) {
                return timeFraction;
                },
                draw(progress) {
                    if(e.target.closest('.popup-overlay') || e.target.closest('.popup__close') || e.target.closest('.popup-inst__btn')) {
                    modal.style.opacity = 1 - progress; 
                    modalOverlay.style.opacity = 1 - progress; 
                    modalInst.style.opacity = 1 - progress; 
                        setTimeout(() => {
                            modal.style.display = 'none'
                            modalOverlay.style.display = 'none' 
                            modalInst.style.display = 'none'
                        }, 300);
                    }
                } 
            })
        }) 
    }) 
}
