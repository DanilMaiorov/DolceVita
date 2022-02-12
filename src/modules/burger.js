
import { animate } from './helpers';
import { disableScrolling } from './helpers';

export function burger () {
    const openBurger = document.querySelector('.header__content-mob-menu'),
          burger = document.querySelector('.header__burger'),
          burgerLinks = document.querySelectorAll('.nav-list__item-link'),
          arrowUp = document.querySelector('.arrow-up')

    function burgerOpen () {
        animate({
            duration: 300,
            timing(timeFraction) {
            return timeFraction
            },
            draw(progress) {
                burger.style.opacity = progress; 
                burger.style.display = 'block'
            }
        })
        arrowUp.style.zIndex = -1
    }
    function burgerClose () {
        animate({
            duration: 400,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                burger.style.opacity = 1 - progress;
                setTimeout(() => {
                    burger.style.display = 'none'
                }, 400)
            }
        })
        arrowUp.style.zIndex = 999
    }
    openBurger.addEventListener('click', () => {
        burger.classList.toggle('is-active')
        openBurger.classList.toggle('header__content-mob-menu-hover')
        if(burger.closest('.is-active')) {
            burgerOpen()
            disableScrolling()
        } else {
            burgerClose()
            window.onscroll = function () {};
        }
    })
    burger.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.closest('close-burger') || e.target.closest('.burger-list__item')) {
            burger.classList.toggle('is-active')
            openBurger.classList.toggle('header__content-mob-menu-hover')
            burgerClose()
            burgerLinks.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (item = e.target) {
                        let idAnchor = item.getAttribute('href')
                        document.querySelector(idAnchor).scrollIntoView({
                            block: 'start',
                            behavior: 'smooth'
                        })
                    }
                })
            })
            window.onscroll = function () {};
        }
    })
}

