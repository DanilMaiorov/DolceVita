import { sendService } from './sendService';
import { validation } from './validation';


export function sendForm ({ formId, someElem = []}) {
    const form = document.getElementById(formId)

    const statusBlock = document.createElement('div') 
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется'
    
    const nameInput = form.querySelector('.name-input')
    const emailInput = form.querySelector('.email-input')
    const phoneInput = form.querySelector('.phone-input') 
    const messageInput = form.querySelector('#form1-message')
    

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
        statusBlock.textContent = loadText
        form.append(statusBlock)
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
        if(validation(formElements)) {
            sendService('https://jsonplaceholder.typicode.com/posts', 'POST', formBody)
            .then(data => {
                console.log(data);
            })
        }
        
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        submitForm()
    })

    

}