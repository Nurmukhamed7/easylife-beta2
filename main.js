import './style.css'

window.onload = function () {
  var userLang = navigator.language || navigator.userLanguage
  var currentPage = window.location.pathname

  if (userLang.startsWith('ru') && currentPage !== '/index.html') {
    window.location.href = 'index.html'
  } else if (userLang.startsWith('en') && currentPage !== '/english.html') {
    window.location.href = 'english.html'
  }
}

// AOS animation
AOS.init()
