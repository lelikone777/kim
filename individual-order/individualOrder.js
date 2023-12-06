import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { individualOrderTitle } from './individualOrderTitle.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { individualOrderSlider } from './individualOrderSlider.js'
import { individualOrderUnique } from './individualOrderUnique.js'
import { individualOrderContact } from './individualOrderContact.js'

const individualOrder = document.querySelector('#individual-order')

individualOrder.append(headerPrimary)
individualOrder.append(individualOrderTitle)
individualOrder.append(individualOrderSlider)
individualOrder.append(individualOrderUnique)
individualOrder.append(individualOrderContact)
individualOrder.append(mainFooter)
