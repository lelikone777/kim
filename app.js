import '/src/css/fonts.css'
import '/src/css/global.css'
import { mainPage } from '/main-page/mainPage.js'
import { headerDropdown } from './src/components/header/header-dropdown.js'
import { headerMobile } from './src/components/header/header-mobile.js'

const app = document.querySelector('#app')

app.append(mainPage)

// Добавляем выпадающее меню при наведении мыши на пункты меню на десктоп версии
const headerNavItems = document.querySelectorAll('.header__nav-item')
headerNavItems.forEach((navItem) => {
  navItem.addEventListener('mouseenter', () => {
    navItem.appendChild(headerDropdown)
  })

  navItem.addEventListener('mouseleave', () => {
    const headerDropdown = navItem.querySelector('.header__dropdown')
    if (headerDropdown) {
      navItem.removeChild(headerDropdown)
    }
  })
})

// Добавляем мобильное меню при нажатии на кнопку меню на мобильной версии
const burgerButton = document.querySelector('.header__menu-button')
burgerButton.addEventListener('click', () => {
  console.log('click')
  if (burgerButton.contains(headerMobile)) {
    burgerButton.removeChild(headerMobile)
  } else {
    burgerButton.appendChild(headerMobile)
  }
})
