import { animate } from './helpers';

export function scroll () {
    const header = document.querySelector('.header__content')
    const footer = document.querySelector('.footer')
    const pageNavLinks = [...Array.from(header.querySelectorAll('li > a')), ...Array.from(footer.querySelectorAll('li > a'))]
    const arrowUp = document.querySelector('.arrow-up')
    const logoLeft = header.querySelector('img')
    const arrayUp = [arrowUp, logoLeft]

    pageNavLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            if (item = e.target) {
                let idAnchor = item.getAttribute('href')
                document.querySelector(idAnchor).scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                })
            }
        })
    })

    if (scrollY > 600) {
        arrowUp.style.opacity = '0.6';
        arrowUp.style.zIndex = '999';
    } else {
        arrowUp.style.opacity = '0' ;
        arrowUp.style.zIndex = '-999'; 
    }  

    window.addEventListener('scroll', () => {
        if (scrollY >= 600) {
          arrowUp.style.zIndex = '999';
          arrowUp.style.opacity = '0.6';
          arrowUp.style.transition = '0.6s opacity'
          arrowUp.style.display = 'block';
      } else {
          arrowUp.style.opacity = '0'; 
          arrowUp.style.transition = '.6s all';
          arrowUp.style.zIndex = '-1';
      }   
  })
    arrayUp.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            animate({
                duration: 2000,
                timing(timeFraction) {
                return timeFraction;
                },
                draw(progress) {
                    window.scrollBy(0, -500 * progress)
                }
            })
        })
        if(item.tagName === "BUTTON") {
            item.addEventListener('mouseenter', () => {
                animate({
                    duration: 200,
                    timing(timeFraction) {
                    return timeFraction
                    },
                    draw(progress) {
                        item.style.opacity = 0.6 + progress*0.2
                    }
                })
            })
            item.addEventListener('mouseleave', () => {
                animate({
                    duration: 200,
                    timing(timeFraction) {
                    return timeFraction
                    },
                    draw(progress) {
                        item.style.opacity = 0.8 - progress*0.2
                    }
                })
            })
        }
    })
}