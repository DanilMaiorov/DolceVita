//import { sendService } from './sendService';
import { validation } from './validation';

export function sendForm ({ formId, someElem = []}) {
    const form = document.getElementById(formId)

    const statusBlock = document.createElement('div') 
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется'

    validation()

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
    }
    submitForm()

}