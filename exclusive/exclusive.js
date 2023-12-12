import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { exclusiveTop } from './top.js'
import { exclusiveList } from './exclusiveList.js'
import { contact } from '../mainPage/contact.js'
import { exclusivePrice } from './exclusivePrice.js'

const exclusive = document.querySelector('#exclusive')

exclusive.append(headerPrimary)
exclusive.append(exclusiveTop)
exclusive.append(exclusiveList)
exclusive.append(exclusivePrice)
exclusive.append(mainFooter)
