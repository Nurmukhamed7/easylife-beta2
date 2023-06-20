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
