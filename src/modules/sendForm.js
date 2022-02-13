import { sendService } from './sendService';
import { validation } from './validation';
import { animate } from './helpers';

export function sendForm ({ formId, someElem = [] }) {
    const form = document.getElementById(formId),
          statusBlock = document.createElement('div'), 
          successText = 'Спасибо, Ваша заявка принята! Наш менеджер с вами свяжется',
          successImg = document.createElement('img'),
          loadText = 'Загрузка...',
          loadImg = document.createElement('img'),
          errorText = 'Что-то пошло не так..',
          errorImg = document.createElement('img'),
          nameInput = form.querySelector('.name-input'),
          emailInput = form.querySelector('.email-input'),
          phoneInput = form.querySelector('.phone-input'),
          messageInput = form.querySelector('#form1-message'),
          popupTitle = document.querySelector('.popup__title'),
          popupContent = document.querySelector('.popup__wrapper'),
          modal = document.querySelector('.popup'),
          modalOverlay = document.querySelector('.popup-overlay'),
          par = document.querySelector('.par')

    statusBlock.classList.add('status-block')
    nameInput.addEventListener('blur', (e) => {
        if(/^ [а-яёА-ЯЁa-zA-Z]+/gi.test(e.target.value)) {
            nameInput.value = e.target.value
        } else {
            nameInput.value = e.target.value.replace(/[^а-яёА-ЯЁa-zA-Z ]+/gi, '').replace(/\s+/gi, ' ').replace(/[^а-яёА-ЯЁa-zA-Z ]+$/gi, '').trim()
        }
    })
    if(emailInput) {
        emailInput.addEventListener('blur', (e) => {
            if(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi.test(e.target.value)) {
                emailInput.value = e.target.value 
            } else {
                emailInput.value = e.target.value.replace(/^[а-яё]+/gi, '').replace(/[а-яё]+/gi, '').replace(/\s+/, '').replace(/@+/g, '@').trim()
            }
        })
    }
    phoneInput.addEventListener('blur', (e) => {
        if(/(\+7|8)[(]?(\d{3})[)]?(\d{3})[-]?(\d{2})[-]?(\d{2})/g.test(e.target.value)) {
            phoneInput.value = e.target.value
        } else {
            phoneInput.value = e.target.value.replace(/[а-яa-z]+/g, '').replace(/\++/g, '+').replace(/\-+/g, '-').replace(/[^\d\(\)\-\+]+/g, '').replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '')
        }
    }) 
    if(messageInput) {
            messageInput.addEventListener('blur', (e) => {
            e.target.value = e.target.value.trim().trim().match(/[а-яёА-ЯЁa-zA-Z0-9 \-\.,;:?!]+/gi);
    })
    } 
    function remove () {
        successImg.remove()
        errorImg.remove()
        statusBlock.remove()
    }
    function closeForm () {
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
                        remove()
                        par.innerHTML = par.textContent
                        form.style.display = 'block'
                        window.onscroll = function () {};
                    }, 300)
            } 
        })

    }
    function resetForm () {
        let timerId = setTimeout(() => {
            closeForm()
        }, 900);  
            window.addEventListener('click', (e) => { 
                if (e.target.closest('.feedback')) {
                    remove()
                    clearTimeout(timerId)
                } 
                if (e.target.closest('.status-block') || e.target.closest('.popup-wrapper')) {
                    successImg.style.display = 'block'
                    statusBlock.style.display = 'block'
                } 
            })  
        form.reset()

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
        form.style.display = 'none'
        popupTitle.style.display = 'none'
            if(form.id === 'form1') {
                document.querySelector('.form').append(statusBlock)
            } else {
            popupContent.append(statusBlock)
            }
        statusBlock.classList.add('status-block')
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
            sendService(/* 'sendmail.php' */'https://jsonplaceholder.typicode.com/posts/', 'POST', formBody)
            .then(data => {                
                statusBlock.textContent = successText
                statusBlock.style.cssText = `
                    text-align: center;
                    color: #32C671;
                    font-weight: bold;
                    font-size: 2rem;
                    max-width: 36rem;
                    `
                    successImg.src = './imgNew/png-clipart-check-mark-computer-icons-others-miscellaneous-angle.png'
                    statusBlock.append(successImg)
                    successImg.style.cssText = `
                        width: 10rem;
                        margin: auto;
                        padding-top: 3rem;
                        display: block;
                        `
                    if(form.id === 'form1') {
                        document.querySelector('.form').append(statusBlock)
                    } else {
                        popupContent.append(statusBlock)
                    }
                        if(statusBlock.textContent.includes('Спасибо')) {
                            resetForm()
                        }
            })
            .catch(error => {
                statusBlock.textContent = errorText
                errorImg.src = './imgNew/kisspng-computer-icons-error-closeup-vector-5adbcf1515baa6.8050010215243548370891.png'
                statusBlock.append(errorImg)
                errorImg.style.cssText = `
                    width: 10rem;
                    margin: auto;
                    padding-top: 2rem;
                    display: block;
                    `
                if(statusBlock.textContent.includes('Что-то')) {
                    resetForm()
                }
            })
        } else {
            let newData = Array.from(formElements)
            newData.pop()
            newData.pop()
            newData.forEach(input => {
                if(input.closest('.email-input') || input.value === '') {
                    input.style.background = 'rgb(247, 233, 237)'
                } else {
                    input.style.background = '#fff'
                }
                input.addEventListener('input', (e) => { 
                    if(e.target.closest('.email-input') || e.target.value === '') {
                        input.style.background = 'rgb(247, 233, 237)'
                    } else {
                        input.style.background = '#fff'
                    }
                }) 
            })
            popupTitle.style.display = 'block'
            form.style.display = 'block'
            statusBlock.style.paddingTop = '1rem'
            statusBlock.style.color = '#ed4e4e'
            statusBlock.style.maxWidth = '37rem'
            statusBlock.textContent = 'Заполните корректно, пожалуйста, все обязательные поля'
        }
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        submitForm()
    })
}