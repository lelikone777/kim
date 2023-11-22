import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/sections/header/headerPrimary.js'
import { mainFooter } from '../src/sections/footer/footer.js'
import { exclusiveTop } from './top.js'
import { exclusiveList } from './exclusiveList.js'
import { contact } from '../src/sections/contact.js'

const exclusive = document.querySelector('#exclusive')

exclusive.append(headerPrimary)
exclusive.append(exclusiveTop)
exclusive.append(exclusiveList)
exclusive.append(contact)
exclusive.append(mainFooter)
