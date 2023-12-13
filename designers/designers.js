import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { designersTitle } from './disignersTitle.js'
import { designersHero } from './designersHero.js'
import { slider1 } from './slider1.js'
import { slider2 } from './slider2.js'
import { designersContact } from './designersContact.js'
import { designersFaq } from './designersFaq.js'
import { designersEnd } from './designersEnd.js'
import { sliderAuthor } from './sliderAuthor.js'
import { designersPrice2 } from './designersPrice2.js'
import { designersContacts2 } from './designersContacts2.js'

const designers = document.querySelector('#designers')

designers.append(headerPrimary)
designers.append(designersTitle)
designers.append(designersHero)
designers.append(slider1)
designers.append(sliderAuthor)
designers.append(slider2)
// designers.append(designersContact)
designers.append(designersPrice2)
designers.append(designersFaq)
// designers.append(designersEnd)
designers.append(designersContacts2)

designers.append(mainFooter)
