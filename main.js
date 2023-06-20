import './style.css'

window.onload = function () {
  var userLang = navigator.language || navigator.userLanguage
  var currentPage = window.location.pathname
  var langSwitch = sessionStorage.getItem('langSwitch')

  if (!langSwitch) {
    if (userLang.startsWith('ru') && currentPage !== '/index.html') {
      window.location.href = 'index.html'
    } else if (userLang.startsWith('en') && currentPage !== '/english.html') {
      window.location.href = 'english.html'
    }
  }

  document.getElementById('switchToEnglish').onclick = function () {
    sessionStorage.setItem('langSwitch', 'true')
    window.location.href = 'english.html'
  }

  document.getElementById('switchToRussian').onclick = function () {
    sessionStorage.setItem('langSwitch', 'true')
    window.location.href = 'index.html'
  }
}

// AOS animation
AOS.init()

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
