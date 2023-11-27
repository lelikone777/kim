import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { productInfo } from './productInfo.js'
import { ar } from './ar.js'
import { whyUs } from './whyUs.js'
import { recommendation } from './recommendation.js'
import { others } from './others.js'
import { contact } from '../mainPage/contact.js'
import { productPrice } from './productPrice.js'

const productPage = document.querySelector('#product')

productPage.append(headerPrimary)
productPage.append(productInfo)
productPage.append(ar)
productPage.append(whyUs)
productPage.append(recommendation)
productPage.append(others)
productPage.append(productPrice)
productPage.append(mainFooter)
