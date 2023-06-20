import './style.css'

var userLang = navigator.language || navigator.userLanguage

// Проверка языка и перенаправление на соответствующую страницу
if (userLang.startsWith('ru')) {
  window.location.href = 'index.html'
} else {
  window.location.href = 'english.html'
}

// AOS animation
AOS.init()
