const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay')

btn.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal')
})
