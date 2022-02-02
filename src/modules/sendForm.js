import { sendService } from './sendService';
import { validation } from './validation';
import { animate } from './helpers';
import { modal } from './modal';


export function sendForm ({ formId, someElem = []}) {
    const form = document.getElementById(formId)

    const statusBlock = document.createElement('div') 
    const successImg = document.createElement('img') 

    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо, Ваша заявка принята! Наш менеджер с вами свяжется'
    
    const nameInput = form.querySelector('.name-input')
    const emailInput = form.querySelector('.email-input')
    const phoneInput = form.querySelector('.phone-input') 
    const messageInput = form.querySelector('#form1-message')

    let popupTitle = document.querySelector('.popup__title')

    const popupContent = document.querySelector('.popup__wrapper')

    const body = document.querySelector('body')

    nameInput.addEventListener('change', (e) => {
        if(/^ [а-яёА-ЯЁa-zA-Z]+/gi.test(e.target.value)) {
            nameInput.value = e.target.value
        } else {
            nameInput.value = e.target.value.replace(/[^а-яёА-ЯЁa-zA-Z ]+/gi, '').replace(/\s+/gi, ' ').replace(/[^а-яёА-ЯЁa-zA-Z ]+$/gi, '').trim()
        }
    })
    if(emailInput) {
        emailInput.addEventListener('change', (e) => {
            if(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi.test(e.target.value)) {
                emailInput.value = e.target.value 
            } else {
                emailInput.value = e.target.value.replace(/^[а-яё]+/gi, '').replace(/[а-яё]+/gi, '').replace(/\s+/, '').replace(/@+/g, '@').trim()
            }
        })
    }

    function submitForm () {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}
        
        formData.forEach((value,key) => {
            formBody[key] = value
        })
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if(elem.type === 'block') {
                formbody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formbody[elem.id] = element.value
            }
        })
        popupTitle.style.display = 'none'
        form.style.display = 'none'

        popupContent.append(statusBlock)

        statusBlock.textContent = loadText
        statusBlock.style.cssText = `
            text-align: center;
            color: #000;
            font-weight: normal;
            font-size: 2rem;
            display: block;
            font-size: 2rem;
            `
        if(validation(formElements)) {
            sendService('https://jsonplaceholder.typicode.com/posts', 'POST', formBody)
            .then(data => {
                statusBlock.textContent = successText

                statusBlock.style.cssText = `
                    text-align: center;
                    color: #32C671;
                    font-weight: bold;
                    font-size: 2rem;
                    `
                successImg.src = './imgNew/png-clipart-check-mark-computer-icons-others-miscellaneous-angle.png'
                statusBlock.append(successImg)
                successImg.style.cssText = `
                    width: 10rem;
                    margin: auto;
                    padding-top: 3rem;
                    display: block;
                    pointer-events: none; 
                    cursor: default;
                    `
                    if(successText) {
                        let timerId = setTimeout(() => {
                            function closeForm () {
                                const modal = document.querySelector('.popup')
                                modal.style.cssText = `
                                pointer-events: none; 
                                cursor: default;`
                                const modalOverlay = document.querySelector('.popup-overlay')
                                const par = document.querySelector('.par')
                                animate({
                                    duration: 500,
                                    timing(timeFraction) {
                                    return timeFraction
                                    },
                                    draw(progress) {
                                        modal.style.opacity = 1 - progress; 
                                        modalOverlay.style.opacity = 1 - progress; 
                                        successImg.style.opacity = 1 - progress; 
                                        statusBlock.style.opacity = 1 - progress; 
                                        let timerId = setTimeout(() => {
                                                modal.style.display = 'none'
                                                modalOverlay.style.display = 'none' 
                                                successImg.style.display = 'none'
                                                statusBlock.style.display = 'none'
                                                par.innerHTML = par.textContent
                                            }, 500)
                                             body.addEventListener('click', (e) => {
                                                if(e.target.closest('.popup-overlay') || e.target.closest('.popup__close')) {
                                                clearTimeout(timerId)
                                                    successImg.style.display = 'none'
                                                    statusBlock.style.display = 'none'
                                                    modal.style.display = 'none'
                                                }
                                            }) 
                                    } 
                                })
                            }
                        closeForm()
                        
                        }, 1000);  
                        body.addEventListener('click', (e) => { 
                            if(!e.target.closest('.popup-overlay') || !e.target.closest('.popup__close')) {
                            clearTimeout(timerId)
                            successImg.style.display = 'none'
                            statusBlock.style.display = 'none'
                            
                            }
                        })
                    }
            })
        }
        form.reset()

    }


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        submitForm()
    })

}