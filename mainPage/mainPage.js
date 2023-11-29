import '/src/css/fonts.css'
import '/src/css/global.css'
import { signature } from './signature.js'
import { projects } from './projects.js'
import { principles } from './principles.js'
import { price } from './price.js'
import { shop } from './shop.js'
import { newHobby } from './newHobby.js'
import { contact } from './contact.js'
import { mainHeader } from '../src/components/header/header.js'
import { mainFooter } from '../src/components/footer/footer.js'

export const mainPage = document.createElement('main')

mainPage.append(mainHeader)
mainPage.append(signature)
mainPage.append(projects)
mainPage.append(principles)
mainPage.append(price)
mainPage.append(shop)
mainPage.append(newHobby)
mainPage.append(contact)
mainPage.append(mainFooter)
