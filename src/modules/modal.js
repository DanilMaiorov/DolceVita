import { animate } from './helpers';
import { disableScrolling } from './helpers';

export function modal () {

    const modal = document.querySelector('.popup'),
          modalInst = document.querySelector('.popup-inst'),
          modalOverlay = document.querySelector('.popup-overlay'),
          body = document.querySelector('body'),
          priceTitles = document.querySelectorAll('.top-part__title'),
          par = document.querySelector('.par'),
          form = document.querySelector('.form-popup'),
          popupTitle = document.querySelector('.popup__title'),
          arrowsPrev = document.querySelector('.price__arrow-prev'),
          arrowsNext = document.querySelector('.price__arrow-next'),
          arrows = [arrowsPrev, arrowsNext]

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
        modal.childNodes[1].childNodes[5].childNodes[1].childNodes.forEach(item => {
            if(item.tagName == 'INPUT') {
                item.style.background = 'white'
            }
        })
        form.reset()
        arrows.forEach(item => {
            item.style.display = 'none'
        })
        disableScrolling()
    } 
    function openInstModal () {
        animation(modalInst, modalOverlay)
        disableScrolling()
    } 
    function closeModal () {
        window.onscroll = function () {};
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
        arrows.forEach(item => {
            item.style.display = 'block'
        })
        window.onscroll = function () {};
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
            window.onscroll = function () {};
        }
    })
    
}
