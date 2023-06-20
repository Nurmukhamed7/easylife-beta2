import './style.css'

var userLang = navigator.language || navigator.userLanguage

// Проверка текущего URL
var currentURL = window.location.href

// Проверка, нужно ли выполнить переадресацию
if (
  !currentURL.includes('index.html') &&
  !currentURL.includes('english.html')
) {
  // Проверка языка и переадресация на соответствующую страницу
  if (userLang.startsWith('ru')) {
    window.location.href = 'index.html'
  } else {
    window.location.href = 'english.html'
  }
}

// AOS animation
AOS.init()
