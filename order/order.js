import '/src/css/fonts.css'
import '/src/css/global.css'
import { orderDelivery } from './orderDelivery.js'

const order = document.querySelector('#order')

order.append(orderDelivery)

const radioButtons = document.querySelectorAll('input[name="radio-delivery"]')
console.log(radioButtons)

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener('change', function () {
    // Определить, какая радиокнопка была выбрана
    const selectedOption = document.querySelector(
      'input[name="radio-delivery"]:checked',
    ).value

    const toggleDel = document.querySelector('.toggle-del')
    const toggleSelf = document.querySelector('.toggle-self')

    if (selectedOption === 'del') {
      console.log('Выбран вариант: Доставка')
      toggleDel.classList.remove('hidden')
      toggleSelf.classList.add('hidden')
    }

    if (selectedOption === 'self') {
      console.log('Выбран вариант: Самовывоз')
      toggleSelf.classList.remove('hidden')
      toggleDel.classList.add('hidden')
    }
  })
})

// radio-delivery
