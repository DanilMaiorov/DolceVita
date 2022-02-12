export function validation (data) {

    let success = true,
        successName = false,
        successEmail = false,
        successPhone = false,
        successMessage = false

    data.forEach(input => {
        if(input.closest('[name=name]')){
            successName = /^[а-яёА-ЯЁa-zA-Z ]{2,}$/i.test(input.value)
        }
        if(input.closest('[name=email]')) {
            successEmail = /[a-z0-9~*!'_\-\.]*@[\w-]+\.\w{2,4}/gi.test(input.value)
        }
        if(input.closest('[name=phone]')) {
            successPhone = /^[0-9()-\+]{6,}/.test(input.value)
        }
        if(input.closest('[name=message]')) {
            successMessage = /^[а-яёА-ЯЁa-zA-Z0-9]{2,}$/gi.test(input.value)
        }
    })

    if(successName === '' || successPhone === '' ||  (successEmail === '' || successEmail !== '') ||  successMessage === '') {
        //debugger
        success = false
    }
    if (successName && successPhone && (successEmail || !successEmail)  && !successMessage ) {
       // debugger
        success = true
    } else {
       // debugger
        success = false
    }
    return success
}

