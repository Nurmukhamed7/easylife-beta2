import './style.css'

let modal = document.querySelector('#modal')

// Функция, открывающая модальное окно через 5 секунд
setTimeout(function () {
  document.getElementById('modal').classList.remove('hidden')
}, 2000)

// Получаем ссылку на кнопку закрытия
let xBtnMob = document.querySelector('#xBtnMob')
let xBtnDesk = document.querySelector('#xBtnDesk')

// Закрываем модальное окно при нажатии на кнопку закрытия
xBtnMob.onclick = function () {
  document.getElementById('modal').classList.add('hidden')
}

// Закрываем модальное окно при нажатии на кнопку закрытия
xBtnDesk.onclick = function () {
  document.getElementById('modal').classList.add('hidden')
}

// Закрываем модальное окно при щелчке вне него
window.onclick = function (event) {
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').classList.add('hidden')
  }
}

// НАЖАТИЕ НА КНОПКУ ПОДРОБНЕЕ

// найдем кнопки ПОДРОБНЕЕ на мобилке и компе
let mobFirstBtn = document.querySelector('#mobFirst')
let deskFirstBtn = document.querySelector('#deskFirst')

let mobSecondBtn = document.querySelector('#mobSecond')
let deskSecondBtn = document.querySelector('#deskSecond')

let mobThirdBtn = document.querySelector('#mobThird')
let deskThirdBtn = document.querySelector('#deskThird')

// найдем секцию до куда надо прокрутить на мобилке и компе
let citySectionMob = document.querySelector('#citySectionMob')
let citySectionDesk = document.querySelector('#citySectionDesk')

let marketSectionMob = document.querySelector('#marketSectionMob')
let marketSectionDesk = document.querySelector('#marketSectionDesk')

let homesSectionMob = document.querySelector('#homesSectionMob')
let homesSectionDesk = document.querySelector('#homesSectionDesk')

// функционал для мобилки
function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  })
}
// ДЛЯ 1 КНОПКИ
mobFirstBtn.addEventListener('click', () => {
  scrollTo(citySectionMob)
})
// функционал для компа
deskFirstBtn.addEventListener('click', () => {
  scrollTo(citySectionDesk)
})

// ДЛЯ 2 КНОПКИ
mobSecondBtn.addEventListener('click', () => {
  scrollTo(marketSectionMob)
})
// функционал для компа
deskSecondBtn.addEventListener('click', () => {
  scrollTo(marketSectionDesk)
})

// ДЛЯ 3 КНОПКИ
mobThirdBtn.addEventListener('click', () => {
  scrollTo(homesSectionMob)
})
// функционал для компа
deskThirdBtn.addEventListener('click', () => {
  scrollTo(homesSectionDesk)
})

// AOS animation
AOS.init()
