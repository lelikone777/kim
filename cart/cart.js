import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/sections/header/headerPrimary.js'
import { mainFooter } from '../src/sections/footer/footer.js'
import { cartBody } from './cartBody.js'

const cart = document.querySelector('#cart')

cart.append(headerPrimary)
cart.append(cartBody)
cart.append(mainFooter)
