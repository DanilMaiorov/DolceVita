export function validation (data) {

    const dataArr = []

    let success = true
    let successName = false
    let successEmail = false
    let successPhone = false
    let successMessage = false

    data.forEach(input => {
        if(input.closest('[name=name]')){
            successName = /^[а-яёА-ЯЁa-zA-Z ]{2,}$/i.test(input.value)
            console.log(successName);
        }
        if(input.closest('[name=email]')) {
            successEmail = /[a-z0-9~*!'_\-\.]*@[\w-]+\.\w{2,4}/gi.test(input.value)
            console.log(successEmail);
        }
        if(input.closest('[name=phone]')) {
            successPhone = /^[0-9()-\+]+/.test(input.value)
            console.log(successPhone);
        }
        if(input.closest('[name=message]')) {
            successMessage = /^[а-яёА-ЯЁa-zA-Z0-9]{2,}$/gi.test(input.value)
            console.log(successMessage);
        }
    })

    if(successName === '' || successPhone === '' ||  (successEmail === '' || successEmail !== '') ||  successMessage === '') {
        debugger
        success = false
    }
    if (successName && successPhone && (successEmail || !successEmail) && !successMessage) {
        debugger
        success = true
        console.log('true, отправка из модалки успешна');
     } else if (successName && successPhone && successMessage && (successEmail || !successEmail)) {
        debugger
        success = true
        console.log('true, отправка произошла из второй формы');
    
 }  else {
        debugger
        success = false
        console.log('false чтото пошло не так');
    }
    return success
}

