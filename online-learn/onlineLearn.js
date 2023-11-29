import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { onlineLearnTitle } from './onlineLearnTitle.js'
import { onlineLearnWhom } from './onlineLearnWhom.js'
import { onlineLearnMK } from './onlineLearnMK.js'
import { onlineLearnContact } from './onlineLearnContact.js'

const onlineLearn = document.querySelector('#online-learn')

onlineLearn.append(headerPrimary)
onlineLearn.append(onlineLearnTitle)
onlineLearn.append(onlineLearnWhom)
onlineLearn.append(onlineLearnMK)
onlineLearn.append(onlineLearnContact)

onlineLearn.append(mainFooter)
