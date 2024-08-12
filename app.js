const modalBtn = document.querySelector('.plan__text');
const modalBtnClose = document.querySelector('.plan__modal__btn');
const overlay = document.querySelector('.plan__overlay')
const modal = document.querySelector('.plan__modal')

modalBtn.addEventListener('click', function () {
    overlay.classList.add('active');
    modal.classList.add('active');
});

modalBtnClose.addEventListener('click', function () {
    modal.classList.remove('active');
    overlay.classList.remove('active');
});