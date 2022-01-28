export const modal = () => {
    const modal = document.querySelector('.popup')

    
    const modalOpenBtn = document.querySelectorAll('.feedback')
    const modalOverlay = document.querySelector('.popup-overlay')
    const modalClose = document.querySelectorAll('.popup__close')
    const qwe = document.querySelector('#inst')
    modalOpenBtn.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block'
        modal1.style.display = 'block'
        modalOverlay.style.display = 'block'
        modalClose.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'none'
                modalOverlay.style.display = 'none'

            })
        })
    })
})
    console.log(modalOpenBtn);
    console.log(modal);

}
