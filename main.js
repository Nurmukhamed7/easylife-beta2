import './style.css'

// Закрытие модального окна по клику на крестик или вне модального окна
const modal = document.getElementById('modal')
const closeModalButton = document.getElementById('closeModal')

closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden')
})

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden')
  }
})

// Задержка появления модального окна
setTimeout(() => {
  modal.classList.remove('hidden')
}, 1000)

// AOS animation
AOS.init()
