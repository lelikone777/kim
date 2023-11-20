import '/src/css/fonts.css'
import '/src/css/global.css'
import { mainHeader } from '/src/sections/header.js'
import { main } from '/src/sections/main.js'
import { mainFooter } from '/src/sections/footer.js'
import { headerDropdown } from '../components/header/header-dropdown.js'
import { headerMobile } from '../components/header/header-mobile.js'

const app = document.querySelector('#app')

app.append(mainHeader)
app.append(main)
app.append(mainFooter)

// Добавляем header__dropdown при наведении мыши
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

const burgerButton = document.querySelector('.header__menu-button')
burgerButton.addEventListener('click', () => {
  console.log('click')
  // Проверяем наличие дочернего элемента с классом headerMobileMenu
  if (burgerButton.contains(headerMobile)) {
    // Если есть, то удаляем его
    burgerButton.removeChild(headerMobile)
  } else {
    // Если нет, то добавляем его
    burgerButton.appendChild(headerMobile)
  }
})
