import { sendService } from './sendService';
import { validation } from './validation';
import { animate } from './helpers';
import { modal } from './modal';


export function sendForm ({ formId, someElem = []}) {
    const form = document.getElementById(formId)

    const statusBlock = document.createElement('div') 
    statusBlock.classList.add('status-block')
    const successText = 'Спасибо, Ваша заявка принята! Наш менеджер с вами свяжется'
    const successImg = document.createElement('img') 
    const loadText = 'Загрузка...'
    const loadImg = document.createElement('img')

    const errorText = 'Ошибка...'
    
    
    const nameInput = form.querySelector('.name-input')
    const emailInput = form.querySelector('.email-input')
    const phoneInput = form.querySelector('.phone-input') 
    const messageInput = form.querySelector('#form1-message')

    const popupTitle = document.querySelector('.popup__title')

    const popupContent = document.querySelector('.popup__wrapper')


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
        console.log(formElements);
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
        if(form.id !== 'form1') {
            form.style.display = 'none'
        }

        popupContent.append(statusBlock)
        statusBlock.textContent = loadText
        loadImg.src = './imgNew/ZKZg.gif'
        statusBlock.append(loadImg)
        loadImg.style.cssText = `
        width: 3rem;
        margin: auto;
        padding-top: 2rem;
        margin-bottom: -1rem;
        display: block;
        `
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
                    `
                    if(successText) {
                        let timerId = setTimeout(() => {
                            function closeForm () {
                                const modal = document.querySelector('.popup')
                                const modalOverlay = document.querySelector('.popup-overlay')
                                const par = document.querySelector('.par')
                                animate({
                                    duration: 300,
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
                                            }, 300)
                                            window.addEventListener('click', (e) => { 
                                                if (e.target.closest('.feedback')) {
                                                    successImg.remove()
                                                    statusBlock.remove()
                                                    clearTimeout(timerId)
                                                } 
                                                if (e.target.closest('.status-block') || e.target.closest('.popup-wrapper')) {
                                                    successImg.style.display = 'block'
                                                    statusBlock.style.display = 'block'
                                                } 
                                            })   
                                    } 
                                })
                            }
                        closeForm()
                        }, 900);  
                        window.addEventListener('click', (e) => { 
                            if (e.target.closest('.feedback')) {
                                successImg.remove()
                                statusBlock.remove()
                                clearTimeout(timerId)
                            } 
                            if (e.target.closest('.status-block') || e.target.closest('.popup-wrapper')) {
                                successImg.style.display = 'block'
                                statusBlock.style.display = 'block'
                            } 
                        })  
                    }
                    form.reset()
            }).catch(error => {
                statusBlock.textContent = errorText
            })
        } else {
            let newData = Array.from(formElements)
            newData.pop()
        
            newData.forEach(input => {
                input.addEventListener('input', (e) => {
                    if(e.target.value === '') {
                        input.style.background = 'rgb(247, 233, 237)'
                    } else {
                        input.style.background = 'white'
                    }
                })
            input.style.background = 'rgb(247, 233, 237)'
            })
            popupTitle.style.display = 'block'
            form.style.display = 'block'
            statusBlock.style.paddingTop = '1rem'
            statusBlock.style.color = '#ed4e4e'
            statusBlock.textContent = 'Заполните, пожалуйста, все обязательные поля'
        }
        
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        submitForm()
    })

}